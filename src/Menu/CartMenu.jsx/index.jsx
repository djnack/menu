import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { AtomData, HeaderName } from '../../Atoms';

import ImageCartMenu from './ImageCartMenu';
import CartBottom from './CartBottom';
import StringMoreHeader from '../../Other/StringMoreHeader';

const CartMenu = () => {
    const navigate = useNavigate();
    const routeCategory = process.env.REACT_APP_ROUTER_CATEGORY;
    const setNameHader = useSetRecoilState(HeaderName);

    const data = useRecoilValue(AtomData)
    const baseSubUrl = window.location.pathname.split('/')[1]
    const baseUrl = window.location.pathname.split('/')[2]

    const item = !!data.products[baseUrl] ? data.products[baseUrl] : '';

    useEffect(() => {
        setNameHader(StringMoreHeader(item.title))

        if (item === '')
            navigate('/' + baseSubUrl + '/' + routeCategory)

    }, [baseSubUrl, item, navigate, routeCategory])

    return (<>
        {!!item && <div className="container pb-5 animate__slideInRight">
            <div className="row mb-8">
                <div className="col-12 p-0">
                    <ImageCartMenu images={item.image} />
                </div>
                <h4>{item.title}</h4>
                <p className='text-justify'>{item.description}</p>
            </div>
        </div>}  
                      <CartBottom item={item} />

    </>);
}

export default CartMenu;