import './App.css'
import SearchHeader from './components/SearchHeader';
import ImagesList from './components/ImagesList';
import searchImages from './api' 
import { useState } from 'react';


function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  
  return (
    <>
      <SearchHeader search={handleSubmit}/>
      <ImagesList imagesPlaceHolder={images}/>
    </>
  )
}

export default App
