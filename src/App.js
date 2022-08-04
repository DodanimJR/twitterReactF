import logo from './logo.svg';
import Home from './home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={Home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
