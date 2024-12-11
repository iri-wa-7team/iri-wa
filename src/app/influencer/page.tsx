import Header from './components/header/Header';
import MainSection from './_view/mainSection/mainSection';
import Card from './components/card/Card';
import Banner from './components/banner/Banner';
import Review from './components/review/Review';
import Question from './components/question/Question';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';

export default function InfluencerPage() {
  return (
    <>
      <Header />
      <MainSection />
      <main className='ml-25 flex flex-col items-center'>
        <Card />
        <Banner />
        <Review />
        <Question />
      </main>
      <Join />
      <Footer />
    </>
  );
}
