import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MainIncoming} from "../../../incomingMails/UI/main/MainIncoming"
import {Test} from "../../../../UI/test"

export class MenuRouter extends Component {
    render() {
        return (
            <Router>
            <div>
              <ul>
                <li><Link to='/gelenkutusu'>Bütün Mailler</Link></li>
                <li><Link to='/topics'>Giden Kutusu</Link></li>
              </ul>
    
              <Route exact path='/gelenkutusu' component={Test} />
            </div>
          </Router>

        )
    }
}
