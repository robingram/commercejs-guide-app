import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import Cart from './cart/Cart';

const Nav = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <Navbar>
      <NavbarBrand href="/">MyStore</NavbarBrand>
      <Button onClick={toggleModal}>Cart</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Cart</ModalHeader>
        <ModalBody>
          <Cart />
        </ModalBody>
      </Modal>
    </Navbar>
  )
}

export default Nav;
