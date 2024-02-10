import './App.css';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookDetails/:bookId" element={<BookDetails />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/editbook/:bookId" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
