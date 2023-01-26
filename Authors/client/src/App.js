import Main from './views/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Details from './views/Details';
import UpdateAuthor from './components/UpdateAuthor';
import AddAuthor from './components/AddAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/update/:_id" element={<UpdateAuthor />}/>
        <Route path="/author" element={<AddAuthor />}/>
      </Routes>
    </div>
  );
}

export default App;
