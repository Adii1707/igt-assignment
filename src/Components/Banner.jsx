import { Box, Center, Flex, flexbox } from '@chakra-ui/react';
import React from 'react';
import './Navbar.css';
import ReactPlayer from 'react-player';
import shutters from '../Images/shutters.png';

export const Banner = () => {
  return (
    <div id="banner">
      <div className="container">
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'10px'}
            flex={1}
            p={4}
          >
            <h1>Learn Design with Nia Matos</h1>
            <p className="para">
              Get your blood tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
            <input
              type="text"
              placeholder="Search by Course name"
              className="search"
            />
          </Box>
          <Box flex={1} p={4}>
            <Box
              display={'flex'}
              justifyContent={'Center'}
              alignItems={'center'}
              h="420px"
              w="450px"
              borderRadius={'lg'}
              className="player"
            >
              <ReactPlayer
                light={
                  <img className="thumbnail" src={shutters} alt="thumbnail" />
                }
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              />
            </Box>
          </Box>
        </Flex>
      </div>
    </div>
  );
};
