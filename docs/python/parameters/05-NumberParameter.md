# NumberParameter

The class for defining and interacting with number parameters. 

## Static / Class Methods

In addition to the static methods specified on this page, see the [Parameter] page for details on the **Create** and **CreateFromSource** factory methods.

For NumberParameter in particular:
- The **all_options** argument of the **Create** factory method must be a sequence of [NumberParameterOption](../parameter_options/NumberParameterOption) instances
- The **data_source** argument of the **CreateFromSource** factory method must be a [NumberDataSource](../data_sources/NumberDataSource) 

### CreateSimple

Creates the configurations for a number parameter by providing a list of [NumberParameterOption](../parameter_options/NumberParameterOption) instances, and adds it to an abstract pool of parameter configurations.

Unlike the **Create** factory method, this factory method assumes only one parameter option is needed with no arguments for "user_attribute" and "parent_name".

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **min_value**: A string, int, or Decimal (from decimal package). This is the minimum selectable value for this number parameter
- **max_value**: A string, int, or Decimal (from decimal package). This is the maximum selectable value for this number parameter
    - Must be greater than "min_value"

**Optional Keyword Arguments:**

- **increment**: A string, int, or Decimal (from decimal package). This is the increment of selectable values. Default is 1
    - Must fit evenly between "min_value" and "max_value"
- **default_value**: A string, int, Decimal (from decimal package), or None. This is the default selected value. When None, the "min_value" is used. Default is None
    - Must be selectable based on "min_value", "max_value", and "increment"
- **is_hidden**: A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False

**Returns:** None

## Non-Static Methods

In the [context.py](../../topics/context) file or data model, the methods below can be invoked on a NumberParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the NumberParameter object in `context.py`, and calling the "get_selected_value" method on it.

```python
if "my_num_param" in prms:
    my_num_param: sr.NumberParameter = prms["my_num_param"]
    my_num: str = my_num_param.get_selected_value()
    ...
```

### get_selected_value

Gets selected number as string. This method takes no arguments.

**Returns:** A string that's parsable into a decimal number.


[Parameter]: ./Parameter