import React from 'react';

import { Box, Text } from 'elemental-react';

import Gallery from '../../../../components/lib/common/Gallery';
import AppBar from '../../../../components/lib/common/AppBar';
import Section from '../../../../components/lib/common/Section';
import Footer from '../../../../components/lib/common/Footer';

import image1 from '../../../../assets/121709596-1.jpeg';
import image2 from '../../../../assets/121587446-2.jpeg';
import image3 from '../../../../assets/121577217-3.jpeg';
import image4 from '../../../../assets/121095824-4.jpeg';
import image5 from '../../../../assets/121419114-5.jpeg';
import image6 from '../../../../assets/120948371-6.jpeg';
import image7 from '../../../../assets/119573488-7.jpeg';
import image8 from '../../../../assets/119472263-8.jpeg';
import image9 from '../../../../assets/119233192-9.jpeg';
import { Link } from 'react-sketchapp-router';

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

const a = async () => {
  console.log('a');
}

const Home = () => (
  <Box>
    {/* <Box width="100%" height={720} bg="gray" /> */}
    <AppBar>
      <Link to="/navigation">
        <AppBar.MenuIcon />
      </Link>
      <AppBar.Title />
      <AppBar.Fill />
    </AppBar>
    <Gallery images={images} />
    <Section pt="8px">
      <Gallery.InstagramButton />
    </Section>
    <Footer />
  </Box>
);

export default Home;