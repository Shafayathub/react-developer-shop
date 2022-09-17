import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <NavScroll></NavScroll>
      <h1 className="mt-3 text-center">Dev's Shop</h1>
      <Shop></Shop>
    </div>
  );
}

export default App;
