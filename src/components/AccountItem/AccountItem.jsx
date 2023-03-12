import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0db5bbb8fa6536f19ff3ddec3f400d6d~c5_100x100.jpeg?x-expires=1678593600&x-signature=cgrTIVqyMgrEP3elwnAdfwV7PEs%3D"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Dinh Van Dung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('username')}>dinhvandung</span>
            </div>
        </div>
    );
}

export default AccountItem;
