import { useRecoilValue } from 'recoil';
import { AddProduct, OffBtnAddItemPlus } from '../../Atoms';
import MenuListItemAddItem from '../ListMenu/MenuListItemAddItem';
import useAddProduct from '../Use/useAddProduct';

import './index.css'

const CartBottom = ({ item }) => {

    const productCount = useRecoilValue(OffBtnAddItemPlus);
    const setAddProduct = useAddProduct();
    const data = useRecoilValue(AddProduct)

    return (<>
        <div onClick={(ee) => { !ee.target.dataset.addDisbale && setAddProduct(item) }
        } className={`bottom-price py-0 px-4 container cart-bottom-btn shadow-footer${productCount.includes(item.id) ? ' bg-gray' : ''}${item.disable ? ' bg-disable' : ''}`}>
            <div className="d-flex justify-content-between pt-1">
                <div className="my-0 text-center">
                    <p className="m-0 cart-bottom-btn-p">افزودن</p>
                </div>
                <div className="my-0 text-center d-flex">

                    {(item.off === 0 || !item.off) && <p className="m-0 cart-bottom-btn-p">{item.price.toLocaleString('fa')}</p>}
                    {item.off > 0 && <p className="m-0 cart-bottom-btn-p">{item.off.toLocaleString('fa')}<small className='px-4 offer-bottom'>{item.price.toLocaleString('fa')}</small></p>}
                    <small className="me-1 cart-bottom-btn-t">تومان</small>

                </div>

            </div>
            {!!data[item.id] && !!data[item.id].count && <div className='cart-bottom-btn-plus'>
                <MenuListItemAddItem even={item} />
            </div>}
        </div>

    </>);
}

export default CartBottom;