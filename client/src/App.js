import './App.css';
import NavBar from './components/Header/NavBar';
import Home from './components/Home/Home';
import DataProvider from './components/ContextProvider/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ParentCart from './components/Cart/ParentCart'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path='' element={ <Home/>} />
       <Route path='product-details/:id' element={ <ProductDetails/> } />
       <Route path='cart' element={<ParentCart/> } />
       </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
