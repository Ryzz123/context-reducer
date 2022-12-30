// Import si TextField
// Import Button Dari si MUI
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

// deifinisikan functional componentnya
const ToDoForm = ({ fnTambahTodos }) => {
  // Kita harus memiliki suatu state untuk menampung input value dari input
  const [inputData, setInputData] = useState('');

  // Fungsi untuk menhandle perubahan dari si input
  const formInputOnChangeHandler = event => {
    // Ambil Dari "Dom"
    setInputData(event.target.value);
  };

  // Fungsi Untuk Mensubmit Formnya
  const formOnSubmitHandler = event => {
    // supaya tidak refresh
    // "Tolong Keluar dari behavior normal anda !"
    event.preventDefault();

    // TODO: Kita Akan Tambahkan sesuatu disini !
    fnTambahTodos(inputData);

    // Kosongin isi dari input data
    setInputData("");
  };

  return (
    <form style={{ margin: '0.5em 0em' }} onSubmit={formOnSubmitHandler}>
      <TextField
        type="text"
        label="Input ToDo Yang baru"
        style={{ marginRight: '0.5em' }}
        value={inputData}
        variant="filled"
        onChange={formInputOnChangeHandler}
        size="small"
      />
      <Button variant='contained' size='large' type="submit">Tambah ToDo</Button>
    </form>
  );
};

export default ToDoForm;
