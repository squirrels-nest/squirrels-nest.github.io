---
sidebar_position: 1
---

# Squirrels Project File

The Squirrels project file ("squirrels.yml") includes configurations for the project. It contains the following sections:

1. **project_variables**
2. **packages**
3. **connections**
4. **parameters**
5. **selection_test_sets**
6. **datasets**
7. **settings**

Only the **project_variables** section is required (though there isn't much purpose for a project without a datasets section).

This file can be templated with Jinja. For instance, you can write a section in a separate file and use [Jinja's include](https://ttl255.com/jinja2-tutorial-part-6-include-and-import/) to include it into "squirrels.yml".

The sections are described in detail below. Use the right sidebar to jump to a specific section.

### project_variables

This section contains project variables that can be referenced within the project. See example below:

```yml
project_variables:
  name: sample
  label: Sample Label
  major_version: 1
  custom_var: example
```

The variables **name** and **major_version** are required, and **label** is also a variable that is usually specified for all Squirrels projects.
- **name** - The name of the project, and is part of the URL paths for certain APIs. This must be a string.
- **label** - The human-friendly title of the project that's provided through the catalog API response. This must be a string.
- **major_version** - The major version for the project, and is part of the URL paths for certain APIs. This is must be an integer.

Additional custom project variables can also be added, such as the the **custom_var** above, which can then be used in other parts of your Squirrels projects (such as the models).

### packages

This section lets you specify a list of git projects you can download and import reusable Jinja macros or Python functions from. See example below:

```yaml
packages:
  - git: https://.../myrepo1.git
    revision: v0.1.0
    directory: custom_name
  - git: https://.../myrepo2.git
    revision: main
```

For each item, **git** and **revision** are required fields while **directory** is optional.
- **git** - The URL path to use to clone the git project.
- **revision** - The tag, branch, or commit hash to checkout.
- **directory** - New name for the git project folder if different than default name.

The values in this section is used when using the [sqrl deps](../cli/deps) command to download a list of dependent projects to the `sqrl_packages/` folder.

### connections

This section can be used to specify database connections by assigning a name to [SQLAlchemy Database URLs](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls). Database connections are used by dbview models, and widget parameters that retrieve values from a source. Database connections can also be specified in the `pyconfigs/connections.py` file, and if a name exists in both this section and the python file, then `connections.py` takes precedence. An example of the section may look something like this:

```yaml
connections:
  - name: default
    url: 'sqlite:///./database/mydatabase.db'
  - name: postgres_example
    credential: postgres_user
    url: 'postgresql+psycopg2://{username}:{password}@localhost:5432/mydatabase'
```

The fields **name** and **url** are required. The field **credential** is only required if `{username}` and `{password}` are in the **url**, but otherwise optional.
- **name** - The assigned name of the connection to make it easy to reference elsewhere. The connection name `default` should be defined (either here or in the `connections.py` file), where it becomes the database connection used by default if the connection name is not specified explicitly for the dbview model or widget parameter source.
- **credential** - Select a credential name defined in [environcfg.yml].
- **url** - The SQLAlchemy URL. Placeholders for `{username}` and `{password}` can be included in the URL to substitute the username and password from the specified **credential**.

If you need to use a different URL based on the environment, you can set an environment variable in [environcfg.yml] and use Jinja to substitute environment variables into "squirrels.yml" (such as `url: {{ my_conn_str }}`).

:::note

You may need to install addition Python libraries for the connection driver you wish to use. For instance, to use postgresql with SQLAlchemy, you will need to `pip install psycopg2` first. Only the `sqlite` driver is available natively in Python.

:::

### parameters

This section can be used to define a list of widget parameters, although using the `pyconfig/parameters.py` file to define them in Python instead is recommended and less verbose. The example below defines a date parameter.

```yaml
parameters:
  - type: DateParameter
    factory: CreateSimple
    arguments:
      name: my_date_param
      label: Sample Date Parameter
      default_date: 2023-01-01
```

The equivalent Python representation would be:

```python
DateParameter.CreateSimple("my_date_param", "Sample Date Parameter", default_date=datetime.date(2023, 1, 1))
```

Each parameter must define the fields **type**, **factory**, and **arguments**.
- **type** - The parameter type. The type must match one of the [Python parameter classes].
- **factory** - One of `Create`, `CreateSimple`, or `CreateFromSource` which are factory methods that exist for all [Python parameter classes]. See the docs for the parameter class and factory method to see what arguments they take.
- **arguments** - The arguments for the factory method. This always takes **name** and **label** as required arguments, while the remaining arguments depend on the parameter class and factory method.

Most arguments are typical key-value pairs (where yaml can represent the type for the value). However, this is not quite the case for argument types of **datasource** (a parameter data source class) and **all_options** (a list of parameter option classes).

If the argument is **datasource** (which is required for all **CreateFromSource** factory methods), then use the arguments of the corresponding data source class constructor to specify a new set of key-value pairs. For instance, the corresponding data source class for **MultiSelectParameter** is **MultiSelectDataSource**. As shown in the example below, **MultiSelectDataSource** requires arguments **table_or_query**, **id_col**, and **options_col** (note, **table_or_query** is required for all data source constructors).

```yaml
parameters:
  - type: MultiSelectParameter
    factory: CreateFromSource
    arguments:
      name: my_filter
      label: My Filter
      data_source:
        table_or_query: my_lookup_table
        id_col: my_ids
        options_col: my_options
```

The equivalent Python representation would be:

```python
my_data_source = MultiSelectDataSource("my_lookup_table", id_col="my_ids", options_col="my_options")
MultiSelectParameter.CreateFromSource("my_filter", "My Filter", data_source=my_data_source)
```

If the argument is **all_options** (which is required for all **Create** factory methods and the **CreateFromSimple** factory methods for select parameters), then use the arguments of the corresponding parameter option class constructor for each item in the list. For instance, the corresponding parameter option class for both **SingleSelectParameter** or **MultiSelectParameter** is **SelectParameterOption**. As shown in the example below, **SelectParameterOption** requires arguments **id**, and **label**.

```yaml
parameters:
  - type: SingleSelectParameter
    factory: Create
    arguments:
      name: my_select
      label: My Single Select
      all_options:
        - id: x0
          label: Option 1
        - id: x1
          label: Option 2
```

The equivalent Python representation would be:

```python
my_param_options = [
    SelectParameterOption("x0", "Option 1"),
    SelectParameterOption("x1", "Option 2")
]
SingleSelectParameter.Create("my_select", "My Single Select", all_options=my_param_options)
```

For non-select parameter types like **DateParameter**, it may seem unintuitive why multiple parameter options may be needed (using the **Create** factory method), but it's useful when parent parameters are defined and for instance, you want to change the default date based on the selection of the parent parameter. More details can be found in the [Widget Parameters](./parameters) page.

### selection_test_sets

This section provides test sets for parameter selections when working with the [sqrl compile](../cli/compile) CLI command.

For example, suppose we have test set called `my_test_set` defined in this section as such:

```yaml
selection_test_sets:
  - name: my_test_set
    user_attributes:
      organization: org1
    parameters:
      my_single_select_param: x3
```

For each test set, the **name** field is required, and the **user_attributes** and **parameters** fields are optional.
- **name** - The assigned name of the test set to make it easy to reference elsewhere. If the name `default` is defined, it overrides the default selections if no test set is not explicitly referenced.
- **user_attributes** - If authentication is used, the values of required user attributes (i.e., the attributes defined in the User class in `pyconfigs/auth.py`) are defined here.
- **parameters** - The selected parameter values to test with are defined here. For any parameter names that are not specified here, the default selected value is used.

Then, you can test the generation of SQL queries from the Jinja templates using the selections defined in `my_test_set` with `sqrl compile --test-set my_test_set`. If no `--test-set` option is specified, it will use the test set named `default` if it exists, or use all the default values for each parameter selection. 

:::warning

If using authentication and a user attibute is being referenced (in a model for instance), then the test set used with the `sqrl compile` command must define it in the **user_attributes** field. If the user_attribute is not defined for a test set named `default`, then using the `sqrl compile` command without specifying the `--test-set` option will not work.

:::

### datasets

This section defines the datasets to serve as API endpoints. The following example defines a dataset named `my_dataset`.

```yaml
datasets:
  - name: my_dataset
    label: My Dataset
    model: my_model
    scope: public
    parameters:
      - my_param
    traits:
      my_field: value
```

For each dataset, the **name** field is required, and the other fields are optional.
- **name** - The name of the dataset, and is part of URL paths for the parameters and dataset APIs.
- **label** - The human-friendly title of the dataset that's provided through the catalog API response. If omitted, the **name** is used by default.
- **model** - The target model for the dataset. If omitted, the **name** is used by default.
- **scope** - One of **public**, **protected**, or **private**. All users (authenticated or not) can access public datasets, only authenticated users can access protected datasets, and only internal users can access private datasets. If omitted, default is **public**.
- **parameters** - The list of parameters that this dataset uses. If omitted, all parameters are used.
- **traits** - A set of variable values defined under this dataset, which may affect the behaviour of data models.

### dbviews

This section allows you to define configurations for dbview models in YAML. The following example sets configurations for a dbview model named `my_dbview`.

```yaml
dbviews:
  - name: my_dbview
    connection_name: my_conn
```

The **name** field is required and other fields are optional.
- **name** - The name of the dbview model, which should also be the name of a SQL file in the `models/dbviews/` folder
- **connection_name** - The connection name of the database this model runs on. See [Database Connections](./database) for more information on defining connection names.

### federates

This section allows you to define configurations for federate models in YAML. The following example sets configurations for a federate model named `my_federate`.

```yaml
federates:
  - name: my_federate
    materialized: view
```

The **name** field is required and other fields are optional.
- **name** - The name of the federate model, which should also be the name of a SQL file in the `models/federates/` folder.
- **materialized** - Defines how the federate model gets materialized in the in-memory database. Options are "table" and "view", with "table" being the default (unless specified otherwise with the **defaults.federates.materialized** [setting]).

### settings

This section defines certain settings that Squirrels would apply to the project. See the [Project Settings](./settings) page for the available settings, descriptions, and default values.


[Python parameter classes]: /docs/category/parameter-classes
[environcfg.yml]: ./environcfg
[setting]: ./settings
