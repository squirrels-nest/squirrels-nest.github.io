---
sidebar_position: 4
---

# Widget Parameters

The pool of all widget parameters for all datasets can be defined in Python in the **main** function of `pyconfigs/parameters.py` or in YAML in the "parameters" section of [squirrels.yml]. This "pool of parameters" is created the moment the API server is started with the [sqrl run] command, which includes reading lookup tables to create parameters from a data source. However, each dataset may only use a subset of the parameters in the pool (configured in the "datasets" section of [squirrels.yml]), so each dataset request, only that subset will be available to work with (for instance, in the [context.py] file or models).

It is recommended to specify parameters in Python. To create a sample `pyconfigs/parameters.py` file, you can run:

```bash
sqrl init --core --parameters py
```

Currently, Squirrels support the following parameter types (you may click on any of them to see its Python API page):

- [SingleSelectParameter]
- [MultiSelectParameter]
- [DateParameter]
- [DateRangeParameter]
- [NumberParameter]
- [NumberRangeParameter]

We will call [SingleSelectParameter] and [MultiSelectParameter] as "select parameters", and all other parameter types as "non-select parameters". 

Each of these parameter types come with 3 factory methods:

- **Create** 
    - use this to specify parameter options in code with option to specify parent parameters (for cascading effects)
- **CreateSimple**
    - use this to specify parameter options in code with simpler arguments than **Create**
- **CreateFromSource**
    - use this to create parameter options based on a lookup table in a database

All 3 factory methods require **name** and **label** as the first two string arguments of the parameter. The **name** is used to set or reference real-time parameter selections (set using query parameters of API requests and referenced with the **prms** dictionary elsewhere in the Squirrels project). The **label** is a human-friendly name that front-end applications can use for to show for their users.

Outside of **name** and **label**, each factory method takes different required arguments. For **Create**, the third required argument is **all_options**, which is a sequence of parameter option classes. For **CreateSimple**, the additional required arguments are different for each parameter type. For **CreateFromSource**, the third required argument is **data_source**, which is a data source class that specifies properties for the lookup table. All data source classes take **table_or_query** as the first required argument, which must be a table name (of the lookup table), or a query that starts with "SELECT " (case-insensitive). More details on the parameter option and data source classes are discussed in the sections below.

At runtime, after parameter selections are made, each parameter contains method prefixed with "get_selected" that can be used in the [context.py] or model files. More details on the available "get_selected" methods are available in the Python APIs docs.

## Select Parameters

The **Create** and **CreateSimple** factory methods are very similar for select parameters. Both take **all_options** as the third required argument. The main difference is that **Create** also accepts optional arguments for **parent_name** and **user_attribute**.

The **all_options** argument for select parameters requires a sequence of [SelectParameterOption] instances. This class requires two arguments: **id** and **label**.
- The **id** is used for the front-end to specify selected parameter option(s). Once the **id** is set for a parameter option, it should never change in future versions of the Squirrels project.
- The **label** is the human-friendly name to show in the dropdown widget, and can be subject to change in future versions of Squirrels projects.

By default, the default selected option is the first one for [SingleSelectParameter] and nothing for [MultiSelectParameter]. There is an optional boolean argument for **is_default** that can be used to change the default selected option(s). If **is_default** is set to True for multiple options for a [SingleSelectParameter], then only the first one of them is used.

The following is an example of creating a [SingleSelectParameter] where the second option is selected by default.

```python
import squirrels as sr

def main(sqrl: sr.ParametersArgs) -> None:
    select_options = [
        sr.SelectParameterOption("s01", "Option 1"),
        sr.SelectParameterOption("s02", "Option 2", is_default=True)
    ]
    sr.SingleSelectParameter.Create("single_param", "Single Select Parameter", select_options)
```

For the **CreateFromSource** factory method, the **data_source** argument for [SingleSelectParameter] and [MultiSelectParameter] must be of type [SingleSelectDataSource] and [MultiSelectDataSource] respectively. Both data source types take 3 required arguments: **table_or_query**, **id_col**, and **options_col**. An optional argument for **is_default_col** is available as well. When the API server activates, each row (with a unique **id_col** value) in the data source gets converted to a parameter option. 

If we have a lookup table named "mylookup" with columns:
- "myid" with values "s01" and "s02"
- "myvalue" with values "Option 1" and "Option 2"
- "isdefault" with values 0 and 1 (or values that get converted to 0 and 1 when casting to int in Python)

Then we can replicate the above example using CreateFromSource as such:

```python
import squirrels as sr

def main(sqrl: sr.ParametersArgs) -> None:
    select_ds = sr.SingleSelectDataSource("mylookup", "myid", "myvalue", is_default_col="isdefault")
    sr.SingleSelectParameter.CreateFromSource("single_param", "Single Select Parameter", select_ds)
```

