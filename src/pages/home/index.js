import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './List';
import NewList from './NewList';
import { getListTotal, getOpenedItems, getClosedItems } from '../../store/reducers/list';
import { Creators as ListActions } from '../../store/actions/list';
import './Home.css';
import './List.css';

function Home(props) {
  const { list, total, openedItems, closedItems } = props;

  return (
    <div className="page-container">
      <NewList newList={props.newList} />
      {list.items.length > 0 &&
        <List
          list={list.list}
          total={total}
          openedItems={openedItems}
          closedItems={closedItems}
        />}
    </div>
  );
}

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

Home.propTypes = {
  list: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
