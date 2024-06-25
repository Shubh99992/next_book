import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Marketing Event Page</title>
          <meta property="og:title" content="Marketing Event Page" />
        </Head>
        <Navigation rootClassName="navigation-root-class-name"></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h1 className="home-text">
                  <span className="Heading1">
                    Discover,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text02 Heading1">Review</span>
                  <span className="Heading1">
                    , Repeat - Your
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text04">Ultimate</span>
                  <span className="Heading1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="Heading1">Book</span>
                  <span className="Heading1"> Companion</span>
                </h1>
                <span className="home-text08">
                  Discover and review the latest books with our innovative book
                  review app. Join now and get access to exclusive discounts on
                  premium memberships until 10.10.2022. Don&apos;t miss out,
                  limited spots available!
                </span>
                <div className="home-btns-container">
                  <button className="home-primary button-primary button-lg button">
                    register now
                  </button>
                  <button className="button button-outline button-lg-border">
                    learn more
                  </button>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1638341049982-d033aed393c2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGJvb2slMjB2aWRlb3xlbnwwfHx8fDE3MTg3NzcxNTF8MA&amp;ixlib=rb-4.0.3&amp;w=600"
                className="home-image"
              />
            </div>
            <div className="home-blue-background"></div>
          </div>
          <div className="home-speakers section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-heading-container">
                <span className="home-text09">
                  16 speakers from 7 countries and 3 continents
                </span>
                <h1 className="home-text10">popular Books</h1>
              </div>
              <div className="home-speakers-container">
              <SpeakerCard
                    role="digital marketing associate @ WPP"
                    lastName="Simpson"
                    firstName="Mellisa"
                    imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                  ></SpeakerCard>
                <Link href={'/viewbook'}>
                  <SpeakerCard
                    role="digital marketing associate @ WPP"
                    lastName="Simpson"
                    firstName="Mellisa"
                    imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                  ></SpeakerCard>
                </Link>
                <SpeakerCard
                  role="VP OF Marketing @ BUZZFEED"
                  lastName="tevlenko"
                  firstName="alina"
                  imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                ></SpeakerCard>
                <SpeakerCard
                  role="HEAD OF DIGITAL @ HUBSPOT"
                  lastName="iprovich"
                  firstName="gregor"
                  imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                ></SpeakerCard>
                <SpeakerCard
                  role="marketing officer @ salesforce"
                  lastName="daris"
                  firstName="damian"
                  imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                ></SpeakerCard>
                <SpeakerCard
                  role="social media manager @ vodafone"
                  lastName="warren"
                  firstName="matt"
                  imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                ></SpeakerCard>
                <SpeakerCard
                  role="creative director @ BBDO"
                  lastName="moore"
                  firstName="kathie"
                  imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                ></SpeakerCard>
                <SpeakerCard
                  role="CMO @ youtube Europe"
                  lastName="chan"
                  firstName="erick"
                  imageSrc="https://i.pinimg.com/236x/8d/2b/ea/8d2bea04d7ee666ab74e47084cf707ad.jpg"
                ></SpeakerCard>
              </div>
            </div>
          </div>
          <div className="home-numbers-banner section-container">
            <div className="home-container1 max-content-container">
              <div className="home-heading-container1">
                <span className="home-text11">
                  Our 12-year conference history in sharing digital marketing
                  insights
                </span>
                <h1 className="home-text12 Heading2">
                  <span>market1 SUMMIT IN NUMBERS</span>
                </h1>
              </div>
              <div className="home-numbers-container">
                <NumbersCard></NumbersCard>
                <NumbersCard
                  text="years"
                  number="12"
                  imageSrc="/interface%20time%20reset-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="total events"
                  number="64"
                  imageSrc="/interface%20calendar%20favorite-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="companies"
                  number="15,070"
                  imageSrc="/shopping%20bag%20suit%20case-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="cities"
                  number="14"
                  imageSrc="/travel%20map%20location%20pin-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="speakers"
                  number="1,071"
                  imageSrc="/computer%20voice%20mail-200h.png"
                ></NumbersCard>
              </div>
            </div>
          </div>
          <div className="home-location">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564347288827-3e4293543e07?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxiZXJsaW58ZW58MHx8fHwxNjQzNzEzNjQ5&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image1"
            />
            <div className="home-content-container1 section-container">
              <div className="home-container2">
                <span className="home-text14">Today&apos;s Special</span>
                <span className="home-text15">7-8 MARCH 2023</span>
                <div className="home-container3">
                  <span className="home-text16">
                    <span>— mob-x</span>
                  </span>
                  <span className="home-text18">
                    <span>conference</span>
                  </span>
                  <span className="home-text20">
                    <span>center</span>
                  </span>
                </div>
                <div className="home-container4">
                  <span className="home-text22">beautiful, vibrant berlin</span>
                  <span className="home-text23">
                    <span>Book Description</span>
                    <br></br>
                  </span>
                  <div className="home-btns-container1">
                    <button className="button-secondary button button-md">
                      Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-workshops" id="about">
            <div className="home-content-container2">
              <div className="home-container5">
                <h1 className="home-text26 Heading2">
                  <span>
                    register for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text29">super insightful</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    workshops for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>your team</span>
                </h1>
                <span className="home-text35">
                  get early discounts and group discounts
                </span>
                <span className="home-text36">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </span>
                <button className="button button-md button-outline">
                  Sponser  your Book
                </button>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image2"
            />
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name"></Footer>
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
            top: 0px;
            right: 0px;
            width: 47%;
            height: 100px;
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

export default Home
