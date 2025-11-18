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
  const { address, nysedCredit, email, addressLink, logoLinks, careersLink } =
    data.contentfulFooter
  const { width } = useWindowSize()
  const isMobile = width < 769

  const formUrl =
    "https://nationalurbanleague.salsalabs.org/urbancivilrightsmuseum/index.html"

  return (
    <div className="splash-outer">
      <div className="splash-left">
        <svg className="logo-svg" viewBox="0 0 1436 583" fill="none">
          <path
            d="M0 139.592V1.62012H44.2803V140.402C44.2803 148.232 48.8701 153.902 55.3506 153.902C61.8301 153.902 66.4209 148.232 66.4209 140.402V1.62012H100.981V139.592C100.981 171.183 83.9707 192.243 54.8105 192.243H47.25C17.2803 192.243 0 171.183 0 139.592Z"
            fill="black"
          />
          <path
            d="M118.256 1.62012H179.277C209.788 1.62012 225.718 20.79 225.718 47.251V52.6504C225.718 70.4707 214.647 83.4307 201.958 88.291C215.458 93.1514 223.288 100.711 223.288 116.912C223.288 126.361 222.478 136.082 222.478 146.072C222.478 160.922 222.748 175.503 228.958 190.623H185.218C180.357 184.953 179.277 165.513 179.277 147.962C179.277 137.972 180.087 123.662 180.087 119.611C180.087 112.861 175.768 109.081 170.098 109.081H162.537V190.623H118.256V1.62012ZM169.558 76.1406C178.468 76.1406 183.058 69.1211 183.058 59.6709V53.4609C183.058 41.8506 179.277 36.1807 169.558 36.1807H162.537V76.1406H169.558Z"
            fill="black"
          />
          <path
            d="M240.562 1.62012H299.694C326.154 1.62012 345.324 18.6299 345.324 43.4707V55.6211C345.324 72.6309 337.225 83.4307 326.154 88.291V88.8311C338.305 94.501 345.864 105.302 345.864 122.312V146.342C345.864 174.423 327.234 190.623 297.534 190.623H240.562V1.62012ZM302.664 61.0205V50.2207C302.664 41.3105 298.884 36.1807 292.943 36.1807H284.304V76.1406H292.943C298.884 76.1406 302.664 70.4707 302.664 61.0205ZM302.664 141.752V121.771C302.664 114.212 298.884 108.542 292.943 108.542H284.304V156.062H292.943C298.884 156.062 302.664 150.662 302.664 141.752Z"
            fill="black"
          />
          <path
            d="M382.579 1.62012H434.96L465.2 190.623H419.3L416.6 170.643H389.6L386.899 190.623H352.339L382.579 1.62012ZM413.09 144.182L403.369 72.6309L393.38 144.182H413.09Z"
            fill="black"
          />
          <path
            d="M474.918 1.62012H511.368L543.769 76.4111L542.959 50.2207V1.62012H577.52V190.623H549.438L508.668 94.7715L509.479 120.422V190.623H474.918V1.62012Z"
            fill="black"
          />
          <path
            d="M625.032 132.842V57.2402C625.032 24.0303 644.742 0 671.742 0H679.303C711.974 0 724.934 25.6504 724.934 53.4609V76.9512H692.533V51.3008C692.533 44.2803 687.403 38.8809 680.923 38.8809C674.442 38.8809 669.312 44.2803 669.312 51.3008V141.482C669.312 148.502 674.442 153.902 680.923 153.902C687.403 153.902 692.533 148.502 692.533 141.482V116.372H724.934V137.972C724.934 174.692 706.843 192.243 679.303 192.243H671.742C641.502 192.243 625.032 167.942 625.032 132.842Z"
            fill="black"
          />
          <path
            d="M738.428 1.62012H782.709V190.623H738.428V1.62012Z"
            fill="black"
          />
          <path
            d="M791.348 1.62012H837.248L853.179 119.611L869.648 1.62012H904.209L873.969 190.623H821.588L791.348 1.62012Z"
            fill="black"
          />
          <path
            d="M912.848 1.62012H957.128V190.623H912.848V1.62012Z"
            fill="black"
          />
          <path
            d="M974.406 1.62012H1018.69V150.662H1061.35V190.623H974.406V1.62012Z"
            fill="black"
          />
          <path
            d="M0.539062 197.62H61.5605C92.0713 197.62 108.001 216.79 108.001 243.251V248.65C108.001 266.471 96.9307 279.431 84.2412 284.291C97.7412 289.151 105.571 296.711 105.571 312.912C105.571 322.361 104.761 332.082 104.761 342.072C104.761 356.922 105.031 371.503 111.241 386.623H67.501C62.6406 380.953 61.5605 361.513 61.5605 343.962C61.5605 333.972 62.3701 319.662 62.3701 315.611C62.3701 308.861 58.0508 305.081 52.3809 305.081H44.8203V386.623H0.539062V197.62ZM51.8408 272.141C60.751 272.141 65.3408 265.121 65.3408 255.671V249.461C65.3408 237.851 61.5605 232.181 51.8408 232.181H44.8203V272.141H51.8408Z"
            fill="black"
          />
          <path
            d="M122.846 197.62H167.127V386.623H122.846V197.62Z"
            fill="black"
          />
          <path
            d="M182.246 326.682V253.24C182.246 220.03 203.306 196 230.847 196H238.406C269.188 196 286.468 220.03 286.468 245.41V265.931H254.066V249.19C254.066 241.36 247.856 234.881 240.297 234.881C233.007 234.881 226.526 241.36 226.526 249.19V340.182C226.526 346.122 231.927 350.982 237.866 350.982C243.807 350.982 249.207 346.122 249.207 340.182V324.252H237.866V291.852H288.088V386.623H264.597L258.927 375.822C254.337 382.572 244.887 388.243 233.007 388.243H225.446C210.326 388.243 182.246 376.633 182.246 326.682Z"
            fill="black"
          />
          <path
            d="M303.475 197.62H347.755V274.571H365.575V197.62H409.855V386.623H365.575V311.832H347.755V386.623H303.475V197.62Z"
            fill="black"
          />
          <path
            d="M453.053 237.04H420.112V197.62H530.274V237.04H497.333V386.623H453.053V237.04Z"
            fill="black"
          />
          <path
            d="M535.132 336.132V318.311H566.452V332.352C566.452 344.232 572.122 351.792 584.542 351.792C596.963 351.792 601.553 344.232 601.553 336.672C601.553 327.762 595.612 320.742 581.843 311.292C556.462 293.741 538.912 279.971 538.912 243.521C538.912 216.25 557.542 196 585.353 196H592.912C621.533 196 638.003 216.521 638.003 243.251V262.15H606.683V250.271C606.683 237.04 601.282 231.91 593.452 231.91C585.622 231.91 581.032 237.04 581.032 245.41C581.032 255.131 589.942 263.23 606.683 275.651C634.764 296.441 644.753 312.372 644.753 336.672C644.753 369.883 623.153 388.243 592.912 388.243H585.353C550.521 388.243 535.132 362.862 535.132 336.132Z"
            fill="black"
          />
          <path
            d="M687.678 197.62H738.979L758.958 269.711L776.238 197.62H827.539V386.623H785.419L785.959 289.961L762.738 386.623H744.918L721.698 289.961L722.238 386.623H687.678V197.62Z"
            fill="black"
          />
          <path
            d="M844.273 335.592V197.62H888.554V336.402C888.554 344.232 893.144 349.902 899.624 349.902C906.104 349.902 910.694 344.232 910.694 336.402V197.62H945.255V335.592C945.255 367.183 928.244 388.243 899.084 388.243H891.523C861.554 388.243 844.273 367.183 844.273 335.592Z"
            fill="black"
          />
          <path
            d="M957.13 336.132V318.311H988.45V332.352C988.45 344.232 994.12 351.792 1006.54 351.792C1018.96 351.792 1023.55 344.232 1023.55 336.672C1023.55 327.762 1017.61 320.742 1003.84 311.292C978.46 293.741 960.91 279.971 960.91 243.521C960.91 216.25 979.54 196 1007.35 196H1014.91C1043.53 196 1060 216.521 1060 243.251V262.15H1028.68V250.271C1028.68 237.04 1023.28 231.91 1015.45 231.91C1007.62 231.91 1003.03 237.04 1003.03 245.41C1003.03 255.131 1011.94 263.23 1028.68 275.651C1056.76 296.441 1066.75 312.372 1066.75 336.672C1066.75 369.883 1045.15 388.243 1014.91 388.243H1007.35C972.52 388.243 957.13 362.862 957.13 336.132Z"
            fill="black"
          />
          <path
            d="M1077.28 197.62H1164.22V237.58H1121.56V275.921H1147.21V310.481H1121.56V348.282H1164.22V386.623H1077.28V197.62Z"
            fill="black"
          />
          <path
            d="M1177.44 335.592V197.62H1221.72V336.402C1221.72 344.232 1226.31 349.902 1232.79 349.902C1239.27 349.902 1243.86 344.232 1243.86 336.402V197.62H1278.42V335.592C1278.42 367.183 1261.41 388.243 1232.25 388.243H1224.69C1194.72 388.243 1177.44 367.183 1177.44 335.592Z"
            fill="black"
          />
          <path
            d="M1295.7 197.62H1347L1366.98 269.711L1384.26 197.62H1435.56V386.623H1393.44L1393.98 289.961L1370.76 386.623H1352.94L1329.72 289.961L1330.26 386.623H1295.7V197.62Z"
            fill="black"
          />
          <path
            d="M0.539062 393.62H24.2998V582.623H0.539062V393.62Z"
            fill="black"
          />
          <path
            d="M41.5781 393.62H66.6885L90.1787 531.862L88.0186 469.221V393.62H107.459V582.623H85.8584L59.3975 436.28L61.0176 499.731V582.623H41.5781V393.62Z"
            fill="black"
          />
          <path
            d="M157.135 393.62H180.896V478.941H198.716V393.62H222.477V582.623H198.716V499.462H180.896V582.623H157.135V393.62Z"
            fill="black"
          />
          <path
            d="M253.796 393.62H284.306L304.286 582.623H279.986L277.556 553.732H256.226L253.525 582.623H233.545L253.796 393.62ZM275.936 536.992L267.025 431.96L257.575 536.992H275.936Z"
            fill="black"
          />
          <path
            d="M315.623 393.62H352.073C371.243 393.62 381.773 404.96 381.773 424.67V455.181C381.773 473.001 377.453 480.831 366.653 485.691C378.264 489.472 381.773 497.842 381.773 509.992C381.773 519.712 381.233 525.652 381.233 536.452C381.233 552.112 382.044 565.612 387.174 582.623H362.873C359.363 575.333 357.743 553.463 357.743 536.992C357.743 525.382 358.283 512.962 358.283 507.021C358.283 500.002 354.503 497.031 348.023 497.031H339.383V582.623H315.623V393.62ZM346.673 478.131C354.503 478.131 358.554 473.271 358.554 464.361V427.101C358.554 417.38 354.773 413.061 347.483 413.061H339.383V478.131H346.673Z"
            fill="black"
          />
          <path
            d="M398.242 393.62H422.003V561.293H454.674V582.623H398.242V393.62Z"
            fill="black"
          />
          <path
            d="M464.391 393.62H520.282V414.95H488.151V479.481H507.861V498.922H488.151V561.833H521.902V582.623H464.391V393.62Z"
            fill="black"
          />
          <path
            d="M532.432 393.62H564.292L578.332 497.842L590.752 393.62H622.612V582.623H600.202L600.742 432.5L581.842 582.623H570.771L551.602 432.5L552.142 582.623H532.432V393.62Z"
            fill="black"
          />
        </svg>
        <div>
          <h2>Opening 2026</h2>
          <div>
            <h3>
              Introducing New York<span className="helvetica">'</span>s First{" "}
              {isMobile && <br />}
              Civil Rights Museum!
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: introText.childMarkdownRemark.html,
              }}
              className="splash-intro-text"
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
              {logoLinks.map((link, index) => (
                <a
                  href={link.logoLink}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <GatsbyImage
                    image={link.logo.gatsbyImageData}
                    className="splash-logo"
                  ></GatsbyImage>
                </a>
              ))}
            </div>
            <div>
              <div
                className="splash-email"
                dangerouslySetInnerHTML={{ __html: email }}
              ></div>
              <a href={careersLink} target="_blank" rel="noreferrer">
                CAREERS
              </a>
            </div>
            <a
              href={addressLink}
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: address }}
              className="splash-email"
            ></a>
            <div>{nysedCredit}</div>
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
        <div className="mobile-splash-address">
          <a
            href={addressLink}
            target="_blank"
            rel="noreferrer"
            dangerouslySetInnerHTML={{ __html: address }}
          ></a>
          <div>{nysedCredit}</div>
        </div>
        <div className="mobile-splash-email">
          <div dangerouslySetInnerHTML={{ __html: email }}></div>
          <a href={careersLink} target="_blank" rel="noreferrer">
            CAREERS
          </a>
        </div>
        <div className="mobile-sign-up">
          <EmbedForm></EmbedForm>
        </div>
        <div className="mobile-logos">
          {logoLinks.map((link, index) => (
            <a
              href={link.logoLink}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <GatsbyImage
                image={link.logo.gatsbyImageData}
                className="splash-mobile-logo"
              ></GatsbyImage>
            </a>
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
      addressLink
      logoLinks {
        logoLink
        logo {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      nysedCredit
      careersLink
    }
  }
`

export const Head = () => <Seo />

export default Index
