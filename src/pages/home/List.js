import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';
import CustomCard from '../../components/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

function List(props) {
  const { list, total, openedItems, closedItems } = props

  return (
    <CustomCard
      containerClass="list-container"
      footer={<ListFooter total={total} />}
      link="/lista/edicao"
    >
      <div>
        <p className="title">{list}</p>
        <div className="list-card-body">
          <ListItem icon={faShoppingBasket} text={`${openedItems} Item(s) Restante(s)`} />
          <ListItem icon={faCheck} text={`${closedItems} Item(s) Comprado(s)`} />
        </div>
      </div>
    </CustomCard>
  );
}

export default List;
