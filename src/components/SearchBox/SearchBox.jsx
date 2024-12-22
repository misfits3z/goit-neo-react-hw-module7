import { useDispatch } from 'react-redux';
import {  changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}

// export default function SearchBox ({value, onChange}){
//   return(
//   <div className={css.search}>
//     <label htmlFor="search">Find contacts by name</label>
//     <input 
//       type="text" 
//       value={value}
//       onChange={onChange}
//       placeholder="Search..."
//       />
//   </div>
//   )
// }