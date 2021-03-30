// import HeaderAdmin from './headerAdmin/HeaderAdmin'
import FooterAdmin from './footerAdmin/FooterAdmin'
import SideNavPage from './sidenav/SideNavPage'

const Layout=props=>{
    return(
        <>
           {/* <HeaderAdmin/>  */}
           <SideNavPage/>
           {props.children}
           <FooterAdmin/>
        </>
    )
}
export default Layout
 