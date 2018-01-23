import * as React from 'react';
import { Todo, TodoProps, ActionType } from './Todo';
import { Action } from './AppReducer';

interface Props {
  name: string;
  todos: TodoProps[];
  dispatch(action: Action): void;
}

interface State {
  search: string;
}

const hash = (val: string): number => {
  return val.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

export default class Todos extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          {this.props.todos.map((todo: TodoProps, idx: number) => (
            <Todo
              key={hash(todo.title)}
              todo={todo}
              clicked={ (t: TodoProps) => {
                this.props.dispatch({
                  todo: t,
                  type: ActionType.Click
                } as Action);
              } }
              toggleProp={ (t: TodoProps, type: ActionType) => {
                this.props.dispatch({
                  todo: t,
                  type
                } as Action);
              } }
            />
          ))}
        </ul>
      </div>
    );
  }
}
