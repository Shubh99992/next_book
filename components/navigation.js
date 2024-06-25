import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import Link from 'next/link'

const Navigation = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`navigation-header ${props.rootClassName} `}
      >
        <div className="navigation-max-width">

          <Link href={"/"}>
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navigation-image"
              style={{
                width: '140px',
                height: '70px'
              }}
            />
          </Link>

          <div className="navigation-nav">
            <NavigationLinks rootClassName="navigation-links-root-class-name17"></NavigationLinks>
            <Link href={"/loginpage"}>
              <button className="navigation-register button-primary button button-md">
                {props.button}
              </button>
            </Link>
          </div>
          <div data-role="BurgerMenu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="navigation-mobile-menu">
            <div className="navigation-nav1">
              <div className="navigation-container">
                <img alt={props.imageAlt1} src={props.imageSrc} style={{
                  width: '140px',
                  height: '70px'
                }} />
                <div
                  data-role="CloseMobileMenu"
                  className="navigation-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name18"></NavigationLinks>
              <Link href={'/loginpage'}>
                <button className="navigation-register1 button-primary button button-md">
                  {props.button1}
                </button></Link>
            </div>

          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navigation-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .navigation-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navigation-image {
            width: 218px;
            height: 120px;
          }
          .navigation-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-register {
            color: var(--dl-color-scheme-darkblue);
            margin-left: 41px;
            background-color: var(--dl-color-scheme-white);
          }
          .navigation-register:hover {
            color: var(--dl-color-scheme-white);
            background-color: var(--dl-color-scheme-pink);
          }
          .navigation-burger-menu {
            display: none;
          }
          .navigation-icon {
            fill: var(--dl-color-scheme-darkblue);
            width: 24px;
            height: 24px;
            display: flex;
          }
          .navigation-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-color: #fff;
            background-image: url('/blue-background-1500h.png');
          }
          .navigation-nav1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .navigation-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-icon02 {
            fill: var(--dl-color-scheme-white);
            width: 24px;
            height: 24px;
          }
          .navigation-register1 {
            color: var(--dl-color-scheme-darkblue);
            margin-top: var(--dl-space-space-oneandhalfunits);
            background-color: var(--dl-color-scheme-white);
          }
          .navigation-register1:hover {
            color: var(--dl-color-scheme-white);
            background-color: var(--dl-color-scheme-pink);
          }
          .navigation-icon04 {
            fill: var(--dl-color-scheme-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon06 {
            fill: var(--dl-color-scheme-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon08 {
            fill: var(--dl-color-scheme-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-root-class-name {
            top: 0px;
            left: 0px;
          }
          @media (max-width: 991px) {
            .navigation-nav {
              display: none;
            }
            .navigation-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navigation-max-width {
              padding: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
  button1: 'register',
  imageSrc: '/image-removebg-preview%20(1)1-200h.png',
  button: 'register',
  imageAlt1: 'image',
  // imageSrc1: '/logo-white-1500h.png',
  imageAlt: 'logo',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigation
