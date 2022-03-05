import React from "react";
import { menuItem } from "../../constants";
import "./index.scss";
import MenuItem from "./MenuItem";

function HomepageMenu(props) {
  return (
    <div className="directory-menu">
      {menuItem.map((item) => {
        const { title, id, imageUrl, size, linkUrl } = item;
        return (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        );
      })}
    </div>
  );
}

HomepageMenu.propTypes = {};

export default HomepageMenu;
