# ModelArgs

The class for the "sqrl" argument of the main function of a Python model. The class contains the same attributes as [ModelDepsArgs](./ModelDepsArgs) and more.

## Attributes

- **proj_vars**
    - A dictionary to access a project variable defined in `squirrels.yml`
- **env_vars**
    - A dictionary to access an environment variable defined in `environcfg.yml`
- **user**
    - The authenticated user with type User class defined in `auth.py` (if applicable), or None if no user authenticated
- **prms**
    - A dictionary of the parameter objects (containing the real-time parameter selections) by parameter name
- **traits**
    - A dictionary of the dataset traits
- **ctx**
    - A dictionary of context variables (often defined based on the real-time parameter selections) defined in `context.py`
- **connections**
    - A dictionary of sqlalchemy engines by connection name

## Methods

- **ref**
    - Arguments
        - **model**: A string for the dependent model name
    - Returns: A pandas DataFrame for the result of the dependent model
- **run_external_sql**
    - Arguments
        - **sql**: A string for the SQL query to run on the external database
        - **connection_name** (optional): A string for the connection name of the external database. If unspecified (or None), the default connection name is used
    - Returns: A pandas DataFrame of the query result
- **run_sql_on_dataframes**
    - Arguments
        - **query**: A string for the SQL query to run on pandas dataframes (using sqlite or duckdb dialect depending on project settings)
        - **dataframes** (optional): A dictionary of pandas dataframes by table name that the SQL query refers to. If unspecified (or None), the pandas dataframes and names are the dependent model names defined in the "dependencies" function of the Python model.
    - Returns: A pandas DataFrame of the query result
