import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-tree"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Ryan Reese</h1>
                <p>Web Developer </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>My Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
