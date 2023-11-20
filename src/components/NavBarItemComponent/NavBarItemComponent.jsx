/* eslint-disable react/prop-types */
import {Dropdown} from "@mui/base/Dropdown";
import {MenuButton} from "@mui/base/MenuButton";
import {Menu} from "@mui/base/Menu";
import {MenuItem} from "@mui/base/MenuItem";
import {Link} from "react-router-dom";
import "./NavBarItem.css";

const NavBarItemComponent = ({style, content}) => {
  return (
    <li className={style}>
      {content.categories ? (
          <Dropdown>
            <MenuButton>Products</MenuButton>
            <Menu style={{backgroundColor:"#fbfbfb", borderRadius:"10px"}}>
              {content.categories.map((category, index) => (
                <MenuItem key={index}>
                  <Link to={`category/${category}`}>{category}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Dropdown>
      ) : (
        <Link to={content.link}>{content.text}</Link>
      )}
    </li>
  );
};

export default NavBarItemComponent;
