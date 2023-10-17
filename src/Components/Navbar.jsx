import React from 'react';
import './Navbar.css';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import logo from '../Images/logo.png';

export const Navbar = () => {
  return (
    <Box id="header" className="section cont" mb={'20px'}>
      <Box zIndex={2} position={'relative'} className="">
        <Flex
          w={'80%'}
          margin={'auto'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Link
            ml={'100px'}
            mt="20px"
            alignContent={'center'}
            alignItems={'center'}
          >
            <Image className="logo" src={logo} alt="" />
          </Link>
          <Flex gap={'30px'} mr={'30px'} w={'400px'} mt={'25px'}>
            <Text className="nav-text">Home</Text>
            <Text className="nav-text">Adversite </Text>
            <Text className="nav-text">Supports </Text>
            <Text className="nav-text">Contact</Text>
          </Flex>
          <button className="btn">Try for Free</button>
        </Flex>
      </Box>
    </Box>
  );
};
