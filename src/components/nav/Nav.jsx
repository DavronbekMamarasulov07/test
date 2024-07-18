
import logo from "../../images/logo.svg"
  import { Button, Input } from 'antd';
import { Link, NavLink } from "react-router-dom";
import Container from "../container/Container"
const { Search } = Input;

const onSearch = (value, _e, info) => {
  console.log('Search:', value, _e, info);}


const Nav = () => {
  return (
    <nav className='bg-[#ffffff29] fixed top-0 left-0 w-full z-10 backdrop-blur-3xl '>
      <Container>
        <ul className="flex items-center justify-between py-6">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Search
              placeholder="input sekarch text"
              onSearch={onSearch}
              style={{
                width: 500,
                outline: "none",
              }}
            />
          </li>
          <li>
            <Button type="primary" ><NavLink  end to="/auth" >   Login  </NavLink></Button>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Nav
