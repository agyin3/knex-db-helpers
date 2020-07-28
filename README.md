# knex-db-helpers

Knex DB Helper is an npm package that makes accessing your SQL database a breeze. Knex DB Helpers comes with 5 pre-built methods with the ability to easily build more complex queries as needed

## Installation

**With npm**
```
npm i knex-db-helpers
```

**With yarn**
```
yarn add knex-db-helpers
```

## Uasage

```js
const connection = require('../directory') // This should your file that establishes your database connection
const KnexHelpers = require('knex-db-helpers')
const db = new KnexHelpers(connection, 'tableName')
```

## Available Methods

* **All methods return a Promise** 

### `find(selectConfig='*')`

Returns all records in the database

**Paramaters**

| Name         | Type  | Required | Default | Description                                                 |
| ------------ | ----- | -------- | ------- | ----------------------------------------------------------- |
| selectConfig | array |    No    |    *    | Array of strings containing which columns you want returned |

**Example**

```js
// Without selectConfig passed in
db.find()

// With selectConfig passed in
const select = ['users.id', 'users.username', 'users.email', 'users.full_name as name']
db.find(select)
```

### `findBy(filter, selectConfig='*')`

Returns all records that match provided filter

**Parameters**

| Name         | Type   | Required | Default | Description                                                 |
| ------------ | ------ | -------- | ------- | ----------------------------------------------------------- |
| filter       | object | Yes      | n/a     | Key/value of what you would like to match                   |
| selectConfig | array  | No       | *       | Array of strings containing which columns you want returned |

**Example**

```js
db.findBy({ city: req.body.city })
```

### `findById(id, selectConfig='*', whereConfig='id')`

Returns the first instance that matches provided id

**Parameters**

| Name         | Type           | Required | Default | Description                                                 |
| ------------ | -------------- | -------- | ------- | ----------------------------------------------------------- |
| id           | string/integer | Yes      | n/a     | ID you would like to match                                  |
| selectConfig | array          | No       | *       | Array of strings containing which columns you want returned |
| whereConfig  | string         | No       | id      | Table column you would like to look for a match             |

**Example**

```js
// Without optional parameters(selectConfig, whereConfig)

db.findById(req.params.id)

// With optional parameters
const id = req.params.id
const select = ['users.id', 'users.username', 'users.email', 'users.full_name as name']
const where = 'users.id'

db.findById(id, select, where).join("locations", "locations.id", "users.location_id")
```

### `add(info)`

Adds a new instance to the database and returns the created instance upon success

**Parameters**

| Name | Type   | Required | Default | Description                                                 |
| ---- | ------ | -------- | ------- | ----------------------------------------------------------- |
| info | object | Yes      | n/a     | Data to be inserted into the database                       |

**Example**

```js
const { username, password } = req.body
db.add({ username, password })
```

### `update(changes, filter)`

Updates an instance in the database and returns updated data upon success

**Parameters**

| Name    | Type   | Required | Default | Description                                                 |
| ------- | ------ | -------- | ------- | ----------------------------------------------------------- |
| changes | object | Yes      | n/a     | Changes to be made to the instance                          |
| filter  | object | Yes      | n/a     | Key/value of what instance you would like to change         |

**Examples**

```js
db.update(req.body, { id: 5 })
```

### `remove(filter)`

Deletes an instance from the database and returns the number of rows removed

**Parameters**

| Name         | Type   | Required | Default | Description                                                 |
| ------------ | ------ | -------- | ------- | ----------------------------------------------------------- |
| filter       | object | Yes      | n/a     | Key/value of matching instances you want to delete          |

**Example**

```js
db.remove({ id: 9 })
```

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).











