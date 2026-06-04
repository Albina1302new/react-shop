import Hero from "./components/Hero/Hero"
import Gallery from "./components/Gallery/Gallery"
import { galleryImages } from "./data/gallery.js" 
import TopLine from "./components/TopLine/TopLine"
import Navigation from "./components/Navigation/Navigation"
import GruopOfProducts from "./components/GruopOfProducts/GruopOfProducts"
import { groupOfProducts } from "./data/groupOfProducts.js"
import Vision from "./components/Vision/Vision"
import { vision } from "./data/vision.js"
import Products from "./components/Products/Products"
import { products } from "./data/products.js"
import RecomendedProducts from "./components/RecomendedProducts/RecomendedProducts"



function App() {
  return (
    <>
      <TopLine />
      <Navigation />
      <Hero />
      <Gallery galleryImages={galleryImages} />
      <GruopOfProducts groupOfProducts={groupOfProducts} />
      <RecomendedProducts products={products}/>
      <Products products={products} />

      <Vision vision={vision} />
    </>
  );
}

export default App
