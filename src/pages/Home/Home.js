import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import DefaultLayout from '../../layouts/DefaultLayout'
import bannerDesktop from '../../assets/images/banner_desktop.png'
import bannerMobile from '../../assets/images/banner_mobile.png'
import ProductsCarousel from '../../components/ProductsCarousel/ProductsCarousel'
import BrandSection from '../../components/BrandSection/BrandSection'
import ViewAll from '../../components/Button/ViewAll/ViewAll'

const cx = classNames.bind(styles)

const Home = () => {
    return (
        <DefaultLayout>
            <div className={cx('wrapper')}>
                <div className={cx('banner')}>
                    <img className={cx('banner-desktop')} src={bannerDesktop} alt="" />
                    <img className={cx('banner-mobile')} src={bannerMobile} alt="" />
                    <div className={cx('banner-content')}>
                        <h2 className={cx('banner-title')}>
                            <span>Vietnamese Family Day</span>
                        </h2>
                        <ViewAll text="Xem thêm" link="https://everon.com/trang-khuyen-mai" />
                    </div>
                </div>
                <section className={cx('new-product')}>
                    <h2 className={cx('title')}>Sản phẩm mới</h2>
                    <ProductsCarousel />
                    <ViewAll text="Xem tất cả" link="https://everon.com/san-pham" />
                </section>
                <section className={cx('brand')}>
                    <BrandSection />
                    <BrandSection brandName="Sông Hồng" />
                    <BrandSection brandName="Liên Á" />
                    <BrandSection />
                    <BrandSection />
                </section>
            </div>
        </DefaultLayout>
    )
}

export default Home
