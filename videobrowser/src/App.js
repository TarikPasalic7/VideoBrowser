
import './App.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
 import SearchBar from './components/SearchBar';
 import 'semantic-ui-css/semantic.min.css'
 import {Container,Grid} from 'semantic-ui-react'
 const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=${process.env.REACT_APP_API_KEY}`;

function App() {
const [ytList,setytList]=useState([]);
const [isSelectedVideo,setIsSelectedVideo]=useState([true,false,false,false,false]);
const [SelectedVideo,setSelectedVideo]=useState(null);

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
   list.forEach((element,index) => {
     if(isSelectedVideo[index]===true)
     {
       setSelectedVideo(element);

     }
   });

    }

    fetchMyAPI()
  }, [])
  return (
    <div className="App">
      <SearchBar/>

      <Container className="Appcontainer">
      <Grid>
    <Grid.Column floated='left' width={12} >
    <VideoDetail SelectedVideo={SelectedVideo}/>
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
