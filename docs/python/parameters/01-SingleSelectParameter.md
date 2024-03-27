# SingleSelectParameter

The class for defining and interacting with single-select parameters. 

## Static / Class Methods

In addition to the static methods specified on this page, see the [Parameter] page for details on the **Create** and **CreateFromSource** factory methods.

For SingleSelectParameter in particular:
- The **all_options** argument of the **Create** factory method must be a sequence of [SelectParameterOption](../parameter_options/SelectParameterOption) instances
- The **data_source** argument of the **CreateFromSource** factory method must be a [SingleSelectDataSource](../data_sources/SingleSelectDataSource) 

### CreateSimple

Creates the configurations for a single-select parameter by providing a list of [SelectParameterOption](../parameter_options/SelectParameterOption) instances, and adds it to an abstract pool of parameter configurations. 

Similar to the **Create** factory method, but without the optional arguments for **user_attribute** and **parent_name**. For arguments, see **Create** in the [Parameter] page.

## Non-Static Methods

In the [context.py](../../topics/context) file or data model, the methods below can be invoked on a SingleSelectParameter object to retrieve details for the selected parameter option at runtime. For example, the following code demonstrates getting the SingleSelectParameter object in `context.py`, and calling the "get_selected" method on it.

```python
if "my_ss_param" in prms:
    my_ss_param: sr.SingleSelectParameter = prms["my_ss_param"]
    my_special_field: str = my_ss_param.get_selected("some_field")
    ...
```

### get_selected

Gets the selected single-select option or selected custom field.

**Optional Arguments:**

- **field**: An optional string for the "custom_fields" attribute to retrieve from the selected option. If None, retrieves the selected SelectParameterOption instance instead. Default is None

**Optional Keyword Arguments:**

- **default_field**: An optional string. If not None, this is used if the "field" argument cannot be found in "custom_fields". Default is None
- **default**: A optional value (of any type) to return if the "field" and "default_field" arguments cannot be found in "custom_fields". If None, an error is thrown if "field" and "default_field" arguments cannot be found. Default is None

**Returns:** The value of the custom field (of any type) or a SelectParameterOption instance if the "field" argument is None.

### get_selected_id

Gets the ID of the selected parameter option. This method takes no arguments.

**Returns:** A string for the ID.

### get_selected_id_quoted

Gets the ID of the selected parameter option surrounded by single quotes. This method takes no arguments.

**Returns:** A string for the quoted ID.

### get_selected_label

Gets the label of the selected parameter option. This method takes no arguments.

**Returns:** A string for the label.

### get_selected_label_quoted

Gets the label of the selected parameter option surrounded by single quotes. This method takes no arguments.

**Returns:** A string for the quoted label.


[Parameter]: ./Parameter