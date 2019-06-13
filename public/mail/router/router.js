import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Main } from "../../mail/mailsFilter/allMails/UI/main/main";
import { MainIncoming } from "../../mail/mailsFilter/incomingMails/UI/main/MainIncoming";

const mails = [
    {
        text: "eda",
        id: "1234",
        senderId: "12345",
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false
    },
    {
        text: "berk",
        id: "12347",
        senderId: "12345",
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false
    },
    {
        text: "yildirim",
        id: "12345",
        senderId: "12378945",
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false
    }
]


function CustomLinkExample() {
    return (
        <Router>
            <div>
                <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
                <OldSchoolMenuLink to="/about" label="About" />
                <OldSchoolMenuLink to="/main" label="Main" />
                <OldSchoolMenuLink to="/mainincoming" label="MainIncoming" />


                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/main" component={() => <Main mails={mails} />} />
                <Route path="/mainincoming" component={() => <MainIncoming mails={mails} />} />
               
            </div>
        </Router>
    );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                <div className={match ? "active" : ""}>
                    {match ? "> " : ""}
                    <Link to={to}>{label}</Link>
                </div>
            )}
        />
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

export default CustomLinkExample;