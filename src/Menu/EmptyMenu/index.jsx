import './index.css';

const EmtpyMenu = () => {
    return (<>
        <div className="empty-list-div">
            <i className="fa-light fa-inbox-full empty-list-icon"></i>
            <p className="empty-list-text">
                موردی یافت نشد
            </p>
        </div>
    </>);
}

export default EmtpyMenu;