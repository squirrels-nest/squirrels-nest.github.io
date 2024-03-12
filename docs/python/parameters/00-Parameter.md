# Parameter (abstract)

This page contains the common methods of all (or most) Parameter classes. This page is provided to avoid repeated text. The "Parameter" class is actually an abstract class that other Parameter classes extend on. Do not use this class directly.

The Parameter classes are used in two ways:
1. Creating a parameter in the [parameters.py](../../topics/parameters) file using a factory method (which are static methods)
2. Accessing attributes of selected parameter options in [context.py](../../topics/context) or data models, typically using non-static methods on a parameter object. For example, the code below demonstrates how this would be done in `context.py`.

```python
if "my_ss_param" in prms:
    my_ss_param: sr.SingleSelectParameter = prms["my_ss_param"]
    ... # invoke some method on the parameter object "my_ss_param"
```

## Static / Class Methods

The definitions of the **Create** and **CreateFromSource** factory methods are very similar (if not, the same) between Parameter classes.

### Create

Creates the configurations for a widget parameter by providing a list of the parameter option objects, and adds it to an abstract pool of parameter configurations.

**Required Arguments:**

- name
- label
- all_options

**Optional Keyword Arguments:**

- is_hidden
- user_attribute
- parent_name

**Returns:** None

### CreateFromSource

Creates the configurations for a widget parameter by providing a lookup table to query from, and adds it to an abstract pool of parameter configurations.

**Required Arguments:**

- TBA

**Returns:** None

## Non-Static Methods

TBA
