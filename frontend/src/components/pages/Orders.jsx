import React, { useEffect } from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/orders.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrder } from '../../redux/action/orderAction'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { PiDotsThreeOutlineVerticalBold } from 'react-icons/pi'
const Orders = () => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  useEffect(() => {
    console.log(state.order.orderData)
  }, [state])
  useEffect(() => {
    dispatch(getOrder())
  }, [])

  const deleteOrderData = (id) => {
    dispatch(deleteOrder(id))
  }
  const setOrderCompleted = (id) => {
    
  }

  return (
    <div>
      <Container fluid>
        <Row className='g-4 product_card'>
          {
            state.order.orderData.map((x, i) => {
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
                        <button onClick={() => deleteOrderData(x._id)}>Delete</button>
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
                    </CardBody>
                    <Button onClick={()=>{setOrderCompleted(x._id)}}>Order Completed</Button>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default Hoc(Orders)