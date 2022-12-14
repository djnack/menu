import './index.css'
const Popup = ({ title, p, setShowPopup, callback }) => {
    return (<>
        <div className="popup-bg"></div>
        <div className='popup-body'>
            <i onClick={() => setShowPopup(false)} className="fa-solid fa-xmark icon-close"></i>
            <div>
                <h3> {title}</h3>
                <hr className='mt-0 mb-3' />
                <p>{p}</p>
            </div>
            <div className='text-center mt-5'>
                <button onClick={() => {callback(true);setShowPopup(false)}} className='mx-1 btn bg-success text-white'>بله</button>
                <button onClick={() => setShowPopup(false)} className='mx-1 btn bg-danger text-white'>خیر</button>
            </div>
        </div>
    </>);
}

export default Popup;