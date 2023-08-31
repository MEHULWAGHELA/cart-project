import React, { useEffect, useMemo } from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/cart.scss'
import { deleteCart, getCart } from '../../redux/action/cartAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, FormGroup, Row } from 'reactstrap'
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { setOrder } from '../../redux/action/orderAction'
import { BiSolidCategory } from 'react-icons/bi'
import { BsShop } from 'react-icons/bs'
import { FaRupeeSign } from 'react-icons/fa'
import { ImMobile } from 'react-icons/im'
import { FcAbout } from 'react-icons/fc'
import { TbDiscountCheckFilled } from 'react-icons/tb'
const Cart = () => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(getCart())
  }, [])
  useEffect(() => {
    console.log(state)
  }, [state])

  const buyNow = (id, index) => {
    let obj = {
      productId: id,
      quantity: document.querySelectorAll('.q_value')[index].value ? document.querySelectorAll('.q_value')[index].value : 1
    }
    dispatch(setOrder(obj))
    dispatch(deleteCart(id))
  }
  // const deleteCartData = (id) => {
  //   dispatch(deleteCart(id))
  // }

  const quantityIncrement = (index) => {
    if (document.querySelectorAll('.q_value')[index].value) {
      if ((document.querySelectorAll('.q_value')[index].value) > 0 && (document.querySelectorAll('.q_value')[index].value) < 10) {
        document.querySelectorAll('.q_value')[index].value = Number(document.querySelectorAll('.q_value')[index].value) + 1;
      }
    }
    else {
      document.querySelectorAll('.q_value')[index].value = 2;
    }
  }
  const quantityDecrement = (index) => {
    console.log()
    if (document.querySelectorAll('.q_value')[index].value) {
      if ((document.querySelectorAll('.q_value')[index].value) > 1) {
        document.querySelectorAll('.q_value')[index].value = Number(document.querySelectorAll('.q_value')[index].value) - 1;
      }
    }
    else {
      document.querySelectorAll('.q_value')[index].value = 1;
    }
  }
  const total = useMemo(() => {
    return <div>Total Price:-</div>
  }, [])
  return (
    <Container fluid>
      <Row className='g-4 product_card'>
        {
          state.cart.cartData.map((x, i) => {
            return (
              <Col xs={12} md={6} lg={4} key={i}>
                <Card className='position-relative' style={{ backgroundColor: x.color }}>
                  <img
                    alt="Sample"
                    src={x.productImage}
                  />
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
                        Category:-{x.category}
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
                        Shop:-{x.shopName}
                      </div>
                      <div>
                        <span className='product_icon'><ImMobile /></span>
                        Mobile:-{x.mobile}
                      </div>
                      <div>
                        <span className='product_icon'><TbDiscountCheckFilled /></span>
                        Discount:-{x.discount}
                      </div>
                    </CardText>
                    <div className='d-flex flex-column flex-wrap'>
                      <FormGroup>
                        Quantity:-
                        <AiFillPlusSquare onClick={
                          () => quantityIncrement(i)
                        } className='cart_quatity_icons' />
                        <input type="number" className='cart_quantity_input q_value' placeholder='1' />
                        <AiFillMinusSquare className='cart_quatity_icons' onClick={
                          () => quantityDecrement(i)
                        } />
                        {total}
                      </FormGroup>
                      <Button onClick={() => { buyNow(x._id, i) }}>
                        Buy Now
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Hoc(Cart)