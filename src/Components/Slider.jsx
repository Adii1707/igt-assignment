import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import corinna from '../Images/corinna.png';
import corinne from '../Images/corinne.png';
import stefan from '../Images/stefan.png';
import { Box, Flex, Text } from '@chakra-ui/react';
import './Slider.css';

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoSpeed: 1000,
  };

  return (
    <Box margin={'auto'} w={'80%'}>
      <Box textAlign={'center'}>
        <Text className="head-text">Quality Features</Text>
      </Box>
      <Box textAlign={'center'}>
        <Text className="head-text2">Tutorials that people love most</Text>
      </Box>
      <Slider style={{ margin: '60px 60px' }} {...settings}>
        <div className="cards">
          <img src={corinna} />
          <Box className="sub-cont">
            <Flex px="10px" mt={'6px'} gap={2}>
              <p className="stars">*****</p>
              <p className='"views'>5.0 (392 reviews)</p>
            </Flex>
            <Box px="10px" mt={'5px'}>
              <Text className="heading">
                How to work with prototype design with adobe xd featuring tools
              </Text>
            </Box>
            <Flex px={'10px'} gap={2} alignItems={'center'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_601)">
                  <path
                    d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z"
                    fill="#B5C3CB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_601">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(-1 0 0 1 20 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Text className="watched">2,538 students watched</Text>
            </Flex>
          </Box>
        </div>
        <div className="cards">
          <img src={stefan} />
          <Box className="sub-cont">
            <Flex mt={'6px'} gap={2}>
              <p className="stars">*****</p>
              <p className='"views'>5.0 (392 reviews)</p>
            </Flex>
            <Box mt={'5px'}>
              <Text className="heading">
                Convert your web layout theming easily with sketch zeplin
                extension
              </Text>
            </Box>
            <Flex gap={2} alignItems={'center'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_601)">
                  <path
                    d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z"
                    fill="#B5C3CB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_601">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(-1 0 0 1 20 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Text className="watched">1,037 students watched</Text>
            </Flex>
          </Box>
        </div>
        <div className="cards">
          <img src={corinne} />
          <Box className="sub-cont">
            <Flex mt={'6px'} gap={2}>
              <p className="stars">
                ****<span className="star1">*</span>
              </p>
              <p className='"views'>4.5 (544 reviews)</p>
            </Flex>
            <Box mt={'5px'}>
              <Text className="heading">
                Create multiple artboard by using figma prototyping tools
                development
              </Text>
            </Box>
            <Flex gap={2} alignItems={'center'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_601)">
                  <path
                    d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z"
                    fill="#B5C3CB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_601">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(-1 0 0 1 20 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Text className="watched">3,538 students watched</Text>
            </Flex>
          </Box>
        </div>
        <div className="cards">
          <img src={corinne} />
          <Box className="sub-cont">
            <Flex mt={'6px'} gap={2}>
              <p className="stars">*****</p>
              <p className='"views'>5.0 (392 reviews)</p>
            </Flex>
            <Box mt={'8px'}>
              <Text className="heading">
                How to work with prototype design with adobe xd featuring tools
              </Text>
            </Box>
            <Flex gap={2} alignItems={'center'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_601)">
                  <path
                    d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z"
                    fill="#B5C3CB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_601">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="matrix(-1 0 0 1 20 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Text className="watched">2,538 students watched</Text>
            </Flex>
          </Box>
        </div>
      </Slider>
    </Box>
  );
}
