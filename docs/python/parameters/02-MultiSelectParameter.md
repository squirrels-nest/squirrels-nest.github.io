# MultiSelectParameter

The class for defining and interacting with multi-select parameters. 

## Static / Class Methods

In addition to the static methods specified on this page, see the [Parameter] page for details on the **CreateFromSource** factory methods.

For MultiSelectParameter in particular:
- The **data_source** argument of the **CreateFromSource** factory method must be a [MultiSelectDataSource](../data_sources/MultiSelectDataSource) 

### Create

Creates the configurations for a multi-select parameter by providing a list of the parameter option objects, and adds it to an abstract pool of parameter configurations.

**Required Arguments:**

- **name**: A string for the name of the parameter
- **label**: A string for human-friendly display name for this parameter
- **all_options**: A sequence of [SelectParameterOption](../parameter_options/SelectParameterOption) instances for all parameter options associated to this parameter

**Optional Keyword Arguments:**

- **show_select_all**:A boolean for whether this parameter should have a checkbox/button to automatically select all options. Default is true
- **is_dropdown**: A boolean for whether this parameter should show as a dropdown (true) or listbox (false). Default is true
- **order_matters**: A boolean for whether the ordering of the selection matters. Default is false
- **none_is_all**: A boolean for whether applying no selection is equivalent to selecting all. Default is true
- **is_hidden**: A boolean for whether the parameter is hidden in the response of the Parameters API. Default is False
- **user_attribute**: An optional string for the user attribute that may cascade the options for this parameter. If None, then the authorized user has no effect on the selectable parameter options. Default is None
- **parent_name**: An optional string for the name of the parameter (or "parent parameter") that may cascade the options for this parameter. If None, then other parameters have no effect on the selectable parameter options for this parameter. Default is None

**Returns:** None

### CreateSimple

Creates the configurations for a multi-select parameter by providing a list of [SelectParameterOption](../parameter_options/SelectParameterOption) instances, and adds it to an abstract pool of parameter configurations. 

Similar to the **Create** factory method, but without the optional arguments for **user_attribute** and **parent_name**.

## Non-Static Methods

In the [context.py](../../topics/context) file or data model, the methods below can be invoked on a MultiSelectParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the MultiSelectParameter object in `context.py`, and calling the "get_selected_list" method on it.

```python
if "my_ms_param" in prms:
    my_ms_param: sr.MultiSelectParameter = prms["my_ms_param"]
    my_special_field: list[str] = my_ms_param.get_selected_list("some_field")
    ...
```

### has_non_empty_selection

Gets whether there are options selected. True if more than zero options were selected, and False otherwise. This method takes no arguments.

**Returns:** A boolean.

### get_selected_list

Gets the selected list of multi-select options or custom field values.

**Optional Arguments:**

- **field**: An optional string for the "custom_fields" attribute to retrieve from the selected option. If None, retrieves the selected SelectParameterOption instance instead. Default is None

**Optional Keyword Arguments:**

- **default_field**: An optional string. If not None, this is used if the "field" argument cannot be found in "custom_fields". Default is None
- **default**: A optional value (of any type) to return if the "field" and "default_field" arguments cannot be found in "custom_fields". If None, an error is thrown if "field" and "default_field" arguments cannot be found. Default is None

**Returns:** A sequence of of the custom field values (of any type) or a sequence of SelectParameterOption instances if the "field" argument is None.

### get_selected_ids_as_list

Gets the sequence of ID(s) of the selected option(s). This method takes no arguments.

**Returns:** A sequence of strings for the IDs.

### get_selected_ids_joined

Gets the ID(s) of the selected option(s) joined by comma. This method takes no arguments.

**Returns:** A string containing all the IDs separated by comma.

### get_selected_ids_quoted_as_list

Gets the sequence of ID(s) of the selected option(s) surrounded by single quotes. This method takes no arguments.

**Returns:** A sequence of strings for the quoted IDs.

### get_selected_ids_quoted_joined

Gets the ID(s) of the selected option(s) surrounded by single quotes and joined by comma. This method takes no arguments.

**Returns:** A string containing all the quoted IDs separated by comma.

### get_selected_labels_as_list

Gets the sequence of label(s) of the selected option(s). This method takes no arguments.

**Returns:** A sequence of strings for the labels.

### get_selected_labels_joined

Gets the label(s) of the selected option(s) joined by comma. This method takes no arguments.

**Returns:** A string containing all the labels separated by comma.

### get_selected_labels_quoted_as_list

Gets the sequence of label(s) of the selected option(s) surrounded by single quotes. This method takes no arguments.

**Returns:** A sequence of strings for the quoted labels.

### get_selected_labels_quoted_joined

Gets the label(s) of the selected option(s) surrounded by single quotes and joined by comma. This method takes no arguments.

**Returns:** A string containing all the quoted labels separated by comma.


[Parameter]: ./Parameter