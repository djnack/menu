import { Link } from "react-router-dom";

const MenuCategoryItem = ({ even, url=window.location.pathname.split('/')[1] }) => {

    return (<>
        <div className='col-6 p-1 m-0 d-flex align-self-stretch'>
            <Link to={url} className="card rounded-4 border-0 my-1">
                <div className=" img-shadow"></div>
                <img src={even.image} alt="Card" />
                <p className='mx-3 z-index-1 text-end-cart text-light'>{even.title}</p>
            </Link>
        </div>
    </>);
}

export default MenuCategoryItem;