---
sidebar_position: 3
---

# Database Connections

All database connections for dbview models are specified using SQLAlchemy URLs. They can be configured either in the **connections** section of [squirrels.yml] or in the `pyconfigs/connections.py` file. If both are used, then connection names in the `pyconfigs/connections.py` file takes precedence.

### Setting connections in YAML

See the "connections" section of the [Squirrels Project File](./project-file) page for details.

## Connections Python File

### Creating the file from scratch

An easy way to get an example of a `connections.py` file is by using the [sqrl init](../cli/init) command and specify the connections format to be Python. You can go through the prompts or you can run:

```bash
sqrl init --core --connections py
```

This adds the `connections.py` file to the `pyconfigs/` folder. 

### Setting connections in Python

The `connections.py` file must have a **main** function with two arguments **connections** and **sqrl**.

- **connections** is the output dictionary that is written to in the function. The keys should be strings, and the values are typically SQLAlchemy engines.
- **sqrl** is an object of type [ConnectionsArgs](../python/arguments/ConnectionsArgs) that contains inputs/utilities you may choose to use. Some examples include:
  - The **sqrl.proj_vars** attribute, a dictionary for accessing project variables defined in [squirrels.yml].
  - The **sqrl.env_vars** attribute, a dictionary for accessing environment variables defined in [environcfg.yml].
  - The **sqrl.get_credential** method to get username and password from a credential name defined in [environcfg.yml].

 This file is run once the moment the API server is started with the [sqrl run](../cli/run) command. A sample **main** function `connections.py` can look something like this:

```python
def main(connections: dict[str, sqlalchemy.Engine], sqrl: sr.ConnectionsArgs) -> None:
    username, password = sqrl.get_credential('my_cred_name')
    
    conn_str1_raw = 'driver://{username}:{password}@server/database
    conn_str1 = conn_str1_raw.format(username, password)
    connections["conn_str1"] = create_engine(conn_str1)

    conn_str2_raw = sqrl.env_vars["my_conn_str"]
    conn_str2 = conn_str2_raw.format(username, password)
    connections["conn_str2"] = create_engine(conn_str2)
```

:::tip

For certain advanced use cases where you want to save Python values in memory at the moment the API server is initialized (such as saving a ML model into memory, from a file representation, to be used by a Python model later), you can write code in this file to save the values into the **connections** dictionary, even if the values do not actually represent database connections. The value can then be referenced in Python model **main** function through `sqrl.connections`. This is fine as long as the value is not being used as a database connection anywhere in the Squirrels project.

:::


[squirrels.yml]: ./project-file
[environcfg.yml]: ./environcfg
