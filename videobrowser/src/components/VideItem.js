import { Item } from 'semantic-ui-react'


const VideoItem =({ytItem,selectItem})=>{

    return (

        <Item  onClick={()=>selectItem(ytItem)}>
      <Item.Image   size='medium' className="hvr" src={ytItem.snippet.thumbnails.default.url}  />
  
      <Item.Content className="imgitem ">
        <Item.Header  className="title" as='a'>{ytItem.snippet.title}</Item.Header>
        <Item.Meta className="channel" >Channel: {ytItem.snippet.channelTitle}</Item.Meta>
   
        <Item.Extra  className="date" >{ytItem.snippet.publishTime}</Item.Extra>
      </Item.Content>
    </Item>
    )
   
   }
   
   export default VideoItem;