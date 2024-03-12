# DateParameterOption

The class for parameter options of date parameters. Note that only one option can appear at a time, but different options may appear based on authenticated user or parent parameter selections. See [ParameterOption] page for more details on the common constructor arguments.

### Constructor

Creates a DateParameterOption object.

**Required Arguments:**

- **default_date**: A string or date (from datetime package). This is the default selected date for this option

**Optional Keyword Arguments:**

- **date_format**: A string for the format of the "default_date" argument. Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). Default is '%Y-%m-%d'
- **user_groups** (see [ParameterOption])
- **parent_options_ids** (see [ParameterOption])


[ParameterOption]: ./ParameterOption