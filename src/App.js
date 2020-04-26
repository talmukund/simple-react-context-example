import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './components/header';
import Container from './components/container'
import Chart from './components/charts';
import { Conetxt } from "./context";
import Modal from './components/modal';
import Form from './components/form'

const useStyles = makeStyles((theme) => ({
  paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      minWidth: 600,
      minHeight: 300
  },
}));

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const openEditModal = (value) => { 
    setOpenModal(value);
  }
  const value = { data, setData };
  const classes = useStyles();
  return (
    <Conetxt.Provider value={value}>
      <header >
        <Header />
      </header>
      <main>
        <section>
          <Container>
          <Grid item>
                    <Paper className={classes.paper}><Chart /></Paper>
          </Grid>
          <Grid item>
          <Button variant="contained" color="primary" onClick={()=>openEditModal(true)}>
            edit data
            </Button>
          </Grid>
          </Container>
        </section>
        <section>
          <Modal openModal={openModal} setOpenModal={openEditModal}>
            <Form setOpenModal={openEditModal}/>
          </Modal>
          </section>
      </main>
    </Conetxt.Provider>
  );
}

export default App;
