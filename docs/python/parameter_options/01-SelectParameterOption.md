# SelectParameterOption

The class for parameter options of single-select and multi-select parameters. See [ParameterOption] page for more details on the common constructor arguments.

### Constructor

Creates a SelectParameterOption object.

**Required Arguments:**

- **id**: A string for unique identifier of this option that never changes for subsequent versions of the project
- **label**: A string for human-friendly display name of this option

**Optional Keyword Arguments:**

- **is_default**: A boolean for whether this is option is selected by default
    - For single-select parameters, the default is the first option in the list where this flag is true, or the very first option in the list if none of the options have this flag as true
    - For multi-select parameters, all options that have this flag as true are selected by default
- **user_groups** (see [ParameterOption])
- **parent_option_ids** (see [ParameterOption])
- **custom_fields**: A dictionary to define custom attribute names and values on parameter options

## Methods

In the [context.py](../../topics/context) file or data model, you can use the `get_selected` method on a single-select parameter without arguments to get the SelectParameterOption object for the selected option, or the `get_selected_list` method on a multi-select parameter without arguments to get the list of SelectParameterOption objects for the selected options. For example, the code below demonstrates getting the selected SelectParameterOption object from a single-select parameter in `context.py`.

```python
if "my_ss_param" in prms:
    my_ss_param: sr.SingleSelectParameter = prms["my_ss_param"]
    my_option: sr.SelectParameterOption = my_ss_param.get_selected()
    ...
```

The following class methods are available to use on a SelectParameterOption object.

### get_custom_field

Gets the value of a custom field.

**Required Arguments:**

- **field**: A string for the key to use to fetch the custom field from the "custom_fields" dictionary

**Optional Keyword Arguments:**

- **default_field**: A string or None. If the "field" argument does not exist in "custom_fields" as a key, then this is used instead as the field if not None
- **default**: Any type. If "field" or "default_field" (if not None) arguments do not exist in "custom_fields" as keys, then this value is used as default. If this value is also None, then an error is thrown.

**Returns:** The value of the custom field (can be any type).


[ParameterOption]: ./ParameterOption