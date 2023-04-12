import React from 'react';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/asssets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import SignIn from '~/components/Auth/SignIn';
import { useAuth } from '~/hooks/useAuth';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const {user,signOut } = useAuth()
    // const handleMenuChange = (menuItem) => {
    //     switch (menuItem.type) {
    //         case 'language':
    //             // Handle change language
    //             break;
    //         default:
    //     }
    // };
    const profileRoutes = config.routes.profile;
    const uploadRoutes = config.routes.login
  
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            // to: `${profileRoutes}/${user.nickname}`,
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
            // onclick:signOut()
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src='' alt="No images" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {user ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <Link to={config.routes.upload}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <span className={cx('bagdge')}>12</span>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link>
                                <SignIn/>
                            </Link>
                        </>
                    )}
                    
                    <Menu items={user != null? userMenu : MENU_ITEMS }>
                        {user ? (   
                             <Image className={cx('user-avatar')} alt='' src="" />
                        ) : (
                            <Tippy>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Tippy>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
