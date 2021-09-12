import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { productOperations, productSelectors } from '../../redux/products';
import { Card, Row, Button } from 'react-bootstrap';
import s from './home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(productOperations.deleteProduct(id));
  const items = useSelector(productSelectors.getItems);
  const [data, setData] = useState([...items]);

  const handleChangeName = e => {
    const { value } = e.target;
    if (value === 'Name') {
      setData([...data.sort((a, b) => (a.name > b.name ? 1 : -1))]);
    }
    if (value === 'Count') {
      setData([...data.sort((a, b) => (a.count > b.count ? 1 : -1))]);
    }
  };

  return (
    <>
      <section>
        <select onChange={handleChangeName}>
          <option value="Name">Name</option>
          <option value="Count">Count</option>
        </select>

        <Row xs={1} md={2} className="g-4">
          {data.map(el => (
            <Card style={{ width: '18rem' }} key={el._id}>
              <Card.Img variant="top" src={el.imageUrl} />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                  width:{el.size.width}
                  height: {el.size.height}
                </Card.Text>
                <Card.Text>weight:{el.weight}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">count:{el.count}</small>
              </Card.Footer>
              <NavLink
                className={s.nav__link}
                to={{
                  pathname: '/product',
                  state: el._id,
                }}
              >
                update
              </NavLink>
              <Button
                variant="danger"
                type="button"
                onClick={() => onDeleteContact(el._id)}
              >
                delete{' '}
              </Button>
            </Card>
          ))}
        </Row>
      </section>
    </>
  );
}
