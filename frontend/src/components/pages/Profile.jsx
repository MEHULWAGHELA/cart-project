import React, { useEffect } from 'react'
import { Hoc } from '../hoc/Hoc'
import '../../styles/pages/profile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profileAction'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { BiSolidUserPin } from 'react-icons/bi'
import { FaBirthdayCake, FaAddressCard, FaRegAddressCard, FaUniversity, FaPhoneSquareAlt } from 'react-icons/fa'
import { MdLocalLibrary, MdOutlineLocalLibrary } from 'react-icons/md'
import { GiIndiaGate, GiPostOffice } from 'react-icons/gi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { TfiEmail } from 'react-icons/tfi'
import { BsGenderMale } from 'react-icons/bs'
const Profile = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    return (
        <>
            <div className='bg-primary-subtle pb-3'>
                <Container>
                    <Row>
                        {state.profile.profileData.map((x, i) => {
                            return (
                                <Col xs={12} sm={10} md={6} className='offset-0 offset-sm-1 offset-md-3'>
                                    <Card className='border border-5 mt-2 p-2 border-black'>
                                        <CardImg
                                            alt="Card image cap"
                                            src={x.userImage}
                                            top
                                            className='profile-image'
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><BiSolidUserPin /></span>
                                                    {x.userName}
                                                </div>
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><FaBirthdayCake /></span>
                                                    Birth Date={x.birthDate.split('T')[0]}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><FaRegAddressCard /></span>
                                                    Address={x.address}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><MdOutlineLocalLibrary /></span>
                                                    State={x.state}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><GiIndiaGate /></span>
                                                    Country={x.country}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><GiPostOffice /></span>
                                                    Postal Code{x.postalCode}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><HiOutlineBuildingOffice2 /></span>
                                                    Office Contact{x.officeContact}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><TfiEmail /></span>
                                                    Email={x.email}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><FaUniversity /></span>
                                                    Qualification={x.qualification}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><FaPhoneSquareAlt /></span>
                                                    Mobile={x.mobile}
                                                </div>
                                                <div className='profile-data'>
                                                    <span className='profile-icons'><BsGenderMale /></span>
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
            </div >
        </>
    )
}

export default Hoc(Profile)