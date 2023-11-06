import BannerImage from '../assets/banneryeni.jpg'
import '../style/About.css'
function About() {
  return (
    <>
    <div className="about">
      <div className="aboutTop" 
      style={{backgroundImage: `url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis numquam officia eligendi quibusdam, perspiciatis mollitia beatae reprehenderit porro eum ab, autem, vel excepturi saepe? Quaerat aliquam non quae placeat ut? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quo ut tempora fugiat cumque deleniti molestias, consequuntur officia ad, quisquam quia earum error autem commodi sunt explicabo dolorum veniam. Fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius natus quam dignissimos illo porro architecto nulla, aperiam possimus delectus voluptate quae quasi quia iste atque repudiandae sapiente. Beatae, quod sapiente!</p>
      </div>
    </div>
    </>
  )
}

export default About