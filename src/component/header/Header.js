import React, {useState} from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar"

// handel routing in react 
import {Link} from "react-router-dom"


function Header ()
{
    // we want to keep track of the input
    const[inputSearch, setInputSearch] = useState("")
    return (
        <div className="header">
            {/* <h1>I am a header</h1> */ }
            
            <div className="header_left">
                <MenuIcon />
                    <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
                    </Link>
            </div>
            
            <div className="header_center">
                <input onChange={ ( e ) => setInputSearch( e.target.value ) } value={ inputSearch } type="text" />
                {/* linke is gonna take us to the value we pass in the inputSearch */}
                <Link to={ `/search/${ inputSearch }` }>
                    <SearchIcon className='header_inputBtn' placeholder="Search....." />
                </Link>
                
            </div>
            
            <div className="header_right">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                < NotificationsIcon  className="header_icon"/>
                <Avatar
                    alt="Younis Saleh"
                    src="https://images.unsplash.com/photo-1567899735474-c2a942086894?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                />
            </div>
            

        </div>
    )
}

export default Header
