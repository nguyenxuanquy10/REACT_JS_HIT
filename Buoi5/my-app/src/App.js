import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import {React,useState,useEffect,useRef,useContext,createContext} from 'react'
import {TestRouter1} from './TestRouter1'
import {TestRouter} from './TestRouter'
import {TestRouter2} from './TestRouter2'
export const testUseContext=createContext();
function App() {
  const content='quy'
  return (
   <div>
     <testUseContext.Provider value={content}>
     <Router>
       <Routes>
          <Route path='/'>
              <Route path='testrouter2' >
                 <Route path='testrouter2' element={<TestRouter2 />}/>
              </Route>
          </Route>
          <Route path='/testrouter2' element={<TestRouter2 />}/>
          <Route path='/testrouter' element={<TestRouter />}/>

       </Routes>
       <Link to='/testrouter1'>
         <button onClick={()=>console.log('check')}>TestRouter1</button>
       </Link>
       <Link to='/testrouter'>
         <button>testrouter</button>
       </Link>
       <Link to='/testrouter2/testrouter2'>
         <button>testrouter2</button>
       </Link>
     </Router>
     <TestRouter test={'class1'}/>
     </testUseContext.Provider>
   </div>
   
  );
}

export default App;
