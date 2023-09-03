import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './NavBar/Nav';
import HomePage from './HomePage/HomePage';
import History from './History/History';
import WordDetails from './wordDetails';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/history/:word' element={<WordDetails />} /> {/* New route */}
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
