import { Fragment, useContext } from "react"
import SidebarC from "../common/SidebarC"
import { Button, Col, Container, Row } from "reactstrap"
import HeaderC from "../common/HeaderC"
import '../../styles/hoc/hoc.scss'
import { useNavigate } from "react-router-dom"
export const Hoc = (Component) => {
    const NewComponent = () => {        
        return (
            <Fragment>
                <Row className="g-0">
                    <Col xs={0} md={3} lg={2} className='hoc_sidebar d-none d-md-block g-0'>
                        <SidebarC />
                    </Col>
                    <Col xs={12} md={9} lg={10} className="g-0">
                        <HeaderC />
                        <Component />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    return NewComponent
}