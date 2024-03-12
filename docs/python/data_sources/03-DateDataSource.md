# DateDataSource

The class for the database table source for a date parameter. See [DataSource] page for more details on the common constructor arguments.

### Constructor

Creates a DateDataSource object.

**Required Arguments:**

- **table_or_query** (see [DataSource])
- **default_date_col**: A string for the column name of the default date

**Optional Keyword Arguments:**

- **date_format**: A string for the format of the default date(s). Uses [datetime's format codes](https://www.w3schools.com/python/gloss_python_date_format_codes.asp). Default is '%Y-%m-%d'
- **id_col** (see [DataSource])
- **user_group_col** (see [DataSource])
- **parent_id_col** (see [DataSource])
- **connection_name** (see [DataSource])


[DataSource]: ./DataSource