import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { useAuth } from '~/hooks/useAuth';

const cx = classNames.bind(styles);
const AccountPreview = () => {
    
    const {user } = useAuth()
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ddb79ba3ebe90e10e946791203de6c5d~c5_100x100.jpeg?x-expires=1680368400&x-signature=6NX9U8YX9%2BpEzDbtICOlM1u7Bd8%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{user?user.nickname:'nickname'}</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>{user?user.fullname:'fullname'}</p>
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

export default AccountPreview;
