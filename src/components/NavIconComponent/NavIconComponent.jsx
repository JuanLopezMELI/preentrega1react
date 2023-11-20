import "./NavIcon.css";
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const NavIconComponent = ({ icon, link}) => {
    return (
        <Link to={link}>
            {icon}
        </Link>
    );
};

export default NavIconComponent;