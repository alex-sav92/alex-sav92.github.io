import logo from './logo.svg';
import './App.css';
import About from './About';
import Work from './Work';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I'm <span className='h1'>Alex</span></p>
      </header>
      <div className="content">
        <About />
        <header className="App-header">
          <p><span className='h1'>My work</span> in a few stories</p>
        </header>
        <Work />
        <header className="App-header">
          <p>Let's <span className='h1'>connect</span></p>
          <p><a href='https://www.linkedin.com/in/alexandra-săvescu-8427016a/' target='blank' title="My LinkedIn">Alexandra Savescu</a> on LinkedIn | <a href='https://github.com/alex-sav92' target='blank' title="My Github profile">alex-sav92</a> on Github | <a href='mailto:alexandrabalean92@gmail.com' target='blank' title="Email">alexandrabalean92@gmail.com</a> on email.</p>
        </header>
      </div>
    </div>
  );
}

export default App;
