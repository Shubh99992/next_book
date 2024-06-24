import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Testimonial18 from '../components/testimonial18'
import FAQ11 from '../components/faq11'
import Footer from '../components/footer'

const Pricing = (props) => {
  return (
    <>
      <div className="pricing-container">
        <Head>
          <title>Pricing - Marketing Event Page</title>
          <meta property="og:title" content="Pricing - Marketing Event Page" />
        </Head>
        <Navigation rootClassName="navigation-root-class-name1"></Navigation>
        <div className="pricing-hero section-container">
          <div className="pricing-max-width max-content-container"></div>
          <div className="pricing-blue-background"></div>
        </div>
        <Testimonial18></Testimonial18>
        <FAQ11></FAQ11>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .pricing-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .pricing-hero {
            position: relative;
            padding-top: 128px;
          }
          .pricing-max-width {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            z-index: 1;
            align-items: stretch;
          }
          .pricing-blue-background {
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
          @media (max-width: 991px) {
            .pricing-max-width {
              flex-direction: column;
            }
            .pricing-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Pricing
