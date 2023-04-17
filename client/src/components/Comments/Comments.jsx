import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faClose, faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Comment.module.scss';
import { Code, Telegram, FaceBook, WhatsApp, Twitter, Share } from '../Icons';
import { useAuth } from '~/hooks/useAuth';
import SignIn from '../Auth/SignIn';

const customStyles = {
    content: {
        top: '50%',
        left: '56%',
        right: '0',
        bottom: '0',
        marginRight: '0',
        width: '80%',
        height: '80%',
        transform: 'translate(-50%, -50%)',
        padding: '0',
    },
};

Modal.setAppElement('#root');
const cx = classNames.bind(styles);
function Comments() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const { user } = useAuth();

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            {user ? (
                <span onClick={openModal} className={cx('span-icon_comment')}>
                    <FontAwesomeIcon icon={faCommentDots} style={{ width: '24px', height: '24px' }} />
                </span>
            ) : (
                <span className={cx('span-icon_comment')}>
                    <FontAwesomeIcon icon={faCommentDots} style={{ width: '24px', height: '24px' }} />
                </span>
            )}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className={cx('close-btn')}>
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <div className={cx('browser-mode-container')}>
                    <div className={cx('video-container')}>
                        <div className={cx('content-video')}>
                            <div className={cx('video')}>
                                <video
                                    src="http://res.cloudinary.com/sharevideo/video/upload/v1681408000/qlm1u3vamurjr1r3hyjo.mp4"
                                    controls
                                    style={{ height: '566px' }}
                                ></video>
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
                                <span className={cx('browse-user')}>robertdudzic1</span>
                                <br />
                                <span className={cx('browse-nickname')}>
                                    Robert Dudzic
                                    <span style={{ margin: '0px 4px' }}>.</span>
                                    <span>3-16</span>
                                </span>
                            </a>
                            <button type="button" className={cx('btn-follow')}>
                                Follow
                            </button>
                        </div>
                        <div className={cx('main-content')}>
                            <span>
                                ZOMBIES SOUND DESIGN🔊🫣🎧 ZOMBIES SOUND DESIGN🔊🫣🎧ZOMBIES SOUND DESIGN🔊🫣🎧ZOMBIES
                                SOUND DESIGN🔊🫣🎧ZOMBIES SOUND DESIGN🔊🫣🎧ZOMBIES SOUND DESIGN🔊🫣🎧
                            </span>
                            <div className={cx('center-row')}>
                                <div className={cx('info-video')}>
                                    <button type="button" className={cx('like')}>
                                        <span className={cx('span-icon_like')}>
                                            <FontAwesomeIcon icon={faHeart} style={{ width: '18px', height: '18px' }} />
                                        </span>
                                        <strong className={cx('like-count')}>245.4K</strong>
                                    </button>
                                    <button type="button" className={cx('comment')}>
                                        <span className={cx('span-icon_comment')}>
                                            <FontAwesomeIcon
                                                icon={faCommentDots}
                                                style={{ width: '18px', height: '18px' }}
                                            />
                                        </span>
                                        <strong className={cx('comment-count')}>2K</strong>
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
                                <div className={cx('info-user-container')}>
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
                                    <a href="" className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>robertdudzic1</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>
                                            ủa =))) suhyun đi lạc à 🥰{' '}
                                        </span>
                                        <span>10h ago</span>
                                    </a>
                                </div>
                                <div className={cx('info-user-container')}>
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
                                    <a href="" className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>robertdudzic1</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>
                                            ủa =))) suhyun đi lạc à 🥰 ủa =))) suhyun đi lạc à 🥰 ủa =))) suhyun đi lạc
                                            à 🥰ủa =))) suhyun đi lạc à 🥰 ủa =))) suhyun đi lạc à 🥰 ủa =))) suhyun đi
                                            lạc à 🥰
                                            <span style={{ marginLeft: '1rem' }}>10h ago</span>
                                        </span>
                                    </a>
                                </div>
                                <div className={cx('info-user-container')}>
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
                                    <a href="" className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>robertdudzic1</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>
                                            ủa =))) suhyun đi lạc à 🥰{' '}
                                        </span>
                                        <span>10h ago</span>
                                    </a>
                                </div>
                                <div className={cx('info-user-container')}>
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
                                    <a href="" className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>robertdudzic1</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>
                                            ủa =))) suhyun đi lạc à 🥰{' '}
                                        </span>
                                        <span>10h ago</span>
                                    </a>
                                </div>
                                <div className={cx('info-user-container')}>
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
                                    <a href="" className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>robertdudzic1</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>
                                            ủa =))) suhyun đi lạc à 🥰{' '}
                                        </span>
                                        <span>10h ago</span>
                                    </a>
                                </div>
                                <div className={cx('info-user-container')}>
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
                                    <a href="" className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>robertdudzic1</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>
                                            ủa =))) suhyun đi lạc à 🥰{' '}
                                        </span>
                                        <span>10h ago</span>
                                    </a>
                                </div>
                                <div className={cx('info-user-container')}>
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
                                    <a href="" className={cx('browse-user-info-comment')}>
                                        <span className={cx('browse-user-comment')}>robertdudzic1</span>
                                        <br />
                                        <span className={cx('browse-nickname-comment')}>
                                            ủa =))) suhyun đi lạc à 🥰{' '}
                                        </span>
                                        <span>10h ago</span>
                                    </a>
                                </div>
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
            </Modal>
        </div>
    );
}
export default Comments;
