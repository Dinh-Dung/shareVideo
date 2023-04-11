import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCommentDots,faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss'
import Button from '~/components/Button/Button';
import config from '~/config';

    
const cx = classNames.bind(styles)
const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list_item-container')}>
                <Link to={config.routes.profile}>
                    <div className={cx('avatar-user')} style={{width:'56px',height:'56px'}}>
                        <span style={{width:'56px',height:'56px'}}>
                            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/46b122ac693478eafe7999fdca35770e~c5_100x100.jpeg?x-expires=1681113600&x-signature=iExtTF6LtrVVojgY94Z4g0X4zPc%3D" alt="" />
                        </span>
                    </div>
                </Link>
                <div className={cx('content-container')}>
                    <div className={cx('content-info')}>
                        <div className={cx('author')}>
                            <Link to={config.routes.profile} className={cx('author-container')}>
                                <h3 className={cx('video-author_uniqued')}>Mohas Bất Ổn </h3>
                                <h4 className={cx('video-author_nickname')}>Bin yet quai dan 🤡</h4>
                            </Link>
                        <Button outlineDanger className={cx('button')} >
                            Follow
                        </Button>
                        </div>
                      
                    </div>
                    <div className={cx('span-text')}>
                           <span> Bai nay chuyen hoi kho nhe cac ban Bai nay chuyen hoi kho nhe cac baBai nay chuyen hoi kho nhe cac ba</span>
                        </div>
                    <div className={cx('content-video')}>
                       <div className={cx('video')}>
                       <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" controls autoPlay="autoplay" style={{width:'289px',height:'517px'}}></video>
                       </div>

                       <div className={cx('action-item')}>
                        <button type='button' className={cx('like')}>
                            <span className={cx('span-icon_like')}>
                          <FontAwesomeIcon icon={faHeart} style={{width:'24px',height:'24px'}}/>
                            </span>
                            <strong className={cx('like-count')}>245.4K</strong>
                        </button>
                        <button type='button' className={cx('comment')}>
                        <span className={cx('span-icon_comment')}>
                          <FontAwesomeIcon icon={faCommentDots} style={{width:'24px',height:'24px'}}/>
                            </span>
                            <strong className={cx('comment-count')}>245</strong>
                        </button>
                        <button type='button' className={cx('share')}>
                        <span className={cx('span-icon_share')}>
                          <FontAwesomeIcon icon={faShare} style={{width:'24px',height:'24px'}}/>
                            </span>
                            <strong className={cx('share-count')}>1234</strong>
                        </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
