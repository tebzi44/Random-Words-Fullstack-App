import './App.css';
import GetRandomWords from './components/GetRandomWords'
import AddWords from './components/AddWords';
import tarielOne from './img/tariel-1.jpg'
import tarielTwo from './img/tariel-2.jpg'
import {Routes, Route, useNavigate} from "react-router-dom"

function App() {
  let navigate = useNavigate()
  const routeChange = (path) => {
    navigate(path)
  }
  return (
    <div className="App">
      <div className="wrapper">
                <img className="img1" src={tarielOne} alt="tarielOne"></img>
                <img className="img2" src={tarielTwo} alt="tarielTwo"></img>
                <Routes>
                  <Route exact path='/' element={<GetRandomWords routeChange={routeChange}/>}></Route>
                  <Route exact path='/add-words' element={<AddWords routeChange={routeChange}/>}></Route>
                </Routes>
      </div>
    </div>
  );
}
export default App;
