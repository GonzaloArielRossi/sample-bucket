import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
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
