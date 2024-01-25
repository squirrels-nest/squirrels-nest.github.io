# sqrl compile

The `sqrl compile` command is used to facilitate the debugging process for SQL templates.

All the details on command line arguments can be found using `sqrl compile -h`. The result is as follows:

```bash
usage: sqrl compile [-h] [-d DATASET] [-a] [-t TEST_SET] [-s SELECT] [-r]

optional arguments:
  -h, --help            Show this help message and exit
  -d DATASET, --dataset DATASET
                        Select dataset to use for dataset traits. If not specified, all models for all datasets are compiled
  -a, --all-test-sets   Compile models for all selection test sets
  -t TEST_SET, --test-set TEST_SET
                        The selection test set to use. Default selections are used if not specified. Ignored if using --all-test-sets
  -s SELECT, --select SELECT
                        Select single model to compile. If not specified, all models for the dataset are compiled. Also, ignored if --dataset is not specified
  -r, --runquery        Runs all target models, and produce the results as csv files
```

All compiled SQL queries (and csv's if `--runquery` is used) are written to some `target/compile/<test_set>/<dataset>/` folder (after deleting all pre-existing files in that folder). The number of folders created depends on the command options specified:
- If `--dataset` is **not** specified, then a `<dataset>/` folder is created for every dataset. 
- If `--test-set` is **not** specified, then the `<test_set>/` folder is simply `default/`. 
- If `--all-test-sets` is specified, then a `<test_set>/` folder is created for all test sets defined in `squirrels.yml` (in addition to `default/`).

Also, if `--select` is specified (in addition to `--dataset`), the compiled query of the selected model is printed in terminal. The `<dataset>/` folder will only contain the compiled query of the selected model as well (without the upstream models), unless `--runquery` is specified (since upstream model results must be created first in order to create the selected model result).

For more information on using selection test sets, see [Squirrels Project File](../topics/project-file).
