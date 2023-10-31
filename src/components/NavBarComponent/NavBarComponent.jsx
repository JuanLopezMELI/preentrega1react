import ListItemComponent from "../ListItemComponent/ListItemComponent";
import NavIconComponent from "../NavIconComponent/NavIconComponent";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';


import "./NavBar.css";

const NavBarComponent = () => {
  const items = [
    {title: "About", link: "#"},
    {title: "Products", link: "#"},
    {title: "Contact", link: "#"},
  ];

  const icons = [
    {iconName:"search", link:"", icon: SearchIcon},
    {iconName:"login", link:"", icon: PersonIcon}
  ]
  return (
    <nav>
      <img src="./src/assets/logo.png" alt="Kafe logo"/>
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
        <CartWidgetComponent/>
      </div>
    </nav>
  );
};

export default NavBarComponent;
