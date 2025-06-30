import React from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
