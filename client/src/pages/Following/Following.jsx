import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { getVideoFollower } from '~/utils/video-api';
import { useAuth } from '~/hooks/useAuth';
const cx = classNames.bind(styles);
const Following = () => {
    const [videoFollower, setVideoFollower] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            if (user) {
                const list = await getVideoFollower(user.id);
                setVideoFollower(list);
            }
        })();
    }, []);
    const handleClickComment = () => {
        if (user) {
            navigate(`/comment?videoId=${videoFollower.id}`);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('category-list')}>
                <h2>Video of Follower</h2>
            </div>
            <div className={cx('following-item_container')}>
                <div className={cx('following-item-list')}>
                    {videoFollower.map((video, id) => (
                        <div className={cx('content-video')} key={id} onClick={handleClickComment}>
                            <div className={cx('video')}>
                                <video
                                    src={video.url}
                                    controls
                                    style={{ width: '282px', height: '517px', borderRadius: '10px' }}
                                ></video>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Following;
