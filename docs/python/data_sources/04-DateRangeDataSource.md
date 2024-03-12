# DateRangeDataSource

The class for the database table source for a date range parameter. See [DataSource] page for more details on the common constructor arguments.

### Constructor

Creates a DateRangeDataSource object.

**Required Arguments:**

- **table_or_query** (see [DataSource])
- **default_start_date_col**
    - The column name (string) of the default start date
- **default_end_date_col**
    - The column name (string) of the default end date

**Optional Keyword Arguments:**

- **date_format**: A string for the format of the default date(s). Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). Default is '%Y-%m-%d'
- **id_col** (see [DataSource])
- **user_group_col** (see [DataSource])
- **parent_id_col** (see [DataSource])
- **connection_name** (see [DataSource])


[DataSource]: ./DataSource