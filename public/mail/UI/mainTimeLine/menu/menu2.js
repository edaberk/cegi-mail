import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { AllMails2 } from "../mailTimeLine/allMails2"
import { Favori } from "../mailTimeLine/Favori"
import { Menu } from 'primereact/menu';
import { Primary } from "../Category/Primary"
import { Social } from "../Category/Social"
import { Promotions } from "../Category/Promotions"
import { OutGoingMails } from "../mailTimeLine/outGoingMails"
import { Draft } from "../mailTimeLine/draft"
import { ViewMail } from "../mailTimeLine/viewMail"
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';

import { MailEvent } from "../../../../emitter/singleton_pattern"
import { diffDayTime } from 'fullcalendar';
import {Search} from "../../header/search"

let MenuItems = (props) => {
    let items = [
        { label: 'Bütün Mailler', icon: 'pi pi-fw pi-plus', command: () => props.history.push('/butunmailler') },
        { label: 'Favori', icon: 'pi pi-fw pi-cog', command: () => props.history.push('/favori') },
        { label: 'Giden', icon: 'pi pi-fw pi-cog', command: () => props.history.push('/giden') },
        { label: 'Taslak', icon: 'pi pi-fw pi-cog', command: () => props.history.push('/taslak') },
    ];

    return (
        <Menu model={items} />
    )
}

MenuItems = withRouter(MenuItems);

class Menu2 extends Component {

    render() {
        return (

            <Router >
                <div className="menu">
                    <div>
                        <MenuItems />
                    </div>
                    {/* <div className="link">
                        <li><Link to='/butunmailler'>Bütün Mailler</Link></li>
                        <li><Link to='/gelenkutusu'>Gelen Kutusu</Link></li>
                        <li><Link to='/favori'>Favori</Link></li>
                    </div> */}


                    <div className="mails">
                        <div className="category">
                            <div className="primary">
                                <Link to='/primary'>Primary</Link>
                            </div>
                            <div className="social">
                                <Link to='/social'>Social</Link>
                            </div>
                            <div className="promotions">
                                <Link to='/promotions'>Promotions</Link>
                            </div>
                        </div>

                        <Route exact path='/butunmailler' component={(props) => <AllMails2 {...props} />} />
                        <Route exact path='/giden' component={OutGoingMails} />
                        <Route exact path='/favori' component={Favori} />
                        <Route exact path='/taslak' component={Draft} />
                        <Route exact path='/primary' component={() => <Primary />} />
                        <Route exact path='/social' component={() => <Social />} />
                        <Route exact path='/promotions' component={() => <Promotions />} />
                        <Route exact path='/mail_details/:id' component={(props) => <ViewMail {...props} />} />
                        <Route exact path='/search/' component={(props) => <Search {...props} />} />
                    </div>


                </div>
            </Router>


        )
    }
}


export { Menu2 };
