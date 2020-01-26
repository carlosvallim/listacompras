import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ListActions } from '../../store/actions/list';
import Form from './Form';
import ListItem from './ListItem'
import './List.css';

function CreateList(props) {

  const addProduct = (product, list) => {
    props.addProduct(product, list)
  }

  return (
    <div className="page-container">
      <Form addProduct={addProduct} />
      <div className="list-items-container">
        {props.list.items.map(item => <ListItem item={item} key={item.product} />)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
