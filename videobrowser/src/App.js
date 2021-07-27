
import './App.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
 import SearchBar from './components/SearchBar';
 import 'semantic-ui-css/semantic.min.css'
 import {Container,Grid} from 'semantic-ui-react'
 const url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=AIzaSyBsdqbzqhlBBJSBoV6lNBS25Qt45JkC9TA'
function App() {
const [ytList,setytList]=useState([]);
  useEffect(() => {
    let list=[];
    async function fetchMyAPI() {
      let response =  await axios(url);
      let items=response.data.items;
     console.log(items)
    items.forEach(item => {
     list.push(item);
    });
    setytList(list);
    }

    fetchMyAPI()
  }, [])
  return (
    <div className="App">
      <SearchBar/>

      <Container className="Appcontainer">
      <Grid>
    <Grid.Column floated='left' width={12} >
    <VideoDetail/>
    </Grid.Column>
    <Grid.Column floated='right' width={3}>
    <VideoList ytList={ytList}/>
    </Grid.Column>
  </Grid>
      
     
  </Container>

     
    </div>
  );
}

export default App;
