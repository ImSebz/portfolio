import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects} from './components/Projects';
import React from 'react';

function App() {
  return (
    <>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='projects' element={<Projects />}/>
        </Route>
      </Routes>

    </React.StrictMode>
    </>
  );
}

export default App;

