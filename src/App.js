import './App.css';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';

const App = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val +1)
    }, 100)
  }, [])

  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar value={value}/>
    </div>
  );
}

export default App;
