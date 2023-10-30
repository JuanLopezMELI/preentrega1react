/* eslint-disable react/prop-types */
import "./ListItem.css"

const ListItemComponent = ({style, content}) => {
  return (
    <li className={style}>
      <a href={content.link}>{content.text}</a>
    </li>
  );
};

export default ListItemComponent;
