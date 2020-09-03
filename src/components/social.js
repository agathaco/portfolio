import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const social = () => {

  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="contact-icons">
    <div className="social-icon">
      <span className="tooltip social-tooltip">Copy my email</span>
      <FontAwesomeIcon icon={faEnvelope} size="2x" title="Email" onClick={() => copyToClipboard('agathecocco@gmail.com')}/>
    </div>
    <div className="social-icon">
    <a href='https://codepen.io/agathaco'>
      <span className="tooltip social-tooltip">Codepen</span>
      <FontAwesomeIcon icon={faCodepen} size="2x" title="Codepen"/>
    </a>
    </div>
    <div className="social-icon">
    <a href='https://github.com/agathaco'>
      <span className="tooltip social-tooltip">Github</span>
      <FontAwesomeIcon icon={faGithub} size="2x" title="Github"/>
    </a>
    </div>
    <div className="social-icon">
    <a href='https://dev.to/agathacco'>
      <span className="tooltip social-tooltip">Dev.to</span>
      <FontAwesomeIcon icon={faDev} size="2x" title="Dev.to"/>
    </a>
    </div>
    <div className="social-icon">
    <a href='https://twitter.com/agathacco'>
    <span className="tooltip social-tooltip">Twitter</span>
    <FontAwesomeIcon icon={faTwitter} size="2x" title="Twitter"/>
    </a>
    </div>
  </div>
  )
}

export default social
