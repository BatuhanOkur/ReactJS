import 'bulma/css/bulma.css'
import './App.css'
import  Books  from './Books'
import Nutuk from './assets/nutuk.jpg'
import TurklerinTarihi from './assets/turklerin-tarihi.jpg'
import TurlerinKokeni from './assets/turlerin-kokeni.jpg'
import BeyazZambaklarUlkesinde from './assets/beyaz-zambaklar-ulkesinde.jpg'
function App() {

  return (
    <>
    <section className="hero is-info">
      <div className="hero-body">
        <p className="title">
          Kitaplar
        </p>
      </div>
    </section>
    
      <div className='container'>
        <div className="columns">
          <div className="column">
          <Books 
      image = {Nutuk}
      title="Nutuk"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus beatae possimus 
      harum illum dignissimos illo ratione voluptas eum placeat ipsam non et optio consectetur quaerat, odit assumenda, repellendus corporis."/>
          </div>
          <div className="column">
          <Books 
      image = {TurklerinTarihi}
      title="Türklerin Tarihi"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus beatae possimus 
      harum illum dignissimos illo ratione voluptas eum placeat ipsam non et optio consectetur quaerat, odit assumenda, repellendus corporis."/>
          </div>
          <div className="column">
          <Books
      image = {TurlerinKokeni}
      title="Türlerin kökeni"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus beatae possimus 
      harum illum dignissimos illo ratione voluptas eum placeat ipsam non et optio consectetur quaerat, odit assumenda, repellendus corporis."/>
          </div>
          <div className="column">
          <Books
      image = {BeyazZambaklarUlkesinde}
      title="Beyaz Zambaklar Ülkesinde"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus beatae possimus 
      harum illum dignissimos illo ratione voluptas eum placeat ipsam non et optio consectetur quaerat, odit assumenda, repellendus corporis."/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
