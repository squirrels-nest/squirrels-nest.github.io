---
sidebar_position: 4
---

# 4. Create the SQL Queries

If you haven't already:
1. rename `database_view1.sql` to `aggr_weather_metrics.sql` in the `models/dbviews` folder
2. rename `dataset_example.sql` to `weather_by_time.sql` in the `models/federates` folder.

In these files, we will write a pipeline of sql transformations to return tabular results for the dataset. 

:::info

These sql query can be templated using Jinja, with access to a variety of dictionaries such as **prms**, **ctx**, and **traits**, which stand for "Parameter Set", "Context", and "Traits". More information about these variables can be found in the [SQL Models](../topics/models-sql) page. For now, just know that we can access parameters with `prms["parameter name"]` in Jinja, and access selected value(s) of the parameter by calling certain methods (such as **get_selected** or **get_selected_label**).

:::

## Define the Database View

In `aggr_weather_metrics.sql`, change its contents to the following:

```sql
{%- set dim_col = prms["group_by_dim"].get_selected("dim_col") -%}
{%- set order_col = prms["group_by_dim"].get_selected("order_by_col", default_field="dim_col") -%}

SELECT {{ dim_col }}
    , {{ order_col }} as ordering
    , avg(temp_max) as temperature_high_C
    , avg(temp_min) as temperature_low_C
    , avg(precipitation) as precipitation_inches
    , avg(wind) as wind_mph
FROM weather
GROUP BY {{ dim_col }}, {{ order_col }}
```

This query finds the average temperature, precipitation level, and wind speed by group based the selected value of the "group_by_dim" parameter (by year, by year of month, by day of year, etc.).

:::info

The **set** keyword is Jinja syntax for assigning variables. The `prms['group_by_dim']` returns a **SingleSelectParameter** (as we previously defined in `parameters.py`), which contains the method **get_selected** for getting specific fields of the selected **SelectParameterOption**. We've previously defined "dim_col" in all the options in `parameters.py`, but only specified "order_by_col" for one of the options. The **get_selected** method has the argument "default_field" to pick "dim_col" for the "order_by_col" if "order_by_col" does not exist as a custom field.

:::

## Define the Final View

In `weather_by_time.sql`, change its contents to the following:

```sql
{%- set dim_col = prms["group_by_dim"].get_selected("dim_col") -%}

SELECT {{ dim_col }}
    , temperature_high_C
    , temperature_low_C
    , precipitation_inches
    , wind_mph
FROM {{ ref("aggr_weather_metrics") }}
ORDER BY ordering
```

This query takes the result of "aggr_weather_metrics" and orders by a column called "ordering".

:::info

A few things to note here:

1. The **ref** function only exists for federate models to reference other models (which can be other federates in addition to dbviews). In this case, the model depends on running the results from `aggr_weather_metrics.sql` first.
2. In this query, we are selecting all columns except the "ordering" column, which is what we use in the "ORDER BY" clause instead.
3. The first line where we set "dim_col" is repeated in `aggr_weather_metrics.sql`. This can be avoided either by using [Jinja's include/import], or by using the `context.py` file which will be discussed later in the tutorial.

:::

[Jinja's include/import]: https://ttl255.com/jinja2-tutorial-part-6-include-and-import/
