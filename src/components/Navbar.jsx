import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../store/authSlice';
import styles from './Navbar.module.css';

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleLogout = () => {
        dispatch(logoutAction());
        alert("로그아웃 되었습니다");
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.logo}>
                    URFIT
                </Link>

                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/" className={styles.link}>홈</Link>
                    </li>
                    <li>
                        <Link to="/cart" className={styles.link}>
                            장바구니
                            {totalQuantity > 0 && <span className={styles.cartCount}>{totalQuantity}</span>}
                        </Link>
                    </li>
                    <li>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className={styles.logoutBtn}>로그아웃</button>
                        ) : (
                            <Link to="/login" className={styles.link}>로그인</Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;