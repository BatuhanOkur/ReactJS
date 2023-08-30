import Nutuk from './assets/nutuk.jpg'
import TurklerinTarihi from './assets/turklerin-tarihi.jpg'
import TurlerinKokeni from './assets/turlerin-kokeni.jpg'
import BeyazZambaklarUlkesinde from './assets/beyaz-zambaklar-ulkesinde.jpg'
import './Book.css';

const bookMap = {
    Nutuk: Nutuk,
    TurklerinTarihi: TurklerinTarihi,
    TurlerinKokeni: TurlerinKokeni,
    BeyazZambaklarUlkesinde: BeyazZambaklarUlkesinde,
}

function Book({bookName}) {
    console.log(bookName);
    return ( 
        <div className='courseDiv'>
            <img className='book' src={bookMap[bookName]} alt="" />
        </div>
     );
}

export default Book;