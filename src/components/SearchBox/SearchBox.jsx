import React from "react";
import  { useDispatch, useSelector } from "react-redux";
import  { setFilter } from "../../redux/filters/slice";
import  { selectNameFilter } from "../../redux/filters/selectors";
import { TextField } from '@mui/material';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.containerSearch}>
      <TextField
        label="Search Contacts"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        fullWidth
        variant="outlined"
        className={styles.input}
        size="small"
      
      />
    </div>
  );
};

export default SearchBox;