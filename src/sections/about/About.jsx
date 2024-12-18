import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    {/* eslint-disable-next-line */}
                    <img src={AboutImage} alt="Image description" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Hi, my name is HARSH SONI from Mumbai.
                I’m a Full Stack Developer with a passion for learning and problem-solving.
                 I specialize in both frontend (HTML, CSS, JavaScript, Bootstrap, React.js)
                  and backend (Node.js, Express, SQL, NoSQL) development. 
                 
                </p>
                <p>
                I enjoy creating dynamic web applications and user-friendly interfaces
                I’m also into content creation and freelancing, sharing my knowledge through blogs and videos.

Currently, I’m pursuing a Bachelor of Technology in Electronics and Computer Science at VIT Mumbai. If you’re looking for a skilled web developer, feel free to connect with me!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About