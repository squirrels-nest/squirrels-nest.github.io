# AuthArgs

The class for the "sqrl" argument of the main function of `auth.py`. The class contains the same attributes and methods as [ConnectionsArgs](./ConnectionsArgs) and more.

## Attributes

Attibutes of the "sqrl" argument that can be accessed.

### proj_vars

A dictionary to access a project variable defined in `squirrels.yml`.

### env_vars

A dictionary to access an environment variable defined in `environcfg.yml`.

### connections

A dictionary of sqlalchemy engines by connection name.

### username

A string for the username the user is attempting to authenticate with.

### password

A string for the password the user is attempting to authenticate with.

## Methods

Methods that can be invoked with the "sqrl" argument.

### get_credential

Gets user credentials for database connections.

**Arguments:**

- **key**: The key to credentials (username and password) set in `environcfg.yml`

**Returns:** The corresponding username and password as a tuple of two strings.
