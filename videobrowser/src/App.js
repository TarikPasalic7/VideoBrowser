
import './App.css';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
 import SearchBar from './components/SearchBar';
 import 'semantic-ui-css/semantic.min.css'
 import {Container,Grid} from 'semantic-ui-react'
 

function App() {
const [ytList,setytList]=useState([]);
const [isSelectedVideo,setIsSelectedVideo]=useState([true,false,false,false,false]);
const [SelectedVideo,setSelectedVideo]=useState(null);
const [search,setSearch]=useState("surfing");
const [word,setWord] =useState("");



  useEffect(() => {
 
    const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${process.env.REACT_APP_API_KEY}`;
    let list=[];
    async function fetchMyAPI() {
      let response =  await axios(url);
      let items=response.data.items;
  
    items.forEach(item => {
     list.push(item);
    });
    setytList(list);
    if(SelectedVideo===null){
      list.forEach((element,index) => {
        if(isSelectedVideo[index]===true)
        {
          setSelectedVideo(element);
   
        }
      });
    }

    }
   
    fetchMyAPI()
  }, [search])

 const searchVideos =(e,searchTemp)=>{
 e.preventDefault()
  console.log("term",searchTemp)
  setSearch(searchTemp)
  setWord("");

 }
 const selectItem =(itm)=>{
  
  setSelectedVideo(itm)
   

 }
 const searchChange =(e)=>{
        
  setWord(e.target.value)
  console.log("s",e.target.value)
}



  return (
    <div className="App">
      <SearchBar searchVideos={searchVideos} word={word} searchChange={searchChange}/>

      <Container className="Appcontainer">
      <Grid>
    <Grid.Column floated='left' width={12} className="videodetail mg">
    <VideoDetail SelectedVideo={SelectedVideo} />
    </Grid.Column>
    <Grid.Column floated='right' width={3}>
    <VideoList ytList={ytList} selectItem={selectItem}/>
    </Grid.Column>
  </Grid>
      
     
  </Container>

     
    </div>
  );
}

export default App;
