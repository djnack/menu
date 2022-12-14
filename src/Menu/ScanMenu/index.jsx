import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QrReader } from 'react-qr-reader';

import useAddProductQr from './../Use/useAddProductQr';

import './index.css'

const ScanMenu = () => {


  const [text, setText] = useState();
  const navigate = useNavigate();
  const setproduct = useAddProductQr();
  const routeOrder = process.env.REACT_APP_ROUTER_ORDRE;
  const pathBase = '/' + window.location.pathname.split('/')[1];

  useEffect(() => {
    try {

      let t = text;
      // data row convert to array
      t = t.split(';').map(e => {
        let x = e.split('_')
        if (x[0] === 'o') {
          let y = x[1].split(',')

          let c = {}
          y.map(ee => {
            let z = ee.split(':');
            return c[z[0]] = parseInt(z[1]);
          });
          return [x[0], c]
        }
        return x
      });

      // Array convert to Object
      t = t.reduce((a, v) => ({ ...a, [v[0]]: v[1] }), {});
      setproduct(t.o);
      navigate(pathBase + '/' + routeOrder);

    } catch (error) {

    }
  }, [text])

  return (
    <>
      <div id='qr-class'>
        <div className='qr-bg'></div>
        <QrReader
          constraints={{ facingMode: 'environment' }}
          scanDelay={300}
          style={{ position: 'relative', zIndex: '1' }}
          onResult={(result, error) => {
            if (!!result) {
              setText(result?.text)
            }
          }}
        />
      </div>
    </>
  );
};
export default ScanMenu;
