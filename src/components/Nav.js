import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </Navbar>
  )
}

export default Nav;
