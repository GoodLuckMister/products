import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Row, Card, Button } from 'react-bootstrap';
import { productOperations } from '../../redux/products';
import s from './card.module.css';

export default function CardList({ array }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(productOperations.deleteProduct(id));

  return (
    <Row xs={1} md={2} className="g-4">
      {array.length > 0
        ? array.map(el => (
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
                  pathname: `/product/${el._id}`,
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
          ))
        : null}
    </Row>
  );
}
