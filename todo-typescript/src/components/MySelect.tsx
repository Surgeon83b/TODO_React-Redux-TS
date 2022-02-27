import React from 'react';

interface MySelectProps {
  shown: string;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const MySelect: React.FC<MySelectProps> = ({ shown, handleChange }) => {
  return (
    <select className="todoOptions" value={shown} onChange={handleChange}>
      <option key="1" value="active">активные</option>
      <option key="2" value="completed">завершённые</option>
      <option key="3" value="deleted">удалённые</option>
    </select>
  )
}
