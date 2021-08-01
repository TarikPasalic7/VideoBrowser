import React from 'react'
import { Input,Button } from 'semantic-ui-react'



const SearchBar =({searchVideos,word,searchChange}) =>{


    const handleKeyPress = (e) => {
        
        console.log("SDS")
        if(e.key === 'Enter'){
            
          searchVideos(e,word);
        }
      }

    return (
  <form onKeyPress={handleKeyPress} onSubmit={(e)=>searchVideos(e,word)}>
     <Input  placeholder='Search...' value={word} onChange={(e)=>searchChange(e)} />
     <Button content='Search' type="submit"  />
    
   

  </form>
)}
//onClick={()=>searchVideos(word)} 
export default SearchBar