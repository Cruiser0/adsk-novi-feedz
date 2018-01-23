import * as React from 'react';

export interface TodoProps {
  title: string;
  completed: boolean;
  important: boolean;
}

export enum ActionType {
  Click,
  ToggleCompletion,
  ToggleImportance,
}

interface Props {
  todo: TodoProps;
  clicked(todo: TodoProps): void;
  toggleProp(todo: TodoProps, type: ActionType): void;
}

export class Todo extends React.PureComponent<Props> {
  // clickTarget = null;

  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.toggleImportance = this.toggleImportance.bind(this);
  }

  handleClick(e: React.MouseEvent<HTMLLIElement>) {
    this.props.clicked(this.props.todo);
  }

  toggleCompletion() {
    this.props.toggleProp(this.props.todo, ActionType.ToggleCompletion);
  }

  toggleImportance() {
    this.props.toggleProp(this.props.todo, ActionType.ToggleImportance);
  }

  render() {
    const { todo } = this.props;
    return (
      <span>
        <li onClick={this.handleClick}>
          {todo.title}
          <label>
            <input type="checkbox" id="completed" checked={todo.completed} onChange={this.toggleCompletion} />
            Done
          </label>
        </li>
      </span>
    );
  }
}
