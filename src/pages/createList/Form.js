import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import { useInputChange } from '../../components/useInputChange';

const unidades = ['Kilos', 'Litros', 'Unidades'];

function Form(props) {
  /* 1 forma de fazer
  const list = useInputChange();
  const product = useInputChange();
  const quantity = useInputChange();
  const unit = useInputChange();
  const price = useInputChange();
  */

  /* 2 forma de fazer
  const [list, setList] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('')
  const [price, setPrice] = useState('')
  const [showErrors, setShowErrors] = useState(false);
  */

  const [inputValues, setInputValues] = useState({
    list: '', product: '', quantity: '', unit: '', price: '',
  });
  const [showErrors, setShowErrors] = useState(false);

  /*
  const handleSubmit = () => {
    if (!list.value || !product.value || !quantity.value || !unit.value) {
      setShowErrors(true)
    } else {
      props.addProduct({ product, quantity, unit, price }, list)
      setShowErrors(false)
    }
  }
  */

  /*
  const handleSubmit = () => {
    if (!list || !product || !quantity || !unit) {
      setShowErrors(true)
    } else {
      props.addProduct({ product, quantity, unit, price }, list)
      setList('')
      setProduct('')
      setQuantity('')
      setUnit('')
      setPrice('')
      setShowErrors(false)
    }
  }
  */
  const handleSubmit = () => {
    if (!inputValues.list || !inputValues.product || !inputValues.quantity || !inputValues.unit) {
      setShowErrors(true)
    } else {
      const { product, quantity, unit, price, list } = inputValues;
      props.addProduct({ product, quantity, unit, price }, list)
      setInputValues({ list, product: '', quantity: '', unit: '', price: '' })
      setShowErrors(false)
    }
  }

  /*
  const handleChange = e => {
    if (e.target.name === 'list') {
      setList(e.target.value)
    } else if (e.target.name === 'product') {
      setProduct(e.target.value)
    } else if (e.target.name === 'quantity') {
      setQuantity(e.target.value)
    } else if (e.target.name === 'unit') {
      setUnit(e.target.value)
    } else if (e.target.name === 'price') {
      setPrice(e.target.value)
    }
  }
  */
  const handleChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <form className="form-container">
      <div className="form-row">
        <TextField
          id="list"
          name="list"
          label="Lista"
          required
          value={inputValues.list}
          onChange={handleChange}
          error={!inputValues.list && showErrors}
        //{...list}
        />
        <Button variant="outlined" onClick={handleSubmit} color="secondary">Adicionar</Button>
      </div>
      <div className="form-row">
        <TextField
          id="product"
          name="product"
          label="Produto"
          required
          value={inputValues.product}
          onChange={handleChange}
          error={!inputValues.product && showErrors}
        //{...product}
        />
        <TextField
          id="quantity"
          name="quantity"
          label="Quantidade"
          required
          value={inputValues.quantity}
          onChange={handleChange}
          error={!inputValues.quantity && showErrors}
        //{...quantity}
        />
        <TextField
          id="unit"
          name="unit"
          select
          label="Unidade"
          required
          value={inputValues.unit}
          onChange={handleChange}
          error={!inputValues.unit && showErrors}
        //{...unit}
        >
          {unidades.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          id="price"
          name="price"
          label="Preço"
          value={inputValues.price}
          onChange={handleChange}
          //{...price}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
        />
      </div>
    </form>
  )
}

export default Form