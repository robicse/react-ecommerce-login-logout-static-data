import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import Error from './pages/error';
// import Table from './table/Table';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import {UserContext} from './UserContext'
import { useState } from 'react';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Welcome</h1>
  //     <Home/>
  //   </div>
  // );

  // return (
  //   <div>
  //     <Table/>
  //   </div>
  // );


  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Navbar/>
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          {/* <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
