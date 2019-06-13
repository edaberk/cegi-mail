import React from "react";
import ReactDOM from "react-dom";
import "./public/css/main.css";
import CustomLinkExample from "./public/mail/router/router"
import { NestedRouterExample } from "./public/test/nestedRouterExample"
import { MainPage } from "./public/mail/UI/mainPage/mainPage"

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './public/emitter/singleton_pattern';
import "./public/emitter/testEvent"

function App() {

    return (
        <MainPage />
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);