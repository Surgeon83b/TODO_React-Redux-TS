import React, { useState } from 'react';
import { TodoList } from '../components/TodoList';
import MyButton from '../components/MyButton';
import '../App.css';
import { MySelect } from '../components/MySelect';
import { TodoInput } from '../components/TodoInput';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, CHANGE_LIST, DELETE_TODO, COMPLETE_TODO } from '../utils/constants';
import { State } from '../types/todo';
import { MyCanvas } from '../containers/MyCanvas';
import { draw } from "../utils/canvasdraw";


export const Todo: React.FC = () => {
  const [item, setItem] = useState("");

  const dispatch = useDispatch();
  const listOfTodo = useSelector((state: State) => state.listOfTodos);
  const shown = useSelector((state: State) => state.shown);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch({ type: CHANGE_LIST, shown: event.target.value })
  }

  const delItem = (id: number) => {
    dispatch({ type: DELETE_TODO, id: id })
  }

  const complItem = (id: number) => {
    dispatch({ type: COMPLETE_TODO, id: id })
  }

  const setList = () => {
    dispatch({ type: ADD_TODO, item: item });
    setItem("");
  }

  return (
    <>
      <section className='main'>
        <TodoInput setItem={setItem} setList={setList} shown={shown} item={item} />
        <MyButton set={setList} item={item} />
        <MySelect shown={shown} handleChange={handleChange} />
      </section>
      <TodoList list={listOfTodo} deleteItem={delItem} completeItem={complItem} shown={shown} />
      <MyCanvas draw={draw} anim={shown}/>
    </>
  )
}
