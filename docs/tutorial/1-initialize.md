---
sidebar_position: 1
---

# 1. Create a Sample Project

Python 3.9 or higher is required.

## Installing Squirrels

First, create and activate a virtual environment for your Squirrels project (see [python virtual environments] for reference).

To install the Squirrels library in your virtual environment, run:

```bash
pip install squirrels
```

To confirm it installed properly, run:

```bash
squirrels --version
```

Or simply run `sqrl --version` for short:

## Initialize a Project

You can initialize the project files using:

```bash
sqrl init
```

Prompts will appear for the various files you wish to include in your project. Answer the prompts as follows:

:::tip

You can also skip the prompts below by running this instead:

```bash
sqrl init --core --sample-db expenses
```

:::

```config
[?] Include all core project files? (Y/n): y

[?] How would you like to configure the database connections?: yml
 > yml
   py

[?] How would you like to configure the parameters?: py (recommended)
 > py (recommended)
   yml

[?] What's the file format for the database view model?: sql
 > sql
   py

[?] What's the file format for the federated model?: sql
 > sql
   py

[?] Do you want to add the 'auth.py' file? (y/N): n

[?] What sample sqlite database do you wish to use (if any)?: expenses
   none
 > expenses
   weather
```

Once the command is executed, a set of folders/files are created for a sample project. Go ahead and take a quick glance at the new files (no need to fully understand them now). Then, run the API server using the command:

```bash
sqrl run
```

In a web browser, go to `http://localhost:4465/` or `http://127.0.0.1:4465/`. This leads you to the Squirrels Testing UI, a convenient interface for testing the REST APIs. Click the "Apply" button to display the dataset for the default parameter selections (feel free to take some time now to generate various datasets using different parameter selections).

To see the API endpoints that provides the information on the parameters and tabular results on the "Sample Dataset", you can use the following URLs to access the JSON results for the default parameter selections:

1. Parameters API: `http://localhost:4465/squirrels-v0/sample/v1/dataset/dataset-example/parameters`
2. Dataset API: `http://localhost:4465/squirrels-v0/sample/v1/dataset/dataset-example`

After you're done with the API server, you can terminate it in the terminal with "Ctrl+C".

## Add The Weather Database

Now, we will use the init command again to add another sqlite database for the rest of the tutorial. Run:

```bash
sqrl init --sample-db weather
```

Notice that a `weather.db` file is now added to the existing `database` folder.


[python virtual environments]: https://realpython.com/python-virtual-environments-a-primer/
