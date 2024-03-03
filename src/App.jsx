import Main from './components/3-main/Main'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useEffect, useState } from 'react'

function App() {

  const [showArrow,setshowArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY>400) {
        setshowArrow(true);
      } else {
        setshowArrow(false);
      }
     })
  } , []);
  
  return (
    <div className='container' id="header">
      <Header/>
      <Hero/>
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      <Contact/>
      <div className='divider'/>
      <Footer />

      
        <a href="#header" style={{opacity : showArrow? 1 : 0,transition : "0.5s"}}>
        <button className="icon-arrow-up scroll-top"></button>
        </a>
    </div>
  )
}

export default App
