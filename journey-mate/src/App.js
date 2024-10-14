import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Register from './pages/register/Register';
import Book from './pages/book/Book';
import Fly from './pages/fly/Fly';
import Vehicle from './pages/vehicle/Vehicle';

import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddHotelForm from './components/AddHotelForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/admin" element={<AddHotelForm/>}/>
      <Route path="/fly" element={<Fly/>}/>
      <Route path="/carr" element={<Vehicle/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
