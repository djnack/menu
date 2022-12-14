import { useSetRecoilState } from 'recoil';
import { AddProduct, OffBtnAddItemPlus } from '../../Atoms';

const useRemoveAllProduct = () => {

    const setProduct = useSetRecoilState(AddProduct);
    const setProductCount = useSetRecoilState(OffBtnAddItemPlus);

    const changeProduct = () => {

        setProduct({})
        window.localStorage.setItem('product', JSON.stringify({}));

        setProductCount([])
        window.localStorage.setItem('product-count', JSON.stringify([]));
    }

    return changeProduct;

}

export default useRemoveAllProduct;

