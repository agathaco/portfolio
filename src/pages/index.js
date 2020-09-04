import React from "react"
// import { Link } from "gatsby"
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
            <h2>I'm a <span>software developer</span> with a soft spot for web design and animations.</h2>
            <div className="divider"></div>
            <p>I build apps with <span>React</span> and <span>Node</span>, and create fun and cute things on the internet{/* like <a href="https://codepen.io/agathaco/full/NyQgQX">this</a> or <a href="https://codepen.io/agathaco/full/Reobbg">this</a>*/}. <a href="https://codepen.io/agathaco/">Check out</a> all my experiments.</p>
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
