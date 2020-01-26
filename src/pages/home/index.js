import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from './List';
import NewList from './NewList';
import { getListTotal } from '../../store/reducers/list';
import './Home.css';
import './List.css';

function Home(props) {
  const { list, total } = props;

  return (
    <div className="page-container">
      <NewList />
      {list.items.length > 0 && <List list={list.list} total={total} />}
    </div>
  );
}

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
});

Home.propTypes = {
  list: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Home);
