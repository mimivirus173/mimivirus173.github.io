import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page"> 
        <p>I'm making this</p>
        <StaticImage
        alt="dog"
        src="../images/dog.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage