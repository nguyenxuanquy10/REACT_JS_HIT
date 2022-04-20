import './App.css';
import Content from './Content'
import {useRef,useState,createContext} from 'react'
import Demo from './Ref'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import TestRoute   from './TestRoute';
export const ThemeContext=createContext();
export const DemoContext=createContext()
function App() {
//   const [theme,setTheme]=useState('dark'); 
//   const [count,setCount]=useState(60)

//   let timeId=useRef(); 
//   const handleStart=()=>{
//       timeId.current=setInterval(()=>{
//          setCount(prveCount=>prveCount-1)
//       },1000)
//   }
//   const handleStop=()=>{
//     clearInterval(timeId.current)
//   }
//   const toggleTheme =()=>{
//        setTheme(theme==='dark' ? 'light': 'dark')
//   }
  return (
   //  <BrowserRouter>
   //  <ThemeContext.Provider value={theme}>
   //      <div style={{padding:20}}>
   //          <button onClick={()=>toggleTheme()}>Toggle them</button>
   //          <Content theme={theme}/>
   //          <h1> {count}</h1>
   //          <button onClick={handleStart}>
   //             start
   //          </button>
   //          <button onClick={handleStop}>
   //             stop
   //          </button>
   //      </div>
   //  </ThemeContext.Provider>
   
   //  <Link to='/demo'>
   //    <button>
   //       Click demo
   //    </button>
   //  </Link>
   //  <Link to='/content'>
   //    <button>
   //       Click content
   //    </button>
   //  </Link>
   //  <Link to='/product/tivi'>
   //     <button>
   //        Click product 
   //     </button>
   //  </Link>
   //  <Link to='product/sdfdsdsfds'>
   //     <button>Click slug</button>
   //  </Link>
   //  </BrowserRouter>
   //  <div>
   //    <Demo />
 //   </div>
     <div>
      <BrowserRouter>
          <Routes>
               <Route path='/demo' element={<Demo />}/>
               <Route path='/content' element={<Content />}/>
               <Route path='/product'>
                  <Route path='/product/tivi' element={<Content />}/>
                  <Route path='/product/:slug' element={<TestRoute />}></Route>
               </Route>
        </Routes>
    <Demo />

    </BrowserRouter>
     </div>
  );
}

export default App;
