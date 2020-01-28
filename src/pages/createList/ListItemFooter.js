import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/actions/form';

function ListItemFooter(props) {
  const { item, deleteProduct, startUpdate, list } = props;

  return (
    <div className="list-card-footer">
      <div className="list-card-footer-actions">
        <FontAwesomeIcon icon={faPen} color="#00b0ff" size="1x" onClick={() => startUpdate(list, item)} />
        <FontAwesomeIcon icon={faTrash} color="#e91e63" size="1x" onClick={() => deleteProduct(item.id)} />
      </div>
      <p>Total: R$ {item.total}</p>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null, mapDispatchToProps)(ListItemFooter);
