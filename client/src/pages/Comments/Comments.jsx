// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentDots, faClose, faHeart } from '@fortawesome/free-solid-svg-icons';
// import classNames from 'classnames/bind';
// import { Code, Telegram, FaceBook, WhatsApp, Twitter, Share } from '../../components/Icons';
// import { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { likeCountOfVideo } from '~/utils/like-api';

// import { getVideoAndCommentById } from '~/utils/video-api';
// import styles from './Comment.module.scss';
// import { useAuth } from '~/hooks/useAuth';
// import { Comment } from '~/utils/comment-api';
// import { likeVideo, unlikeVideo, userLiked } from '~/utils/like-api';

// const cx = classNames.bind(styles);
// function Comments() {
//     const [video, setVideo] = useState(null);
//     const [commentText, setCommentText] = useState('');
//     const [comments, setComments] = useState([]);
//     const [likeCount, setLikeCount] = useState(0);
//     const [likeActive, setLikeActive] = useState(false);

//     const { user } = useAuth();
//     // eslint-disable-next-line no-unused-vars
//     let [searchParams, setSearchParams] = useSearchParams();

//     const navigate = useNavigate();
//     const handleCloseClick = () => {
//         navigate(`/`);
//     };

//     useEffect(() => {
//         (async () => {
//             const list = await getVideoAndCommentById(searchParams.get(`videoId`));
//             setVideo(list);
//             setComments(list.comment);
//             // like of video
//             if (user) {
//                 const getLikeCountOfVideo = await likeCountOfVideo(video?.id);
//                 setLikeCount(getLikeCountOfVideo);

//                 const liked = await userLiked(video?.id, user.id);
//                 setLikeActive(liked);
//             }
//         })();
//     }, [user, video?.id]);
//     const handleClickLikeActive = async () => {
//         if (likeActive) {
//             setLikeActive(false);
//             setLikeCount((s) => s - 1);
//             await unlikeVideo(video.id, user.id);
//         } else {
//             setLikeActive(true);
//             setLikeCount((s) => s + 1);
//             await likeVideo(video.id, user.id);
//         }
//     };
//     const handleSubmitComment = async (e) => {
//         e.preventDefault();

//         try {
//             await Comment(user.id, video.id, commentText);

//             const commentData = [
//                 ...comments,
//                 {
//                     comment: commentText,
//                     id: comments[comments.length - 1].id + 1,
//                     create_at: new Date().toISOString(),
//                     user: user,
//                 },
//             ];

