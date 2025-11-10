import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import EmbedForm from "../components/embedForm"
import useWindowSize from "../utils/useWindowSize"

const Index = ({ data }) => {
  const [supportOpen, setSupportOpen] = useState(false)
  const { introText, missionText, supporterText, splashImages } =
    data.contentfulSplashPage
  const { address, phone, email, logos } = data.contentfulFooter
  const { width } = useWindowSize()
  const isMobile = width < 761

  const formUrl =
    "https://nationalurbanleague.salsalabs.org/urbancivilrightsmuseum/index.html"

  return (
    <div className="splash-outer">
      <div className="splash-left">
        <h1>
          Urban Civil
          <br />
          Rights Museum
          <br />
          <span>In Harlem</span>
        </h1>
        <div>
          <h2>Opening 2026</h2>
          <div>
            <h3>
              Introducing New York<span className="helvetica">'</span>s First
              Civil Rights Museum!
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: introText.childMarkdownRemark.html,
              }}
            ></div>
          </div>
          <div>
            <h3>Mission</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: missionText.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
        <div>
          <h3>Become a Founding Supporter</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: supporterText.childMarkdownRemark.html,
            }}
            className="supporter-text"
          ></div>
          <button className="support-btn" onClick={() => setSupportOpen(true)}>
            Support Now
          </button>
          <div className="footer">
            <div className="logos">
              {logos.map((logo, index) => (
                <GatsbyImage
                  key={index}
                  image={logo.gatsbyImageData}
                  className="splash-logo"
                ></GatsbyImage>
              ))}
            </div>
            <div className="splash-email">
              {email}
              <br />
              {phone}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: address }}
              className="splash-email"
            ></div>
          </div>
          {!isMobile && <EmbedForm></EmbedForm>}
        </div>
      </div>
      {supportOpen ? (
        <div className="salsa-container">
          <div className="form-heading">
            <div className="form-title">Become a Founding Supporter</div>
            <button
              className="form-close-btn"
              aria-label="close donate form"
              onClick={() => setSupportOpen(false)}
            >
              <span class="x-icon"></span>
            </button>
          </div>
          <iframe
            src={formUrl}
            title="Salsa Labs Form"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: "none" }}
          />
        </div>
      ) : (
        <div className="splash-right">
          {splashImages.map((image, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? "figure-left" : "figure-right"}
            >
              <figure className="splash-image">
                <GatsbyImage image={image.image.gatsbyImageData}></GatsbyImage>
                <figcaption
                  dangerouslySetInnerHTML={{
                    __html: image.caption.childMarkdownRemark.html,
                  }}
                  className="splash-caption"
                ></figcaption>
              </figure>
            </div>
          ))}
        </div>
      )}
      <div className="mobile-footer">
        <div
          dangerouslySetInnerHTML={{ __html: address }}
          className="mobile-splash-address"
        ></div>
        <div className="mobile-splash-email">
          {email}
          <br />
          {phone}
        </div>
        <div className="mobile-sign-up">
          <EmbedForm></EmbedForm>
        </div>
        <div className="mobile-logos">
          {logos.map((logo, index) => (
            <GatsbyImage
              key={index}
              image={logo.gatsbyImageData}
              className="splash-mobile-logo"
            ></GatsbyImage>
          ))}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    contentfulSplashPage {
      introText {
        childMarkdownRemark {
          html
        }
      }
      missionText {
        childMarkdownRemark {
          html
        }
      }
      supporterText {
        childMarkdownRemark {
          html
        }
      }
      splashImages {
        caption {
          childMarkdownRemark {
            html
          }
        }
        id
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    contentfulFooter {
      address
      email
      phone
      logos {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export const Head = () => <Seo />

export default Index
