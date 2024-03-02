---
sidebar_position: 1
---

# REST API Types

When interacting the APIs for a single Squirrels project as a client, a sample workflow may look like this:

1. Login with a username and password to retrieve an authorization token for subsequent API calls. This would use the **login API**.
2. Retrieve all datasets you have access to for that project. This would use the **datasets catalog API**.
3. Pick a dataset and retrieve its parameters. This would use the **parameters API**.
4. Gather parameter selections, and use them to retrieve the dataset result. This would use the **dataset result API**.

Depending on the use case, not all API types have to be used. For instance, the datasets may all be public, so using the **login API** would not be needed. Or your application may use only one of the datasets, assuming that it always exists, so it may not use the **datasets catalog API**.

Further details of each API type are described in the sections below. All paths are prefixed with **/squirrels-v0**, and the `v0` here means "use the API interface corresponding to major version 0 of the squirrels library". All APIs return a JSON response, and when the status code is not 200, the response is a JSON object with only the field **detail**.

For example purposes, suppose we have a Squirrels project named `my_project`, its major version is 1, and it contains a dataset named `my_dataset`.

:::note

In the future, we plan to have a **Projects Catalog API** associated to a cloud hosting platform to list all Squirrels projects (and versions) available under one domain. Currently, an example of the response for this API is available under the **/squirrels-v0** path when running a Squirrels project, which would always show one project name and one associated version. This is only an example and we do not guarantee this path to be available in the future, thus this API type is not described further on this page.

:::

## Project Level APIs

There is a single API path for the login API and datasets catalog API per Squirrels project (and major version).

### Login API

- Request type: **POST**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/token**
- Path Example: **/squirrels-v0/my-project/v1/token**

This API endpoint lets you retrieve an access token by authenticating with credentials. The "username" and "password" fields must be provided as form data to the request body.

If the username and password are correct, a 200 status code is returned, and the response is a JSON object with the following fields:
- **access_token**: An encoded JSON web token to use subsequent API requests.
- **token_type**: Currently only outputs "bearer" for Bearer token.
- **username**: The username authenticated with from the form data.
- **expiry_time**: The expiry time of the access token in `yyyy-MM-dd'T'hh:mm:ss.SSSSSS'+00:00'` format. The access token usually expires 30 minutes after creation unless specified otherwise in the Squirrels project [settings] for **auth.token.expire_minutes**.

