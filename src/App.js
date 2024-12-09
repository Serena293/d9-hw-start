import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

//sono i due hook che servono in redux. useSelector permette di leggere un valore sallo store
//(quello che hai salvato in initialState) 
//const esempio = useState((state)=> state.proprietàDaInitialState)


// const dispatch = useDispatch()
//questo verra poi applicato a qualcosa, per esmpio onClick event.
// onClick= {()=> {dispatch({
//type: 'esempio'  <-- qui diamo un nome a qualcosa che vogliamo fare, che poi 
//dobbiamo inclurede nello switch nella funzione mainReducer
//payload:   <-- info aggiuntiva di dispatch
//})}}
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
