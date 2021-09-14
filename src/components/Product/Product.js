import { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router';
import { productOperations, productSelectors } from '../../redux/products';
import { Card, Button, Form } from 'react-bootstrap';
import Modal from './ModalForUpdate';

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    description: '',
  });
  const onSubmit = useCallback(
    text => dispatch(productOperations.updateProductComment(text)),
    [dispatch],
  );
  const getProductOne = useCallback(
    id => dispatch(productOperations.getProductById(id)),
    [dispatch],
  );

  useEffect(() => {
    getProductOne(id);
  }, [getProductOne, id]);

  const onSubmitClick = e => {
    e.preventDefault();
    onSubmit({
      ...comment,
      id: nanoid(),
      productId: id,
      date: new Date().toLocaleString(),
    });
    setComment({
      description: '',
    });
  };

  const [item] = useSelector(productSelectors.getProduct);
  useEffect(() => {
    getProductOne(id);
  }, [getProductOne, id]);

  return (
    <>
      {item && (
        <Card style={{ width: '18rem' }}>
          <Card.Header>Name: {item.name}</Card.Header>
          <Card.Header>Count: {item.count}</Card.Header>
          <Card.Header>Weight {item.weight}</Card.Header>
          <Card.Img src={item.imageUrl}></Card.Img>
          <Card.Body>
            Comment:{' '}
            {item.comments.map(el => (
              <div key={el.id}>{el.description}</div>
            ))}
            <Form onSubmit={onSubmitClick}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  value={comment.description}
                  onChange={e =>
                    setComment({
                      description: e.target.value,
                    })
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
          <Modal name="Update" description="Update product" />
        </Card>
      )}
    </>
  );
}
