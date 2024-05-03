import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Menu,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Main from './Screens/Main';
import About from './Screens/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
      <About />
      <Menu />
    </ChakraProvider>
  );
}

export default App;
