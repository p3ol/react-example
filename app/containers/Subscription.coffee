import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header.coffee"

class Subscription extends React.Component

    constructor: (props) ->
        super props

    sendHit: ->
        poool "config", "user_is_premium", window.test_user?.premium ? false
        poool "send", "page-view", "subscription"

    componentDidMount: ->
        @sendHit()

    onLogin: ->
        @sendHit()

    render: -> `(
        <div className="page home">
            <div className="container">
                <Header onLogin={this.onLogin.bind(this)} />
                <h1>Our offers</h1>
                <p>This is a subscription page, without any paywall, where you list all your subscription offers.</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/premium">Premium post</Link></li>
                    <li><Link to="/free">Free post</Link></li>
                </ul>
            </div>
        </div>
    )`

export default Subscription
