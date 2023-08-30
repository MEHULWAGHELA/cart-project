import React, { useEffect } from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/profile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profileAction'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

const Profile = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    useEffect(() => {
        console.log(state.profile.profileData)

    }, [state])
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    return (
        <>
            <div>
                <Container>
                    <Row>
                        {state.profile.profileData.map((x, i) => {
                            return (
                                <Col xs={12} sm={10} md={6} className='offset-0 offset-sm-1 offset-md-4'>
                                    <Card>
                                        <CardImg
                                            alt="Card image cap"
                                            src={x.userImage}
                                            top
                                            className='w-50 rounded-circle m-auto'
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {x.userName}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                <div>
                                                    Birth Date={x.birthDate}
                                                </div>

                                                <div>
                                                    Address={x.address}
                                                </div>
                                                <div>
                                                    State={x.state}
                                                </div>
                                                <div>
                                                    Country={x.country}
                                                </div>
                                                <div>
                                                    Postal Code{x.postalCode}
                                                </div>
                                                <div>
                                                    Office Contact{x.officeContact}
                                                </div>
                                                <div>
                                                    Email={x.email}
                                                </div>
                                                <div>
                                                    Qualification={x.qualification}
                                                </div>

                                                <div>
                                                    Mobile={x.mobile}
                                                </div>
                                                <div>
                                                    Gender={x.gender}
                                                </div>
                                            </CardSubtitle>
                                            <CardText>

                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}






                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Hoc(Profile)