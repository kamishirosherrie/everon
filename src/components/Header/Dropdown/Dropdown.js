import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Dropdown.module.scss'
import iconArrowRight from '../../../assets/images/icon-arrow-right.png'
const cx = classNames.bind(styles)

const data = [
    {
        brand: 'Everon',
        catalog: [
            {
                name: 'Theo sản phẩm',
                category: [
                    {
                        name: 'Bộ chăn ga Everon',
                        link: '#',
                    },
                    {
                        name: 'Chăn và vỏ chăn',
                        link: '#',
                    },
                    {
                        name: 'Ga',
                        link: '#',
                    },
                    {
                        name: 'Vỏ gối',
                        link: '#',
                    },
                    {
                        name: 'Bộ chăn ga Artemis',
                        link: '#',
                    },
                    {
                        name: 'Chăn ga gối trẻ em',
                        link: '#',
                    },
                ],
            },
            {
                name: 'Theo chất liệu',
                category: [
                    {
                        name: 'Cotton',
                        link: '#',
                    },
                    {
                        name: 'Bamboo',
                        link: '#',
                    },
                    {
                        name: 'Modal',
                        link: '#',
                    },
                    {
                        name: 'Tencel',
                        link: '#',
                    },
                    {
                        name: 'Hanji Modal',
                        link: '#',
                    },
                ],
            },
        ],
    },
    {
        brand: 'Hanvico',
        catalog: [
            {
                name: 'Theo sản phẩm',
                category: [
                    {
                        name: 'Bộ chăn ga Hanvico',
                        link: '#',
                    },
                    {
                        name: 'Chăn và vỏ chăn',
                        link: '#',
                    },
                    {
                        name: 'Ga',
                        link: '#',
                    },
                    {
                        name: 'Vỏ gối',
                        link: '#',
                    },
                    {
                        name: 'Bộ chăn ga Artemis',
                        link: '#',
                    },
                    {
                        name: 'Chăn ga gối trẻ em',
                        link: '#',
                    },
                ],
            },
            {
                name: 'Theo chất liệu',
                category: [
                    {
                        name: 'Cotton',
                        link: '#',
                    },
                    {
                        name: 'Bamboo',
                        link: '#',
                    },
                    {
                        name: 'Modal',
                        link: '#',
                    },
                    {
                        name: 'Tencel',
                        link: '#',
                    },
                    {
                        name: 'Hanji Modal',
                        link: '#',
                    },
                ],
            },
        ],
    },
    {
        brand: 'Vạn Thành',
        catalog: [
            {
                name: 'Theo sản phẩm',
                category: [
                    {
                        name: 'Bộ chăn ga',
                        link: '#',
                    },
                    {
                        name: 'Chăn và vỏ chăn',
                        link: '#',
                    },
                    {
                        name: 'Ga',
                        link: '#',
                    },
                    {
                        name: 'Vỏ gối',
                        link: '#',
                    },
                    {
                        name: 'Bộ chăn ga Artemis',
                        link: '#',
                    },
                    {
                        name: 'Chăn ga gối trẻ em',
                        link: '#',
                    },
                ],
            },
            {
                name: 'Theo chất liệu',
                category: [
                    {
                        name: 'Cotton',
                        link: '#',
                    },
                    {
                        name: 'Bamboo',
                        link: '#',
                    },
                    {
                        name: 'Modal',
                        link: '#',
                    },
                    {
                        name: 'Tencel',
                        link: '#',
                    },
                    {
                        name: 'Hanji Modal',
                        link: '#',
                    },
                ],
            },
        ],
    },
    {
        brand: 'Sông Hồng',
        catalog: [
            {
                name: 'Theo sản phẩm',
                category: [
                    {
                        name: 'Bộ chăn ga Sông Hồng',
                        link: '#',
                    },
                    {
                        name: 'Chăn và vỏ chăn',
                        link: '#',
                    },
                    {
                        name: 'Ga',
                        link: '#',
                    },
                    {
                        name: 'Vỏ gối',
                        link: '#',
                    },
                    {
                        name: 'Bộ chăn ga Artemis',
                        link: '#',
                    },
                    {
                        name: 'Chăn ga gối trẻ em',
                        link: '#',
                    },
                ],
            },
            {
                name: 'Theo chất liệu',
                category: [
                    {
                        name: 'Cotton',
                        link: '#',
                    },
                    {
                        name: 'Bamboo',
                        link: '#',
                    },
                    {
                        name: 'Modal',
                        link: '#',
                    },
                    {
                        name: 'Tencel',
                        link: '#',
                    },
                    {
                        name: 'Hanji Modal',
                        link: '#',
                    },
                ],
            },
        ],
    },
    {
        brand: 'Liên Á',
        catalog: [
            {
                name: 'Theo sản phẩm',
                category: [
                    {
                        name: 'Bộ chăn ga',
                        link: '#',
                    },
                    {
                        name: 'Chăn và vỏ chăn',
                        link: '#',
                    },
                    {
                        name: 'Ga',
                        link: '#',
                    },
                    {
                        name: 'Vỏ gối',
                        link: '#',
                    },
                    {
                        name: 'Bộ chăn ga Artemis',
                        link: '#',
                    },
                    {
                        name: 'Chăn ga gối trẻ em',
                        link: '#',
                    },
                ],
            },
            {
                name: 'Theo chất liệu',
                category: [
                    {
                        name: 'Cotton',
                        link: '#',
                    },
                    {
                        name: 'Bamboo',
                        link: '#',
                    },
                    {
                        name: 'Modal',
                        link: '#',
                    },
                    {
                        name: 'Tencel',
                        link: '#',
                    },
                    {
                        name: 'Hanji Modal',
                        link: '#',
                    },
                ],
            },
        ],
    },
]

const Dropdown = ({ className }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className={className ? cx('wrapper', className) : cx('wrapper')}>
            <ul className={cx('list')}>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={cx('item', { active: activeIndex === index })}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <a href={item.link}>
                            {item.brand}
                            <img src={iconArrowRight} alt="" className={cx('icon-arrow')} />
                        </a>
                        <div className={cx('sub-list', { active: activeIndex === index })}>
                            {item.catalog.map((catalog, catalogIndex) => (
                                <ul key={catalogIndex} className={cx('products')}>
                                    <li className={cx('sub-item')}>
                                        <h4>
                                            <a href={catalog.link}>{catalog.name}</a>
                                        </h4>
                                        <ul className={cx('category')}>
                                            {catalog.category.map((cat, catIndex) => (
                                                <li key={catIndex} className={cx('cat-item')}>
                                                    <a href={cat.link}>{cat.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown
