import React from 'react';
import AboutPic from '../Assets/about.jpeg';
import { Box, Button, Image, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box
      w="100%"
      overflow={'hidden'}
      display="flex"
      flexDirection={window.outerWidth <= '400px' ? 'column-reverse' : 'row'}
      justifyContent={"space-around"}
      bgGradient={"linear(to-r, #1E2A5D0A, #3C509D0A)"}
      alignItems={"center"}
      
    >
      <Image w="384px" h="468px" src={AboutPic} />
      <Box w="447px" display={"flex"} gap={"10px"} flexDirection={"column"} alignItems={"start"}>
        <Text
          fontSize={'45px'}
          fontWeight={600}
          lineHeight={'27px'}
          style={{ fontFamily: 'Poppins, sans-serif' }}
          color={'#0E2368'}
        >
          About Us
        </Text>
        <Text
          lineHeight={'27px'}
          fontSize={'15px'}
          fontFamily={'Open Sans, sans-serif'}
          ma
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Button
          w={'132px'}
          h={'42px'}
          backgroundColor={'#E23744'}
          paddingX={'26px'}
          paddingY={'3px'}
          rounded={'34px'}
          fontSize={'21px'}
          textColor={'white'}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default About;
