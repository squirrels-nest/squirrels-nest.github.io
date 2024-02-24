---
sidebar_position: 5
---

# 5. Test the REST APIs

To activate the API server, simply run:

```bash
sqrl run
```

Then, in a web browser, go to `http://localhost:4465/` to interact with the dataset APIs you've just created using the Squirrels Testing UI!

Remember to shut down the API server by pressing "Ctrl+C" before proceeding.

## Test the Rendered SQL Queries

In practice, you may wish to review what the rendered SQL queries look like (for some set of parameter selections) before actually running the queries.

To do so for the `weather_by_time` dataset (using the default parameter selections), run:

```bash
sqrl compile --dataset weather_by_time
```

This creates the folder path `target/compile/default/weather_by_time` with the compiled SQL queries for all the relevant SQL models (without actually running them).

:::tip

You can also use the short form `-d` instead of `--dataset`. If you omit this option, all datasets in the project will be compiled.

:::

If you only care about compiling one model, you can run:

```bash
sqrl compile --dataset weather_by_time --select weather_by_time
```

In addition to writing the file in the `target` folder, this will print out the compiled SQL query as well.

If `--dataset` is not specified, then the `--select` option is ignored. This is because the **traits** are undefined without specifying the dataset.

:::tip

You can also use the short form `-s` instead of `--select`. You can also run the sql query with the `--runquery` or `-r` option. When used in conjunction with `-s` or `--select`, this will compile and run all the upstream models as well. You can find the results as csv files in the `target` folder.

:::

## Using Selection Test Sets

You can also test on non-default parameter selections. Suppose you want to group by month instead of grouping by year (the default parameter selection).

In the `squirrels.yml` file, replace the **selection_test_sets** section with:

```yaml
selection_test_sets:
  - name: group_by_month
    parameters:
      group_by_dim: '2'
```

The '2' is the ID for "Month" option defined in `parameters.py`. Now you can use the `--test-set` or `-t` option on the **compile** command to specify the test set to compile with:

```bash
sqrl compile --dataset weather_by_time --test-set group_by_month
```

This creates new files in the `target/compile/`**`group_by_month`**`/weather_by_time` folder (not the "target/compile/default/weather_by_time" folder we saw before).

See `sqrl compile --help` or the [compile command](../cli/compile) page for more details. 
