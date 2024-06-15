import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
{/* Strinct(엄격)모드는 개발단계에서는 모든 컴포넌트 함수를 두번씩 실행함 */}

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
