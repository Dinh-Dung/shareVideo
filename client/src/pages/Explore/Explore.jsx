import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { getVideoToday } from '~/utils/video-api';
import { useAuth } from '~/hooks/useAuth';
const cx = classNames.bind(styles);
const Explore = () => {
    const [videoToday, setVideoToday] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const list = await getVideoToday();
            setVideoToday(list);
        })();
    }, []);
    const handleClickComment = () => {
        if (user) {
            navigate(`/comment?videoId=${videoToday.id}`);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('category-list')}>
                <h2>Video today</h2>
            </div>
            <div className={cx('explore-item_container')}>
                <div className={cx('explore-item-list')}>
                    {videoToday.map((video, id) => (
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

export default Explore;
