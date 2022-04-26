import "./App.css";

import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const apiKey = process.env.REACT_APP_NEWS_API;
console.log(apiKey);
export default function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <News
                            key="general"
                            category="general"
                            apiKey={apiKey}
                        />
                    </Route>
                    <Route exact path="/business">
                        <News
                            key="business"
                            category="business"
                            apiKey={apiKey}
                        />
                    </Route>
                    <Route exact path="/health">
                        <News key="health" category="health" apiKey={apiKey} />
                    </Route>
                    <Route exact path="/entertainment">
                        <News
                            key="entertainment"
                            category="entertainment"
                            apiKey={apiKey}
                        />
                    </Route>
                    <Route exact path="/sports">
                        <News key="sports" category="sports" apiKey={apiKey} />
                    </Route>
                    <Route exact path="/science">
                        <News
                            key="science"
                            category="science"
                            apiKey={apiKey}
                        />
                    </Route>
                    <Route exact path="/technology">
                        <News
                            key="technology"
                            category="technology"
                            apiKey={apiKey}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
