import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { HeaderName } from '../../Atoms';
import LoginMenu from './../LoginMenu/index';

import './HeaderMenu.css'

const HeaderMenu = () => {

    const [showLogin, setShowLogin] = useState(false);
    const nameHader = useRecoilValue(HeaderName);

    return (<>
        <LoginMenu showLogin={showLogin} setShowLogin={setShowLogin} />
        <div className="pt-1 container sticky-top bg-white shadow-header header-height">
            <div className="d-flex justify-content-between">
                <i className="fa-regular fa-bars header-icon-madding "></i>
                <p>{nameHader}</p>
                <i onClick={() => setShowLogin(true)} className="fa-regular fa-user header-icon-madding"></i>
            </div>
        </div>
    </>);
}

export default HeaderMenu;