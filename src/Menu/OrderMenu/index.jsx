import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AddProduct, AtomData, HeaderName } from '../../Atoms';

import EmtpyMenu from './../EmptyMenu/index';
import MenuListItemAddItem from './../ListMenu/MenuListItemAddItem';
import QrMenu from './../QrMenu';
import Popup from '../../Other/Pupup/Pupup';
import useRemoveAllProduct from './../Use/useRemoveAllProduct';
import StringMoreHeader from '../../Other/StringMoreHeader';

import './index.css';

const OrderMenu = () => {

    const allProduct = useRecoilValue(AtomData);
    const order = useRecoilValue(AddProduct);
    const [showPopup, setShowPopup] = useState(false)
    const [popup, setPopup] = useState(false)
    const removeAllProduct = useRemoveAllProduct()
    const setNameHader = useSetRecoilState(HeaderName);


    useEffect(() => {
        setNameHader(StringMoreHeader('سبد'))

        if (popup) {
            removeAllProduct()
            setPopup(false)
        }
    }, [popup])


    const allItem = Object.values(order).map(e => {

        const count = e.count;
        const path = e.path;

        const item = allProduct.products[path];
        const price = item.off || item.price

        return [item, count * price];
    }
    );

    const allPrice = allItem.reduce((a, b) => a + b[1], 0);
    const baseUrl = window.location.pathname.split('/')[1];

    const [qrShow, setQrshow] = useState(false);

    return (<>
        <div className=" m-0 pb-4 container animate__slideInRight">
            <div className="row p-2 mb-7">

                {!allItem.length && <EmtpyMenu />}

                {!!allItem.length && allItem.map(ee => {
                    ee = ee[0]
                    return <div key={Math.random()} className='col-12 rounded-2 d-flex bg-white p-2 mb-2'>
                        <Link to={'/' + baseUrl + '/' + ee.url} className='m-0 p-0 d-flex'>
                            <img className='rounded-2' src={ee['image_small']} alt='' height='70px' />
                            <div className='d-flex align-items-center'>
                                <small className='m-2 pe-0'>{ee.title}</small>
                                {/* <sub className='ms-2'>test</sub> */}
                            </div>
                        </Link>
                        <div className='add-order'>
                            <MenuListItemAddItem even={ee} />
                            <p className='price-order'>
                                {ee['price'].toLocaleString('fa')}<small className="price-order-symbole">تومان</small>
                            </p>
                        </div>
                    </div>
                })}
                {!!allItem.length && <button onClick={() => setShowPopup(true)} className='empty-order'>خالی کردن سبد</button>}



            </div>
        </div>   
                     {!!allItem.length && qrShow && <QrMenu setQrshow={setQrshow} />}

        {!!allItem.length && showPopup && <Popup title={'خالی کردن سبد'} p={'آیا میخواید سبد را خالی کنید'} setShowPopup={setShowPopup} callback={setPopup} />}

        {!!allItem.length && <Link onClick={() => setQrshow(true)} className='total-price d-flex justify-content-between ps-5 pe-3'>
            <p><i className="fa-light fa-qrcode"></i>نمایش کد</p>
            <p>{allPrice.toLocaleString('fa')}<sup>تومان</sup></p>
        </Link>}
    </>);
}

export default OrderMenu;