import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

// Jita Kana Menerima sebuah props dengan nama todos
const ToDoTable = ({ todos, fnSelesaikanTodo }) => {
  return (
    <Table sx={{ maxWidth: 800 }}>
      {/* untuk bagian si header */}
      <TableHead>
        <TableRow>
          <TableCell>ToDo Id</TableCell>
          <TableCell>ToDo Nama</TableCell>
          <TableCell>ToDo Udah Selesai Belum</TableCell>
          <TableCell>Aksi Yang Bisa Dilakukan</TableCell>
        </TableRow>
      </TableHead>

      {/* untuk bagian si konten */}
      <TableBody>
        {/* Kita Akan Melakukan pembuatan isi dari tabelnya */}
        {/* Berdasarkan props todos */}

        {/* todos = array of object */}
        {/* todo = object */}
        {todos.map(todo => {
          // Kita Akan Membuat Perbarisnya di sini !
          return (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.nama}</TableCell>
              <TableCell>{todo.udahSelesaiBelum ? 'Selesai' : 'Belum Selesai'}</TableCell>
              <TableCell>
                {todo.udahSelesaiBelum ? (
                  ''
                ) : (
                  <Button variant='outlined' onClick={() => fnSelesaikanTodo(todo.id)}>
                    Selesaikan Kerjaan
                  </Button>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ToDoTable;
