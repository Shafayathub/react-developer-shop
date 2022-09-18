import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <NavScroll></NavScroll>
      <div className="mt-3 text-center text-primary">
        <h1>Dev's Shop</h1>
        <h6>Let the system choose and stay relaxed</h6>
      </div>
      <Shop></Shop>
    </div>
  );
}

export default App;
