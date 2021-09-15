import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productActions, productSelectors } from '../../redux/products';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(productSelectors.getFilter);
  const onChange = e => {
    dispatch(productActions.filterChanged(e.target.value));
  };
  return (
    <>
      <FormControl
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        type="text"
        placeholder="Find your product"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
