import React from "react";
import HomepageMenu from "../../components/HomepageMenu";
import "./index.scss";

function Homepage(props) {
  return (
    <div className="homepage-wrapper">
      <div className="homepage">
        <HomepageMenu />
      </div>
    </div>
  );
}

Homepage.propTypes = {};

export default React.memo(Homepage);
