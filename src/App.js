import React from 'react';

import MainPg from './pages/MainPg';
import './App.css';

import Routes from './routes';
import AddFacebook from './pages/AddFacebook';


function App() {
	return (
		<div className="App">

			<Routes />	
		
			<div className="designs">{MainPg, AddFacebook}</div>

		</div>
	);
}


export default App;
