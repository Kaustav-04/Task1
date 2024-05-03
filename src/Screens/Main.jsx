import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Vector from '../Assets/Vector 1.png';
import FoodTruck from '../Assets/33af368e1471bcf0efe704356a08337d.png';
const Main = () => {
  return (
    <Box w="100%"  overflow={"hidden"} display="flex" flexDirection={window.outerWidth <= "400px" ? "column-reverse" : "row"} justifyContent={"space-between"}>
      <Box
        minW={window.outerWidth <= "375px" ? "100%" : "50%"}
        display={'flex'}
        left={'100px'}
        top={'33px'}
        position={'relative'}
        flexDirection={'column'}
        justifyContent={'start'}
        alignItems={'start'}
      >
        <Image w="107px" marginBottom={'111px'} src={FoodTruck} />
        <Text
          w="410px"
          style={{ fontFamily: 'Source Sans 3, sans-serif' }}
          fontWeight={700}
          textColor={'#0E2368'}
          fontSize={'62px'}
          lineHeight={'69px'}
          marginBottom={'26px'}
        >
          Discover the <span style={{ color: '#E23744' }}>Best</span> Food and
          Drinks
        </Text>
        <Text
          w={'345px'}
          fontSize={'16.44px'}
          style={{ fontFamily: 'Open Sans , sans-serif' }}
          marginBottom={'41px'}
        >
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <Button
          w={'190px'}
          h={'63px'}
          backgroundColor={'#E23744'}
          paddingX={'34px'}
          paddingY={'14px'}
          rounded={'34px'}
          fontSize={'16.44px'}
          textColor={'white'}
        >
          Explore Now!
        </Button>
      </Box>
      <Box w={window.innerWidth <= "375px" && "100%"} h="100%" position="relative" overflow={'hidden'}>
        <Box
          h="100%"
          w="fit-content"
          position="absolute"
          right="0px"
          top="0px"
          left="20px"
          zIndex="-50"
          overflow="hidden"
          roundedBottomLeft="198.8px"
        >
          <Image
            position={'relative'}
            aspectRatio={'0.9'}
            src="https://s3-alpha-sig.figma.com/img/c2a9/c613/9cad959fc06da22d2d90d91c2fed69db?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcTCdUQXbl4n6i3LlqqycWDVRKHZckhbWuH5VXwaovyePfALOWBEm1k1gRj1EZmcDbYG3RD-jk-v38IgTOr9eoZfdJlumX4GrpHj8-ZC-njAfy0iQBhoUNHT5vA4SWyrhjVjBhInL187hu9-IP~ViMo1EEz7GqWVKW77b~Zw7OWXgBlY8l3WX-Xzxwp8gr7aEDsvu2qdt5I8zSDEB-R7s4dIprjNunHL90SWt55ZVJfgCeCbkP4DfFF8Ovi5Up5b~~hkLPlKIn4wHzdCEZz~5c4nnY~1Dik7USEY8kYNkEGwNzXc2IM5Fdnj4hdWWl0-V2q7-S49472848clwgUAug__"
          />
        </Box>
        <Box position={'relative'}>
          <Image top={'-3px'} src={Vector} />
          <Button
            position={'absolute'}
            top={'15px'}
            w={'122px'}
            h={'42px'}
            borderColor={'white'}
            right={'15px'}
            backgroundColor={'transparent'}
            paddingX={'26px'}
            paddingY={'3px'}
            rounded={'20px'}
            fontSize={'16px'}
            textColor={'white'}
            border={'white 1px solid'}
          >
            Get In Touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
