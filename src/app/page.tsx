import Link from 'next/link'; {/*For Icons and Portfolio Links*/}
import Layout from '../app/layout';
import NavBar from '../components/NavBar';
import Hover from '../components/Hover';


export default function Home() {
  return (

    <Layout>
      <NavBar/>
    <main>

{/*Home Section*/}
      <div id="Home">
        <img id="homephoto" src="IMG_1180.JPG"/>

        <div className="heading">
          <h1>Hello, I'm <span style={{ color: '#b8f5c8' }}>Cecil</span>.</h1>
          <h1>I'm an aspiring digital philosopher.</h1>
        </div>

        <div className="Icons">
          <div>
            <img src="icons8-python-48.png" alt="Python"/>
            <span className="icon-name">Python</span>
          </div>
          <div>
            <img src="icons8-html-logo-48.png" alt="HTML"/>
            <span className="icon-name">HTML</span>
          </div>
          <div>
            <img src="icons8-css-logo-48.png" alt="CSS"/>
            <span className="icon-name">CSS</span>
          </div>
          <div>
            <img src="icons8-sql-48.png" alt="SQL"/>
            <span className="icon-name">SQL</span>
        </div>
</div>
      </div>

{/*About Section*/}
<section id="AboutMe">
<h2>About</h2>

  <Hover
  defaultTitle="Introduction"
  defaultContent="Hello there, my name is Cecil Gravely Jr. Born and raised in Virginia. My life has been filled with nothing but blessings. Here I've detailed things I find fascinating and how it has shaped who I am in. Thank you for stopping by!"
  options={[
    { title: "Family", 
      content: "Family is the cornerstone of my life, providing unwavering support and love. Growing up in a close-knit environment has instilled in me values of compassion, unity, and resilience. Their encouragement fuels my pursuits, and the bonds we share continually inspire me to strive for excellence in all facets of life.", 
      imageSrc: "/LaFamilia.JPG" },
    { title: "Anime", 
      content: "Anime represents an incredible realm of storytelling and creativity that has deeply resonated with me. Its diverse genres, rich narratives, and vivid artistry have captivated my imagination since childhood. Through anime, I've discovered profound themes, intricate character developments, and inspiring messages that have influenced my perspectives and sparked creativity within me. My favorite animes are Naruto, Solo Leveling, My Hero Academia, Jujutsu Kaisen, Sword Art Online, YuyuHakusho, DragonBall, and Hunter x Hunter.", 
      imageSrc: "/solo-leveling-sung-jinwoo.webp" },
    { title: "Video Games", 
      content: "Video games have been a significant source of joy and fascination for me. From immersive RPGs to thrilling action-adventure titles, gaming has offered an escape into fantastical worlds while fostering problem-solving skills and strategic thinking. Some of my favorite games, like Call of Duty, Halo, Apex Legends, Elder Scrolls, Rocket League have left a lasting impact on me, not only for their entertainment value but also for the emotional connections and memorable experiences they've provided.", 
      imageSrc: "/HaloOrlando.JPG" },
    { title: "Sports", 
      content: "Engaging in sports has been an integral part of my life, fostering discipline, teamwork, and a healthy lifestyle. Whether on the field, court, or track, sports have taught me valuable lessons in perseverance and sportsmanship. Participating in basketball, football, track & field, soccer, chess has not only kept me physically active but has also cultivated a sense of camaraderie and determination that translates into various aspects of my life. My favorite players are Kevin Durant, Angel Di Maria, and Hikaru Nakamura.", 
      imageSrc: "/Angel%20Di%20Maria.jpg" },
  ]}
  />

</section>

{/*Portfolio Section*/}
  <section id="Portfolio">
    <h2>Portfolio</h2>
        <div className='portfolio-content-left'>
          <iframe src="https://www.youtube.com/embed/k2d1QZVF3ww?si=-9nFu-08qOBqzaqK"  allowFullScreen></iframe>

          <div className='portfolio-info'>
            <p>
              Grocery List is a Python program utilizing Kroger's API to make shopping easy.
            </p>
          </div>
        </div>

        <div className='portfolio-content-right'>
          <iframe src="https://www.youtube.com/embed/6YTU_CQuquc?si=-VmgvmOKV4HV0rua"  allowFullScreen></iframe>

          <div className='portfolio-info'>
            <p>
              GodsArena is a rendition of the GameBattles website. A flask application utilizing 
              Python, Javascript, and mySQL.
            </p>
          </div>
        </div>
  </section>

{/*Contact Section*/}
  <section id="Contact" className='contact'>

      <h2>Contact</h2>
      <div className='contact-text'>
      <p>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
    </div>

      <form className="contact-form">
        <input className="contact-form-name" name="name" placeholder="Name"></input>
        <input className="contact-form-email" type="email" name="_replyto" placeholder="Email"></input>
        <textarea className="contact-message" placeholder="Message"></textarea>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
  </section>

{/*Footer Section*/}

<footer id="Footer">
  <div className="footer-links">
    <Link href={"https://www.linkedin.com/in/cecilgravelyjr/"}>
      <img src="icons8-linkedin-logo-48.png" />
    </Link>
    <Link href={"https://github.com/Cec-bit"}>
      <img src="icons8-github-50.png" />
    </Link>
  </div>
  <div className="footer-info">
    <small> Cecil Gravely Jr</small>
  </div>
</footer>


    </main>
    </Layout>
  );
}
