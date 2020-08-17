import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { Layout } from 'Components/Layout'
import { CardCollection } from 'Components/Card/Collection'
import { Welcome } from 'Components/Welcome'
import { useDimension } from 'Hooks/UseDimension'
import { useScroll } from 'Hooks/UseScroll'
import PhoneSvg from 'Svg/Phone/Phone.svg'
import { HumanSvg } from 'Svg/Human'

export default function Home() {
  const { width } = useDimension()
  const scroll = useScroll()

  const imageWidth = (20 / 100) * width
  const imageHeight = (812 / 375) * imageWidth

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                date
                title
              }
              fields {
                slug
              }
              excerpt
              timeToRead
              html
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Layout page={`Home`}>
        <CardCollection list={data.allMarkdownRemark.edges} />
        {
          width >= 1440 && (
            <>
              <div
                style={{
                  perspective: 400,
                  position: `fixed`,
                  top: 120,
                  left: `50%`,
                  transform: `translateX(-50%) rotateY(${scroll * 3}deg)`
                }}>
                <div className="phone-svg-container">
                  <img
                    alt={''}
                    src={PhoneSvg}
                    width={imageWidth}
                    height={imageHeight} />
                </div>
                <div
                  style={{
                    position: `absolute`,
                    top: 0,
                    left: `50%`,
                    transform: `translateX(-50%)`
                  }}
                  className="human-svg-container">
                  <HumanSvg />
                </div>
              </div>
              <Welcome />
            </>
          )
        }
      </Layout>
    </>
  )
}
