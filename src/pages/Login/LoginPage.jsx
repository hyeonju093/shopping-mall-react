import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction} from '../../store/authSlice';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            localStorage.setItem('token', 'fake-jwt-token');
            dispatch(loginAction());
            alert("로그인 성공!");
            navigate('/');
        }
    };

    return (
        <div className={styles.loginWrapper}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>로그인</h2>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력하세요"
                        required
                    />
                </div>
                <button type="submit" className={styles.loginBtn}>로그인하기</button>
            </form>
        </div>
    );
};

export default LoginPage;