import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
const AccountPreview = ({ user }) => {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ddb79ba3ebe90e10e946791203de6c5d~c5_100x100.jpeg?x-expires=1680368400&x-signature=6NX9U8YX9%2BpEzDbtICOlM1u7Bd8%3D"
                        alt=""
                    />
                </div>
                <div className={cx('body')}>
                    <p className={cx('nickname')}>
                        <strong>{user ? user.user_nickname : 'nickname'}</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    </p>
                    <p className={cx('name')}>{user ? user.user_fullname : 'fullname'}</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>6.7M</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>6.7M</strong>
                        <span className={cx('label')}>Likes </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default AccountPreview;
