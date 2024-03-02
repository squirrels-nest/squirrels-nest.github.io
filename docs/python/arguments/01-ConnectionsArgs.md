# ConnectionsArgs

The class for the "sqrl" argument of the main function of `connections.py`.

## Attributes

- **proj_vars**
    - A dictionary to access a project variable defined in `squirrels.yml`
- **env_vars**
    - A dictionary to access an environment variable defined in `environcfg.yml`

## Methods

- **get_credential**
    - Arguments
        - **key**: The key to credentials (username and password) set in `environcfg.yml`
    - Returns: The corresponding username and password as a tuple of two strings
