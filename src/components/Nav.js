import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Cart from './cart/Cart';

const Nav = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <Navbar>
      <NavbarBrand href="/">
        <h1>MyStore</h1>
      </NavbarBrand>
      <Button onClick={toggleModal} color="primary">
        <FontAwesomeIcon icon={faCartArrowDown} />
      </Button>
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