//             setComments(commentData);
//             setCommentText('');
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     if (!user || video === null) {
//         return <h1>doi cho</h1>;
//     }
//     return (
//         <div className={cx('wrapper')}>
//             <button className={cx('close-btn')} onClick={handleCloseClick}>
//                 <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
//             </button>
//             <div className={cx('browser-mode-container')}>
//                 <div className={cx('video-container')}>
//                     <div className={cx('content-video')}>
//                         <div className={cx('video')}>
//                             <video src={video.url} controls loop style={{ height: '566px' }}></video>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={cx('content-container')}>
//                     <div className={cx('info-container')}>
//                         <Link href="" className={cx('browse-user-avatar')}>
//                             <div className={cx('user-avatar')} style={{ width: '40px', height: '40px' }}>
//                                 <span>{video.user.fullname[0]}</span>
//                             </div>
//                         </Link>
//                         <Link href="" className={cx('browse-user-info')}>
//                             <span className={cx('browse-user')}>{video.user.nickname}</span>
//                             <br />
//                             <span className={cx('browse-nickname')}>
//                                 {video.user.fullname}
//                                 <span style={{ margin: '0px 4px' }}>.</span>
//                                 <span>{video.user.created_at.slice(0, 10)}</span>
//                             </span>
//                         </Link>
//                         {/* <button type="button" className={cx('btn-follow')}>
//                             Follow
//                         </button> */}
//                     </div>
//                     <div className={cx('main-content')}>
//                         <span style={{ fontFamily: 'sans-serif' }}>{video.description}</span>
//                         <div className={cx('center-row')}>
//                             <div className={cx('info-video')}>
//                                 <button type="button" className={cx('like')}>
//                                     <span
//                                         className={likeActive ? cx('span-icon_like-active') : cx('span-icon_like')}
//                                         onClick={() => handleClickLikeActive()}
//                                     >
//                                         <FontAwesomeIcon icon={faHeart} style={{ width: '18px', height: '18px' }} />
//                                     </span>
//                                     <strong className={cx('like-count')}>{likeCount}</strong>
//                                 </button>
//                                 <button type="button" className={cx('comment')}>
//                                     <span className={cx('span-icon_comment')}>
//                                         <FontAwesomeIcon
//                                             icon={faCommentDots}
//                                             style={{ width: '18px', height: '18px' }}
//                                         />
//                                     </span>
//                                     <strong className={cx('comment-count')}>{comments.length}</strong>
//                                 </button>
//                             </div>
//                             <div className={cx('share-group')}>
//                                 <Link href="">
//                                     <Code />
//                                 </Link>
//                                 <Link href="">
//                                     <Telegram />
//                                 </Link>
//                                 <Link href="">
//                                     <FaceBook />
//                                 </Link>
//                                 <Link href="">
//                                     <WhatsApp />
//                                 </Link>
//                                 <Link href="">
//                                     <Twitter />
//                                 </Link>
//                                 <Link href="">
//                                     <Share />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={cx('comment-list')}>
//                         <div className={cx('comment-list-content')}>
//                             {comments.map((comment, id) => (
//                                 <div className={cx('info-user-container')} key={`user_${id}`}>
//                                     <Link className={cx('browse-user-avatar')}>
//                                         <div className={cx('user-avatar')} style={{ width: '40px', height: '40px' }}>
//                                             <span>{comment.user.fullname[0]}</span>
//                                         </div>
//                                     </Link>
//                                     <div className={cx('browse-user-info-comment')}>
//                                         <span className={cx('browse-user-comment')}>{comment.user.fullname}</span>
//                                         <br />
//                                         <span className={cx('browse-nickname-comment')}>{comment.comment}</span>
//                                         <span
//                                             style={{ marginLeft: '10px', fontFamily: 'cursive' }}
//                                             className={cx('time')}
//                                         >
//                                             {comment.create_at.slice(0, 10)}
//                                         </span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <form onSubmit={handleSubmitComment}>
//                         <div className={cx('bottom-comment-container')}>
//                             <div className={cx('comment-container')}>
//                                 <div className={cx('input-write-content')}>
//                                     <input
//                                         type="text"
//                                         placeholder="Add comment..."
//                                         style={{ width: '432px' }}
//                                         value={commentText}
//                                         onChange={(e) => setCommentText(e.target.value)}
//                                     />
//                                 </div>
//                             </div>
//                             <button type="submit" className={cx('submit')}>
//                                 Post
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Comments;
import React from 'react';
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
import { Comment } from '~/utils/comment-api';

const cx = classNames.bind(styles);
function Comments() {
    const [video, setVideo] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);
    const { user } = useAuth();
    // eslint-disable-next-line no-unused-vars
    let [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const handleCloseClick = () => {
        navigate('/');
    };

    useEffect(() => {
        (async () => {
            const list = await getVideoAndCommentById(searchParams.get(`videoId`));
            setVideo(list);
            setComments(list.comment);
        })();
    }, []);

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        try {
            await Comment(user.id, video.id, commentText);

            const commentData = [
                ...comments,
                {
                    comment: commentText,
                    id: comments[comments.length - 1].id + 1,
                    create_at: new Date().toISOString(),
                    user: user,
                },
            ];

            setComments(commentData);
            setCommentText('');
        } catch (error) {
            console.log(error);
        }
    };

    if (!user || video === null) {
        return <h1>doi cho</h1>;
    }
    console.log(comments);
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
                        <Link href="" className={cx('browse-user-avatar')}>
                            <div className={cx('user-avatar')} style={{ width: '40px', height: '40px' }}>
                                <span>{video.user.fullname[0]}</span>
                            </div>
                        </Link>
                        <Link href="" className={cx('browse-user-info')}>
                            <span className={cx('browse-user')}>{video.user.nickname}</span>
                            <br />
                            <span className={cx('browse-nickname')}>
                                {video.user.fullname}
                                <span style={{ margin: '0px 4px' }}>.</span>
                                <span>{video.user.created_at.slice(0, 10)}</span>
                            </span>
                        </Link>
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
                                    <strong className={cx('comment-count')}>{comments.length}</strong>
                                </button>
                            </div>
                            <div className={cx('share-group')}>
                                <Link href="">
                                    <Code />
                                </Link>
                                <Link href="">
                                    <Telegram />
                                </Link>
                                <Link href="">
                                    <FaceBook />
                                </Link>
                                <Link href="">
                                    <WhatsApp />
                                </Link>
                                <Link href="">
                                    <Twitter />
                                </Link>
                                <Link href="">
                                    <Share />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('comment-list')}>
                        <div className={cx('comment-list-content')}>
                            {comments.map((comment, id) => (
                                <div className={cx('info-user-container')} key={`user_${id}`}>
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
                    <form onSubmit={handleSubmitComment}>
                        <div className={cx('bottom-comment-container')}>
                            <div className={cx('comment-container')}>
                                <div className={cx('input-write-content')}>
                                    <input
                                        type="text"
                                        placeholder="Add comment..."
                                        style={{ width: '432px' }}
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="submit" className={cx('submit')}>
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Comments;
