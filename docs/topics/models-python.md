---
sidebar_position: 7
---

# Python Models

Similar to [SQL models], all Python model files must be in the `models/dbviews/` or `models/federates/` folder, and use the **.py** extension. There is actually no difference in functionality between Python models in either folder. The folder you choose for each Python model is simply personal preference based on its purpose.

You can use the [sqrl init] command to create example Python models:

```bash
sqrl init --core --dbview py --federate py
```

## File Contents

All Python model files must contain a **main** function with a **sqrl** argument of type [ModelArgs] and return a pandas DataFrame. This may look something like:

```python
def main(sqrl: sr.ModelArgs) -> pd.DataFrame:
    ...
    return df
```

Python model files can also contain a **dependencies** function with a **sqrl** argument of type [ModelDepArgs] and return a list of model names that the Python model depends on. This may look something like:

```python
def dependencies(sqrl: sr.ModelDepsArgs) -> Iterable[str]:
    ...
    return ["my_dependent_model"]
```

Similar to how SQL models have to compile first before running, you can think of the **dependencies** function as compiling the Python model and the **main** function as running the Python model. In a DAG of models, the **dependencies** function runs in upstream order, and the **main** function runs in downstream order.

## Input Arguments

Both **sqrl** arguments of type [ModelDepArgs] and [ModelArgs] have access to the same member variables as the **sqrl** argument in the [context.py] file (**sqrl.prms**, **sqrl.user**, **sqrl.traits**, etc.).

Both also have access to the **sqrl.ctx** member variable, which lets you access dictionary values defined in [context.py].

The **sqrl** argument of [ModelArgs] also include a few additional methods and member variables not included in [ModelDepArgs]. Two common ones include the **sqrl.connections** dictionary and the **sqrl.ref** method.

- The **connections** dictionary contains database connection names as keys and SQLAlchemy engines as values. More details on defining database connections can be found in [Database Connections](./database) page.
- The **ref** method takes a single string argument for model name and returns the pandas DataFrame for that model. The model name must be defined in the **dependencies** function.

More details can be found in the Python API docs for [ModelDepArgs] and [ModelArgs].

## Sharing Code Across Models

Just like importing/including macros in SQL models, you can import Python modules stored anywhere in your project or environment.

Within a project, suppose you have the Python function below defined in `lib/mymodule.py` relative to the project root:

```python
def myfunction(...):
    ...
    return ...
```

Then you can import the function at the top of any Python file:

```python
from lib import mymodule as m
...
myvar = m.myfunction(...)
```

It's also easy to share Python code across Squirrels projects. If you have a Python module in a git project downloaded with `dbt deps`, you can import it from "sqrl_packages". Any Python package installed into your Python environment can be imported as well.


[SQL models]: ./models-sql
[squirrels.yml]: ./project-file
[setting]: ./settings
[context.py]: ./context
[ModelDepsArgs]: ../python/arguments/ModelDepsArgs
[ModelArgs]: ../python/arguments/ModelArgs
