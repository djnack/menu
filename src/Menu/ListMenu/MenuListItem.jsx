import { useNavigate } from "react-router-dom";

import MenuListItemAddItem from './MenuListItemAddItem';

import "./MenuListItem.css";

const MenuListItem = ({ even }) => {

    const navigate = useNavigate();
    const baseUrl = window.location.pathname.split('/')[1];

    return (<>
        <div className='col-6 p-2 d-flex align-self-stretch'>
            <div onClick={(ee) => { (!ee.target.dataset.addDisbale) && navigate('/' + baseUrl + '/' + even.url) }} className={`card rounded-4 w-100 border-0${even.disable ? ' bg-disable' : ''}`}>
                <div className={`card bg-transparent rounded-4 border-0${even.disable ? ' bg-disable' : ''}`}>
                    {even.star && !even.disable &&
                        <svg style={true?{transform: 'scaleX(-1)' }:{}} className="star" viewBox="0 0 500 500" width='35px' xmlns="http://www.w3.org/2000/svg">
                            <path style={{ fill: 'rgba(212, 72, 55, 0.9)' }} d="M 11.45 489.391 L 14.5 146.204 C 14.5 24.353 142.7 21.12 142.7 21.12 L 484.019 21.09 L 11.45 489.391 Z"></path>
                            <path d="M 143.342 67.297 L 165.778 131.843 L 234.098 133.235 L 179.645 174.519 L 199.433 239.926 L 143.342 200.895 L 87.251 239.926 L 107.039 174.519 L 52.586 133.235 L 120.906 131.843 Z"
                                style={{ fill: '#fff' }}></path>
                        </svg>
                    }
                    <MenuListItemAddItem even={even} />
                    <img className='rounded-3 mt-2 m-auto' style={even.disable ? { filter: 'grayscale(.9)' } : {}} width={window.screen.width / 2.5 + 'px'} src={even['image_small']} alt="Card" />
                    {(even.off === 0 || !even.off) && <p className={`price-list-relative${even.disable ? ' price-list-bg-d' : ''}`}>{even.price.toLocaleString('fa')}<sup>تومان</sup></p>}
                    {even.off > 0 &&
                        <div className="price-div-list ">
                            <p className={`price-list3${even.disable ? ' price-list-bg-d' : ''}`}><small className="price-list2-small">{even.price.toLocaleString('fa')}</small></p>
                            <p className={`price-list2${even.disable ? ' price-list-bg-d' : ''}`}>{even.off.toLocaleString('fa')}<sup>تومان</sup></p>
                        </div>
                    }
                </div>
                <p className='mx-1 mt-n2 text-center'>{even.title}</p>
            </div>
        </div>
    </>);
}

export default MenuListItem;