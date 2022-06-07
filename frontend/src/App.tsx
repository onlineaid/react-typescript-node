import './dist/style.css';
import './components/Fontawesomeicons'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetails from './pages/ProductDetails';
import CartViews from './pages/CartViews';
import Fetch from './components/fetchdata/Fatch'

function App() {
  return (
    <div className="App">
        <Header />
        <div className="container">

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/product'>
                <Route path=':id' element={<ProductDetails /> } />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
            <Route path='/cart' element={<CartViews />} />
            <Route path='*' element={<NotFoundPage />} />

            <Route path='/fetch' element={<Fetch />} />


          </Routes>
        </div>
        <hr />
    </div>
  );
}

export default App;
