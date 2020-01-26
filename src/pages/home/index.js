import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import NewList from './NewList';
import './Home.css';
import './List.css';

function Home(props) {
  const { list, total } = props;

  return (
    <div className="page-container">
      <NewList />
      {list.items.length > 0 &&
        <List list={list.list} total={total} />
      }
    </div>
  );
}

const mapStateToProps = state => ({
  list: state.list,
  total: state.list.items.reduce((total, item) => total + item.total, 0),
})

export default connect(mapStateToProps, null)(Home);
