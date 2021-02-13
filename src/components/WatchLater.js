import React from 'react'
import { WatchLaterVideos } from './WatchLaterVideos';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SortIcon from '@material-ui/icons/Sort';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../Stylesheets/watchlater.css'

export const WatchLater = ( { thumbnail_main_watch, total_watch_later, views_watch, updates, accImage_watch, accname_watch  } ) => {
    return (
        <div className="watch_later">
            <div className="main_video_watch_later_div" style={{ width:'50%' }}>
                <img  className="main_video_watch_later" src={thumbnail_main_watch}></img>
                <div style={{ display:'flex', flexDirection:'row', textAlign:'center', alignItems:'center', width:'65%',paddingLeft:'35%', backgroundColor:'black', opacity:0.8, marginTop:'-7.1%', height:'1.5%' }}>
                    <PlayArrowIcon />
                    <div>PLAY ALL</div>
                </div>
                <div style={{ fontSize:25, marginTop:'2%' }}>Watch later</div>
                <div style={{ display:'flex', flexDirection:'row', fontWeight:600, color:'gray', fontSize:15, marginTop:'2%', marginBottom:'2%' }}>
                    <div>{total_watch_later} videos</div><sup style={{ fontWeight:600, marginLeft:'1%', marginRight:'1%' }}><b>.</b></sup>
                    <div>{views_watch} views</div><sup style={{ fontWeight:600, marginLeft:'1%', marginRight:'1%' }}><b>.</b></sup>
                    <div>Updated {updates}</div>
                </div>
                <div style={{ alignItems:'center', display:'flex', flexDirection:'row', backgroundColor:'rgb(71,71,70)', width:'max-content', padding:'1%', borderRadius:2, marginTop:'3%' }}>
                    <LockIcon style={{ color:'lightgray', fontSize:10 }} />
                    <div style={{ fontWeight:500, fontSize:10, color:'lightgray',marginLeft:'2%' }}>Private</div>
                </div>
                <div style={{ marginTop:'3%', alignItems:'center', color:'lightgray'}}>
                    <ShuffleIcon />
                    <MoreHorizIcon style={{ marginLeft:'10%' }} />
                </div>
                <div style={{ height:0.3, backgroundColor:'rgb(79,77,79)', marginTop:'2%', marginBottom:'4%' }}></div>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                    <Avatar src={accImage_watch}/>
                    <div style={{ marginLeft:'3%' }}>{accname_watch}</div>
                </div>
            </div>
            <div className="watch_later_videos">
                <div style={{ alignItems:'center', display:'flex', flexDirection:'row',paddingLeft:'2.5%', marginBottom:'2%', fontWeight:600, color:'gray' }}>
                    <SortIcon/> 
                    <div style={{fontWeight:700, fontSize:15,marginLeft:'1%' }}>SORT</div>
                </div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
                <WatchLaterVideos
                    watch_thumbnail="https://static.billboard.com/files/2020/12/top100songs-2020-billboard-1500-1607463880-compressed.jpg"
                    watch_title="Latest trending songs out!!"
                    watch_channel="Music is world"
                />
                <div style={{ height:0.3, backgroundColor:'rgb(79,79,77)', width:'90%', marginLeft:'2.2%' }}></div>
            </div>
        </div>
    )
}
