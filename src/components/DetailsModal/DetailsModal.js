import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DetailsModal = ({ product }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Details
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title><h4 className='text-center'>{product.title}</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-25 h-25 m-auto py-3">
                        <img className="w-100 h-100" src={product.image} alt='product' />
                    </div>
                    {product.description}
                    <div className='w-25 mx-auto'>
                        <p className='mt-2 text-danger fw-bold'>Price: {product.price}$</p>
                        <small className='text-secondary fw-bold'>Rating: {product.rating.rate}</small>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DetailsModal;