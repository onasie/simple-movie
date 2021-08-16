import React, { useState, useEffect } from "react";
import './Modal.css';

//component
import Aux from '../../hoc/Auxi/Auxi';

//bootstrap
import { Modal, Button } from "react-bootstrap";

const ModalLayout = (props) => {
  const {Poster, Title} = props.movie;
  const [showModal, setShow] = useState(props.showModal);

  useEffect(() => {
    setShow(props.showModal);
  }, [props]);
    
  return (
    <Aux>
      <Modal show={showModal} onHide={() => setShow(false)}>
        <Modal.Body>
        <div>
          <img src={Poster} alt={'Picture of ' + Title} />
        </div>
        </Modal.Body>
      </Modal>
    </Aux>
  );
}
  
export default ModalLayout;