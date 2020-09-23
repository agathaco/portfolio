import React from 'react'

import './languages.scss'

import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl"

const Languages = () => {
const languageName = {
  en: "En",
  fr: "Fr",
}

  return (
    <div className="language-container ">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              className={`language-link ${currentLocale === language ? 'active' : ''}`}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
}

export default Languages;