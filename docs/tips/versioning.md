# Versioning Best Practices

In the [squirrels.yml] file, the **major_version** under **project_variables** is required, and defines the version of the project. The following are some best practices around project versioning.

- Start your first major version at 1.
- Only increment the major version if it causes breaking changes for clients consuming the data APIs. Understanding how the APIs are used plays a role in knowing what's a breaking change. The following are some examples of breaking changes:
    - A column is deleted from a dataset for any given set of parameter selections.
    - A parameter is removed for a dataset if the parameters are not retrieved dynamically with the "parameters API".
    - A dataset is removed or renamed if datasets are not retrieved dynamically with the "dataset catalog API".
- Most other changes that are NOT breaking changes DO NOT need to increment the major version. These include:
    - A column is added to the dataset
    - A parameter is added to a dataset
    - A new dataset is added to the project

:::note

In the future, we intend to create a Cloud platform to host Squirrels APIs with abilities to create and maintain a "stack" of minor versions for each project's major version.

:::


[squirrels]: ../topics/project-file