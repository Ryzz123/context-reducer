// Import si react
// Harus menggunakan useState
import React, { useEffect, useReducer } from 'react';
import ToDoForm from './ToDoForm';
import ToDoTable from './ToDoTable';

import { Typography } from '@mui/material';

// import Tulisan from './Tulisan';

// import si toDoReducer
import ToDoReducer from '../reducer/ToDoReducer';

// diluar function (initial datanya)
const todosAwal = [
  { id: 1, nama: 'Review React', udahSelesaiBelum: true },
  { id: 2, nama: 'Belajar Nge-State', udahSelesaiBelum: false },
  { id: 3, nama: 'Belajar Nge-Component', udahSelesaiBelum: false },
]

// Kita Bikin si componentnya (functional)
const ToDo = () => {

  // useReducer !
  const [todos, dispatch] = useReducer(ToDoReducer, todosAwal);

  // Kita harus memiliki sebuah fungsi yang digunakan untuk menambah si todos
  const tambahTodos = todoYangBaru => {
    dispatch({
      type: "nambahin",
      name: todoYangBaru,
    })
  };

  const selesaikanSebuahTodo = idTodoYangInginDiSelesaikan => {
    dispatch({
      type: 'selesaiin',
      id: idTodoYangInginDiSelesaikan,
    })
  };

  // di development useeFfect ini PERTAMA KALI TERJADI, AKAN TERPANGGIL 2 KALi !
  // Pertama di mounting akab=n terpanggil 1 kali
  // unMounting(di destroy) kemudian mounting sekali lagi
  useEffect(
    // callback (fungsi)
    () => {
        // oh di dalam sini kita bisa menggunakan si DOM
        // kalau  ingin fetch data bisa fetch data
        let titleYangAkanBerubah = `Jumlah Todos: ${todos.length}`;
        console.log(titleYangAkanBerubah);

        document.title = titleYangAkanBerubah;
    },
    // kalau misalnya kita lagi ambil data dari luar
    // awalnya pasti 0
    // tiba tiba datanya ada(> 0)
    // kalau tidak hati hati menggunakan useEffect
    // bisa terjadi INFINITE CALL
    // Kalo dikosongin maka useEffect dipanggil satu kali saja
    [todos.length]
  )

  // render
  return (
    <>
      <Typography variant="h5">Sebuah Aplikasi ToDo</Typography>

      {/* Kita Akan memberikan si fungsi tambahTodos ke dalam TodoForm */}
      <ToDoForm fnTambahTodos={tambahTodos} />

      {/* Kita Harus Melempar si todos ke Dalam ToDoTable */}
      {/* dengan menggunakan props */}

      {/* gunakan props lagi untuk mengirimkan fungsi selesaikanSebuahTodo */}
      <ToDoTable todos={todos} fnSelesaikanTodo={selesaikanSebuahTodo} />

      {/* <Tulisan> */}
        {/* Di sini saya kasih si "children" / nge-slot si "children" / bikin HOC */}
        {/* <h3>Sesuatu</h3> */}
      {/* </Tulisan> */}
    </>
  );
};

// Bisa Digunakan ditempat lain
export default ToDo;
