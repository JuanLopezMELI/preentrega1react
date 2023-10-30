import "./NavIcon.css";

// eslint-disable-next-line react/prop-types
const NavIconComponent = ({ icon, link}) => {
    return (
        <a href={link}>
            {icon}
        </a>
    );
};

export default NavIconComponent;