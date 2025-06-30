import React from 'react'
import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import image from '../../../assets/images/product_img.jpg'
import image2 from '../../../assets/images/product_img_2.jpg'

const cx = classNames.bind(styles)

const Product = () => {
    //Example price
    const price = 1529000
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-image')}>
                <a href="/product/cpm25205">
                    <img src={image} alt="Product" className={cx('img-front')} />
                    <img src={image2} alt="Product" className={cx('img-back')} />
                </a>
            </div>
            <div className={cx('product-info')}>
                <a href="/product/cpm25205" className={cx('product-name')}>
                    Công Chúa Điệu - CPM25205
                </a>
                <span className={cx('product-sku')}>CPM25205</span>
                <span className={cx('product-price')}>
                    {price.toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </span>
            </div>
        </div>
    )
}

export default Product
