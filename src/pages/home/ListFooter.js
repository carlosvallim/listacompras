import React from 'react';

function ListFooter(props) {
  const { total } = props;

  return (
    <div className="list-footer">
      <p>01/01/2020</p>
      <p>{total}</p>
    </div>
  );
}

export default ListFooter;
