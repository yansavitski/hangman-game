import React from "react";
import PropTypes from "prop-types";

import "./GallowTree.scss";

const GallowTree = ({ stage }) => {
  return <div className={`gallow-tree gallow-tree_stage-${stage}`}></div>;
};

GallowTree.propTypes = {
  stage: PropTypes.number.isRequired
};

GallowTree.defaultProps = {
  stage: 0
};

export default GallowTree;
