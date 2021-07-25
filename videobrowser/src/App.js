
import './App.css';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
 import SearchBar from './components/SearchBar';
function App() {
  return (
    <div className="App">
      <SearchBar/>
      <VideoDetail/>
      <VideoList/>
    </div>
  );
}

export default App;
