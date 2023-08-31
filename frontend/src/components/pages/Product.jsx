import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/product.scss'
import { deleteProduct, getProduct, setProduct } from '../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
  Row,
  Col,
  Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProductForm from '../other/ProductForm';
import { useCookies } from 'react-cookie';
import { authorise } from '../authorize/authorise';
import { GETPRODUCT } from '../../redux/type/type';
import { setCart } from '../../redux/action/cartAction';
import { setOrder } from '../../redux/action/orderAction';
import { BiSolidCategory } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import { FaRupeeSign } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { TbDiscountCheckFilled } from 'react-icons/tb'
const Product = (props) => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  useEffect(() => {
    dispatch(getProduct())
  }, [])

  const editProductData = (id) => {
    toggle()
  }
  const deleteProductData = (id) => {
    dispatch(deleteProduct(id))
  }

  const buyNow = (id) => {
    let obj = {
      productId: id,
      quantity: 3
    }
    dispatch(setOrder(obj))
  }

  const addToCart = (id) => {
    dispatch(setCart(id))
  }

  return (
    <div>
      {/* Modal  */}

      <div>
        <div className='my-3 d-flex justify-content-end'>
          <Button onClick={toggle}>
            Add Product
          </Button>
        </div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className}
          backdrop={true}
          keyboard={true}
        >
          <ModalHeader toggle={toggle}>Product Info</ModalHeader>
          <ModalBody>
            <ProductForm toggle={toggle} />
          </ModalBody>
        </Modal>
      </div>

      {/* Modal  */}

      {/* CARD */}

      <Container fluid>
        <Row className='g-4 product_card'>
          {
            state.product.productData.map((x, i) => {
              return (
                <Col xs={12} md={6} lg={4} key={i}>
                  {console.log(x)}
                  <Card className='position-relative' style={{ backgroundColor: x.color }}>
                    <img
                      alt="Sample"
                      src={x.productImage}
                    />
                    <div className='product_card_three_dot'>
                      <PiDotsThreeOutlineVerticalBold />
                      <dir className='product_card_three_dot_hover'>
                        <button onClick={() => editProductData(x._id)}>Edit</button>
                        <button onClick={() => deleteProductData(x._id)}>Delete</button>
                      </dir>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">
                        Product:-{x.productName}
                      </CardTitle>
                      <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                      >
                        <div>
                          <span className='product_icon'><BiSolidCategory /></span>
                          {x.category}
                        </div>
                      </CardSubtitle>
                      <CardText>
                        <div>
                          <span className='product_icon'><FaRupeeSign /></span>
                          Price:-{x.price}
                        </div>
                        <div>
                          <span className='product_icon'><FcAbout /></span>
                          Discription:-{x.discription}
                        </div>
                        <div>
                          <span className='product_icon'><BsShop /></span>
                          Shop:-{x.shopname}
                        </div>
                        <div>
                          {/* <span className='product_icon'><FaMobileScreen /></span> */}
                          Mobile:-{x.mobile}
                        </div>
                        <div>
                          <span className='product_icon'><TbDiscountCheckFilled /></span>
                          Discount:-{x.discount}
                        </div>
                      </CardText>
                      <div className='d-flex justify-content-between'>
                        <Button onClick={() => buyNow(x._id)}>
                          Buy Now
                        </Button>
                        <Button onClick={() => addToCart(x._id)}>
                          Add To Cart
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container >

      {/* CARD */}

    </div >
  )
}

export default Hoc(Product)

Product.propTypes = {
  className: PropTypes.string,
};


