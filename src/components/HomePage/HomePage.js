import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { productSelectors } from '../../redux/products';
import CardList from '../CardList';

export default function Home() {
  const items = useSelector(productSelectors.changeFilterItems);

  const [data, setData] = useState(items);
  const handleChangeName = e => {
    const { value } = e.target;
    setData([...data].sort((a, b) => (a[value] > b[value] ? 1 : -1)));
  };
  useEffect(() => {
    setData(items);
  }, [setData, items]);

  return (
    <>
      <section>
        <select onChange={handleChangeName}>
          <option value="name">Name</option>
          <option value="count">Count</option>
        </select>
        <CardList array={data} />
      </section>
    </>
  );
}
