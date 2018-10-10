import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"

import Home from "./Home.coffee"
import Premium from "./Premium.coffee"
import Free from "./Free.coffee"
import Subscription from "./Subscription.coffee"

class App extends React.Component

    constructor: (props) ->
        super props

        # Avoid redux
        window.test_user ?=
            logged: false
            premium: false

        @history = createHistory()
        @unlisten = @history.listen -> window.scrollTo 0, 0

    render: -> `(
        <Router history={this.history}>
            <Switch>
                <Route path="/premium" component={Premium} />
                <Route path="/free" component={Free} />
                <Route path="/subscribe" component={Subscription} />
                <Route component={Home} />
            </Switch>
        </Router>
    )`

    componentWillUnmount: ->
        @unlisten()

export default App
