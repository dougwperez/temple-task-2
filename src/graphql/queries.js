/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTaskCounter = /* GraphQL */ `
  query GetTaskCounter($id: ID!) {
    getTaskCounter(id: $id) {
      id
      count
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTaskCounters = /* GraphQL */ `
  query ListTaskCounters(
    $filter: ModelTaskCounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskCounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        count
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const syncTaskCounters = /* GraphQL */ `
  query SyncTaskCounters(
    $filter: ModelTaskCounterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaskCounters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        count
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      isComplete
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        isComplete
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        isComplete
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
    }
  }
`;
