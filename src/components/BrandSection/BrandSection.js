import React from 'react'
import classNames from 'classnames/bind'
import styles from './BrandSection.module.scss'
import image from '../../assets/images/mo-ta-bst-3.jpg'
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel'
import ViewAll from '../Button/ViewAll/ViewAll'

const cx = classNames.bind(styles)

const BrandSection = ({ brandName, collectionName }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>
                <span>{brandName || 'Everon'}</span>
                <h2>{collectionName || 'BST Khu vườn tinh hoa'}</h2>
            </div>
            <div className={cx('image')}>
                <img src={image} alt="" />
            </div>
            <div className={cx('products')}>
                <ProductsCarousel breakpoint0={2} breakpoint768={2} breakpoint1024={4} />
            </div>
            <ViewAll text="Khám phá thêm" link={'https://everon.com/san-pham'} />
        </div>
    )
}

export default BrandSection
