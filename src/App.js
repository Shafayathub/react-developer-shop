import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import Accordion from 'react-bootstrap/Accordion';
import logo from './logo192.png';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <NavScroll></NavScroll>
      <div className="mt-3 text-center text-info">
        <h1>
          <img src={logo} className="App-logo" alt="" />
          Developer's Shop
        </h1>
        <h6>Let the system choose and stay relaxed</h6>
      </div>
      <Shop></Shop>
      <Accordion defaultActiveKey="0" className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How React works?</Accordion.Header>
          <Accordion.Body>
            React create interactive UIs. Build encapsulated components that
            manage their own state, then compose them to make complex UIs. Since
            component logic is written in JavaScript instead of templates, you
            can easily pass rich data through your app and keep state out of the
            DOM.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How useState works?</Accordion.Header>
          <Accordion.Body>
            useState is a Hook (function) that allows you to have state
            variables in functional components. You pass the initial state to
            this function and it returns a variable with the current state value
            (not necessarily the initial state) and another function to update
            this value.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default App;