:::note

The reason we have different classes for [SingleSelectDataSource] and [MultiSelectDataSource] is because [MultiSelectDataSource] contains a few additional optional arguments.

:::

### Custom Fields

The [SelectParameterOption] has the special ability to specify custom fields as optional arguments, and use the custom fields in [context.py] or models using the **get_selected** method for [SingleSelectParameter] or **get_selected_list** method for [MultiSelectParameter]. To retrieve the custom field, you must provide the field name as the first argument for both methods. They also contain optional arguments for:
- **default_field**: If the field does not exist for the parameter option and default_field is not None, the default_field is used as the "field" instead.
- **default**: If field does not exist for the parameter option, default_field is None, but default is not None, then the default is used as the field value.

The following is an example of setting up a "group_by" single-select parameter to specify that columns/dimensions to group by.

```python
import squirrels as sr

def main(sqrl: sr.ParametersArgs) -> None:
    group_by_options = [
        sr.SelectParameterOption("g1", "None"),
        sr.SelectParameterOption("g2", "Category", columns=["category"]),
        sr.SelectParameterOption("g3", "Subcategory", columns=["category", "subcat"], aliases=["category", "subcategory"]),
    ]
    sr.SingleSelectParameter.Create("group_by", "Group By", group_by_options)
```

In this example, we will set the "columns" custom field to empty list by default, and the "aliases" custom field to be the same as the "columns" field by default. At runtime, after parameter selections, we can achieve this for the aliases like this:

```python
prms["group_by"].get_selected("aliases", default_field="columns", default=[])
```

The [SelectParameterOption] constructor also takes an optional argument **custom_fields** to specify the custom fields as a Python dictionary instead.

## Non-Select Parameters

For non-select parameters, the **CreateSimple** factory method take different arguments depending on the parameter type. For example, the **CreateSimple** for [DateParameter] takes **default_date** as a required argument and **date_format** as an optional argument. And as you would expect, these arguments may not apply for other parameter types. A simple example of creating a date parameter is shown below.

```python
sr.DateParameter.CreateSimple("my_date_param", "My Date Parameter", "2024-01-01")
```

The **all_options** argument for the **Create** factory method is a list of parameter options for non-select parameters as well. The parameter option class to use depends on the parameter type. For instance, for [DateParameter], the **all_options** argument must be a list of [DateParameterOption]. Similar to the arguments for **CreateSimple**, the [DateParameterOption] also takes **default_date** as a required argument and **date_format** as an optional argument. If a parent parameter is specified for the date parameter, then specifying multiple date parameter options can be useful for the date parameter to use a different default date based on the selected value of the parent parameter.

For the **CreateFromSource** factory method, the **data_source** argument type also differs based on the parameter type. For instance, for [DateParameter], the **data_source** argument must be of type [DateDataSource].

Suppose you have a lookup table called "my_lookup_date" with a column "as_of_date" with one value of "2024-01-01". Then the following would result in the same as the **CreateSimple** example above.

```python
my_date_ds = sr.DateDataSource("my_lookup_date", "as_of_date")
sr.DateParameter.CreateFromSource("my_date_param", "My Date Parameter", my_date_ds)
```

## Dependent Parameters

Squirrels lets you create cascadable parameters. This means that the selection of one parameter (the "parent parameter") can affect the available options shown for another parameter (the "child parameter").

To create this dependency, use the **parent_name** argument in the **Create** or **CreateFromSource** factory method of the child parameter (the **CreateSimple** factory method does not include this argument). This is an optional string argument that is None by default.

In addition, if using parameter option classes, each of the parameter options of the child parameter must use the **parent_option_ids** argument to specify the list of parameter option IDs from the parent parameter that would allow the child parameter option to show. This is an optional argument with default of empty set (which would mean the parameter option never shows if the associated parameter has a parent). If using a data source class, then use the **parent_id_col** to specify the column that contains the parent option IDs.

The following example demonstrates both creating a select parameter and non-select parameter as child parameters.

