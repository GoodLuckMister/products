import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { productSelectors, productOperations } from '../../../redux/products';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function FormProduct({ handleClose }) {
  const { id } = useParams();
  const [valueInput, setValueInput] = useState({
    name: '',
    imageUrl: '',
    count: 0,
  });
  const dispatch = useDispatch();
  const items = useSelector(productSelectors.getItems);
  const onSubmit = useCallback(
    (id, text) => dispatch(productOperations.updateProduct(id, text)),
    [dispatch],
  );

  const onSubmitClick = e => {
    e.preventDefault();
    if (items.some(prod => prod.name === valueInput.name)) {
      setValueInput({
        name: '',
      });
      return alert(`${valueInput.name} is already in products`);
    }
    if (!valueInput.imageUrl) {
      return alert(`${valueInput.imageUrl} is empty`);
    }
    onSubmit(id, { ...valueInput });
    setValueInput({
      name: '',
      imageUrl: '',
      count: 0,
    });
    handleClose();
  };
  const changeValue = e => {
    const { name, value } = e.target;

    setValueInput(prev => ({ ...prev, [name]: value }));
  };
  return (
    <Form onSubmit={onSubmitClick}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <FormControl
          value={valueInput.name}
          onChange={changeValue}
          name="name"
          placeholder="name"
          aria-label="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2"> image http://</InputGroup.Text>
        <FormControl
          value={valueInput.imageUrl}
          onChange={changeValue}
          name="imageUrl"
          placeholder="image url"
          aria-label="image "
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Count </InputGroup.Text>
        <FormControl
          type="number"
          value={valueInput.count}
          onChange={changeValue}
          name="count"
          aria-label="Amount (to the nearest dollar)"
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
}
