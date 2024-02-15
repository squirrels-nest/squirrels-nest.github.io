---
sidebar_position: 2
---

# Environment Configuration File

The environment configuration file (`environcfg.yml`) contains secret values that are NOT part of the codebase for the squirrels project. It may contain any of the following sections:

1. **users**
2. **env_vars**
3. **credentials**
4. **secrets**

The `environcfg.yml` file can either be saved in the `$HOME/.squirrels/` folder (to share values across Squirrels projects), or in the project folder. If the file is available in both folders, the values in the `environcfg.yml` file in the project folder will overwrite values in the same file in the `$HOME/.squirrels/` folder.

This file is included in `.gitignore`. NEVER COMMIT THIS FILE TO SOURCE CONTROL!

The sections are described in detail below. Use the right sidebar to jump to a specific section.

### users

This section lets you specify mock users for local development testing (see page on [Authentication](./auth) for integrating your authentication system in Python to validate real users). An example may look like this:

```yaml
users:
  my_user:
    password: MyPassword
    is_internal: False
    custom_field: Some Value
```

Each user must specify fields for **password** and **is_internal**. The **is_internal** field must be a boolean, and if set to true, allows the user to access all datasets including private ones (if set to false, cannot access private ones, but can still access protected ones).

If a `pyconfigs/auth.py` file is used containing a user model with additional user attributes, then those attributes should also be specified as fields for each user.

### env_vars

This section lets you specify custom variables used in the Squirrels project (including the [squirrels.yml] file), but should not be included in source control. Database connection strings is a good use case for this. Below is an example:

```yaml
env_vars:
  db_conn_str: sqlite://{username}:{password}@/mydatabase.db
  another_env_var: my_secret_value
```

### credentials

This section lets you specify credential objects as username and password pairs for authenticating with external systems such as databases and REST APIs. This can, for instance, avoid repeating the same username and password for connection strings of databases in the same database server. Below is an example of the credentials section:

```yaml
credentials:
  my_db_user:
    username: user1
    password: pass1
```

### secrets

This section contains secret settings for Squirrels where you would not want to expose the value to source control.

Currently, the only secret setting available is **jwt_secret**. Squirrels uses jwt (JSON Web Tokens) for authentication and authorization. More information on this can be found [here](https://jwt.io/introduction). Quoting the page, "the signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is". The **jwt_secret** lets you define your own "private key". If no value is provided, Squirrels will generate a random 32 byte hash for the private key when the API server starts, which means that if the API server has to restart, all non-expired jwt tokens of authenticated users would be invalidated.

The following is an example for this section. DO NOT use the jwt_secret value below in your project. One way to generate your own 32 byte hash, is to run `openssl rand -hex 32` in bash.

```yaml
secrets:
  jwt_secret: 205bfb156f6b71c8219ee937a1c791296e57450edc465ce7f54e1b226b70365f
```


[squirrels.yml]: ../topics/project-file