```python
import squirrels as sr

def main(sqrl: sr.ParametersArgs) -> None:
    # The parent parameter
    parent_options = [
        sr.SelectParameterOption("pr01", "Option 1"),
        sr.SelectParameterOption("pr02", "Option 2")
    ]
    sr.SingleSelectParameter.CreateSimple("parent_param", "Parent Parameter", parent_options)

    # The child select parameter (multi-select)
    child_select_options = [
        sr.SelectParameterOption("cs01", "Child Option 1", parent_option_ids=["pr01"]),
        sr.SelectParameterOption("cs02", "Child Option 2", parent_option_ids=["pr02"]),
        sr.SelectParameterOption("cs03", "Child Option 3", parent_option_ids=["pr01", "pr02"])
    ]
    sr.MultiSelectParameter.Create(
        "child_select", "Child Select Parameter", child_select_options, parent_name="parent_param")

    # The child non-select parameter (date)
    child_date_options = [
        sr.DateParameterOption("2024-01-01", parent_option_ids=["pr01"]),
        sr.DateParameterOption("2024-07-01", parent_option_ids=["pr02"])
    ]
    sr.DateParameter.Create(
        "child_date", "Child Date Parameter", child_date_options, parent_name="parent_param")
```

In this example:
- When "Option 1" is selected for the parent parameter, only "Child Option 1" and "Child Option 3" will show for the "child_select" parameter, and the default date for the "child_date" parameter becomes "2024-01-01". 
- When "Option 2" is selected for the parent parameter, only "Child Option 2" and "Child Option 3" will show for the "child_select" parameter, and the default date for the "child_date" parameter becomes "2024-07-01".

To get the same effect using **CreateFromSource**, we first need to have the following lookup tables in our **default** database connection.

<table>

<tr><th>parent_options</th><th>child_select_options</th><th>child_date_defaults</th></tr>

<tr><td>

|id|parent_value|
|:-|:-----------|
|pr01|Option 1|
|pr02|Option 2|

</td><td>

|id|child_value|parent_id|
|:-|:----------|:--------|
|cs01|Child Option 1|pr01|
|cs02|Child Option 2|pr02|
|cs03|Child Option 3|pr01|
|cs03|Child Option 3|pr02|

</td><td>

|id|default_date|parent_id|
|:-|:-----------|:--------|
|d1|2024-01-01|pr01|
|d2|2024-07-01|pr02|

</td></tr>
</table>

Then our `parameters.py` file can look like this:

```python
import squirrels as sr

def main(sqrl: sr.ParametersArgs) -> None:
    # The parent parameter
    parent_ds = sr.SingleSelectDataSource("parent_options", "id", "parent_value")
    sr.SingleSelectParameter.CreateFromSource("parent_param", "Parent Parameter", parent_ds)

    # The child select parameter (multi-select)
    child_select_ds = sr.MultiSelectDataSource(
        "child_select_options", "id", "child_value", parent_id_col="parent_id")
    sr.MultiSelectParameter.CreateFromSource(
        "child_select", "Child Select Parameter", child_select_ds, parent_name="parent_param")

    # The child non-select parameter (date)
    child_date_ds = sr.MultiSelectDataSource(
        "child_date_defaults", "default_date", id_col="id", parent_id_col="parent_id")
    sr.DateParameter.CreateFromSource(
        "child_date", "Child Date Parameter", child_date_ds, parent_name="parent_param")
```

:::note

Parameters can also be cascaded by a user attribute on the authorized user. This is done through the **user_attribute** argument on the parameter class, and the **user_groups** or **user_group_col** arguments on the parameter option or data source class (analogous to the **parent_name**, **parent_option_ids**, and **parent_id_col** arguments mentioned above). More details can be found on the page on [Authentication].

:::

### Rules for Dependent Parameters

The following rules must be followed when creating dependent parameters. Squirrels will raise an error if these rules are violated.

1. Only select parameters are allowed to be parent parameters
2. Only single-select parameters can be the parent of non-select parameters
3. For non-select parameters, each parent option must be associated to **exactly one** child option
    - However, if the child parameter is cascaded by a user attribute, then it's **exactly one** child option per user group

:::note

Parameters are also limited to having at most one parent parameter because the **parent_name** argument can only be set as a single string (or None).

:::


[squirrels.yml]: ./project-file
[context.py]: ./context
[sqrl run]: ../cli/run
[SingleSelectParameter]: ../python/parameters/SingleSelectParameter
[MultiSelectParameter]: ../python/parameters/MultiSelectParameter
[DateParameter]: ../python/parameters/DateParameter
[DateRangeParameter]: ../python/parameters/DateRangeParameter
[NumberParameter]: ../python/parameters/NumberParameter
[NumberRangeParameter]: ../python/parameters/NumberRangeParameter
[SelectParameterOption]: ../python/parameter_options/SelectParameterOption
[DateParameterOption]: ../python/parameter_options/DateParameterOption
[SingleSelectDataSource]: ../python/data_sources/SingleSelectDataSource
[MultiSelectDataSource]: ../python/data_sources/MultiSelectDataSource
[DateDataSource]: ../python/data_sources/DateDataSource
[Authentication]: ./auth
