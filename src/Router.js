import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import GlobalStyle from 'style/GlobalStyle';
import Header from 'Components/Header/Header';
import axios from 'axios';

const MainPage = loadable(() => import('./Page/Main'));
const DetailPage = loadable(() => import('./Page/Detail'));
const SignUpPage = loadable(() => import('./Page/SignUp'));
const LoginPage = loadable(() => import('./Page/Login'));
const ErrorPage = loadable(() => import('./Page/Error'));

axios.defaults.baseURL = 'http://localhost:8001'; // 이전 회사에서 사용하던 방법 사용

function Router() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:title" element={<DetailPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
