# DateParameter

The class for defining and interacting with date parameters. 

## Static / Class Methods

In addition to the static methods specified on this page, see the [Parameter] page for details on the **Create** and **CreateFromSource** factory methods.

For DateParameter in particular:
- The **all_options** argument of the **Create** factory method must be a sequence of [DateParameterOption](../parameter_options/DateParameterOption) instances
- The **data_source** argument of the **CreateFromSource** factory method must be a [DateDataSource](../data_sources/DateDataSource) 

### CreateSimple

Creates the configurations for a date parameter by providing a list of [DateParameterOption](../parameter_options/DateParameterOption) instances, and adds it to an abstract pool of parameter configurations.

Unlike the **Create** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **default_date**: A string or date (from datetime package). This is the default selected date

**Optional Keyword Arguments:**

- **date_format**: A string for the format of the "default_date" argument. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). Default is '%Y-%m-%d'
- **is_hidden**: A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False

**Returns:** None

## Non-Static Methods

In the [context.py](../../topics/context) file or data model, the methods below can be invoked on a DateParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the DateParameter object in `context.py`, and calling the "get_selected_date" method on it.

```python
if "my_date_param" in prms:
    my_date_param: sr.DateParameter = prms["my_date_param"]
    my_date: str = my_date_param.get_selected_date()
    ...
```

### get_selected_date

Gets selected date as string.

**Optional Keyword Argument**

- **date_format**: An optional string for the format of the returned date. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). If None, uses the same format as the one specified for default date (see [DateParameterOption](../parameter_options/DateParameterOption) or [DateDataSource](../data_sources/DateDataSource)). Default is None

**Returns:** A string for the date.

### get_selected_date_quoted

Gets selected date as string surrounded by single quotes.

**Optional Keyword Argument**

- **date_format**: See "date_format" argument for the "get_selected_date" method above

**Returns:** A string for the quoted date.


[Parameter]: ./Parameter