import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Hero from './components/hero/Hero';
import Projects from './components/proj/Projects'
import Team from './components/team/Team'
import Infra from './components/infra/Infra'
import Learn from './components/learn/Learn'
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Main />
      </div>

      <div className='hero-container'>
        <Hero />
      </div>

		<div className='projects'>
			<Projects />
		</div>

		<div className='team'>
			<Team />
		</div>

		{/* <div className='infra'>
			<Infra />	
		</div> */}

		<div>
			<Learn />
		</div>

		<Footer />
    </div>
  );
}
