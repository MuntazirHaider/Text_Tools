import './App.css';
import Navbar from './component/Navbar'
import Content from './component/Content';
import Alert from './component/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000000';
      showAlert("Dark mode is activated", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#e9ecefb3';
      showAlert("Light mode is activated", "success");
    }
  }
  return (
    <>
      <Navbar title={"TextTools"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Content showAlert={showAlert} heading={"Enter Text Below"} mode={mode} />
      </div>
    </>
  );
}

export default App;
