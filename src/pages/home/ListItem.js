import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem(props) {
  const { icon, text } = props;

  return (
    <div className="list-card-item">
      <FontAwesomeIcon icon={icon} size="sm" />
      <p>{text}</p>
    </div>
  );
}

ListItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItem;
