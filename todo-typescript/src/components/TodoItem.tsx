import '../App.css';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const MyButton = styled(Button)`
  border: 2px solid #f5e941;
  border-radius: 20%;
  height: 35px;
  width: 35px;
  padding-top: 2px;
  padding-bottom: 35px;
  padding-right: 5px;
  padding-left: 5px;
  background: green;
  color: white;
`;

const MyButton2 = styled(MyButton)`
  padding-right: 23px;
  padding-left: 10px;
  background: red;
`;

interface TodoItemProps {
  id: number,
  todo: string,
  deleteItem: Function;
  completeItem: Function;
  shown: string;
}


const TodoItem: React.FC<TodoItemProps> = ({ id, todo, deleteItem, completeItem, shown }) => {
  return (
    <section className='item'>
      <li className={shown}>{todo}</li>
      <MyButton2 variant="danger" size="sm" id={id} data-tooltip="Удалить?" onClick={() => deleteItem(id)}>✖</MyButton2>
      <MyButton variant="success" size="sm" id={id} data-tooltip={shown === "active" ? "Завершить?" : "Восстановить?"} onClick={() => completeItem(id)}>{shown === "active" ? "✔" : "⟲"}</MyButton>
    </section>
  )
}

export default TodoItem;

/*<MyButton2 variant="danger" size="sm" id={id} data-tooltip="Удалить?" onClick={() => deleteItem(id)}>✖</MyButton2>
      <MyButton variant="success" size="sm" id={id} data-tooltip={shown === "active" ? "Завершить?" : "Восстановить?"} onClick={() => completeItem(id)}>{shown === "active" ? "✔" : "⟲"}</MyButton>*/

