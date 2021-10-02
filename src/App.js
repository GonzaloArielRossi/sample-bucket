import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import './App.css'

function App() {

  const greeting = "Welcome to Sample Bucket";
  return (
    <div> 
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
