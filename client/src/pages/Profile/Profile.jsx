import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '~/hooks/useAuth';
import { getUserVideoList } from '~/utils/upload-api';
import { getProfileAndVideoByNickname } from '~/utils/user-api';
import { likeCountOfVideo } from '~/utils/like-api';
import { getUserFollowers } from '~/utils/user-api';
import { getFollowerOfUser } from '~/utils/follow-api';
const cx = classNames.bind(styles);
const Profile = () => {
    const { user } = useAuth();
    let [searchParams, setSearchParams] = useSearchParams();
    const [videoUserList, setVideoUserList] = useState([]);
    const [userProfile, setUserProfile] = useState(user);
    const [likeCount, setLikeCount] = useState(0);
    const [followingAcounts, setFollowingAcounts] = useState(0);
    const [followerAcount, setFollowerAcount] = useState(0);

    const nickname = searchParams.get(`nickname`);

    useEffect(() => {
        (async () => {
            if (!nickname) {
                if (!user) return;

                const List = await getUserVideoList(user.id);
                setVideoUserList(List);
            } else {
                const profileData = await getProfileAndVideoByNickname(nickname);
                setVideoUserList(profileData.video);
                setUserProfile(profileData);
            }
        })();
    }, [user, nickname]);

    useEffect(() => {
        (async () => {
            if (user && userProfile) {
                const getLikeCountOfVideo = await likeCountOfVideo(userProfile.id);
                setLikeCount(getLikeCountOfVideo);
                const getFollowingUsers = await getUserFollowers(userProfile.id);
                setFollowingAcounts(getFollowingUsers);

                const getFollowerUser = await getFollowerOfUser(userProfile.id);
                setFollowerAcount(getFollowerUser);
            }
        })();
    }, [userProfile]);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('layout-user')}>
                    <div className={cx('share-info')}>
                        <div className={cx('user-avatar')} style={{ width: '116px', height: '116px' }}>
                            <span className={cx('span-avatar-user')}>
                                {userProfile ? userProfile?.fullname[0] : 'no img'}
                            </span>
                        </div>
                        <div className={cx('user-title')}>
                            <h2 className={cx('nickname-user')}>{userProfile ? userProfile.nickname : 'nickname'}</h2>
                            <h1 className={cx('user-name')}>{userProfile ? userProfile.fullname : 'fullname'}</h1>
                            <div className={cx('edit-profile')}>
                                <Button leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}>Edit profile</Button>
                            </div>
                        </div>
                    </div>
                    <h3 className={cx('counts-info')}>
                        <div className={cx('number-following')}>
                            <strong title="Following">{followingAcounts.length}</strong>
                            <span datatype="follwing" className={cx('count-following')}>
                                Following
                            </span>
                        </div>
                        <div className={cx('number-follower')}>
                            <strong title="Followers">{followerAcount.length}</strong>
                            <span datatype="follower" className={cx('count-follower')}>
                                Followers
                            </span>
                        </div>
                        <div className={cx('number-like')}>
                            <strong title="Likes">{likeCount}</strong>
                            <span datatype="likes" className={cx('count-like')}>
                                Likes
                            </span>
                        </div>
                    </h3>
                    <h2 className={cx('user-bio')}> No bio yet.</h2>
                </div>
            </div>
            <div className={cx('layout-main')}>
                <div className={cx('tab')}>
                    <p className={cx('videos-tab')}>
                        <span>Videos</span>
                    </p>
                    <p className={cx('public-tab')}>
                        <FontAwesomeIcon icon={faLock} />
                        <span style={{ marginLeft: '1rem' }}>Private</span>
                    </p>
                </div>

                <div className={cx('video-column')}>
                    <div className={cx('user_video-list')}>
                        {videoUserList.map((video, id) => (
                            <div className={cx('content-video')} key={`video${id}`}>
                                <div className={cx('video')}>
                                    <video
                                        controlsList="nofullscreen"
                                        src={video.url}
                                        controls
                                        style={{ width: '256px', height: '456px' }}
                                    ></video>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
