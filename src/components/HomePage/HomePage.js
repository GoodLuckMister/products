import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { productOperations } from '../../redux/products';
import { Card, Row, Button } from 'react-bootstrap';

export default function Home({ items }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(productOperations.deleteProduct(id));
  return (
    <>
      <section>
        <Row xs={1} md={2} className="g-4">
          {items.map(el => (
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
                to={{
                  pathname: '/product',
                  state: el._id,
                }}
              >
                {' '}
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
