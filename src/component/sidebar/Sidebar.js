import React from 'react'
import "./Sidebar.css"
import SidebarRow from "../sidebarRow/SidebarRow"
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h1> I am Sidebar</h1> */}

            {/* it has is own component with icons  */}
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={ SubscriptionsIcon } title="Subscription" />
            
            <hr />
            
            <SidebarRow Icon={VideoLibraryIcon} title="Home" />
            <SidebarRow Icon={HistoryIcon} title="Trending" />
            <SidebarRow Icon={OndemandVideoIcon} title="Subscription" />
            <SidebarRow Icon={WatchLaterIcon} title="Subscription" />
            <SidebarRow Icon={ThumbUpIcon} title="Subscription" />
            <SidebarRow Icon={ ExpandMoreIcon } title="Subscription" />
            
            <hr/>
        </div>
    )
}

export default Sidebar
