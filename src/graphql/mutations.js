/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTaskCounter = /* GraphQL */ `
  mutation CreateTaskCounter(
    $input: CreateTaskCounterInput!
    $condition: ModelTaskCounterConditionInput
  ) {
    createTaskCounter(input: $input, condition: $condition) {
      id
      count
      userId
      createdAt
      updatedAt
    }
  }
`;
export const updateTaskCounter = /* GraphQL */ `
  mutation UpdateTaskCounter(
    $input: UpdateTaskCounterInput!
    $condition: ModelTaskCounterConditionInput
  ) {
    updateTaskCounter(input: $input, condition: $condition) {
      id
      count
      userId
      createdAt
      updatedAt
    }
  }
`;
export const deleteTaskCounter = /* GraphQL */ `
  mutation DeleteTaskCounter(
    $input: DeleteTaskCounterInput!
    $condition: ModelTaskCounterConditionInput
  ) {
    deleteTaskCounter(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      isComplete
      userId
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      isComplete
      userId
      createdAt
      updatedAt
    }
  }
`;
