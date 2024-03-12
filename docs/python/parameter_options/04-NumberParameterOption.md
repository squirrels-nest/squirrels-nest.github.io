# NumberParameterOption

The class for parameter options of number parameters. Note that only one option can appear at a time, but different options may appear based on authenticated user or parent parameter selections. See [ParameterOption] page for more details on the common constructor arguments.

### Constructor

Creates a NumberParameterOption object.

**Required Arguments:**

- **min_value**: A string, int, or Decimal (from decimal package). This is the minimum selectable value for this number parameter
- **max_value**: A string, int, or Decimal (from decimal package). This is the maximum selectable value for this number parameter
    - Must be greater than "min_value"

**Optional Keyword Arguments:**

- **increment**: A string, int, or Decimal (from decimal package). This is the increment of selectable values. Default is 1
    - Must fit evenly between "min_value" and "max_value"
- **default_value**: A string, int, Decimal (from decimal package), or None. This is the default selected value. When None, the "min_value" is used. Default is None
    - Must be selectable based on "min_value", "max_value", and "increment"
- **user_groups** (see [ParameterOption])
- **parent_options_ids** (see [ParameterOption])


[ParameterOption]: ./ParameterOption