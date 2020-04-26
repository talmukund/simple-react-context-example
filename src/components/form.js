import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Conetxt} from '../context';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
}));

export default function BasicTextFields(props) {
const [formData, setFormData] = React.useState({});
  const classes = useStyles();
  const context = React.useContext(Conetxt);

  const handleSubmit = event=>{
    event.preventDefault();
      const data = [...context.data];
      const income = formData.income;
      const expense = formData.expense;
      const price = formData.price;
      data.push([income, expense, price]);
      context.setData(data);
      props.setOpenModal(false)
  }

  const handleChange = e =>{
      const name = e.target.name;
      const newFormData = {...formData};
      newFormData[name] = e.target.value;
      setFormData(newFormData);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
        <TextField id="income" label="income source" variant="outlined" onChange={handleChange} name="income"/>
        </div>
      <div>
      <TextField id="expense" label="expense source" variant="outlined" onChange={handleChange} name="expense" />
      </div>
      <div>
      <TextField id="price" label="price source" variant="outlined" onChange={handleChange} type='number' name="price" />
      </div>
      <Button variant="contained" color="primary" type='submit'>
            submit
            </Button>
    </form>
  );
}