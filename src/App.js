import React from 'react'
import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup'
import Contact from './components/Contact/Contact'


const App = () =>{
	
	return (
		<BrowserRouter>
			<Navbar/>
			<Popup/>
			<Routes>
				<Route exact path='/' element={<Main/>}/>
				<Route exact path='/contact' element={<Contact/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
			
		
	);
}


export default App;