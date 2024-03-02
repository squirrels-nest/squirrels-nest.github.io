# ModelDepsArgs

The class for the "sqrl" argument of the dependencies function of a Python model. The class contains the same attributes as [ContextArgs](./ContextArgs) and more.

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
