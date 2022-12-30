// 2 parameter: state, action
export default function ToDoReducer(todos, action) {
  // kondisi berdasarkan property di dalam action <--- Object

  // ASUMSI property di dalam action yang bersifat kondisi namanya adalah "type"
  switch (action.type) {
    case 'nambahin':
      const idYangBaru = todos[todos.length - 1].id + 1;

      // ASUMSI pada saat mnggunakan action.type nambahin
      // HARUS memiliki action.name
      const objectTodoYangBaru = {
        id: idYangBaru,
        nama: action.name,
        udahSelesaiBelum: false,
      };

      // RETURN si state yaang baru
      return [...todos, objectTodoYangBaru];

    case 'selesaiin':

      // ASUMSI pada saat menggunakan action.type selesaiin
      // HARUS memiliki action.id

      // RETURN si state yang baru
      return todos.map(todo => {
        if (todo.id === action.id) {
          todo.udahSelesaiBelum = true;
        }

        return todo;
      });

    //   return arrayOfObjectTodosYangBaru;

    // apabila aksi yang dilakukan adalah salah
    default: {
        // berikan error
        throw Error("Unknown Action")
    }
  }
}
