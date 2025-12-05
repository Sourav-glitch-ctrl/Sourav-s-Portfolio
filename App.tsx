import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Reveal from './components/Reveal';

function App() {
  return (
    <div className="font-sans min-h-screen relative text-slate-200 selection:bg-sky-500 selection:text-white">
      {/* Global Abstract Background */}
      <div className="fixed inset-0 z-[-1] bg-slate-950 overflow-hidden">
        {/* Abstract Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-sky-900/10 blur-[140px] animate-pulse delay-2000"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-blue-900/10 blur-[80px]"></div>
        
        {/* Subtle Grid Overlay (Optional for tech feel) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div>
        <Header />
      </div>
      
      <main className="relative z-10">
        <Hero />
        
        <Reveal>
          <About />
        </Reveal>
        
        <Reveal>
          <Skills />
        </Reveal>
        
        <Reveal>
          <Experience />
        </Reveal>
        
        <Reveal>
          <Projects />
        </Reveal>
        
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      
      <div>
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;