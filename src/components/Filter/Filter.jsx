import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };
  return (
    <label className={css.label} htmlFor="searchInput">
      Find contacts by name
      <input
        id="searchInput"
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
