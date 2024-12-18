import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import {useRef, useState, useEffect, useCallback} from 'react'
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  const {themeState} = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = useCallback(() => {
    setShowFloatingNav(true);
  }, []);

  const hideFloatingNavHandler = useCallback(() => {
    setShowFloatingNav(false);
  }, []);

  const floatingNavToggleHandler = useCallback(() => {
    // check if we scrolled up or down at least 20px
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }, [siteYPostion, mainRef, showFloatingNavHandler, hideFloatingNavHandler]);

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [floatingNavToggleHandler])

  

  return (
    <Router>
        <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <FAQs/>
            <Contact/>
            <Footer/>
            <Theme/>
            {showFloatingNav && <FloatingNav/>}
        </main>
    </Router>
  )
}

export default App