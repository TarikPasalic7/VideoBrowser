
import './App.css';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
 import SearchBar from './components/SearchBar';
 import 'semantic-ui-css/semantic.min.css'
 import {Container,Grid} from 'semantic-ui-react'
function App() {
  return (
    <div className="App">
      <SearchBar/>

      <Container className="Appcontainer">
      <Grid>
    <Grid.Column floated='left' width={12} >
    <VideoDetail/>
    </Grid.Column>
    <Grid.Column floated='right' width={3}>
    <VideoList/>
    </Grid.Column>
  </Grid>
      
     
  </Container>

     
    </div>
  );
}

export default App;
