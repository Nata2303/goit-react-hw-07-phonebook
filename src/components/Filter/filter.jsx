import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import style from './filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value.trim()));
  };

  return (
    <label className={style.filter}>
      Find contacts by name
      <input
        type="text"
        id="filter"
        value={filter || ''}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
