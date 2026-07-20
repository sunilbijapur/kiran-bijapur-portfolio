import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      {/*
        BrowserRouter is used for clean, indexable URLs (/publications,
        /research, etc.) which matters for the site's SEO goals. Netlify and
        Vercel handle the client-side-routing rewrite natively (see
        public/_redirects and vercel.json). GitHub Pages has no native
        rewrite support, so public/404.html + the decode snippet in
        index.html implement the standard SPA-on-GitHub-Pages redirect
        technique — see README.md "Deployment" for full details.
      */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
