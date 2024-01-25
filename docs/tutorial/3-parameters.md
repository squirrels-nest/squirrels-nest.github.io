---
sidebar_position: 3
---

# 3. Create the Dataset Parameters

Go into the `pyconfigs/parameters.py` file. This file contains the definitions of all the widget parameters used in the dataset through a **main** function. 

:::info

The possible widget parameter types supported today are **SingleSelectParameter**, **MultiSelectParameter**, **DateParameter**, **DateRangeParameter**, **NumberParameter**, and **NumberRangeParameter**. Each parameter type can be created with one of the factory method **Create**, **CreateSimple**, or **CreateFromSource**, which exists as class methods on each parameter type. Every factory method takes "name" and "label" as required arguments.

:::

We will start from scratch, so remove all the existing code in the **main** function body. We will create one single-select parameter to specify the dimension to group by.

## Define the Parameter Options

We first need to specify the list of parameter options. Inside the **main** function, specify the list of options as such:

```python
group_by_options = [
    sr.SelectParameterOption('0', 'Year', dim_col='year'),
    sr.SelectParameterOption('1', 'Quarter', dim_col='quarter'),
    sr.SelectParameterOption('2', 'Month', dim_col='month_name', order_by_col='month_order'),
    sr.SelectParameterOption('3', 'Day of Year', dim_col='day_of_year'),
    sr.SelectParameterOption('4', 'Condition', dim_col='condition')
]
```

The first two parameters to the **SelectParameterOption** constructors are the ID and label. The ID must be distinct across options and would never change in the future. If an API client associates ID "0" to mean "group by year", then that association should never be broken even if the label or the ordering of the dropdown options change.

Arbitrary keyword arguments such as "dim_col" and "order_by_col" can be specified to the **SelectParameterOption** constructor which will be treated as custom fields to the parameter option that can be used later. For more info, see [Custom Fields for Parameter Options](../topics/custom-fields).

:::note

The **SelectParameterOption** class has an "is_default" attribute to specify the parameter option(s) that are selected by default. By default, "is_default" is set to False. When none of the parameter options have "is_default" as True, the first option is default for single-select parameters, and nothing is selected for multi-select parameter.

:::

## Define the Parameters

Create a single-select parameter using the options defined above with:

```python
sr.SingleSelectParameter.CreateSimple("group_by_dim", "Group By", group_by_options)
```

This sets the name and label of the new parameter to "group_by_dim" and "Group By".

:::info

For **SingleSelectParameter**, the arguments for **CreateSimple** and **Create** are very similar, except **Create** lets you specify a parent parameter for cascading the shown options. For non-select parameter types like **DateParameter**, not only does **Create** let you specify a parent parameter, but it also requires a list of **DateParameterOption** as an argument while **CreateSimple** takes a single "default_date" instead. Each **DateParameterOption** can be associated to a different "default_date" allowing the default date to vary based on selections of other parameters.

:::

You have finished setting up the parameter for your dataset! At this point, your `parameters.py` file should look something like this:

```python
import squirrels as sr

def main(sqrl: sr.ParametersArgs) -> None:
    group_by_options = [
        sr.SelectParameterOption("g0", "Transaction", columns=["id", "date"]),
        sr.SelectParameterOption("g1", "Date", columns=["date"]),
        sr.SelectParameterOption("g2", "Category", columns=["category"]),
        sr.SelectParameterOption("g3", "Subcategory", columns=["category", "subcategory"]),
    ]
    sr.SingleSelectParameter.Create("group_by_dim", "Group By", group_by_options)
```
