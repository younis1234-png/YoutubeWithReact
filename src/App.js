import './App.css';
import React from "react"
import Header from "./component/header/Header"
import Sidebar from "./component/sidebar/Sidebar"
import RecommendedVideos from "./component/RecommendedVideos/RecommendedVideos"
import SearchPage from "./component/searchPage/SearchPage"
// from react-dom 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="app">

      {/* Router is whats in charge of what url load what component */}
      <Router>
        {/* the header will always render */}
        <Header />
        
        {/* we use switch to determine hat router to look at  */ }
        <Switch>
          {/* search page  */}
          <Route path="/search/:searchTerm">
          <div className="app_page">
                {/* sidebar (icons) */ }
                <Sidebar />
                {/* search  */ }
                <SearchPage />
              </div>
          </Route>

          {/* our home route */}
          <Route path="/">
            {/* header (logo search ar and icons)*/ }
             
              <div className="app_page">
                {/* sidebar (icons) */ }
                <Sidebar />
                {/* body => (video section)  */ }
                <RecommendedVideos />
              </div>
          </Route>

        </Switch>

      </Router>

      
    </div>
  );
}

export default App;




