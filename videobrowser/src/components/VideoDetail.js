
import { Embed } from 'semantic-ui-react'
const VideoDetail =({SelectedVideo})=>{
{console.log(SelectedVideo)}
    return (
        <Embed
        id={SelectedVideo?SelectedVideo.id.videoId:""}
   placeholder={SelectedVideo?SelectedVideo.snippet.thumbnails.default.url:""}
        source='youtube'
        className='videodetail'
      />
    )
   
   }
   
   export default VideoDetail;