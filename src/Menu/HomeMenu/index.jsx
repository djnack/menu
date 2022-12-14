import { useNavigate } from 'react-router-dom';
import './index.css';

const HomeMenu = () => {

    const navigate = useNavigate();

    return (<>
        <div className='div-home' style={{ backgroundImage: "url('./images/appbgburger4.jpg')" }}>
            <div className="div-home-one m-0 p-0">
                <img className='home-img-icon' src="images/logo.png" alt="logo" />
                <div className='btn-home-div-login'>
                    <button type="button" className='home-btn-login1'><p className='p-0 m-0'>عضویت</p></button>
                    <button type="button" className="home-btn-login2"><p className='p-0 m-0'>ورود</p></button>
                </div>
            </div>
            <div className="div-home-two m-0 p-0">
                <div className="row h-100 p-0 m-0">
                    <div onClick={() => { navigate('./category') }} className="col-6 p-3 m-0 pe-2 text-center h25vh ">
                        <button className='btn-home m-0'>
                            <i className="fa-light fa-square-list btn-animation btn-home-icon-list"></i>منو
                        </button>
                    </div>
                    <div className="col-6 p-3 ps-2 m-0 text-center h25vh ">
                        <button className='btn-home m-0'>
                            <i className="fa-light fa-comments-question-check btn-home-icon-list"></i>درباره ما
                        </button>
                    </div>
                    <div className="col-6 p-3 pe-2 m-0 text-center h25vh ">
                        <button className='btn-home m-0'>
                            <i className="fa-light fa-badge-percent btn-home-icon-list"></i>تخفیفات
                        </button>
                    </div>
                    <div className="col-6 p-3 ps-2 m-0 text-center h25vh ">
                        <button className='btn-home m-0'>
                            <i className="fa-light fa-message-smile btn-home-icon-list"></i>نظرات
                        </button>
                    </div>
                </div>
            </div >
        </div >
    </>);
}

export default HomeMenu;