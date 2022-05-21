import React from 'react';
import styles from '../Header/Header.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
            {/* Logo */}
            {/* search */}
            </div>
        </header>
    );
};

export default Header;