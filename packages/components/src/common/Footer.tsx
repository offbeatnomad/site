import React from 'react';
import { Box, Text, Row } from 'elemental-react';

const Footer = () => (
  <Box alignItems="center" p={32}>
    <Row>
      <Text fontFamily="Roboto" fontSize={16}>© {new Date().getFullYear()} Offbeat Nomad</Text>
    </Row>
  </Box>
);

export default Footer;
