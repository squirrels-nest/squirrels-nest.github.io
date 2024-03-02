---
sidebar_position: 2
---

# Best Practices

The API consumers can often make assumptions on how Squirrels APIs may change across versions (see [Versioning Best Practices](../tips/versioning) for details). Likewise, the API builders can often make certain assumptions on how API consumers would interact with the API results. The following are some of these assumptions.

### Referencing a Dataset Column

Whenever a column of the dataset result is referenced, it should be referenced by name rather than by position / index. Thus, when a new column is added to the dataset before an existing column, the reference to that existing column would not break.

### Loading Results to a Fixed Schema

Sometimes, there could be situations where the columns coming from the dataset result API are loaded into a SQL database with a fixed schema. However, the dataset result may change the columns it has based on the parameter selections provided. To maintain a robust load process, follow these rules:

- If the column exists in the SQL database schema but not the API result, load nulls to that column in the SQL database table
- If the column does not exist in the SQL database schema but exists in the API result, ignore that column in the API result
- Suppose that the "group by" dimension of a dataset changes based on a parameter. Since the dataset result API response provides details on which columns are dimensions, you can use this information to dynamically change which is your i-th dimension (first, second, third, etc.), and load those columns to generic column names in the SQL database like "dimension1" instead matching the actual column name of the dimension.
