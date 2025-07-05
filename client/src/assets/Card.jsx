import React from 'react';
import { Box, Text, VStack, HStack } from '@chakra-ui/react';

// Helper to determine border color by suit
const getBorderColor = (suit) => {
  if (suit === 'Hearts' || suit === 'Diamonds') return 'red.500';
  return 'black';
};

// Helper to determine text color by suit
const getTextColor = (suit) => {
  if (suit === 'Hearts' || suit === 'Diamonds') return 'red.500';
  return 'black';
};

const Card = ({ card, isSelected, onClick }) => {
  const borderColor = isSelected ? 'yellow.400' : getBorderColor(card.suit);
  const textColor = getTextColor(card.suit);
  const isFaceCard = card.rank === 'J' || card.rank === 'Q' || card.rank === 'K';

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      bg="white"
      border="3px solid"
      borderColor={borderColor}
      borderRadius="md"
      p={2}
      minH="140px"
      minW="90px"
      w="90px"
      h="140px"
      boxShadow={isSelected ? '0 0 0 4px #F6E05E' : 'md'}
      position="relative"
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-4px) scale(1.04)',
        boxShadow: 'lg',
        borderColor: 'blue.400',
      }}
      userSelect="none"
    >
      {/* Top left rank and suit */}
      <VStack align="flex-start" spacing={0} position="absolute" top={2} left={2}>
        <Text fontSize="lg" fontWeight="bold" color={textColor} lineHeight={1}>
          {card.rank}
        </Text>
        <Text fontSize="lg" color={textColor} lineHeight={1}>
          {card.symbol}
        </Text>
      </VStack>

      {/* Bottom right rank and suit (rotated) */}
      <VStack align="flex-end" spacing={0} position="absolute" bottom={2} right={2} transform="rotate(180deg)">
        <Text fontSize="lg" fontWeight="bold" color={textColor} lineHeight={1}>
          {card.rank}
        </Text>
        <Text fontSize="lg" color={textColor} lineHeight={1}>
          {card.symbol}
        </Text>
      </VStack>

      {/* Centerpiece: Large suit, and face card art if needed */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
        w="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={0}
      >
        {isFaceCard ? (
          <VStack spacing={0}>
            <Text fontSize="5xl" fontWeight="bold" color={textColor}>
              {card.rank}
            </Text>
            <Text fontSize="6xl" color={textColor}>
              {card.symbol}
            </Text>
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {card.rank === 'J' ? 'JACK' : card.rank === 'Q' ? 'QUEEN' : 'KING'}
            </Text>
          </VStack>
        ) : (
          <Text fontSize="6xl" color={textColor}>
            {card.symbol}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Card;
