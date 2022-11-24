import { BrowserRouter, Routes, Route } from 'react-router-dom'
import loadable from "@loadable/component";
import GlobalStyle from 'style/GlobalStyle';
import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import { RecoilRoot } from 'recoil';

const MainPage = loadable(() => import('./Page/Main'))
const DetailPage = loadable(() => import('./Page/Detail'))
const SignUpPage = loadable(() => import('./Page/SignUp'))
const LoginPage = loadable(() => import('./Page/Login'))
const ErrorPage = loadable(() => import('./Page/Error'))


function Router() {
    return (
        <>
        <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/:title' element={<DetailPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
        <Footer />
        </RecoilRoot>
        </>
    )
}

export default Router