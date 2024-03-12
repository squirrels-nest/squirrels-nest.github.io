# NumberRangeDataSource

The class for the database table source for a number range parameter. See [DataSource] page for more details on the common constructor arguments.

### Constructor

Creates a NumberRangeDataSource object.

**Required Arguments:**

- **table_or_query** (see [DataSource])
- **min_value_col**: A string for the column name of the lower bound of selectable numbers
- **max_value_col**: A string for the column name of the upper bound of selectable numbers

**Optional Keyword Arguments:**

- **increment_col**: A string for the column name of the increment value. If None, assumes column of 1's. Default is None
- **default_lower_value_col**: A string for the column name of the default lower value. If None, uses the "min_value_col" argument. Default is None
- **default_upper_value_col**: A string for the column name of the default upper value. If None, uses the "max_value_col" argument. Default is None
- **id_col** (see [DataSource])
- **user_group_col** (see [DataSource])
- **parent_id_col** (see [DataSource])
- **connection_name** (see [DataSource])


[DataSource]: ./DataSource