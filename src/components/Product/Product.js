import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { productOperations, productSelectors } from '../../redux/products';
import { Card, Button, Form } from 'react-bootstrap';
import Modal from '../Modal';

export default function Product({ location: { state } }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    id: nanoid(),
    productId: state,
    description: '',
    date: new Date().toLocaleString(),
  });

  const onSubmit = useCallback(
    text => dispatch(productOperations.updateProduct(text)),
    [dispatch],
  );
  const onSubmitClick = e => {
    e.preventDefault();
    onSubmit(comment);
    setComment({
      description: '',
    });
  };

  const items = useSelector(productSelectors.getItems);
  const product = items.filter(el => el._id === state);
  if (product[0]) {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Name: {product[0].name}</Card.Header>
          <Card.Header>Count: {product[0].count}</Card.Header>
          <Card.Header>Weight {product[0].weight}</Card.Header>
          <Card.Img src={product[0].imageUrl}></Card.Img>
          <Card.Body>
            Comment:{' '}
            {product[0].comments.map(el => (
              <div key={el.id}>{el.description}</div>
            ))}
            <Form onSubmit={onSubmitClick}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  value={comment.description}
                  onChange={e =>
                    setComment(state => ({
                      ...state,
                      description: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Comment"
                />
                <Form.Text className="text-muted">Please comment</Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Comment
              </Button>
            </Form>
          </Card.Body>
          <Modal
            productId={comment.productId}
            name="Update"
            description="Update product"
          />
        </Card>
      </>
    );
  }
  return (
    <>
      <h1>Change Product</h1>
    </>
  );
}
