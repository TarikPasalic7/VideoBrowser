import React,{useState} from 'react'
import { Input,Button } from 'semantic-ui-react'



const SearchBar =({searchVideos,searchVideos1}) =>{
    const [word,setWord] =useState("");
    const search =(e)=>{

        setWord(e.target.value)
        console.log("s",e.target.value)
     }

    const handleKeyPress = (e) => {
        console.log("SDS")
        if(e.key === 'Enter'){
            
          searchVideos(word);
        }
      }

    return (
  <div onKeyPress={handleKeyPress}>
     <Input  placeholder='Search...' onChange={search} />
     <Button content='Search' onClick={()=>searchVideos(word)}   />
    
   

  </div>
)}

export default SearchBar