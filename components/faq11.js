import React, { useState } from 'react'

import PropTypes from 'prop-types'

const FAQ11 = (props) => {
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <>
      <div className="faq11-faq8 thq-section-padding">
        <div className="faq11-max-width thq-section-max-width">
          <div className="thq-section-max-width thq-flex-column faq11-container">
            <div className="faq11-section-title">
              <div className="faq11-content">
                <h2 className="faq11-text thq-heading-2">{props.heading1}</h2>
                <p className="faq11-text1 thq-body-large">{props.content1}</p>
              </div>
            </div>
            <div className="faq11-list">
              <div className="faq11-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq11-trigger"
                >
                  <p className="faq11-faq1-question thq-body-large">
                    {props.faq1Question}
                  </p>
                  <div className="faq11-icons-container">
                    {!faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon02">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="faq11-container03">
                    <span className="thq-body-small">
                      Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                      sunt aut deleniti illum non repudiandae voluptatem. Aut
                      praesentium doloribus qui distinctio neque ut unde
                      temporibus. Cum exercitationem eveniet in omnis animi in
                      corporis nulla. Sed tempora excepturi et voluptatem modi
                      et exercitationem voluptate cum illum quisquam 33 quia
                      blanditiis eos minus consequatur.Ut neque quam qui
                      dignissimos voluptates ut voluptate totam aut consequuntur
                      quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                      eum earum tenetur? Est esse harum et Quis officiis et enim
                      amet.Et minima tempore et neque voluptatem eos amet
                      officiis et temporibus Quis. Et suscipit esse id nemo sunt
                      At nihil earum et consequatur fuga aut sapiente voluptate
                      est cupiditate esse non dolor cumque. Ut obcaecati
                      recusandae et beatae quae qui doloremque eligendi sit
                      eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="faq11-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="faq11-trigger1"
                >
                  <p className="faq11-faq2-question thq-body-large">
                    {props.faq2Question}
                  </p>
                  <div className="faq11-icons-container1">
                    {!faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon04">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon06">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="faq11-container06">
                    <span className="thq-body-small">
                      Et minima tempore et neque voluptatem eos amet officiis et
                      temporibus Quis. Et suscipit esse id nemo sunt At nihil
                      earum et consequatur fuga aut sapiente voluptate est
                      cupiditate esse non dolor cumque. Ut obcaecati recusandae
                      et beatae quae qui doloremque eligendi sit eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="faq11-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="faq11-trigger2"
                >
                  <p className="faq11-faq2-question1 thq-body-large">
                    {props.faq3Question}
                  </p>
                  <div className="faq11-icons-container2">
                    {!faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon08">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq3Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon10">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3Visible && (
                  <div className="faq11-container09">
                    <span className="thq-body-small">
                      A quia temporibus aut ullam assumenda vel eius sapiente ut
                      eligendi molestias. Ex ipsum incidunt ut excepturi eaque
                      sed nulla quia qui exercitationem alias aut consequuntur
                      nihil et animi voluptas.
                    </span>
                  </div>
                )}
              </div>
              <div className="faq11-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="faq11-trigger3"
                >
                  <p className="faq11-faq2-question2 thq-body-large">
                    {props.faq4Question}
                  </p>
                  <div className="faq11-icons-container3">
                    {!faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon12">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq4Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon14">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq4Visible && (
                  <div className="faq11-container12">
                    <span className="thq-body-small">
                      A quia temporibus aut ullam assumenda vel eius sapiente ut
                      eligendi molestias. Ex ipsum incidunt ut excepturi eaque
                      sed nulla quia qui exercitationem alias aut consequuntur
                      nihil et animi voluptas.
                    </span>
                  </div>
                )}
              </div>
              <div className="faq11-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="faq11-trigger4"
                >
                  <p className="faq11-faq1-question1 thq-body-large">
                    {props.faq1Question1}
                  </p>
                  <div className="faq11-icons-container4">
                    {!faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon16">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq11-icon18">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq5Visible && (
                  <div className="faq11-container15">
                    <span className="thq-body-small">
                      Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                      sunt aut deleniti illum non repudiandae voluptatem. Aut
                      praesentium doloribus qui distinctio neque ut unde
                      temporibus. Cum exercitationem eveniet in omnis animi in
                      corporis nulla. Sed tempora excepturi et voluptatem modi
                      et exercitationem voluptate cum illum quisquam 33 quia
                      blanditiis eos minus consequatur.Ut neque quam qui
                      dignissimos voluptates ut voluptate totam aut consequuntur
                      quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                      eum earum tenetur? Est esse harum et Quis officiis et enim
                      amet.Et minima tempore et neque voluptatem eos amet
                      officiis et temporibus Quis. Et suscipit esse id nemo sunt
                      At nihil earum et consequatur fuga aut sapiente voluptate
                      est cupiditate esse non dolor cumque. Ut obcaecati
                      recusandae et beatae quae qui doloremque eligendi sit
                      eaque labore.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="faq11-content1 thq-flex-column">
            <div className="faq11-content2">
              <h2 className="faq11-text7 thq-heading-2">{props.heading2}</h2>
              <p className="faq11-text8 thq-body-large">{props.content2}</p>
            </div>
            <button className="thq-button-filled">
              <span className="thq-body-small">{props.action}</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq11-faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq11-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq11-section-title {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq11-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .faq11-text {
            text-align: center;
          }
          .faq11-text1 {
            text-align: center;
          }
          .faq11-list {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq11-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq11-trigger {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq11-icons-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-icon {
            width: 24px;
            height: 24px;
          }
          .faq11-icon02 {
            width: 24px;
            height: 24px;
          }
          .faq11-container03 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq11-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq11-trigger1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq11-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-icon04 {
            width: 24px;
            height: 24px;
          }
          .faq11-icon06 {
            width: 24px;
            height: 24px;
          }
          .faq11-container06 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq11-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq11-trigger2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-faq2-question1 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq11-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-icon08 {
            width: 24px;
            height: 24px;
          }
          .faq11-icon10 {
            width: 24px;
            height: 24px;
          }
          .faq11-container09 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq11-faq4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq11-trigger3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-faq2-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq11-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-icon12 {
            width: 24px;
            height: 24px;
          }
          .faq11-icon14 {
            width: 24px;
            height: 24px;
          }
          .faq11-container12 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq11-faq5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
          }
          .faq11-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-faq1-question1 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .faq11-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq11-icon16 {
            width: 24px;
            height: 24px;
          }
          .faq11-icon18 {
            width: 24px;
            height: 24px;
          }
          .faq11-container15 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq11-content1 {
            align-self: center;
          }
          .faq11-content2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .faq11-text7 {
            text-align: center;
          }
          .faq11-text8 {
            text-align: center;
          }
          @media (max-width: 991px) {
            .faq11-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .faq11-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

FAQ11.defaultProps = {
  faq1Question1: 'How can I purchase tickets for the conference?',
  content1:
    'The marketing conference will cover digital marketing, social media trends, SEO strategies, content creation, and more.',
  action: 'Contact',
  heading1: 'Frequently Asked Questions',
  faq4Question:
    'Are there any group discounts available for conference tickets?',
  faq2Question: 'What benefits do premium members get on the book review app?',
  heading2: 'Conference and App Membership',
  faq3Question: 'Can I access past conference recordings?',
  faq1Question: 'What topics will be covered at the marketing conference?',
  content2:
    'Premium members of the book review app receive exclusive discounts on book purchases, access to premium content, and personalized recommendations.',
}

FAQ11.propTypes = {
  faq1Question1: PropTypes.string,
  content1: PropTypes.string,
  action: PropTypes.string,
  heading1: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Question: PropTypes.string,
  heading2: PropTypes.string,
  faq3Question: PropTypes.string,
  faq1Question: PropTypes.string,
  content2: PropTypes.string,
}

export default FAQ11
