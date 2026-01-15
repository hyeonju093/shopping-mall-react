import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../store/cartSlice';
import Modal from '../../components/Modal';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("데이터를 불러오는데 실패했습니다", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        if (!isLoggedIn) {
            alert('로그인이 필요한 서비스입니다');
            return;
        }
        dispatch(addToCart(product));
        setIsModalOpen(true);
    };

    if (loading) return <div className={styles.loading}>상품을 불러오는 중...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>인기 상품</h1>
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.price}>${product.price}</p>
                            <button 
                                className={styles.addBtn} 
                                onClick={() => handleAddToCart(product)}
                            >
                                장바구니 담기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default HomePage;