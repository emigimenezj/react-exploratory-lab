import { FilterValues } from '../types';
import { Filter } from './Filters';

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValues
  handleFilterChange: (filter: FilterValues) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filter
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  );
}