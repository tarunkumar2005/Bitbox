import './css/About.css';
import img1 from '../assets/images/Anuj.png';
import img2 from '../assets/images/Jitendra.png';
import img3 from '../assets/images/Harshit.png';
import aboutImg from '../assets/images/Vector Gif/About.gif'
import aboutImg1 from '../assets/images/Vector Gif/R.gif'
import aboutImg2 from '../assets/images/Vector Gif/tenor.gif'
import aboutHeroImg from '../assets/images/Others/aboutImg.png'

export default function About() {
  return (
    <div className='About-Sec-Container'>
      <div className="about">
        <div className='About-Page1'>
          <div className="left-page">
            <h1>About-us</h1>
            <p className='fs-4'>
              Kaiyuan is like a friendly community where people working on projects can come together. If you’re stuck or need advice, you can ask for help. And if you know something, you can share your knowledge with others. It’s all about supporting each other and building a helpful community.
              🌟<br /> <br />Welcome to our open-source platform, where innovation knows no bounds and collaboration is key. Dive into our repository of code, where creativity flourishes and solutions come to life. Join our vibrant community of developers, enthusiasts, and visionaries, as we build the future together, one line at a time

            </p>
          </div>
          <div className="right-page" data-engine="three.js r149">
            <div class="container noselect">
              <div class="canvas">
                <div class="tracker tr-1"></div>
                <div class="tracker tr-2"></div>
                <div class="tracker tr-3"></div>
                <div class="tracker tr-4"></div>
                <div class="tracker tr-5"></div>
                <div class="tracker tr-6"></div>
                <div class="tracker tr-7"></div>
                <div class="tracker tr-8"></div>
                <div class="tracker tr-9"></div>
                <div class="tracker tr-10"></div>
                <div class="tracker tr-11"></div>
                <div class="tracker tr-12"></div>
                <div class="tracker tr-13"></div>
                <div class="tracker tr-14"></div>
                <div class="tracker tr-15"></div>
                <div class="tracker tr-16"></div>
                <div class="tracker tr-17"></div>
                <div class="tracker tr-18"></div>
                <div class="tracker tr-19"></div>
                <div class="tracker tr-20"></div>
                <div class="tracker tr-21"></div>
                <div class="tracker tr-22"></div>
                <div class="tracker tr-23"></div>
                <div class="tracker tr-24"></div>
                <div class="tracker tr-25"></div>
                <div id="card">
                  <img src={aboutHeroImg} id='propmpt' alt="aboutVectorImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Record Section */}
      <div className='Website-Record-Sec'>
        <div className='container-page'>
          <h2 className='Heading-Page'>Website Record</h2>
          <div className="container-bx">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No of Projects</p>
                  <p>Hover Me</p>
                  <h3 className='title'>570+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <div className="about-gif">
                    <img src={aboutImg} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No. of Pull Request</p>
                  <p>Hover Me</p>
                  <h3><b>850+</b></h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <div className="about-gif">
                    <img src={aboutImg1} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">Pull Request</p>
                  <p>Hover Me</p>
                  <h3 className='title'>850+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">Hello</p>
                  <div className="about-gif">
                    <img src={aboutImg2} alt="about-image" />
                  </div>
                  <p>Like me</p>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">No. of User</p>
                  <p>Hover Me</p>
                  <h3 className='title'>870+</h3>
                </div>
                <div className="flip-card-back">
                  <p className="title">Happy User</p>
                  <div className="about-gif">
                    <img src={aboutImg2} alt="about-image" />
                  </div>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section>
        <div class="profile-card">
          <button class="mail">
          </button>
          <div class="profile-pic">
          </div>
          <div class="bottom">
            <div class="content">
              <span class="name">My Name</span>
              <span class="about-me">Lorem ipsum dolor sit amet consectetur adipisicinFcls </span>
            </div>
            <div class="bottom-bottom">
              <div class="social-links-container">
              </div>
              <button class="button">Contact Me</button>
            </div>
          </div>
        </div>
      </section> */}
      <div className='Contributer-Section'>
        <h2 className='Heading-Page'>Our Contributer</h2>
        <div className="team fs-5">
          <div className="team-box" >
            <img src={img1} alt="OWNER" />
            <div className="teamember"><b>Anuj Verma</b></div>
          </div>
          <div className="team-box hover01">
            <img src={img3} alt="OWNER" />
            <div className="teamember"><b>Harshit Singh</b></div>
            <div className="teamember"><b>Harshit Singh</b></div>
          </div>
          <div className="team-box">
            <img src={img2} alt="OWNER" />
            <div className="teamember"><b>Jitendra Kumar</b></div>
          </div>
        </div>
      </div>

      {/* <div className="info">
          <p className='fs-4'>&quot;Open source is a shared vision of building a community of similar -minded individuals. Together, we collaborate, innovate, and shape the future of technology with transparency and inclusivity at its core  write in more effective way&quot;</p>
        </div> */}
    </div>
  );
}