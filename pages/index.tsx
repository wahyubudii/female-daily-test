import React, { useState } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import TopBanner from '../components/Ads/TopBanner'
import BIllboard from '../components/Ads/BillBoard'
import EditorChoice from '../components/EditorChoice'
import MatchSkin from '../components/MatchSkin'
import InternalCampign from '../components/Ads/InternalCampign'
import LatestArticles from '../components/LatestArticles'
import LastReviews from '../components/LastReviews'
import PopularGroups from '../components/PopularGroups'
import LatestVideos from '../components/LatestVideos'
import TopBrands from '../components/TopBrands'
import Closing from '../components/Closing'
import Footer from '../components/Footer'

export async function getServerSideProps() {
  const res = await fetch(`https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp`)
  const data = await res.json();

  return {
    props: data,
  };
}

export default function Home(props:any) {
  const [data, setData] = useState(props)

  return (
    <div className='h-full'>
      <Header />
      <Nav />
      <TopBanner />
      <BIllboard />
      <EditorChoice props={data} />
      <MatchSkin props={data} />
      <InternalCampign />
      <LatestArticles props={data} />
      <LastReviews props={data} />
      <PopularGroups props={data} />
      <LatestVideos />
      <TopBrands />
      <Closing />
      <Footer />
    </div>
  )
}
