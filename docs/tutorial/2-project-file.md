---
sidebar_position: 2
---

# 2. Configure the Squirrels Project File

Go to the `squirrels.yml` file. This is the Squirrels project file to configure most of the properties of the Squirrels project in [yaml].

In this tutorial, we will focus on the **project_variables**, **connections**, and **datasets** sections.

## Setting the Project Variables

The project variables **name** and **major_version** are required. The **label** is optional, and will use the **name** if not specified. In additional to those, you are free to add any of your own project variable.

In this tutorial, we will be making dataset APIs related to historical weather data. Change the **name** to `weather` and **label** to `Weather Analytics` (we will leave **major_version** as is).

The **project_variables** section should now look like this:

```yaml
project_variables:
  name: weather
  label: Weather Analytics
  major_version: 1
```

## Setting the Database Connections

This section is where we set all the database connection details that we need. We provide a list of connection names here and refer to them in other files. The connection name `default` must be provided for models that don't set a connection name explicitly.

Under `default`, change the url to `sqlite:///./database/weather.db`.

:::tip

You can also use the [Jinja]'s double curly brackets syntax to substitute environment variables defined in the `environcfg.yml` file.

:::

The syntax for the URL uses [sqlalchemy database URLs](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls). Since sqlite databases don't require a username and password, the **credential** field can be either set to null or omitted entirely. More details on setting and using credential keys and connections can be found at [Database Connections](../topics/database).

The **connections** section should now look like this:

```yaml
connections:
  - name: default
    credential: null
    url: sqlite:///./database/weather.db
```

## Defining the Datasets

This section is where we define the attributes for all datasets created by the Squirrels project. Every dataset defined will have their own "parameters API" and "dataset API".

Change the first dataset name to `weather_by_time` and label to `Weather by Time of Year`. Remove all parameters except "group_by", and rename it to "group_by_dim". Fields **scope** and **traits** can be omitted.

Remove the second dataset.

The **datasets** section should now look like this:

```yaml
datasets:
  - name: weather_by_time
    label: Weather by Time of Year
    parameters:
      - group_by_dim
```

Every dataset name that's set in the **datasets** section must also have a matching file name somewhere in `models` folder (unless a **model** field is specified). At this point, we can rename the models files:
1. In the `models/federates` folder, rename `dataset_example.sql` to `weather_by_time.sql`.
2. In the `models/dbviews` folder, rename `database_view1.sql` to `aggr_weather_metrics.sql`.

More details on the Squirrels project file can be found at [Squirrels Project File](../topics/project-file).


[yaml]: https://yaml.org/
[Jinja]: https://jinja.palletsprojects.com/
