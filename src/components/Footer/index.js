import React from 'react'
import styles from "./Footer.module.css"

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className="layoutContainer">
          <p className={styles.footerCopyright}>© copyright 2018</p>
          <div className={styles.footerLinks}>
            <ul>
              <a href="https://twitter.com/maitrikjpatel" target="_blank">
                <li className="twitter">Twitter.</li>
              </a>
              <a href="https://www.linkedin.com/in/maitrikpatel/" target="_blank">
                <li className="linkedin">Linkedin.</li>
              </a>
              <a href="https://github.com/maitrikjpatel/" target="_blank">
                <li className="github">Github.</li>
              </a>
              <a href="https://dribbble.com/maitrikjpatel" target="_blank">
                <li className="dribbble">Dribbble.</li>
              </a>
              <a href="https://www.instagram.com/maitrikjpatel/" target="_blank">
                <li className="Instagram">Instagram.</li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer