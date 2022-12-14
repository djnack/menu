import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { AtomData, HeaderName } from '../../Atoms';
import StringMoreHeader from '../../Other/StringMoreHeader';
import MenuCategoryItem from './MenuCategoryItem';

const MenuCategory = () => {

    const routeCategory = process.env.REACT_APP_ROUTER_CATEGORY;
    const routeList = process.env.REACT_APP_ROUTER_LIST;

    const location = useLocation()
    const data = useRecoilValue(AtomData);
    let emty = { ...data };
    const baseUrl = window.location.pathname;
    const url = baseUrl.split('/')
    const baseSubUrl = url[1];


    const setNameHader = useSetRecoilState(HeaderName);

    if (url.length > 3) {
        const subUrl = url.filter(e => !(e === '' || e === routeCategory || e === baseSubUrl));
        subUrl.map(e => emty = emty.categores[e])
    }

    useEffect(() => {
        setNameHader(StringMoreHeader(emty.title || 'دسته بندی'))
        console.log('object');
    }, [location])


    return (<>
        <div key={location.pathname} className="pb-4 container animate__slideInRight">
            <div className="row px-1 mb-4">
                {Object.values(emty.categores).map(e => {

                    const category = (!!e.categores && !!Object.values(e.categores).length) ? e.categores : 0;
                    let url3 = '';
                    if (url.length > 3) {
                        url3 = !!category ? baseUrl + '/' + e.url : '/' + baseSubUrl + '/' + routeList + '/' + e.url;
                    } else {
                        url3 = !!category ? '/' + baseSubUrl + '/' + routeCategory + '/' + e.url : '/' + baseSubUrl + '/' + routeList + '/' + e.url;
                    }

                    return < MenuCategoryItem even={e} url={url3} key={Math.random()} />
                })}
            </div>
        </div>
    </>);
}

export default MenuCategory;