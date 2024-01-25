---
sidebar_position: 6
---

# 6. Use the Context File

Let's revisit the SQL/Jinja files. In both files, we use `prms["group_by_dim"].get_selected("dim_col")` to get the "dim_col" attribute from the selected parameter option. Writing this sort of "Python-like" code in a SQL/Jinja file can be a poor developer experience, especially if you're using an IDE that can provide auto-completion for Python files.

Instead, we can use the `pyconfigs/context.py` file to improve the developer experience. We use its **main** function to transform all selected parameter options into useful values (usually strings), set as dictionary values. Then, in the SQL/Jinja files, the dictionary values can be referenced using the **ctx** keyword.

For example, we can update the `context.py` file contents to look like this:

```python
from typing import Any
import squirrels as sr

def main(ctx: dict[str, Any], sqrl: sr.ContextArgs) -> None:
    if "group_by_dim" in sqrl.prms:
        group_by_param: sr.SingleSelectParameter = sqrl.prms["group_by_dim"]
        ctx["dim_col"] = group_by_param.get_selected("dim_col")
        ctx["order_col"] = group_by_param.get_selected("order_by_col", default_field="dim_col")
```

:::note

Notice that type hints were added to **group_by_param** variable. This is useful to provide the IDE information on suggesting methods to auto-complete. For instance, with a list of suggestions, we don't have to memorize that the **get_selected** method exists for SingleSelectParameter objects to get the selected parameter option, or memorize what method names are available for other parameter classes. When starting to type ".get", suggestions provided by the IDE would allow appropriate methods to be discovered more easily, if the IDE is configured to the correct Python interpreter / virtual environment.

:::

Now the SQL queries can be written more concisely to reference the context variables instead.

The contents for `aggr_weather_metrics.sql` can be changed to the following.

```sql
SELECT {{ ctx["dim_col"] }}
    , {{ ctx["order_col"] }} as ordering
    , avg(temp_max) as temperature_high_C
    , avg(temp_min) as temperature_low_C
    , avg(precipitation) as precipitation_inches
    , avg(wind) as wind_mph
FROM weather
GROUP BY {{ ctx["dim_col"] }}, {{ ctx["order_col"] }}
```

In addition, the contents for `weather_by_time.sql` can now be changed to the following.

```sql
SELECT {{ ctx["dim_col"] }}
    , temperature_high_C
    , temperature_low_C
    , precipitation_inches
    , wind_mph
FROM {{ ref("aggr_weather_metrics") }}
ORDER BY ordering
```

Congratulations, you have reached the end of the tutorial! We will it up to you to try out `sqrl run` or `sqrl compile` again on these new changes.
