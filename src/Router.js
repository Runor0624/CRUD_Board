import { BrowserRouter, Routes, Route } from 'react-router-dom'
import loadable from "@loadable/component";
import GlobalStyle from 'style/GlobalStyle';

const MainPage = loadable(() => import('./App'))
const DetailPage = loadable(() => import('./Page/Detail'))

function Router() {
    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/:title' element={<DetailPage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router