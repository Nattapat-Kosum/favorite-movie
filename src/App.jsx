import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Main from './pages/Main';

export const AppContext = React.createContext();

const App = () => {

  const [fav, setFav] = useState([]);

  return (
    <>
      <AppContext.Provider value={{fav, setFav}}>
        <Main/>
      </AppContext.Provider>
    </>
  )
}


export default App
