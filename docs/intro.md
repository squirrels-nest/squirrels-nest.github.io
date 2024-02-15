---
sidebar_position: 1
---

# Introduction

## Overview

Squirrels is a low-code REST API framework designed to simplify and automate data analytics. It eases the burden on data / analytics engineers and eliminates the need for API engineers to create data analytics APIs. With a primary focus on reusability and flexibility, Squirrels allows for query logic to be shared across multiple front-end applications. The framework makes it easy to create REST APIs that generate complex SQL queries using query parameters for selected parameter values, and delivering tabular results that can change behaviour based on selected values.

For those familiar with [dbt](https://www.getdbt.com/), Squirrels is essentially the dbt for real-time dynamic data analytics. In fact, the project structure and CLI are intentionally made similar to dbt such that engineers who know dbt can pick up Squirrels easily.

## Main Features

#### Dynamic Queries with SQL Jinja or Python

Squirrels utilizes Jinja as a templating language for rendering complex SQL queries. These templates, known as 'models', enable the dynamic generation of queries based on business needs. Additionally, Squirrels supports Python to generate dynamic queries, providing a more flexible tool of handling data transformations through sqlalchemy ORM or pandas dataframes (if preferred).

#### Model Dependencies

Similar to [dbt](https://www.getdbt.com/), the **ref** function is available to define model dependencies, which is useful in creating real-time data pipelines. Models can even join the results of queries coming from different databases!

#### Cascading Parameters

The framework supports dynamic cascading parameter widgets that adjust based on the selected values of other parameters. These parameters can be specified as hard-coded configurations, or fetched from database lookup tables. Models can use the selected parameter values to change behaviour.

#### API Access to Datasets

Applications can access "datasets" and their associated parameters via well-defined API endpoints. Each dataset can be configured with a target model, a set of applicable widget parameters, and access permissions. During development, a testing UI is available to conveniently test your APIs.

#### Context Variables

Squirrels allows for the creation of "context variables" in Python files which can then be used within your models. These context variables are useful to leverage your favourite Python IDE (for features like autofill suggestions) to more conveniently define variables based on selected parameter values.

#### In-memory Caching

After the first API call, the framework caches API responses for parameters and datasets in memory (if caching is enabled), enhancing the performance of subsequent calls.

#### Authentication

The framework supports defining custom user models and methods for authenticating a user given username and password. Both the parameter widgets and data model can change behaviour based on the authenticated user if needed.

#### Reusable Packages

Reuse functionality across different Squirrels projects through package installations.

## REST API Types

Every Squirrels project defines a set of related datasets under a single version contolled project. When running the API server for a Squirrels projects, the following API types become available.

- **Token API** - Retrieve a short-lived API token if the provided credentials are valid
- **Datasets Catalog API** - Provides a catalog of datasets available under the project (can vary with authentication)
- **Parameters API** - Provides information of the parameter widgets for a given dataset
- **Dataset API** - Provides the tabular result of a dataset given parameter selections

More details are available on the [REST API Types](./client/rest-api) page under "Client Usage".

## The Dataset Workflow

Although a dataset is only associated to one target model, the target model may depend on multiple upstream models. When calling the dataset API, the following happens behind the scenes:

1. Parameter selections are validated, and context variables are created.
2. Models are compiled from SQL templates / python functions in upstream order and concurrently if possible. Compilation results are based on parameter selections, context variables, and authenticated user. Note that the compiled models should form a DAG (directed acyclic graph).
3. The DAG is validated to contain no cycles (i.e., the DAG is truly acyclic). This is separate from the step above since validation is done in a non-concurrent manner.
4. Models are executed in downstream order and concurrently if possible. Some models, called "dbviews", are run against external databases, while other models, called "federates", run in a temporary in-memory database (choice of sqlite or duckdb) created in the API server. Federates can join results of dbviews or other federates via the **ref** function (dbviews cannot use **ref**).
5. Once the target model is complete, the results are loaded to JSON and provided as the REST API response.
