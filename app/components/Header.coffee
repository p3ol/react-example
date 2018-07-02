import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component

    constructor: (props) ->
        super props
        @state = connecting: false

    componentDidMount: ->
        poool "event", "onLoginClick", @onLoginClick

    onLoginClick: (e) =>
        @login()
        e.originalEvent?.preventDefault()

    login: ->
        if @state.connecting is true then return

        @setState connecting: true

        window.setTimeout =>
            window.test_user =
                logged: true
                premium: true

            @setState connecting: false

            @props.onLogin?()
        , 2000

    showLoginState: ->
        if @state.connecting is true
            `<span>Connecting...</span>`
        else
            if window.test_user.logged is true
                `<span>Signed as: <strong>Rick Sanchez</strong></span>`
            else
                `<a href="javascript:;" onClick={this.login.bind(this)}>Sign in</a>`

    render: -> `(
        <header className="mb-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Newspaper</Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/premium" className="nav-item nav-link">Premium post</Link>
                        <Link to="/free" className="nav-item nav-link">Free Post</Link>
                        <Link to="/subscribe" className="nav-item nav-link">Subscribe now!</Link>
                    </div>
                </div>

                <span className="navbar-text">
                    { this.showLoginState() }
                </span>
            </nav>
        </header>
    )`

    componentWillUnmount: ->
        poool "unevent", "onLoginClick", @onLoginClick

export default Header
