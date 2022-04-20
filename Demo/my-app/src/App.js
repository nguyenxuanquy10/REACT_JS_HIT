import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {UseParams} from './compoment/useParams'
import {UseLocation} from './compoment/useLocation'
import ToDo from './compoment/toDoList'
function App() {
  return (
    <div>
      <BrowserRouter>
           <Routes>
              <Route path="product/:userName" element={<UseParams />}/>
              <Route path="" element={<ToDo />}/>
              <Route path='location' element={<UseLocation/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
