//Components
import TopBar from './components/TopBar';
import Background from './components/Background';
import StoreListings from './components/StoreListings';
//Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
