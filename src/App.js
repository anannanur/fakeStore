
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Products from './components/Products/Products';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [item, setItem ] = useState(0)
    const addItem = () =>{
        setItem(item + 1)
    }

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div className="App">
      <Menubar item={item}></Menubar>
      <Products addItem={addItem}/>
    </div>
  );
}

export default App;
