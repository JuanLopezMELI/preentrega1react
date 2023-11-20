import {Link} from "react-router-dom";
import NavBarItemComponent from "../NavBarItemComponent/NavBarItemComponent";
import NavIconComponent from "../NavIconComponent/NavIconComponent";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import {useCategories} from "../../hooks/useCategories";

import logo from "../../assets/logo.png"
import "./NavBar.css";

const NavBarComponent = () => {
  const {categories} = useCategories();

  const items = [
    {title: "About", link: "/about"},
    {
      title: "Products",
      link: "/",
      categories: categories,
    },
    {title: "Contact", link: "/contact"},
  ];

  const icons = [
    {iconName: "search", link: "/search", icon: SearchIcon},
    {iconName: "login", link: "/login", icon: PersonIcon},
  ];

  return (
    <nav>
      <Link to="/">
        <img
          src={logo}
          alt="Kafe logo"
          className="main-logo"
        />
      </Link>
      {items.map((item) => (
        <NavBarItemComponent
          key={item.title}
          style={"main-list-item"}
          content={{text: item.title, link: item.link, categories: item.categories}}
        />
      ))}
      <div className="icons-container">
        {icons.map((icon) => (
          <NavIconComponent
            key={icon.iconName}
            icon={<icon.icon />}
            link={icon.link}
          />
        ))}
        <CartWidgetComponent />
      </div>
    </nav>
  );
};

export default NavBarComponent;
