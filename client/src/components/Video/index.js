import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './video.module.scss';
import Button from '~/components/Button/Button';
import config from '~/config';
import Comments from '../Comments/Comments';
import SignIn from '../Auth/SignIn';

const cx = classNames.bind(styles);

const VideoPlayer = ({ video }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        let options = {
            rootMargin: '0px',
            threshold: [0.95],
        };
        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };
        let observer;
        if (videoRef.current) {
            observer = new IntersectionObserver(handlePlay, options);
            observer.observe(videoRef.current);
            return () => {
                if (observer && videoRef.current) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(videoRef.current);
                }
            };
        }
    }, [videoRef]);

    const onChangeTab = () => {};
    return (
        <div className={cx('list_item-container')}>
            <Link to={config.routes.profile}>
                <div className={cx('avatar-user')} style={{ width: '56px', height: '56px' }}>
                    <span style={{ width: '56px', height: '56px' }}>
                        <img
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/46b122ac693478eafe7999fdca35770e~c5_100x100.jpeg?x-expires=1681113600&x-signature=iExtTF6LtrVVojgY94Z4g0X4zPc%3D"
                            alt=""
                        />
                    </span>
                </div>
            </Link>
            <div className={cx('content-container')}>
                <div className={cx('content-info')}>
                    <div className={cx('author')}>
                        <Link to={config.routes.profile} className={cx('author-container')}>
                            <h3 className={cx('video-author_uniqued')}>{video.user.fullname}</h3>
                            <h4 className={cx('video-author_nickname')}>{video.user.nickname}</h4>
                        </Link>
                        <Button outlineDanger className={cx('button')}>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('span-text')}>
                    <span>{video ? video.description : ''}</span>
                </div>
                <div className={cx('content-video')}>
                    <div className={cx('video')}>
                        <video
                            ref={videoRef}
                            src={video.url}
                            controls
                            loop
                            muted={false}
                            style={{ width: '289px', height: '517px' }}
                        ></video>
                    </div>

                    <div className={cx('action-item')}>
                        <button type="button" className={cx('like')}>
                            <span className={cx('span-icon_like')}>
                                <FontAwesomeIcon icon={faHeart} style={{ width: '24px', height: '24px' }} />
                            </span>
                            <strong className={cx('like-count')}>245.4K</strong>
                        </button>
                        <button type="button" className={cx('comment')}>
                            <Comments></Comments>
                            <strong className={cx('comment-count')}>245</strong>
                        </button>
                        <button type="button" className={cx('share')}>
                            <span className={cx('span-icon_share')}>
                                <FontAwesomeIcon icon={faShare} style={{ width: '24px', height: '24px' }} />
                            </span>
                            <strong className={cx('share-count')}>1234</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
