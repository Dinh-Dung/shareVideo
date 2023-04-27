import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faClose, faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { Code, Telegram, FaceBook, WhatsApp, Twitter, Share } from '../../components/Icons';
import { useAuth } from '~/hooks/useAuth';
import { useState, useEffect } from 'react';
import { getVideoAndCommentById } from '~/utils/video-api';
import { Link, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { likeCountOfVideo } from '~/utils/like-api';

const cx = classNames.bind(styles);
function Comments() {
    const [video, setVideo] = useState(null);
    const { user } = useAuth();
    let [searchParams, setSearchParams] = useSearchParams();
    // const [likeOfVideo, setLikeOfVideo] = useState(0);

    const navigate = useNavigate();
    const handleCloseClick = () => {
        navigate('/');
    };
    useEffect(() => {
        (async () => {
            const List = await getVideoAndCommentById(searchParams.get(`videoId`));
            setVideo(List);
        })();
    }, []);
    // useEffect(() => {
    //     (async () => {
    //         // count like
    //         const getLikeCountOfVideo = await likeCountOfVideo(video.id);
    //         setLikeOfVideo(getLikeCountOfVideo);
    //     })();
    // }, [video]);
    if (!user || video === null) {
        return <h1>doi cho</h1>;
    }

    return (
        <div className={cx('wrapper')}>
            <button className={cx('close-btn')} onClick={handleCloseClick}>
                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </button>
            <div className={cx('browser-mode-container')}>
                <div className={cx('video-container')}>
                    <div className={cx('content-video')}>
                        <div className={cx('video')}>
                            <video src={video.url} controls loop style={{ height: '566px' }}></video>
                        </div>
                    </div>
                </div>
                <div className={cx('content-container')}>
                    <div className={cx('info-container')}>
                        <a href="" className={cx('browse-user-avatar')}>
                            <div className={cx('user-avatar')} style={{ width: '40px', height: '40px' }}>
                                <span>
                                    <img
                                        className={cx('img-avatar')}
                                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/26737cb2c2c15a8f733db60a9b2b32e4~c5_100x100.jpeg?x-expires=1681610400&x-signature=eQ2%2B%2F%2F%2FqMSpRdin%2B6BjR3CLF0u4%3D"
                                        alt=""
                                    />
                                </span>
                            </div>
                        </a>
                        <a href="" className={cx('browse-user-info')}>
                            <span className={cx('browse-user')}>{video.user.nickname}</span>
                            <br />
                            <span className={cx('browse-nickname')}>
                                {video.user.fullname}
                                <span style={{ margin: '0px 4px' }}>.</span>
                                <span>{video.user.created_at.slice(0, 10)}</span>
                            </span>
                        </a>
                        {/* <button type="button" className={cx('btn-follow')}>
                            Follow
                        </button> */}
                    </div>
                    <div className={cx('main-content')}>
                        <span style={{ fontFamily: 'sans-serif' }}>{video.description}</span>
                        <div className={cx('center-row')}>
                            <div className={cx('info-video')}>
                                {/* <button type="button" className={cx('like')}>
                                    <span className={cx('span-icon_like')}>
                                        <FontAwesomeIcon icon={faHeart} style={{ width: '18px', height: '18px' }} />
                                    </span>
                                    <strong className={cx('like-count')}>{likeOfVideo}</strong>
                                </button> */}
                                <button type="button" className={cx('comment')}>
                                    <span className={cx('span-icon_comment')}>
                                        <FontAwesomeIcon
                                            icon={faCommentDots}
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                    </span>
                                    <strong className={cx('comment-count')}>{video.comment.length}</strong>
                                </button>
                            </div>
                            <div className={cx('share-group')}>
                                <a href="">
                                    <Code />
                                </a>
                                <a href="">
                                    <Telegram />
                                </a>
                                <a href="">
                                    <FaceBook />
                                </a>
                                <a href="">
                                    <WhatsApp />
                                </a>
                                <a href="">
                                    <Twitter />
                                </a>
                                <a href="">
                                    <Share />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('comment-list')}>
                        <div className={cx('comment-list-content')}>
                            {video.comment.map((comment, id) => (
                                <div className={cx('info-user-container')} key={id}>
                                    <Link className={cx('browse-user-avatar')}>
                                        <div className={cx('user-avatar')} style={{ width: '40px', height: '40px' }}>
                                            <span>{comment.user.fullname[0]}</span>
                                        </div>
                                    </Link>
                                    <div className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>{comment.user.fullname}</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>{comment.comment}</span>
                                        <span
                                            style={{ marginLeft: '10px', fontFamily: 'cursive' }}
                                            className={cx('time')}
                                        >
                                            {comment.create_at.slice(0, 10)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('bottom-comment-container')}>
                        <div className={cx('comment-container')}>
                            <div className={cx('input-write-content')}>
                                <input type="text" placeholder="Add comment..." style={{ width: '432px' }} />
                            </div>
                        </div>
                        <button type="submit" className={cx('submit')}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Comments;
