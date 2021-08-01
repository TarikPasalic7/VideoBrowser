
import VideoItem from "./VideItem";
import { Item } from 'semantic-ui-react'
const VideoList =({ytList,selectItem})=>{

    return (
        
   <Item.Group>
     { ytList.map(element => {
         return(<VideoItem key={element.id} ytItem={element} selectItem={selectItem} />)   
       })
      } 
   </Item.Group  >
      
    )
   
   }
   
   export default VideoList;