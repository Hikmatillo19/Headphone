import React from 'react'
import './Product.scss'
import { useState } from 'react';
import redHeadPhone from '../../assets/img/productPink.png'
import blueHeadPhone from '../../assets/img/productBlue.png'
import grenHeadPhone from '../../assets/img/productGren.png'
// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
function Product() {

    const [value, setValue] = useState(3);
    return (
        <section className='container product'>
            <div className='product__title'>
                <h2>
                    Our Latest Product
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante. </p>
            </div>
            <ul className='products'>
                <li className='products__item'>
                    <div className='products__item_child red'>
                        <img src={redHeadPhone} alt="" />
                        <span><i className="bi bi-cart-fill"></i></span>
                    </div>
                    <div className='ratings'>
                        <div className='left2'>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={1.5} precision={0.5} />
                            </Stack>
                            <h5>4.50</h5>
                        </div>
                        <div className="right2">
                            <p>Read Headphone</p>
                            <h4> <b>$ 256</b> </h4>
                        </div>
                    </div>
                </li>
                <li className='products__item'>
                    <div className='products__item_child blue'>
                        <img src={blueHeadPhone} alt="" />
                        <span><i className="bi bi-cart-fill"></i></span>
                    </div>
                    <div className='ratings'>
                        <div className='left2'>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={1.5} precision={0.5} />
                            </Stack>
                            <h5>4.50</h5>
                        </div>
                        <div className="right2">
                            <p>Blue Headphone</p>
                            <h4> <b>$ 235</b> </h4>
                        </div>
                    </div>
                </li>
                <li className='products__item'>
                    <div className='products__item_child gren'>
                        <img src={grenHeadPhone} alt="" />
                        <span><i className="bi bi-cart-fill"></i></span>
                    </div>
                    <div className='ratings'>
                        <div className='left2'>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={1.5} precision={0.5} />
                            </Stack>
                            <h5>4.50</h5>
                        </div>
                        <div className="right2">
                            <p>Green Headphone</p>
                            <h4> <b>$ 245</b> </h4>
                        </div>
                    </div>
                </li>
            </ul>
        </section >
    )
}

export default Product