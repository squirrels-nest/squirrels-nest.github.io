---
sidebar_position: 5
---

# Context File

The context file (`pyconfigs/context.py`) is where you can process runtime inputs, such as (but not limited to) parameter selections, into meaningful variables that can be used in the data models. The file contains a single **main** function with the arguments **ctx** and **sqrl**.

- **ctx** (short for "context) is the output dictionary that is written to in the function. The keys should be strings, and the values can be anything.
- **sqrl** is an object of type [ContextArgs](../python/arguments/ContextArgs) that contains inputs/utilities you may choose to use. Some examples include:
  - The `sqrl.prms` attribute, a dictionary for parameter names to the associated Parameter object.
  - The `sqrl.user` attribute, the authorized user if authenticated else None. The attributes for the user can be defined in the User model in `pyconfigs/auth.py` (more details can be found at [Authentication](./auth)).
  - The `sqrl.traits` attributes, a dictionary of the dataset traits (defined in [squirrels.yml](./project-file)) for the running dataset

This file is run for every dataset request, and this same file is used for all datasets. Thus, it is important to use *if statements* to avoid running blocks of code that don't apply to the situation (for instance, context variables for parameters that don't exist for the dataset). 

Although it is often possible to define variables similarly in Jinja (with reusable macros), IDEs tend to have better support for providing auto-fill suggestions in Python than in Jinja. Not to mention, there are many situations where it's much easier to process variables in Python than in Jinja.

The following is a sample **main** function in the "context.py" file.

```python
def main(ctx: dict[str, Any], sqrl: sr.ContextArgs) -> None:
    if "group_by" in sqrl.prms:
        group_by_param: sr.MultiSelectParameter = sqrl.prms["group_by"]
        dimension_columns: list[str] = group_by_param.get_selected("columns")
        ctx["group_by_cols"] = ",".join(dimension_columns)
```

:::tip

If you wish to use some custom Python function in Jinja, it's possible to do so by setting a context variable to the function!

In `context.py`:

```python
def my_func(args):
    ...

ctx["my_function"] = my_func
```

In Jinja:

```jinja
{%- set my_func = ctx["my_function"] -%}

{{ my_func("some_args") }}
```

:::
