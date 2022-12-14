import { useRecoilValue } from 'recoil';
import { AddProduct } from '../../Atoms';

import QRCode from "react-qr-code";

import './index.css';

const QrMenu = ({ setQrshow }) => {

    const width = window.screen.width - 50 + 'px'
    const order = useRecoilValue(AddProduct);
    let qr = 'o_' + Object.entries(order).map(e => { return e[0] + ":" + e[1].count }).join(',');

    return (<>
        <div onClick={() => setQrshow(false)} className="qr">
            <QRCode className="qr-code"
                size={256}
                style={{ width, height: width }}
                value={qr}
                viewBox={`0 0 256 256`}
            />
        </div>
    </>);
}

export default QrMenu;