import { useState } from 'react';
import { Footer } from './components/Footer';

import { Todos } from './components/Todos';
import { TODO_FILTERS } from './consts';

import { type TodoId, type Todo as TodoType, FilterValues } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Aprender TS',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender Rust',
    completed: false
  },
  {
    id: '3',
    title: 'Aprender Blockchain',
    completed: false
  }
];

function App(): JSX.Element {

  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValues>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = (
    { id, completed } : Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleFilterChange = (filter: FilterValues): void => {
    setFilterSelected(filter);
  }

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo = {handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {null}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App
