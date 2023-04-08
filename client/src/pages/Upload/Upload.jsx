import React, { useRef } from 'react';
 import classNames from 'classnames/bind';
 import styles from './Upload.module.scss'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'; 
 import Button from '~/components/Button/Button';

 const cx = classNames.bind(styles)
 const Upload = () => {
     const inputRef = useRef(null)

     const onUploadFile = ()=>{
        const file =  inputRef.current.files[0];

     }

     return <>
         <div className={cx('wrapper')}>
             <div className={cx('layout')}>
                <div className={cx('container-layout')}>
                <div className={cx('post-title')}>
                     <span className={cx('title')}>Upload video</span>
                     <div className={cx('sub')}>
                         <span className={cx('sub-title')}>Post a video to your account</span>
                     </div>
                 </div>
                 <div className={cx('content')}>
                 <label htmlFor="upload">
                     <div className={cx('uploader')} >
                         <div className={cx('upload')}>
                             <input type="file" id='upload' style={{display:'none'}} ref={inputRef}/>
                             <div className={cx('upload-card')}>
                                 <FontAwesomeIcon icon={faCloudArrowUp} style={{color:"#939ba9",width:"40px",height:"29px"}}/>
                                 <div className={cx('text-main')}>
                                     <span className={cx('text-main-span')}>Select video to upload</span>
                                 </div>
                                 <div className={cx('text-sub')}>
                                 <span className={cx('text-sub-span')}>Or drag and drop file</span>
                                 </div>
                                 <div className={cx('text-video-info')}>
                                     <div className={cx('tfi1')}><span>MP4 or WebM</span></div>
                                     <div className={cx('tfi2')}><span>720x1280 resolution or higher</span></div>
                                     <div className={cx('tfi3')}><span>Up to 30 minutes</span></div>
                                     <div className={cx('tfi4')}><span>Less than 50 MB</span></div>
                                 </div>
                                 <div className={cx('file-select-button')}>
                                 <Button primary>
                                 Select file 
                             </Button>
                                 </div>
                             </div>
                         </div>
                     </div>
                     </label>
                     <div className={cx('form')}>
                         <div className={cx('caption-wrapper')}>
                             <div className={cx('caption')}>
                                 <div className={cx('caption-title')}>
                                     <span>Caption</span>
                                     <span className={cx('require-font')}>
                                         <span className={cx('first')}>0</span>
                                         /
                                         2200
                                     </span>
                                 </div>
                             </div>
                             <div className={cx('input-write-content')}>
                                 <input type="text" />   
                             </div>
                         </div>

                         <div className={cx('chose-wrapper')}>
                         <div className={cx('chose-title')}>
                                     <span>Who can watch this video</span>
                         </div>
                         <div className={cx('select')} style={{width:'300px',height:'36px'}}>
                             <select name="" id="" >
                                 <option className={cx('option')} value="1">Public</option>
                                 <option className={cx('option')} value="2">Private</option>
                             </select>
                         </div>
                         </div>
                         <div className={cx('button')}>
                             <div className={cx('btn-cancel')}>
                                <Button secondary>Discard</Button>
                             </div>
                             <div className={cx('btn-post')}>
                             <Button success>Post</Button>
                             </div>
                         </div>
                     </div>
                 </div>
                </div>
             </div>
         </div>
     </>;
 };

 export default Upload;
