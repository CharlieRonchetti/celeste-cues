import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import Content from './routes/Content'

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="content" element={ <Content/> } />
      </Routes>
    </div>
  );
}

export default App;
