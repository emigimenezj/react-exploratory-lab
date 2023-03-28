import { FILTERS_BUTTONS } from '../consts';
import { FilterValues } from '../types';

interface Props {
  filterSelected: FilterValues
  onFilterChange: (filter: FilterValues) => void
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, {literal, href}]) => {
          const isSelected = key === filterSelected;
          const className = isSelected ? 'selected' : '';

          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault();
                  onFilterChange(key as FilterValues);
                }}
              >
                {literal}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}