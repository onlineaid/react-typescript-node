import './dist/style.css';
import './components/Fontawesomeicons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import ProductDetails from './pages/ProductDetails';
import CartViews from './pages/CartViews';

function App() {
  return (
    <div className="App">
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <Header />
        <div className="container">

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/product'>
                <Route path=':id' element={<ProductDetails /> } />
                <Route path='*' element={<NotFoundPage />} />
            </Route>

            <Route path='cart' element={<CartViews />} />

            <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </div>
        <hr />
    </div>
  );
}

export default App;
