import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import './Slider.css';
import buttonE from '../Images/buttonE.png';
import { SimpleGrid } from '@chakra-ui/react'

export default function Scrollsec() {
  

  return (
    <Flex
      justifyContent={'center'}
      gap={'50px'}
      margin={'auto'}
      w={'70%'}
      mb="60px"
    >
      <Box width={'450px'}>
      <SimpleGrid columns={2} spacing={10}>
  <Box className='grid' >
    <Text className='text1'>
        150
    </Text>
  </Box>
  <Box className='grid'  >
  <Text className='text1'>
        150
    </Text>
  </Box>
  <Box className='grid'  >
  <Text className='text1'>
        150
    </Text>
  </Box>
  <Box className='grid'  >
  <Text className='text1'>
        150
    </Text>
  </Box>
</SimpleGrid>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        gap={'8px'}
      >
        <Box>
          <Text
            color={'#EF9E48'}
            fontSize={'12px'}
            fontStyle={'normal'}
            frontWeight="700"
            letterSpacing={'2.1px'}
            textTransform={'uppercase'}
          >
            Core features
          </Text>
        </Box>
        <Box>
          <Text
            color={'0F2137'}
            fontSize={'36px'}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={'55px'}
            letterSpacing={'-1.5px'}
          >
            {' '}
            Smart Jackpots that you may love this anytime & anywhere
          </Text>
        </Box>
        <Box>
          <Text
            color={'#02073E'}
            fontSize={'14px'}
            fontStyle={'normal'}
            frontWeight="400"
            letterSpacing={'1.1px'}
            lineHeight={'32px'}
          >
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </Text>
        </Box>
        <Box mt="10px">
          <Image src={buttonE} />
        </Box>
      </Box>
    </Flex>

  );

}
