import React from 'react';
import '../App.css';

interface MyButtonProps {
  set: any;
  item: string;
}

const MyButton: React.FC<MyButtonProps> = ({ set, item }) => {
  return (
    <button type="button" className="myButton" onClick={set} disabled={!item} data-tooltip="Добавить?" > ✚ </button>
  )
}

export default MyButton;
