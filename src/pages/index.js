import * as React from "react"
import Email from "../components/Email"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testmonials from "../components/Testmonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testmonials />
    <Stats />
    <Email />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
