import logo from './logo.svg';
import './App.css';
import Header from './header';
import Items from './Items';
import { Provider } from 'react-redux';
import {store} from './store'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CartProducts from './CartProducts';
function App() {
  return (
    <>
    <Provider store={store}>
      <Router basename="/Trefelo-Assignment">
      <Header/>
    
        <Routes>
        <Route exact path="/Trefelo-Assignment" element={<Items/>}/>
          <Route exact path="/cart" element={<CartProducts/>}/>
    
    </Routes>
    </Router>
    
    </Provider>
    </>
  );
}

export default App;
