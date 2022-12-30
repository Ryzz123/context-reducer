import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
     {/* Di sini kita ingin membuat todo lagi */}
     {/* ToDoForm dan TodoList (ul li) */}


     {/* Ditampung lagi oleh sebuah container yang lebih atas: ToDo */}
     {/* 2 buah komponen hari ini: */}
     {/* Todoform dan TodoTable */}
     {/* 
      App
        ToDo
          ToDoForm
          ToDoTable
     */}

     <ToDo />
    </div>
  );
}

export default App;
