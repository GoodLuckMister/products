import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSelectors, productOperations } from '../../redux/products';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function Product({ location: { state } }) {
  const items = useSelector(productSelectors.getItems);
  const product = items.filter(el => el._id === state);
  const dispatch = useDispatch();
  const [prod, setProd] = useState({
    name: '',
    imageUrl: '',
    count: 0,
    weight: '',
  });
  const onSubmit = useCallback(
    text => dispatch(productOperations.updateProduct(text)),
    [dispatch],
  );

  const onSubmitClick = e => {
    e.preventDefault();

    if (items.some(valueInput => prod.name === valueInput.name)) {
      setProd({
        name: '',
      });
      return alert(`${prod.name} is already in products`);
    }
    if (!prod.imageUrl) {
      return alert(`${prod.imageUrl} is empty`);
    }
    onSubmit(prod);
    setProd({
      name: '',
      imageUrl: '',
      count: 0,
    });
  };

  const changeValue = e => {
    const { name, value } = e.target;

    setProd(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Form onSubmit={onSubmitClick}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">{product[0].name}</InputGroup.Text>
          <FormControl
            value={prod.name}
            onChange={changeValue}
            name="name"
            placeholder="name"
            aria-label="name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">
            {product[0].imageUrl}
          </InputGroup.Text>
          <FormControl
            value={prod.imageUrl}
            onChange={changeValue}
            name="imageUrl"
            placeholder="image url"
            aria-label="image "
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>{product[0].count}</InputGroup.Text>
          <FormControl
            type="number"
            value={prod.count}
            onChange={changeValue}
            name="count"
            aria-label="Amount (to the nearest dollar)"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            {product[0].weight}
          </InputGroup.Text>
          <FormControl
            value={prod.weight}
            onChange={changeValue}
            name="weight"
            placeholder="weight"
            aria-label="weight"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button type="submit">update</Button>
      </Form>
    </>
  );
}
