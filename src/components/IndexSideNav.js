import SideNav, {Toggle,NavItem,NavIcon,NavText,}from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
function IndexSideNav() {
  return <SideNav
    onselect={selected=> {
      console.log(selected)
    }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected= "home">
          <NavItem>
            <NavIcon>
              <i className='fa fa-fw fa-home' style={{fontSize: small }}/>
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
      </SideNav.Nav>
    </SideNav>
}
export default IndexSideNav;