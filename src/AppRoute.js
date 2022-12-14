import { Routes, Route } from 'react-router-dom';
import LayoutMenu from './Layout/LayoutMenu';
import MenuCategory from './Menu/Category/MenuCategory';
import MenuList from './Menu/ListMenu/MenuList';
import CartMenu from './Menu/CartMenu.jsx';
import HomeMenu from './Menu/HomeMenu';
import OrderMenu from './Menu/OrderMenu';
import ScanMenu from './Menu/ScanMenu';

export default function AppRoute() {

    const routeHome = process.env.REACT_APP_ROUTER_HOME;
    const routeOrder = process.env.REACT_APP_ROUTER_ORDRE;
    const routeCategory = process.env.REACT_APP_ROUTER_CATEGORY;
    const routeList = process.env.REACT_APP_ROUTER_LIST;
    const routeQrReader = process.env.REACT_APP_ROUTER_QR_RADER;

    return (<>
        <Routes>
            <Route path={routeHome} element={'home'} />
            <Route path=':id'>
                <Route index element={<HomeMenu />} />
                <Route path={routeOrder} element={<LayoutMenu><OrderMenu /></LayoutMenu>} />
                <Route path={routeQrReader} element={<LayoutMenu><ScanMenu /></LayoutMenu>} />

                {/* برای این که بسه دسته بندی های بیشتری داشت از این روش استفده شده */}
                <Route path={routeCategory}>
                    <Route index element={<LayoutMenu><MenuCategory /></LayoutMenu>} />
                    <Route path='*' element={<LayoutMenu><MenuCategory /></LayoutMenu>} />
                </Route>

                <Route path={routeList}>
                    <Route path='*' element={<LayoutMenu><MenuList /></LayoutMenu>} />
                </Route>

                <Route path='*' element={<LayoutMenu><CartMenu /></LayoutMenu>} />
            </Route>
        </Routes>
    </>);
}