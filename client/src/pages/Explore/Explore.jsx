import React from 'react';
import classNames from 'classnames/bind';
import styles from './Explore.module.scss'



const cx = classNames.bind(styles)
const Explore = () => {
    return <div className={cx('wrapper')}>
       <div className={cx('category-list')}>
        <h2>Video today</h2>
       </div>
       <div className={cx('explore-item_container')}>
        <div className={cx('explore-item-list')}>
            <div className={cx('content-video')}>
                <div className={cx('video')}>
                    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls style={{width:'288px',height:'384px'}}></video>
                </div>
            </div>
            <div className={cx('content-video')}>
                <div className={cx('video')}>
                    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls style={{width:'288px',height:'384px'}}></video>
                </div>
            </div>
            <div className={cx('content-video')}>
                <div className={cx('video')}>
                    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls style={{width:'288px',height:'384px'}}></video>
                </div>
            </div>
            <div className={cx('content-video')}>
                <div className={cx('video')}>
                    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls style={{width:'288px',height:'384px'}}></video>
                </div>
            </div>
            <div className={cx('content-video')}>
                <div className={cx('video')}>
                    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls style={{width:'288px',height:'384px'}}></video>
                </div>
            </div>
            <div className={cx('content-video')}>
                <div className={cx('video')}>
                    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls style={{width:'288px',height:'384px'}}></video>
                </div>
            </div>
        </div>
       </div>
    </div>;
};

export default Explore;
