import HeaderMenu from "./../Menu/HeaderMenu";
import FooterMenu from './../Menu/FooterMenu/index';

const LayoutMenu = ({children}) => {
    return (<>
        <HeaderMenu />
        {children}
        <FooterMenu />
    </>);
}

export default LayoutMenu;