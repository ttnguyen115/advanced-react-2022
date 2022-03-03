import React from "react";
import { menuItem } from "../../constants";
import "./index.scss";
import MenuItem from "./MenuItem";

function HomepageMenu(props) {
  return (
    <div className="directory-menu">
      {menuItem.map(({ title, id, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

HomepageMenu.propTypes = {};

export default HomepageMenu;
