import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../store/actions/directory/reselect";
import "./index.scss";
import MenuItem from "./MenuItem";

function HomepageMenu(props) {
  const state = useSelector(state => state);
  const sections = selectDirectorySections(state);

  return (
    <div className="directory-menu">
      {sections.map((item) => {
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
