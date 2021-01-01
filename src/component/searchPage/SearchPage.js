import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from "../videRow/VideoRow"

function SearchPage() {
    return (
        <div className="searchPage">
            {/* <h1>search page</h1> */ }
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            
            <ChannelRow
                image="https://images.unsplash.com/photo-1495490140452-5a226aef25d4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                channel="Black Girl Magic"
                verified
                subs="660k"
                noOfVideos={300}
                description="Hey Frans 🌻  
                Just showing off Domino in a different way. Here is a quick walk through/tour of my Tiny Home On Wheels. A once 4 window short bus, now a rustic, boho cabin vibe camper conversion."
            />

            <hr />
            
            <VideoRow
                views ="1.5M"
                subs="600K"
                description="Do you want to travel the world"
                timestamp ="40 seconds ago"
                channel="Black Girl Magic"
                title="🔴 Let's Build a Build a Healthy Lifestyle"
                image="https://images.unsplash.com/photo-1540256817643-88ca55778eb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
            />
            <VideoRow
                views ="1.5M"
                subs="600K"
                description="Do you want to travel the world"
                timestamp ="40 seconds ago"
                channel="Black Girl Magic"
                title="🔴 Let's Build a Build a Healthy Lifestyle"
                image="https://images.unsplash.com/photo-1540256817643-88ca55778eb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
            />
            <VideoRow
                views ="1.5M"
                subs="600K"
                description="Do you want to travel the world"
                timestamp ="40 seconds ago"
                channel="Black Girl Magic"
                title="🔴 Let's Build a Build a Healthy Lifestyle"
                image="https://images.unsplash.com/photo-1540256817643-88ca55778eb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
            />
            <VideoRow
                views ="1.5M"
                subs="600K"
                description="Do you want to travel the world"
                timestamp ="40 seconds ago"
                channel="Black Girl Magic"
                title="🔴 Let's Build a Build a Healthy Lifestyle"
                image="https://images.unsplash.com/photo-1540256817643-88ca55778eb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
            />
            <VideoRow
                views ="1.5M"
                subs="600K"
                description="Do you want to travel the world"
                timestamp ="40 seconds ago"
                channel="Black Girl Magic"
                title="🔴 Let's Build a Build a Healthy Lifestyle"
                image="https://images.unsplash.com/photo-1540256817643-88ca55778eb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
            />
            <VideoRow
                views ="1.5M"
                subs="600K"
                description="Do you want to travel the world"
                timestamp ="40 seconds ago"
                channel="Black Girl Magic"
                title="🔴 Let's Build a Build a Healthy Lifestyle"
                image="https://images.unsplash.com/photo-1540256817643-88ca55778eb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"
            />
        </div>
    )
}

export default SearchPage
