import { useState } from 'react'
import './App.css'
import Book from './Book';

function getRandomBook(){
  const bookArray = ['Nutuk', 'TurklerinTarihi', 'TurlerinKokeni', 'BeyazZambaklarUlkesinde'];
  return bookArray[Math.floor(Math.random()*bookArray.length)];
}

function App() {
  const [books, setBooks] = useState([]);

  const handleClick = () =>{
    setBooks([...books, getRandomBook()]);
  }

  const bookList = books.map((book, index) => {
      return <Book key={index} bookName={book} />
  });
  

  return (
    <div className='App'>
      <button className='btnAddBook' onClick={handleClick}>Kitap Ekle</button>
      <div className='bookList'>
        {bookList}
      </div>
    </div>
  );
}

export default App
