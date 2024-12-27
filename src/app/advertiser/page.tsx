import AdNavBar from '@/components/navbar/AdvNavBar';
import IntroSection from './components/intro/IntroSection';
import PerformanceSection from './components/performance/PerformanceSection';
import AboutSection from './components/about/AboutSection';
import ScrollProvider from '@/hooks/useScroll';
import HotelReview from './components/hotelreview/HotelReview';
import LogoLine from './components/logoline/LogoLine';
import Cert from './components/cert/Cert';
import Services from './components/services/Services';
import Question from './components/question/Question';
import Inquiry from './components/inquiry/Inquiry';

export default function AdvertiserPage() {
  return (
    <div>
      <ScrollProvider>
        <AdNavBar />
        <IntroSection />
        <PerformanceSection />
        <AboutSection />
        <HotelReview />
        <LogoLine />
        <Cert />
        <Services />
        <Question />
        <Inquiry />
      </ScrollProvider>
    </div>
  );
}
