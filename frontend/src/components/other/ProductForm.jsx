import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/pages/product.scss'
import { getProduct, setProduct } from '../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import {
    Label,
    Form,
    FormGroup,
    Row,
    Col,
    ModalFooter,
    Button
} from 'reactstrap';
import '../../styles/other/productform.scss'
const ProductForm = (props) => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        let formdata = new FormData()
        formdata.append('productName', data.productName)
        formdata.append('price', data.price)
        formdata.append('mobile', data.mobile)
        formdata.append('category', data.category)
        formdata.append('shopName', data.shopName)
        formdata.append('discount', data.discount)
        formdata.append('discription', data.discription)
        formdata.append('colors', data.colors)
        formdata.append('productImage', data.productImage[0])
        dispatch(setProduct(formdata))
        props.toggle()
    }
    return (
        <div className='pForm'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className='gx-4 gy-3'>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="productName"
                                name="productName"
                                placeholder="productName"
                                className='form-control'
                                type="text"
                                {...register("productName", { required: true })}
                            />
                            <Label for="productName">
                                Product Name
                            </Label>
                            {errors.productName && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="price"
                                name="price"
                                placeholder="price"
                                type="number"
                                className='form-control'
                                {...register("price", { required: true })}
                            />
                            <Label for="price">
                                Price
                            </Label>
                            {errors.price && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="mobile"
                                name="mobile"
                                placeholder="mobile"
                                type="tel"
                                className='form-control'
                                {...register("mobile", { required: true })}
                            />
                            <Label for="mobile">
                                Mobile
                            </Label>
                            {errors.mobile && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="category"
                                name="category"
                                placeholder="category"
                                type="text"
                                className='form-control'
                                {...register("category", { required: true })}
                            />
                            <Label for="category">
                                Category
                            </Label>
                            {errors.category && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="shopName"
                                name="shopName"
                                placeholder="shopName"
                                type="text"
                                className='form-control'
                                {...register("shopName", { required: true })}
                            />
                            <Label for="shopName">
                                Shop Name
                            </Label>
                            {errors.shopName && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="discount"
                                name="discount"
                                placeholder="discount"
                                type="number"
                                className='form-control'
                                {...register("discount", { required: true })}
                            />
                            <Label for="discount">
                                Discount
                            </Label>
                            {errors.discount && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="discription"
                                name="discription"
                                placeholder="discription"
                                type="text"
                                className='form-control'
                                {...register("discription", { required: true })}
                            />
                            <Label for="discription">
                                Discription
                            </Label>
                            {errors.discription && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <FormGroup floating>
                            <input
                                id="colors"
                                name="colors"
                                placeholder="colors"
                                type="color"
                                className='form-control'
                                {...register("colors", { required: true })}
                            />
                            <Label for="colors">
                                Colors
                            </Label>
                            {errors.colors && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={6}>
                        <FormGroup floating>
                            <input
                                id="productImage"
                                name="productImage"
                                placeholder="productImage"
                                type="file"
                                className='form-control'
                                {...register("productImage", { required: true })}
                            />
                            <Label for="productImage">
                                Product Image
                            </Label>
                            {errors.productImage && <span className='text-warning'>This field is required</span>}
                        </FormGroup>
                    </Col>
                </Row>
                <ModalFooter>
                    <input type="submit" className='form-control w-25 text-bg-secondary fw-bold fs-5' />
                </ModalFooter>

            </Form>
        </div>
    )
}

export default ProductForm
