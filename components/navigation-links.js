import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href={"#about"}>
        <span className="navigation-links-text Navigation-Link">
          {props.link1}
        </span>
        </Link>
        <Link href={"\pricing"}>
        <span className="navigation-links-text1 Navigation-Link">
          {props.link2}
        </span></Link>
        <span className="navigation-links-text2 Navigation-Link">
          {props.link3}
        </span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
          }
          .navigation-links-text:hover {
            color: var(--dl-color-scheme-pink);
          }
          .navigation-links-text1 {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
          }
          .navigation-links-text1:hover {
            color: var(--dl-color-scheme-pink);
          }
          .navigation-links-text2 {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
          }
          .navigation-links-text2:hover {
            color: var(--dl-color-scheme-pink);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link2: 'Books',
  link3: 'Learn More',
  link1: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
