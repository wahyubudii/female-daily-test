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

export default function Home() {
  return (
    <div className='h-full'>
      <Header />
      <Nav />
      <TopBanner />
      <BIllboard />
      <EditorChoice />
      <MatchSkin />
      <InternalCampign />
      <LatestArticles />
      <LastReviews />
      <PopularGroups />
      <LatestVideos />
      <TopBrands />
      <Closing />
      <Footer />
    </div>
  )
}
