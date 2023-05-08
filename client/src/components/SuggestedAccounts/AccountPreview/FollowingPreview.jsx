import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
const FollowingPreview = ({ user }) => {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('browse-user-avatar')}>
                <div className={cx('user-avatar')} style={{ width: '56px', height: '56px' }}>
                    <span>{user.tiktoker.fullname[0]}</span>
                </div>
            </Link>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{user ? user.tiktoker.nickname : 'nickname'}</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>{user ? user.tiktoker.fullname : 'fullname'}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>6.7M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>6.7M</strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>
        </div>
    );
};

export default FollowingPreview;
