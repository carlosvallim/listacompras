import React from 'react';
import CustomCard from '../../components/CustomCard';

function NewList(props) {
  return (
    <CustomCard action={props.newList} containerClass="new-list-container" link="/lista/novo">
      <div>
        <p className="title">Adicionar Novas Listas!</p>
      </div>
    </CustomCard>
  );
}

export default NewList;
