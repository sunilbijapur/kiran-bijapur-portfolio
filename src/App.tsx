import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Research from '@/pages/Research';
import Publications from '@/pages/Publications';
import Patents from '@/pages/Patents';
import Awards from '@/pages/Awards';
import Projects from '@/pages/Projects';
import Teaching from '@/pages/Teaching';
import Gallery from '@/pages/Gallery';
import News from '@/pages/News';
import Downloads from '@/pages/Downloads';
import Contact from '@/pages/Contact';
import Timeline from '@/pages/Timeline';
import Impact from '@/pages/Impact';
import Collaborations from '@/pages/Collaborations';
import Skills from '@/pages/Skills';
import Instrumentation from '@/pages/Instrumentation';
import Memberships from '@/pages/Memberships';
import Testimonials from '@/pages/Testimonials';
import FAQ from '@/pages/FAQ';
import Media from '@/pages/Media';
import OpenPositions from '@/pages/OpenPositions';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/instrumentation" element={<Instrumentation />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/media" element={<Media />} />
        <Route path="/open-positions" element={<OpenPositions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
