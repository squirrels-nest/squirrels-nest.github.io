# ParameterOption (abstract)

This page contains the common arguments for the constructors of all ParameterOption classes. This page is provided to avoid repeated text. The "ParameterOption" class is actually an abstract class that other ParameterOption classes extend on. Do not use this class directly.

For most ParameterOption classes, it is only necessary to use the constructor.

### Constructor

The following are common arguments for the constructors of all ParameterOption classes.

**Optional Keyword Arguments:**

- **user_groups**: A value or list of values (of any type) for the user attribute value(s) that this parameter option is available for
    - The user attribute field name is defined in the factory method of the Parameter class
- **parent_option_ids**: A string or list of strings for the ID(s) of the parent parameter options that this parameter option is available for
    - The parent parameter name is defined in the factory method of the Parameter class.
