import React, { useEffect } from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/cart.scss'
import { deleteCart, getCart } from '../../redux/action/cartAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, FormGroup, Row } from 'reactstrap'
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { setOrder } from '../../redux/action/orderAction'
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
  }
  const deleteCartData = (id) => {
    dispatch(deleteCart(id))
  }

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
                  <div className='product_card_three_dot'>
                    <PiDotsThreeOutlineVerticalBold />
                    <dir className='product_card_three_dot_hover'>
                      <button onClick={() => deleteCartData(x._id)}>Delete</button>
                    </dir>
                  </div>
                  <CardBody>
                    <CardTitle tag="h5">
                      {x.productName}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {x.category}
                    </CardSubtitle>
                    <CardText>
                      {x.price}
                      <br />
                      {x.discription}
                      <br />
                      {x.shopname}
                      {x.mobile}
                      {x.discount}
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