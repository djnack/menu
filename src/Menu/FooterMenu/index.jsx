import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { AddProduct } from "../../Atoms";
import './FooterMenu.css';

const FooterMenu = () => {

    const routeOrder = process.env.REACT_APP_ROUTER_ORDRE;
    const routeCategory = process.env.REACT_APP_ROUTER_CATEGORY;
    const routeQrReader = process.env.REACT_APP_ROUTER_QR_RADER;
    const pathBase = '/' + window.location.pathname.split('/')[1];
    const navigate = useNavigate();

    const product = useRecoilValue(AddProduct);
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(Object.values(product).reduce((a, b) => a + b.count, 0))
    }, [product])

    return (<>
        <div className="bottom-fixed container bg-white shadow-footer">
            <div className="d-flex justify-content-between">
                <div onClick={() => navigate(pathBase)} className="my-0 text-center w-25">
                    <i className="fa fa-home"></i>
                    <p className="m-0 fs-10">HOME</p>
                </div>
                <div onClick={() => navigate(pathBase + '/' + routeCategory)} className="my-0 text-center w-25">
                    <i className="fa fa-cutlery"></i>
                    <p className="m-0 fs-10">MENU</p>
                </div>
                <div onClick={() => navigate(pathBase + '/' + routeQrReader)} className="my-0 text-center w-25">
                    <i className="fa-regular fa-barcode-read"></i>
                    <p className="m-0 fs-10">SCAN</p>
                </div>
                <div className="my-0 text-center w-25">
                    <i className="fa-solid fa-clock"></i>
                    <p className="m-0 fs-10">PICKUP</p>
                </div>
                <div onClick={() => navigate(pathBase + '/' + routeOrder)} className="my-0 text-center w-25">
                    <i className="fa fa-shopping-cart">{!!count && <small className="count-order">{count}</small>}</i>
                    <p className="m-0 fs-10">MY ORDER</p>
                </div>
            </div>
        </div>
    </>);
}

export default FooterMenu;