import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1. Redux 관련 라이브러리와 우리가 만든 store를 임포트합니다.
import { Provider } from 'react-redux'
import { store } from './store/index' // 경로가 맞는지 확인하세요!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Provider로 App을 감싸고 store를 전달합니다. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)