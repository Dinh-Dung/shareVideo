import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '../Popper';
import styles from './SuggestedAccounts.module.scss';
// import AccountPreview from './AccountPreview/AccountPreview';
import { getRandomUsersSuggest } from '~/utils/user-api';
import { useAuth } from '~/hooks/useAuth';
const cx = classNames.bind(styles);
const AccountItem = () => {
    const { user } = useAuth();
    const [randomUsers, setRandomUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const getRamdonUsers = await getRandomUsersSuggest();
            setRandomUsers(getRamdonUsers);
        })();
    }, []);
    // const renderPreview = (props) => {
    //     return (
    //         <div tabIndex="-1" {...props}>
    //             <PopperWrapper>
    //                 {/* {randomUsers.map((user, id) => (
    //                     <>
    //                         {randomUsers.id === user.user_id ? (
    //                             <AccountPreview user={user} key={`user_${id}`} />
    //                         ) : (
    //                             <AccountPreview />
    //                         )}
    //                     </>
    //                 ))} */}
    //             </PopperWrapper>
    //         </div>
    //     );
    // };
    // const handleClickProfile = () => {
    //     if (user) {
    //         navigate(`profile?userId=${randomUsers.id}`);
    //     }
    // };

    return (
        <div>
            {randomUsers.map((user, id) => (
                <Tippy
                    interactive
                    delay={[800, 0]}
                    offset={[-20, 0]}
                    placement="bottom"
                    // render={renderPreview}
                    key={id}
                >
                    <div className={cx('account-item')}>
                        <Link className={cx('browse-user-avatar')}>
                            <div className={cx('user-avatar')} style={{ width: '56px', height: '56px' }}>
                                <span>{user.user_fullname[0]}</span>
                            </div>
                        </Link>
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{user.user_nickname}</strong>
                                {user.tick ? (
                                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                                ) : (
                                    <FontAwesomeIcon icon={faCake} className={cx('check1')} />
                                )}
                            </p>
                            <p className={cx('name')}>{user.user_fullname}</p>
                        </div>
                    </div>
                </Tippy>
            ))}
        </div>
    );
};

AccountItem.propTypes = {};
export default AccountItem;