This is an example of a JSON response with 200 status code:

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpc19pbnRlcm5hbCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoib3JnMSIsImV4cCI6MTcwODMwOTIzN30.z3XF7Vp48mITwZECxxjd1JLOCKIURw7CFvWVs7-_vPE",
    "token_type": "bearer",
    "username": "johndoe",
    "expiry_time": "2024-02-19T02:20:37.531776+00:00"
}
```

To use the access token for the other API endpoints, simply provide the request header:

`"Authorization": "Bearer <access_token>"`

If the username or password provided to the Login API are invalid, a 401 status code is returned with the following JSON response.

```json
{
    "detail": "Incorrect username or password"
}
```

### Datasets Catalog API

- Request type: **GET**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/datasets**
- Path Example: **/squirrels-v0/my-project/v1/datasets**

This API endpoint retrieves the list of datasets that the user has access to. And only public datasets are provided if the user is not authenticated.

This returns a JSON object with a "datasets" field whose value is a list of JSON objects with the following fields:

- **name**: The name of the dataset (usually in snake case).
- **label**: The human-friendly display name for the dataset.
- **parameters_path**: The API path for the dataset's parameters API.
- **result_path**: The API path for the dataset's result API.

Here is a sample JSON response:

```json
{
    "datasets": [
        {
            "name": "my_dataset",
            "label": "Dataset Example",
            "parameters_path": "/squirrels-v0/my-project/v1/dataset/my-dataset/parameters",
            "result_path": "/squirrels-v0/my-project/v1/dataset/my-dataset"
        }
    ]
}
```

## Dataset Level APIs

Within a Squirrels project, each dataset has a different API path for the parameters API and dataset result API. Both API types can either be a **GET** request that takes parameter selections through query parameters, or a **POST** request that takes parameters selections as a JSON in the request body.

The input format for the parameter selections depend on the parameter type. More details on identifying the parameter type for a parameter will be discussed soon in the "Parameters API" section. Below are the available parameter types and their input formats for parameter selections. Note that only string inputs are accepts for **GET** requests, while accepted inputs for **POST** requests include any valid JSON.

- **single_select**: A string for the id of the selected option (ex. `id0`).
- **multi_select**: Either a comma delimited string of the selected options (ex. `id0,id1,id2`), a JSON list of strings (ex. `["id0","id1","id2"]`), or a string representation of the JSON list with escaped quotes.
- **date**: A string with format "yyyy-MM-dd" (ex. `2024-01-01`).
- **date_range**: Two dates with format "yyyy-MM-dd" as a comma joined string (ex. `2024-01-01,2024-02-01`), a JSON list of strings (ex. `["2024-01-01","2024-02-01"]`), or string representation of JSON list with escaped quotes.
- **number**: A number or string representing a valid decimal number (ex. `3` or `3.0`).
- **number_range**: Two decimal numbers as a comma joined string (ex. `1,10`), a JSON list of strings or numbers (ex. `["1","10"]` or `[1,10]`), or string representation of the JSON list.

Suppose we want to specify selected values for parameters named "my_single_select", "my_multi_select", and "my_date" with selected values `id0`, `id00,id02`, and `2024-01-01` respectively. The following are few examples of valid inputs:

Using query parameters for **GET** request:
- `?my_single_select=id0&my_multi_select=id00,id02&my_date=2024-01-01`
- `?my-single-select=id0&my-multi-select=id00,id02&my-date=2024-01-01`
- `?my_single_select=id0&my_multi_select=["id00","id02"]&my_date=2024-01-01`
- `?my_single_select=id0&my_multi_select=%5B%22id00%22%2C%22id02%22%5D&my_date=2024-01-01` (uses URL encoding)

Using JSON request body for **POST** request:
- `{"my_single_select": "id0", "my_multi_select": "id00,id02", "my_date": "2024-01-01"}`
- `{"my_single_select": "id0", "my_multi_select": ["id00", "id02"], "my_date": "2024-01-01"}`
- `{"my_single_select": "id0", "my_multi_select": "[\"id00\",\"id02\"]", "my_date": "2024-01-01"}`

### Parameters API

- Request type: **GET** or **POST**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/dataset/\{dataset_name\}/parameters**
- Path Example: **/squirrels-v0/my-project/v1/dataset/my-dataset/parameters**

This API endpoint retrieves the widget parameters for a dataset. This endpoint can also be used to get updates for the children parameters when selections change for parent parameters (for instance, selecting a value for a "continent" parameter would change the available options for "country"). This is done by passing the value as a query parameter for **GET** requests or part of the request body for **POST** requests. Passing more than one parameter selection to this request is invalid.

The response is a JSON object with a "parameters" field whose value is a list of parameters as JSON objects. The fields to a parameter JSON object varies based on the parameter type. The following are all possible fields, the parameter type (or **widget_type**) they are applicable to in brackets, and the field descriptions.

- **widget_type** (all parameter types): The parameter type.
- **name** (all parameter types): The name of the parameter. Use this as the key when providing the API request parameters.
- **label** (all parameter types): The human-friendly display name for the parameter.
- **options** (`single_select` and `multi_select`): A list of select options as JSON objects containing **id** and **label** fields.
- **trigger_refresh** (`single_select` and `multi_select`): A boolean that's set to true for parent parameters that require a new parameters API call when the selection changes.
- **selected_id** (`single_select`): The id of the selected option.
- **selected_ids** (`multi_select`): A list of ids of the selected options.
- **show_select_all** (`multi_select`): A boolean for whether there should be a way to select all options with one click.
- **is_dropdown** (`multi_select`): A boolean for whether the parameter should appear as a dropdown with individual select boxes, or a scrollable select box with click and drag selections.
- **order_matters** (`multi_select`): A boolean for whether the ordering of the input selections would affect the result of the dataset.
- **selected_date** (`date`): A string in "yyyy-MM-dd" format for the currently selected date.
- **selected_start_date** (`date_range`): A string in "yyyy-MM-dd" format for the currently selected start date.
- **selected_end_date** (`date_range`): A string in "yyyy-MM-dd" format for the currently selected end date.
- **min_value** (`number` and `number_range`): A decimal string for the lower bound of the selectable number.
- **max_value** (`number` and `number_range`): A decimal string for the upper bound of the selectable number.
- **increment** (`number` and `number_range`): A decimal string for the selectable increments between the lower bound and upper bound.
- **selected_value** (`number`): A decimal string for the currently selected number.
- **selected_lower_value** (`number_range`): A decimal string for the currently selected lower number.
- **selected_upper_value** (`number_range`): A decimal string for the currently selected upper number.

The following is an example of a simple response with just one single select parameter.

```json
{
    "parameters": [
        {
            "widget_type": "single_select",
            "name": "group_by",
            "label": "Group By",
            "trigger_refresh": false,
            "options": [
                {
                    "id": "0",
                    "label": "Year"
                },
                {
                    "id": "1",
                    "label": "Month"
                }
            ],
            "selected_id": "0"
        }
    ]
}
```

### Dataset Result API

- Request type: **GET** or **POST**
- Path: **/squirrels-v0/\{project_name\}/v\{major_version\}/dataset/\{dataset_name\}**
- Path Example: **/squirrels-v0/my-project/v1/dataset/my-dataset**

This API endpoint retrieves the tabular result of the dataset given parameter selections as query parameters (for **GET** requests) or JSON request body (for **POST** requests).

The response is a JSON object with fields **schema** and **data**. The response format is partially inspired by the JSON output for pandas dataframes when running `df.to_json(orient="table")` in Python. Below are more details of the fields (including nested ones):

- **schema**: A JSON object with the following fields:
    - **fields**: A list of JSON objects containing the **name** and **type** for each of the columns in the result. The possible values of **type** are "string", "number", "integer", "boolean", and "datetime".
    - **dimensions**: A list of column names (as strings) that serve as the dimensions for the dataset
- **data**: A list of JSON objects where each object is a row of the tabular results. The keys and values of the object are column names (described in **fields**), and values of the row.

The following is an example of the JSON response:

```json
{
    "schema": {
        "fields": [
            {
                "name": "year",
                "type": "string"
            },
            {
                "name": "temperature_C",
                "type": "number"
            }
        ],
        "dimensions": ["year"]
    },
    "data": [
        {
            "year": "2012",
            "temperature_C": 15.3
        },
        {
            "year": "2013",
            "temperature_C": 16.1
        },
        {
            "year": "2014",
            "temperature_C": 17.0
        },
        {
            "year": "2015",
            "temperature_C": 17.4
        }
    ]
}
```


[settings]: ../topics/settings
