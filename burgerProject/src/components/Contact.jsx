import Banner from '../assets/banner.png'
import '../style/Contact.css'
function Contact() {
  return (
    <>
    <div className="contact">
      <div className="leftSide" 
      style={{backgroundImage: `url(${Banner})`}}>
      </div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" name='name' placeholder='Adınızı ve Soyadınızı Giriniz...' />
          <label>Email</label>
          <input type="email" name='email' placeholder='Emailinizi Giriniz...' />
          <label>Mesajınız</label>
          <textarea name="message" rows="6" placeholder='Mesajınızı Giriniz...'></textarea>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact