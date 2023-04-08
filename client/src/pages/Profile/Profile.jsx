import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss'

import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)
const Profile = () => {
    return <>
        <div className={cx('wrapper')}>
           <div className={cx('layout-user')}>
            <div className={cx('share-info')}>
                <div className={cx('user-avatar')} style={{width:"116px",height:'116px'}}>
               <span className={cx('span-avatar-user')} >
               <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ddb79ba3ebe90e10e946791203de6c5d~c5_100x100.jpeg?x-expires=1680368400&x-signature=6NX9U8YX9%2BpEzDbtICOlM1u7Bd8%3D"
                        alt=""
                    />
               </span>
                </div>
                <div className={cx('user-title')}>
                    <h2 className={cx('nickname-user')}>dinhdung_01</h2>
                    <h1 className={cx('user-name')}>Dũng Đinh</h1>
                    <div className={cx('edit-profile')}>
                    <Button  leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}>
                                Edit profile
                    </Button>
                    </div>
                </div>
            </div>
            <h3 className={cx('counts-info')}>
                <div className={cx('number-following')}>
                    <strong title='Following'>24</strong>
                    <span datatype='follwing' className={cx('count-follwing')}>Follwing</span>
                </div>
                <div className={cx('number-follower')}>
                    <strong title='Followers'>35</strong>
                    <span datatype='follower' className={cx('count-follwer')}>Follwing</span>
                </div>
                <div className={cx('number-like')}>
                    <strong title='Likes'>35</strong>
                    <span datatype='likes' className={cx('count-like')}>Follwing</span>
                </div>
            </h3>
            <h2 className={cx('user-bio')}> No bio yet.</h2>
           </div>

          
        </div>
        <div className={cx('layout-main')}>
            <div className={cx('tab')}>
                <p className={cx('videos-tab')}><span>Videos</span></p>
                <p className={cx('liked-tab')}><span>Liked</span></p>
            </div>
            <div className={cx('video-column')}>
                <div className={cx('user_video-list')}>
                    <div className={cx('user-video')}>
                     
                    </div>
                </div>
            </div>
           </div>
    </>
};

export default Profile;
