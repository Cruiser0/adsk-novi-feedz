import { TodoProps, ActionType } from './Todo';

export type State = {
  readonly todos: TodoProps[];
};

interface TodoAction {
  todo: TodoProps;
  type: ActionType;
}
interface SearchAction {
  type: string;
  query: string;
}

export type Action = TodoAction | SearchAction;

const initialState: State = {
  todos: [
    { title: 'Eat Lunch', completed: false, important: false },
    { title: 'Teach TypeScript', completed: false, important: true },
    { title: 'Perform Review', completed: false, important: true },
    { title: 'Show off Elm', completed: false, important: false }
  ]
};

const AppReducer = (state: State = initialState, action: Action) => {
  console.group('Action Received');
  console.log(`State:`, state);
  console.log(`Action:`, action);
  switch (action.type) {
    case ActionType.Click:
      console.log('WOOOO! I was clicked');
      break;
    case ActionType.ToggleCompletion:
      let todoAction = <TodoAction> action;
      todoAction.todo.completed = !todoAction.todo.completed;
      console.log(todoAction.todo);
      console.log(state.todos);
      break;
    case ActionType.ToggleImportance:
      break;
    default:
      console.warn('I was not handled 😢');
  }
  console.groupEnd();
  return state;
};
export default AppReducer;
