import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Box, Row, Text } from 'elemental-react';

import Gallery from '../../../components/src/common/Gallery';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useWindowViewport from '../hooks/use-window-viewport';
import AppBar from '../../../components/lib/common/AppBar';
import NavOverlay from '../../../components/lib/overlays/NavOverlay';
import Section from '../../../components/lib/common/Section';
import Footer from '../../../components/lib/common/Footer';

import image1 from '../../assets/121709596-1.jpeg';
import image2 from '../../assets/121587446-2.jpeg';
import image3 from '../../assets/121577217-3.jpeg';
import image4 from '../../assets/121095824-4.jpeg';
import image5 from '../../assets/121419114-5.jpeg';
import image6 from '../../assets/120948371-6.jpeg';
import image7 from '../../assets/119573488-7.jpeg';
import image8 from '../../assets/119472263-8.jpeg';
import image9 from '../../assets/119233192-9.jpeg';

const images = [
  {
    url: image1,
    id: 1,
    width: 1080,
    height: 1080,
  },
  {
    url: image2,
    id: 2,
    width: 1080,
    height: 1350,
  },
  {
    url: image3,
    id: 3,
    width: 1080,
    height: 1350,
  },
  {
    url: image4,
    id: 4,
    width: 1080,
    height: 1350,
  },
  {
    url: image5,
    id: 5,
    width: 1080,
    height: 1080,
  },
  {
    url: image6,
    id: 6,
    width: 1080,
    height: 1350,
  },
  {
    url: image7,
    id: 7,
    width: 1080,
    height: 1350,
  },
  {
    url: image8,
    id: 8,
    width: 1080,
    height: 1080,
  },
  {
    url: image9,
    id: 9,
    width: 1080,
    height: 1080,
  },
];

const Home = () => {
  const viewport = useWindowViewport();
  const [navOverlayOpen, setNavOverlayOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Home | Offbeat Nomad" />
      {/* <Box width="100vw"> */}
      <Box bg="white" minHeight={viewport.height} width="100%">
        <Box bg="white">
          <AppBar>
            <AppBar.MenuIcon onClick={() => { setNavOverlayOpen(!navOverlayOpen); }} />
            <AppBar.Title />
            <AppBar.Fill />
          </AppBar>
          <Gallery images={images} width={viewport.width} />
          <Section pt="8px">
            <Link to="https://instagram.com/offbeatnomad">
              <Gallery.InstagramButton />
            </Link>
          </Section>
          <Footer />
          {navOverlayOpen && (
            <Box position="fixed" bg="white" width="100vw" height="100vh">
              <NavOverlay onMenuClick={() => { setNavOverlayOpen(!navOverlayOpen); }} />
            </Box>
          )}
        </Box>
      </Box>
      {/* </Box> */}
    </Layout>
  );
}

export default Home;
