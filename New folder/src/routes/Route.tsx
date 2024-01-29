import { BrowserRouter, Route, Routes} from 'react-router-dom'
import utils from '@utils/index'
import Home from '@pages/home/Home'
export default function RouteCom() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path='about' element={<>About</>}></Route>
                <Route path='infor' element={<>Infor</>}></Route>
            </Route>
            <Route path='/authen' element={utils.lazyFn(() => import("@pages/authen/Authen.tsx"))()}></Route>
            <Route path='/admin' element={utils.lazyFn(() => import("@pages/admin/Admin.tsx"), localStorage.getItem("token") != null)()}></Route>
        </Routes>
    </BrowserRouter>
  )
}
