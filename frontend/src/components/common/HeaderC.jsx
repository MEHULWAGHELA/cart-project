import React, { Fragment, useContext, useEffect } from 'react'
import '../../styles/common/header.scss'
import { Button, Container, NavLink } from 'reactstrap'
import { RxDashboard } from 'react-icons/rx'
import { MdOutlineProductionQuantityLimits, MdOutlineIncompleteCircle } from 'react-icons/md'
import { BsCart4 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profileAction'
import { useNavigate } from 'react-router-dom'
import { mainContext } from '../../App'
const HeaderC = () => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile())
  }, [])

  let navigate = useNavigate()
  let contextData = useContext(mainContext)
  const logOut = () => {
    console.log(contextData)
    localStorage.removeItem('token')
    contextData.setIsLogin(false)
    contextData.removecookies('token')
    navigate('/')
  }
  return (
    <Fragment>
      <Container fluid className='header'>
        <div className='d-flex justify-content-between'>
          <Button onClick={logOut}>Log Out</Button>
          <NavLink to="/profile" className='text-white text-decoration-none fs-4 d-flex'>
            <div className='header-profile mx-2'><img src={state.profile.profileData[0]?.userImage} className='rounded-circle' alt="" /></div>
            <h2 className='mx-2'>{state.profile.profileData[0]?.userName}</h2>
          </NavLink>
        </div>
      </Container>
    </Fragment >
  )
}

export default HeaderC