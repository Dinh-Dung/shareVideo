import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './Profile.module.scss';
import { useAuth } from '~/hooks/useAuth';

const cx = classNames.bind(styles);
const VideoUser = ({ video }) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleClickComment = (id) => {
        if (user) {
            navigate(`/comment?videoId=${id}`);
        }
    };

    return (
        <div className={cx('content-video')} onClick={() => handleClickComment(video.id)}>
            {/* {video.status === 'public' ? ( */}
            <div className={cx('video')}>
                <video
                    controlsList="nofullscreen"
                    src={video.url}
                    controls
                    style={{ width: '256px', height: '456px' }}
                ></video>
            </div>
            {/* ) : (
                <>
                    <h1>null</h1>
                </>
            )} */}
        </div>
    );
};

export default VideoUser;
