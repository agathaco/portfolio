import React from 'react'

import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Social from "../components/social"
import Languages from "../components/UI/languages"
import SEO from "../components/seo"

import "../styles/styles.scss"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO  title={intl.formatMessage({ id: "title" })} lang={intl.locale}/>
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
        <Languages />
      </header>


      <div className="hero container">
        <section className="intro">
          <div className="intro-text">
            <div className="tooltip intro-tooltip">
            {intl.formatMessage({ id: "intro.tooltip" })}
            </div>
            <h1>{intl.formatMessage({ id: "intro.title" })}</h1>
            <h2>
              <FormattedMessage 
              id="intro.desc"
              defaultMessage="I'm a <span>software developer</span> and <span>contractor</span> with a soft spot for web design and animation."
              values={{
                span: chunks => <span>{chunks}</span>
              }}/>
             </h2>
            {/* <h2>I'm a <span>software developer</span> and <span>contractor</span> with a soft spot for web design and animation.</h2> */}
            <div className="divider"></div>
            <p>
              <FormattedMessage
                id="intro.details"
                defaultMessage="I specialise in JavaScript and have professional experience working with <span>React</span> and <span>Node</span>, but I'm also a big fan of <span>Vue</span>. <br> In my spare time, I like to experiment with illustration and animation through code and create fun things like <link1>this</link1>, <link2>this</link2> or <link3>this</link3>.<br>
                I'm currently <nowrap>available for hire</nowrap> and would love to hear from you. Get in touch through one of the links below, or check out more of <link4>creations</link4>."
                values={{
                  span: boldText => <span>{boldText}</span>,
                  br: <br/>,
                  nowrap: noWrapText => <span className="nowrap">{noWrapText}</span>,
                  link1: link => <a href="https://codepen.io/agathaco/full/NyQgQX">{link}</a>,
                  link2: link => <a href="https://codepen.io/agathaco/full/Reobbg">{link}</a>,
                  link3: link => <a href="https://codepen.io/agathaco/full/KKVLdgw">{link}</a>,
                  link4: link => <a href="https://codepen.io/agathaco/" className="nowrap">{link}</a>
              }}/>
              </p>
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
