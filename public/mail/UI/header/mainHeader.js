import React, { Component } from 'react'
import { MenuTool } from "./menuTool"
import { Search } from "./search"

export class MainHeader extends Component {
    render() {
        return (
            <div className="header">
                <MenuTool />
                <Search />
            </div>
        )
    }
}
