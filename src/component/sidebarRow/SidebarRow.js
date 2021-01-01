import React from 'react'
import "./SidebarRow.css"

function SidebarRow({selected,Icon ,title}) {
    return (
        // if selected add ==> ${selected && "selected" }
        <div className={`sidebarRow ${selected && "selected" }`}>
            <Icon className="sidebarRow_icon"/>
            <h1 className="sidebarRow_title">{ title}</h1>
        </div>
    )
}

export default SidebarRow;