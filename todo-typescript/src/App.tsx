import './App.css';
import { Todo } from './containers/Todo';

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>{'Мой список задач'}</h2>
      <Todo />
    </div>
  )
}

export default App;
