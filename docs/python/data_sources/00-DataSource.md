# DataSource (abstract)

This page contains the common arguments for the constructors of all DataSource classes. This page is provided to avoid repeated text. The "DataSource" class is actually an abstract class that other DataSource classes extend on. Do not use this class directly.

For all DataSource classes, it is only necessary to use the constructor.

### Constructor

The following are common arguments for the constructors of all DataSource classes.

**Required Arguments:**

- **table_or_query**: A string for the table name or SQL query that represents the source. The string is treated as a SQL query if it starts with "select " (case-insensitive).

**Required or Optional Based on Parameter:**

- **id_col**: A string for the column name of the ID of the parameter options. This is required for select parameter, and optional for non-select parameters where the default value is None.

**Optional Keyword Arguments:**

- **user_group_col**: A string for the column name of the groups of users the parameter options apply to. Default is None
    - If multiple rows have the same value for "id_col" but different value for "user_group_col", then the ID is applicable to multiple user groups
- **parent_id_col**: A string for the column name of the parameter option IDs of the parent parameter that the parameter options of this parameter apply to. Default is None
    - If multiple rows have the same value for "id_col" but different value for "parent_id_col", then the ID of this parameter option has multiple parent IDs
- **connection_name**: A string for the connection name to the database that the datasource should come from. If None, uses the default connection name (often "default") configured in settings. Default is None
