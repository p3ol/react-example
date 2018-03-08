import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header.coffee"

class Home extends React.Component

    constructor: (props) ->
        super props

    sendHit: ->
        poool "config", "user_is_premium", window.test_user?.premium ? false
        poool "send", "page-view", "page"

    componentDidMount: ->
        @sendHit()

    onLogin: ->
        @sendHit()

    render: -> `(
        <div className="page home">
            <div className="container">
                <Header onLogin={this.onLogin.bind(this)} />
                <h1>Home</h1>
                <p>This is a normal page, without any paywall, with premium & free posts</p>
                <ul>
                    <li><Link to="/premium">Premium post</Link></li>
                    <li><Link to="/free">Free post</Link></li>
                    <li><Link to="/subscribe">Subscribe now!</Link></li>
                </ul>
            </div>
        </div>
    )`

export default Home
