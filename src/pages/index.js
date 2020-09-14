import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Social from "../components/social"
import SEO from "../components/seo"

import "../styles/styles.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {

  return (

    <Layout>
      <SEO title="Agathe Cocco" />
      <header className="container">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="dark-mode-toggle">
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                style={{display:'none'}}
              />{' '}
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon}/>
            </label>
          )}
        </ThemeToggler>
      </header>
      <div className="hero container">
        <section className="intro">
          <div className="intro-text">
            <div className="tooltip intro-tooltip">Hi there!</div>
            <h1>I'm Agathe.</h1>
            <h2>I'm a <span>software developer</span> and <span>contractor</span> with a soft spot for web design and animation.</h2>
            <div className="divider"></div>
            <p>I specialise in JavaScript and have professional experience working with <span>React</span> and <span>Node</span>, but I'm also a big fan of <span>Vue</span>.<br/>
            In my spare time, I like to experiment with illustration and animation through code and create fun things like <a href="https://codepen.io/agathaco/full/NyQgQX">this</a>, <a href="https://codepen.io/agathaco/full/Reobbg">this</a> or <a href="https://codepen.io/agathaco/full/KKVLdgw">this</a>.<br/>
            I'm currently <span class="no wrap">available for hire</span> and would love to hear from you. Get in touch through one of the links below, or check out more of <span className="nowrap">my <a href="https://codepen.io/agathaco/">creations</a>.</span></p>
          </div>
          <Social />
        </section>
        <section className="avatar">
          <Avatar />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
