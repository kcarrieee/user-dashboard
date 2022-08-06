import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Subpage from './pages/Subpage';
import { MainProvider } from './context/mainContext'



function App() {
  return (
    <MainProvider>
      <BrowserRouter>
      <div className='app'>
      <Sidebar />
      <Header/>
      <main className='main__content'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/appointment' element={<Subpage/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      </main>
      </div>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
