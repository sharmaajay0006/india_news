import { useState } from 'react';
import './App.css';
import DrawerAppBar from './Components/DrawerAppBar';
import News from './Components/News';

function App() {
  const [category, setCategory] = useState('general')
  const getCategory = (category) => {
    setCategory(category)
  }
  return (
    <div>
      <DrawerAppBar handleCategory={getCategory} />
      <News category={category} />
    </div>
  );
}

export default App;
