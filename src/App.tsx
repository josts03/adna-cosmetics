/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Pricelist } from './pages/Pricelist';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-meni" element={<About />} />
            <Route path="/storitve" element={<Services />} />
            <Route path="/cenik" element={<Pricelist />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/politika-zasebnosti" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
        <CookieBanner />
      </Router>
    </HelmetProvider>
  );
}
