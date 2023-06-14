import Button from './Components/Button';
import './Global.css';
import './Home.css';
import { ArrowsClockwise, ArrowUpRight } from "@phosphor-icons/react"

function App() {
  return (
    <div className="App">
      <section className='profile'>
        <header className='container profileId'>
          <img src="https://github.com/brunoruf.png" alt='Minha Foto' />
          <h1 className='title-l'>Ruf,<br /><span className='title-m'>Bruno</span></h1>
        </header>
        <div className='container profileRole'>
          <div className='profileRoleBullets'>
            <span>&</span>
            <span>&</span>
            <span>&</span>
          </div>
          <ul className='profileRoleItems'>
            <li><span>&</span> Front-End Dev.</li>
            <li><span>&</span> Interface Designer</li>
            <li><span>&</span> Art Director</li>
          </ul>
        </div>
        <div className='container profileLinks'>
          <div className='profileLinksIcon'><Button text='cv' icon={<ArrowUpRight />} /></div>
          <div className='profileLinksIcon'><Button text='linkedin' icon={<ArrowUpRight />} /></div>
          <div className='profileLinksIcon'><Button text='github' icon={<ArrowUpRight />} /></div>
        </div>
        <div className='profileOpenWork'>
          <marquee scrollamount="1" behavior="alternate">Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work </marquee>
          <marquee direction='right' scrollamount="1">Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work </marquee>
          <marquee scrollamount="1">Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work Open to work </marquee>
        </div>
      </section>
      <main>
        <section className='container about'>
          <h2 className='title-m'>Sobre</h2>
          <div className='aboutTransition'>
            <p><ArrowsClockwise weight='bold' size={18} /></p>
            <p className='text-info carreer-transition'>Em transição de carreira para Front-End</p>
          </div>
            <p className='paragraph-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet est sed ex varius tincidunt. Etiam nec purus malesuada, feugiat augue non, viverra nulla. Morbi accumsan placerat ultrices. Vestibulum eget nisl sit amet ante pulvinar pellentesque. Quisque sit amet auctor leo, eget fringilla eros. Praesent et ipsum at nibh porta iaculis sit amet placerat leo.</p>
          <ul className='aboutStacksList'>
            <li>
              <img src="./img/stack-javascript.jpg" alt='' />
              <p>Javascript</p>
            </li>
            <li>
              <img src="./img/stack-javascript.jpg" alt='' />
              <p>Stack</p>
            </li>          
            <li>
              <img src="./img/stack-javascript.jpg" alt='' />
              <p>Stack</p>
            </li>          
            <li>
              <img src="./img/stack-javascript.jpg" alt='' />
              <p>Stack</p>
            </li>          
            <li>
              <img src="./img/stack-javascript.jpg" alt='' />
              <p>Stack</p>
            </li>          
            <li>
              <img src="./img/stack-javascript.jpg" alt='' />
              <p>Stack</p>
            </li>
          </ul>
        </section>
        <section className='container aboutClients'>
          <h2 className='title-m'>Clientes Atendidos</h2>
          <ul className='aboutClientsList'>
            <li>
              <img src="./img/client-ticket.png" alt='' />
            </li>
            <li>
              <img src="./img/client-ticket.png" alt='' />
            </li>
            <li>
              <img src="./img/client-ticket.png" alt='' />
            </li>
            <li>
              <img src="./img/client-ticket.png" alt='' />
            </li>
            <li>
              <img src="./img/client-ticket.png" alt='' />
            </li>
            <li>
              <img src="./img/client-ticket.png" alt='' />
            </li>
          </ul>
        </section>
        <section className='projects'>
          <div>
            <div className='projectsTitle'>
              <h2 className='title-m'>Projetos</h2>
              <span className='text-info projectsInfo'>Em atualização</span>
            </div>
            <ul className='projectsFilter text-info'>
              <li>Front-End</li>
              <li>Ui Design</li>
              <li>Art Direction</li>
            </ul>
          </div>
          <ul className='projectsDetail'>
            <li>
              <div className='projectsDetailBg'></div>
                <div className='projectsDetailName'>
                  <h4 className='title-s'>HDI Seguros</h4>
                  <h3 className='title'>Website Institucional</h3>
                </div>
                <div className='projectDetailSkill'>
                  <p className='title-xs'>Skill1<span>+</span>Skill2</p>
                </div>
            </li>
            <li>
              <div className='projectsDetailBg'></div>
                <div className='projectsDetailName'>
                  <h4 className='title-s'>HDI Seguros</h4>
                  <h3 className='title'>Website Institucional</h3>
                </div>
                <div className='projectDetailSkill'>
                  <p className='title-xs'>Skill1<span>+</span>Skill2</p>
                </div>
            </li>
            <li>
              <div className='projectsDetailBg'></div>
                <div className='projectsDetailName'>
                  <h4 className='title-s'>HDI Seguros</h4>
                  <h3 className='title'>Website Institucional</h3>
                </div>
                <div className='projectDetailSkill'>
                  <p className='title-xs'>Skill1<span>+</span>Skill2</p>
                </div>
            </li>
          </ul>
        </section>
      </main>
      <footer className='container'>
        <p className='title work'>E aí, bora<br /><span className='title-m'>trabalhar juntos?</span></p>
        <div className='footerButtons'>
          <button>whatsapp</button>
          <button>e-mail</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
