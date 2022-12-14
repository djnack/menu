import './index.css';

const LoginMenu = ({ showLogin, setShowLogin }) => {

    return (<>
        <div className={`bg-login-sider text-center${showLogin ? ' show-login' : ''}`}>
            <i onClick={() => setShowLogin(false)} className="fa-solid fa-xmark icon-login-close"></i>
            <h4 className='mt-4 text-white'>ورود / عضویت</h4>
            <hr className='mb-5 mt-4' />
            <input type="text" className="form-control input-login my-5" placeholder='شماره موبایل' />
            {/* <input type="password" className="form-control input-login" placeholder='گذرواژه' /> */}
            <div className="d-grid gap-2">
                <button className='btn btn-light mb-5 mx-5'>ورود</button>
            </div>
        </div>
    </>);
}

export default LoginMenu;
