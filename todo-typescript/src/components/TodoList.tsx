import TodoItem from './TodoItem';
import '../styles/TodoList.css';

interface TodoListProps {
  deleteItem: Function;
  completeItem: Function;
  list: string[];
  shown: string;
}

export const TodoList: React.FC<TodoListProps> = ({ list, deleteItem, completeItem, shown }) => {
  return (
    <ol>
      {list.map((item, index) => <TodoItem key={index} id={index} todo={item} deleteItem={deleteItem} completeItem={completeItem} shown={shown} />)}
    </ol>
  )
}
