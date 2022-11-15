import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Books from './Pages/Home/Books/Books';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import BooksCart from './Pages/Home/Books/BooksCart';
import AddBook from './Pages/Home/Books/AddBook/AddBook';
import ManageBooks from './Pages/Home/Books/ManageBooks/ManageBooks';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import BookDetail from './Pages/Home/Books/BookDetail/BookDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register />} />
        <Route path='/books' element={<Books></Books>} />
        <Route path='/book/:id' element={<PrivateRoute><BookDetail/></PrivateRoute>}/>
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/manage-book' element={<ManageBooks />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booksCart' element={<BooksCart />} />
        {/* <Route path='/' element={<Home></Home>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
