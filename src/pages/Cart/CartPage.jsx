import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import styles from './CartPage.module.css';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleQuantity = (item, type) => {
        if (type === 'plus') {
            dispatch(addToCart(item));
        } else {
            if (item.quantity > 1) {
                alert("수량 감소 기능 추가");
            }
        }
    };

    const handleRemove = (id) => {
        if (window.confirm("상품을 삭제하시겠습니까?")) {
            dispatch(removeFromCart(id));
        }
    };

    if(cartItems.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h2>장바구니가 비어있습니다</h2>
                <p>인기 상품을 둘러보고 장바구니에 담아보세요!</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>장바구니</h2>
            <div className={styles.cartContent}>
                <div className={styles.itemList}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.image} alt={item.title} className={styles.itemImg} />
                            <div className={styles.itemInfo}>
                                <h3 className={styles.itemName}>{item.title}</h3>
                                <p className={styles.itemPrice}>${item.price}</p>
                                <div className={styles.quantityControl}>
                                    <button onClick={() => handleRemove(item.id)} className={styles.removeBtn}>삭제</button>
                                    <div className={styles.counter}>
                                        <span>수량: {item.quantity}</span>
                                        <button onClick={() => handleQuantity(item, 'plus')}>+</button>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <h3>주문 요약</h3>
                    <div className={styles.summaryRow}>
                        <span>총 상품 금액</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>배송비</span>
                        <span>무료</span>
                    </div>
                    <hr />
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span>총 결제 금액</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className={styles.orderBtn}>구매하기</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;