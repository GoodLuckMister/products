import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import { productOperations, productSelectors } from '../../redux/products';

export default function ModalPage() {
  const [show, setShow] = useState(false);
  const [valueInput, setValueInput] = useState({
    name: '',
    imageUrl: '',
    count: 0,
  });
  const dispatch = useDispatch();
  const items = useSelector(productSelectors.getItems);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = useCallback(
    text => dispatch(productOperations.addProduct(text)),
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
    onSubmit(valueInput);
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
    <>
      <Button variant="primary" onClick={handleShow}>
        Create
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Form onSubmit={onSubmitClick}>
          <Modal.Header>
            <Modal.Title>Create product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <FormControl
                value={valueInput.name}
                onChange={changeValue}
                name="name"
                placeholder="name"
                aria-label="name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">http://</InputGroup.Text>
              <FormControl
                value={valueInput.imageUrl}
                onChange={changeValue}
                name="imageUrl"
                placeholder="image url"
                aria-label="image "
                aria-describedby="basic-addon2"
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
            {/* <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Weight</InputGroup.Text>
                            <FormControl
                                value={valueInput.weight}
                                onChange={changeValue}
                                name="weight"
                                placeholder="weight"
                                aria-label="weight"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
