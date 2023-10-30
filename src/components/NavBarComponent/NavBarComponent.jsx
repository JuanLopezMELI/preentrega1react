import ListItemComponent from "../ListItemComponent/ListItemComponent";
import NavIconComponent from "../NavIconComponent/NavIconComponent";
import {FaUser, FaSearch} from "react-icons/fa";
import {FaCartShopping} from "react-icons/fa6";

import "./NavBar.css";

const NavBarComponent = () => {
  const items = [
    {title: "Home", link: "#"},
    {title: "About", link: "#"},
    {title: "Products", link: "#"},
    {title: "Contact", link: "#"},
  ];

  const icons = [
    {iconName:"search", link:"", icon: FaSearch},
    {iconName:"cart", link:"", icon: FaCartShopping},
    {iconName:"login", link:"", icon: FaUser},
  ]
  return (
    <nav>
      {items.map((item) => (
        <ListItemComponent
          key={item.title}
          style={"main-list-item"}
          content={{text: item.title, link: item.link}}
        />
      ))}
      <div className="icons-container">
      {icons.map((icon) => (
        <NavIconComponent
          key={icon.iconName}
          icon={<icon.icon/>}
          link={icon.link}
        />
      ))}
      </div>
    </nav>
  );
};

export default NavBarComponent;
