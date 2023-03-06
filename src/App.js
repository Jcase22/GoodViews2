import './App.css';
import Navbar from './components/Navbar'
import TrendingWeekly from './components/TrendingWeekly'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <TrendingWeekly />
      </header>
    </div>
  );
}

export default App;
