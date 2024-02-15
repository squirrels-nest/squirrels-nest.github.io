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
|defaults.federates.materialized|table|The default materialization for federate models that are used by other SQL models. Valid options are: <ul><li>table</li><li>view</li></ul>|
|in_memory_database|sqlite|The temporary in-memory database to use for federate models. This affects the SQL syntax for the federate models. Valid options are: <ul><li>sqlite</li><li>duckdb</li></ul>|

:::tip

For the **in_memory_database** setting, sqlite is optimal when the results from dbview models are small (few rows), and the queries for the federate models are complex. Duckdb is optimal when the results from the dbview models are large (many rows) which are then used by federate models to further slice and dice.

:::
