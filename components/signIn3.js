import React from 'react'
import PropTypes from 'prop-types'

const signIn3 = (props) => {
  return (
    <>
      <div className="sign-in3-container thq-section-padding">
        <div className="sign-in3-max-width thq-section-padding thq-section-max-width" style={{ marginTop: '-90px' }}>
          <div className="sign-in3-form-root">
            <div className="sign-in3-form">
              <h2 className="sign-in3-text thq-heading-2">{props.heading1}</h2>
              <form className="sign-in3-form1">
               
                <div className="sign-in3-email">
                  <label
                    htmlFor="thq-sign-in-1-password"
                    className="thq-body-large"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="thee-sign-in-3-email"
                    required
                    placeholder="Email address"
                    className="sign-in3-textinput thq-body-large thq-input"
                  />
                </div>
                <div className="sign-in3-password">
                  <div className="sign-in3-container1">
                    <label
                      htmlFor="thq-sign-in-3-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>

                  </div>
                  <input
                    type="password"
                    id="thq-sign-in-3-password"
                    required
                    placeholder="Password"
                    className="sign-in3-textinput1 thq-body-large thq-input"
                  />

                </div>
              </form>
              <div className="sign-in3-container2">
                <button
                  type="submit"
                  className="sign-in3-button thq-button-filled"
                >
                  <span className="sign-in3-text5 thq-body-small">
                    {props.action1}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="sign-in3-container3">
            <div className="sign-in3-divider">
              <div className="sign-in3-divider1"></div>
              {/* <p className="thq-body-large">{props.content1}</p> */}
              <div className="sign-in3-divider2"></div>
            </div>
            <a href={"/registerpage"} className="sign-in3-button1 thq-button-outline">
              <span className="sign-in3-text7 thq-body-small">
                {props.action2}
              </span></a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .sign-in3-container {
          min-height: 100vh;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in3-max-width {
            gap: var(--dl-space-space-twounits);
            width: auto;
            display: flex;
            z-index: 100;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .sign-in3-form-root {
            gap: var(--dl-space-space-unit);
            width: 600px;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: center;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
          }
          .sign-in3-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in3-text {
            align-self: center;
          }
          .sign-in3-form1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .sign-in3-email {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .sign-in3-textinput {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in3-password {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .sign-in3-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .sign-in3-hide-password {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
          }
          .sign-in3-icon {
            fill: var(--dl-color-theme-neutral-dark);
            width: 24px;
            height: 24px;
          }
          .sign-in3-textinput1 {
            width: 100%;
            border-color: var(--dl-color-theme-primary1);
            background-color: transparent;
          }
          .sign-in3-text4 {
            align-self: flex-end;
            text-decoration: underline none;
          }
          .sign-in3-container2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in3-button {
            width: 100%;
            align-self: center;
          }
          .sign-in3-text5 {
            text-align: center;
          }
          .sign-in3-container3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sign-in3-divider {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-in3-divider1 {
            flex: 1;
            width: var(--dl-size-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-in3-divider2 {
            flex: 1;
            width: var(--dl-size-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-primary1);
          }
          .sign-in3-button1 {
            width: 100%;
            align-self: center;
            text-decoration: none;
          }
          .sign-in3-text7 {
            text-align: center;
          }
          .sign-in3-sign-up-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .sign-in3-container4 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            z-index: 10;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
          }
          @media (max-width: 991px) {
            .sign-in3-form-root {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .sign-in3-max-width {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .sign-in3-container {
              padding: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .sign-in3-form-root {
              padding: var(--dl-space-space-unit);
            }
            .sign-in3-form {
              padding: var(--dl-space-space-unit);
            }
            .sign-in3-text {
              font-size: var(--dl-font-size-h3);
            }
          }
        `}
      </style>
    </>
  )
}

signIn3.defaultProps = {
  heading1: 'Login to Access Exclusive Content',
  action1: 'Login',
  // content1: 'or sign up with',
  action2: 'Create an Account'
}

signIn3.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string
}

export default signIn3
