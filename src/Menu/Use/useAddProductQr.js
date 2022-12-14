import { useRecoilState, useSetRecoilState } from 'recoil';
import { AddProduct, OffBtnAddItemPlus, AtomData } from '../../Atoms';

const useAddProductQr = () => {

    const [allData] = useRecoilState(AtomData);
    const setProduct = useSetRecoilState(AddProduct);
    const setProductCount = useSetRecoilState(OffBtnAddItemPlus);



    const changeProduct = (even) => {

        if (Object.keys(even).length) {

            // Temp list id
            const lists = Object.keys(even).map(e => parseInt(e))

            let item = {}
            let arr = []

            Object.values(allData.products).map(e => {

                if (lists.includes(e.id)) {
                    if (!e.disable) {
                        const id = parseInt(e.id);
                        if (e.count >= even[id]) {
                            item = { ...item, [id]: { count: even[id], path: e.url } }
                            !!(e.count === even[id]) && arr.push(id);
                        }
                    }

                }
            });

            setProduct(item)
            window.localStorage.setItem('product', JSON.stringify({ ...item }));

            setProductCount(arr)
            window.localStorage.setItem('product-count', JSON.stringify(arr));
        }
    }

    return changeProduct;
}

export default useAddProductQr;