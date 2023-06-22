
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import AddUser from './pages/AddUser';
import UserList from './pages/UserList';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>


<Routes>
<Route path='/adduser' element={<AddUser/>} ></Route>
<Route path='/' element={<UserList/>}></Route>


</Routes>
    </div>
  );
}

export default App;
