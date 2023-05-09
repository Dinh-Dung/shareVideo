import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountPreview.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const AccountPreview = ({ user }) => {
    const navigate = useNavigate();

    const handleClickProfile = () => {
        if (user) {
            navigate(`/profile?nickname=${user.user_nickname}`);
        }
    };
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Link to={`/profile?nickname=${user.user_nickname}`} className={cx('browse-user-avatar')}>
                        <div className={cx('user-avatar')} style={{ width: '56px', height: '56px' }}>
                            <span>{user.user_fullname[0]}</span>
                        </div>
                    </Link>
                </div>
                <div className={cx('body')}>
                    <p className={cx('nickname')} onClick={handleClickProfile}>
                        <strong>{user ? user.user_nickname : 'nickname'}</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    </p>
                    <p className={cx('name')} onClick={handleClickProfile}>
                        {user ? user.user_fullname : 'fullname'}
                    </p>
                    <p className={cx('analytics')} onClick={handleClickProfile}>
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
