import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export const Accordian = () => {
  return (
    <Box p={'60px'}>
      <Box>
        <Text
          mb="20px"
          textAlign="center"
          color={'#EF9E48'}
          fontSize={'12px'}
          fontStyle={'normal'}
          frontWeight="700"
          letterSpacing={'2.1px'}
          textTransform={'uppercase'}
        >
          Frequent Question
        </Text>
        <Text
          mb="30px"
          textAlign="center"
          color={'0F2137'}
          fontSize={'36px'}
          fontStyle={'normal'}
          fontWeight={700}
          lineHeight={'55px'}
          letterSpacing={'-1.5px'}
        >
          Do you have any question
        </Text>
      </Box>
      <Accordion m={'auto'} width={'50%'} allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon color={'green.400'} fontSize="12px" />
                  ) : (
                    <AddIcon color={'green.400'} fontSize="12px" />
                  )}
                  <Box ml="20px" as="span" flex="1" textAlign="left">
                    How to contact with riders emergency ?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                An FAQ is a list of frequently asked questions (FAQs) and
                answers on a particular topic (also known as Questions and
                Answers [Q&A] or Frequently Asked Questions). The format is
                often used in articles, websites, email lists, and online forums
                where common questions tend to recur, for example through posts
                or queries by new users related to common knowledge gaps. The
                purpose of an FAQ is generally provide information.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon color={'green.400'} fontSize="12px" />
                  ) : (
                    <AddIcon color={'green.400'} fontSize="12px" />
                  )}
                  <Box ml="20px" as="span" flex="1" textAlign="left">
                    App installation failed, how to update system information?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon color={'green.400'} fontSize="12px" />
                  ) : (
                    <AddIcon color={'green.400'} fontSize="12px" />
                  )}
                  <Box ml="20px" as="span" flex="1" textAlign="left">
                    Website reponse taking time, how to improve?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon color={'green.400'} fontSize="12px" />
                  ) : (
                    <AddIcon color={'green.400'} fontSize="12px" />
                  )}
                  <Box ml="20px" as="span" flex="1" textAlign="left">
                    New update fixed all bug and issues
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
