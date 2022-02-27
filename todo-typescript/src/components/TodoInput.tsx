import styled from 'styled-components';

const MyInput = styled.input`
  ::placeholder {
  color: red;
}
`;

interface TodoInputProps {
  setItem: Function;
  setList: Function;
  shown: string;
  item: string;
}

export const TodoInput: React.FC<TodoInputProps> = ({ setItem, setList, shown, item }) => {
  return (
    <MyInput placeholder="Введите задачу" id="todo_item"
      onChange={(e) => setItem(e.target.value)}
      onKeyUp={(e) => (e.which === 13) && item && setList()}
      value={item}
      disabled={shown === 'completed' || shown === 'deleted'}>
    </MyInput>
  )
}
