# DateRangeParameter

The class for defining and interacting with date range parameters. 

## Static / Class Methods

In addition to the static methods specified on this page, see the [Parameter] page for details on the **Create** and **CreateFromSource** factory methods.

For DateRangeParameter in particular:
- The **all_options** argument of the **Create** factory method must be a sequence of [DateRangeParameterOption](../parameter_options/DateRangeParameterOption) instances
- The **data_source** argument of the **CreateFromSource** factory method must be a [DateRangeDataSource](../data_sources/DateRangeDataSource) 

### CreateSimple

Creates the configurations for a date range parameter by providing a list of [DateRangeParameterOption](../parameter_options/DateRangeParameterOption) instances, and adds it to an abstract pool of parameter configurations. 

Unlike the **Create** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **default_start_date**: A string or date (from datetime package). This is the default selected start date
- **default_end_date**: A string or date (from datetime package). This is the default selected end date
    - Must be a date after "default_start_date"

**Optional Keyword Arguments:**

- **date_format**: A string for the format of the "default_date" argument. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). Default is '%Y-%m-%d'
- **is_hidden**: A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False

**Returns:** None

## Non-Static Methods

In the [context.py](../../topics/context) file or data model, the methods below can be invoked on a DateRangeParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the DateRangeParameter object in `context.py`, and calling the "get_selected_date" method on it.

```python
if "my_dr_param" in prms:
    my_dr_param: sr.DateRangeParameter = prms["my_dr_param"]
    my_date: str = my_dr_param.get_selected_start_date()
    ...
```

### get_selected_start_date

Gets selected start date as string.

**Optional Keyword Argument**

- **date_format**: An optional string for the format of the returned date. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). If None, uses the same format as the one specified for default date (see [DateRangeParameterOption](../parameter_options/DateRangeParameterOption) or [DateRangeDataSource](../data_sources/DateRangeDataSource)). Default is None

**Returns:** A string for the date.

### get_selected_start_date_quoted

Gets selected start date as string surrounded by single quotes.

**Optional Keyword Argument**

- **date_format**: See "date_format" argument for the "get_selected_start_date" method above

**Returns:** A string for the quoted date.

### get_selected_end_date

Gets selected end date as string surrounded by single quotes.

**Optional Keyword Argument**

- **date_format**: See "date_format" argument for the "get_selected_start_date" method above

**Returns:** A string for the date.

### get_selected_end_date_quoted

Gets selected end date as string surrounded by single quotes.

**Optional Keyword Argument**

- **date_format**: See "date_format" argument for the "get_selected_start_date" method above

**Returns:** A string for the quoted date.


[Parameter]: ./Parameter