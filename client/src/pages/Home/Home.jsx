import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';
import Button from '~/components/Button/Button';
import config from '~/config';
import { getVideoList } from '~/utils/upload-api';
import VideoPlayer from '~/components/Video';
import Comments from '../Comments/Comments';

const cx = classNames.bind(styles);
const Home = () => {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        (async () => {
            const List = await getVideoList();
            setVideoList(List);
        })();
    }, []);
    return (
        <div className={cx('wrapper')}>
            {videoList.map((video, id) => (
                <VideoPlayer video={video} key={`video_${id}`} />
            ))}
        </div>
    );
};

export default Home;
