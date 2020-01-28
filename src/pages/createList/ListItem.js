import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CustomCard from '../../components/CustomCard';
import ListItemFooter from './ListItemFooter';

function ListItem(props) {
  const { item, deleteProduct, toggleProduct, list } = props;
  const { product, quantity, unit, price } = props.item;

  return (
    <CustomCard
      containerClass="list-item"
      link="#"
      footer={<ListItemFooter list={list} deleteProduct={deleteProduct} item={item} />}
      image="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
      action={() => toggleProduct(item.id)}
    >
      <div>
        <div className="list-item-header">
          <Typography variant="subtitle1" component="h2">
            {product}
          </Typography>
          <Checkbox checked={item.checked} />
        </div>
        <Typography component="p">{quantity} {unit}</Typography>
        <Typography component="p">R$ {price}</Typography>
      </div>
    </CustomCard>
  )
}

export default ListItem;