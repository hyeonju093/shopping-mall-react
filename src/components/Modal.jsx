import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3>장바구니에 상품이 담겼습니다</h3>
                <p>장바구니로 이동하시겠습니까?</p>
                <div className={styles.btnGroup}>
                    <button className={styles.continueBtn} onClick={onClose}>
                        계속 쇼핑하기
                    </button>
                    <button className={styles.cartBtn} onClick={() => navigate('/cart')}>
                        장바구니 이동
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;