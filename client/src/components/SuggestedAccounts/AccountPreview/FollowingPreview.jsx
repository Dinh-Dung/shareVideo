import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
const FollowingPreview = ({ user }) => {
    const navigate = useNavigate();
    const handleClickProfile = () => {
        if (user) {
            navigate(`/profile?nickname=${user.tiktoker.nickname}`);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={`/profile?nickname=${user.tiktoker.nickname}`} className={cx('browse-user-avatar')}>
                <div className={cx('user-avatar')} style={{ width: '56px', height: '56px' }}>
                    <span>{user.tiktoker.fullname[0]}</span>
                </div>
            </Link>
            <div className={cx('body')}>
                <p className={cx('nickname')} onClick={handleClickProfile}>
                    <strong>{user.tiktoker.nickname}</strong>
                    {user.tick ? (
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    ) : (
                        <FontAwesomeIcon icon={faCake} className={cx('check1')} />
                    )}
                </p>
                <p className={cx('name')} onClick={handleClickProfile}>
                    {user.tiktoker.fullname}
                </p>
                <p className={cx('analytics')} onClick={handleClickProfile}>
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
