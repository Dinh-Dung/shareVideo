import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
const cx = classNames.bind(styles);
export const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <h2>Slidebar</h2>
        </aside>
    );
};
