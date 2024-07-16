import './App.css';
import AboutUs from './components/About_Us.tsx';
import Hero_section from './components/Hero_Section.tsx';
import Header from './components/Header.tsx';
import Our_Products from './components/Our_Products.tsx';
import Products_listings from './components/Products_listings.tsx';
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <div>
      <Header />
      <Hero_section />
      <Products_listings />
      <Our_Products />
      <AboutUs />
      <Footer />
    </div>
      
  )
}