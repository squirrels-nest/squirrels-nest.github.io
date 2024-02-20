---
sidebar_position: 1.1
---

# Squirrels Project Settings

|Setting Key|Default|Description|
|:----------|:------|:----------|
|auth.token.expire_minutes|30|The length of time (in minutes) that the token for an authenticated user is valid for.|
|parameters.cache.size|1024|The maximum number of responses that the LRU cache of the parameters API can store.|
|parameters.cache.ttl_minutes|0|The time to live (in minutes) for the LRU cache of the parameters API. No cache when value is 0.|
|results.cache.size|128|The maximum number of responses that the LRU cache of the results API can store.|
|results.cache.ttl_minutes|0|The time to live (in minutes) for the LRU cache of the results API. No cache when value is 0.|
|connections.default_name_used|default|The name of the connection to use when no name is specified (for parameters from source and dbview models).|
|selection_test_sets.default_name_used|default|The name of the selection_test_set used when no `--test-set` option is specified for the [sqrl compile](../cli/compile) command.|
|defaults.federates.materialized|table|The default materialization for federate models that are used by other SQL models. Valid options are **table** and **view**.|
|in_memory_database|sqlite|Valid options are **sqlite** and **duckdb**. More details in the "In-Memory Database Setting" section below.|

## In-Memory Database Setting

After the dbview models are run on their target database, the results are loaded into RAM in a temporary database. The in-memory database system is determined by the **in_memory_database** setting. Then, there's the option to run federate models against the in-memory database, which means that this setting also affects the SQL dialect used for federate models.

By default, **sqlite** is used and no additional setup is required. To use the **duckdb** setting, the **duckdb** optional dependency must be installed with squirrels.

```bash
pip install "squirrels[duckdb]"
```

:::tip

For the in-memory database, sqlite is optimal when the dbview model results are small (few rows), and the queries for the federate models are complex. Duckdb is optimal when the dbview model results are large (many rows) and federate models are used to apply further aggregations.

:::
