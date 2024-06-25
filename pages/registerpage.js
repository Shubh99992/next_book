import React from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import Navigation from '../components/navigation'
import SignIn3 from '../components/signUp3'
// import { Link } from 'react-router-dom'

const registerpage = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Marketing Event Page</title>
          <meta property="og:title" content="Marketing Event Page" />
        </Head>
        <Navigation rootClassName="navigation-root-class-name" ></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <SignIn3 rootClassName="sign-in3-root-class-name"></SignIn3>
            <div className="home-blue-background"></div>
          </div>
        </main>
        {/* <Footer rootClassName="footer-root-class-name"></Footer> */}
      </div>
      <style jsx>
        {`
        
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
          }
          .home-max-width {
            z-index: 1;
            align-items: stretch;
          }
          .home-content-container {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-size: 64px;
            font-style: normal;
            font-family: 'IBM Plex Sans Condensed';
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text02 {
            color: #2256a4;
            font-size: 64px;
            font-style: normal;
            font-family: 'IBM Plex Sans Condensed';
            font-weight: 700;
            line-height: 1.1;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text04 {
            color: #a8170d;
          }
          .home-text08 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .home-btns-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .home-primary {
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-image {
            width: 539px;
            object-fit: cover;
            margin-left: var(--dl-space-space-threeunits);
          }
          .home-blue-background {
            Top: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            min-height: 80%;
            background-size: cover;
            background-image: url('/blue-background-1500w.png');
            background-repeat: no-repeat;
          }
          .home-speakers {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-max-width1 {
            flex-direction: column;
          }
          .home-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text09 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text10 {
            text-align: center;
          }
          .home-speakers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/group%2029-1500w.png');
          }
          .home-container1 {
            flex-direction: column;
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text11 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text12 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .home-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .home-location {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-image1 {
            width: 55%;
            max-height: 950px;
            object-fit: cover;
          }
          .home-content-container1 {
            flex: 1;
            display: flex;
            align-items: stretch;
            padding-top: 100px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-scheme-black);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text14 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -100px;
            padding-top: 4px;
            padding-left: 18px;
            margin-bottom: 6px;
            padding-right: 11px;
            padding-bottom: 6px;
            background-color: var(--dl-color-scheme-lightblue);
          }
          .home-text15 {
            color: var(--dl-color-scheme-white);
          }
          .home-container3 {
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text16 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-text18 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -36px;
          }
          .home-text20 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-container4 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            margin-left: 124px;
            flex-direction: column;
          }
          .home-text22 {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text23 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
          }
          .home-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .home-workshops {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .home-content-container2 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(144, 149, 167, 0.08);
          }
          .home-container5 {
            flex: 0 0 auto;
            display: flex;
            max-width: 366px;
            align-items: flex-start;
            margin-right: 107px;
            flex-direction: column;
          }
          .home-text26 {
            margin-bottom: 42px;
          }
          .home-text29 {
            color: var(--dl-color-scheme-pink);
          }
          .home-text35 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text36 {
            margin-bottom: var(--dl-space-space-threeunits);
            text-transform: none;
          }
          .home-image2 {
            width: 55%;
            min-height: 880px;
            object-fit: cover;
            object-position: bottom;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }
            .home-content-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .home-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-location {
              flex-direction: column;
            }
            .home-image1 {
              width: 100%;
            }
            .home-content-container1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-container2 {
              margin-top: -100px;
              align-items: center;
            }
            .home-container4 {
              max-width: 100%;
              margin-left: 0px;
            }
            .home-container5 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-image2 {
              width: 50%;
              object-position: left;
            }
          }
          @media (max-width: 767px) {
            .home-text {
              font-size: 48px;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-image1 {
              max-height: 100%;
            }
            .home-content-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text14 {
              margin-left: -24px;
            }
            .home-btns-container1 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .home-workshops {
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container5 {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-speakers-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default registerpage

