import React from 'react';
import { Button, Card } from 'react-bootstrap';
import DetailsModal from '../DetailsModal/DetailsModal';

const SingleProduct = ({product, addItem}) => {
    console.log(product)
    return (
        <div data-aos="flip-left" data-aos-duration="1500" className="col-md-4">
            <Card style={{ width: '24rem', height: '620px' }} className=" mb-4 pt-5 px-5 pb-3">
                <div className='w-75 m-auto h-50'>
                <Card.Img variant="top" src={product.image} className='w-100 h-100' />
                </div>
                <Card.Body className="mt-4">
                    <Card.Title >{product.title.slice(0,10)}</Card.Title>
                    <Card.Text>
                        {product.description.slice(0,120)}
                    </Card.Text>
                    <Button onClick={addItem} variant="success" className='me-2'>Add to Cart</Button>
                    <DetailsModal product={product}></DetailsModal>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;