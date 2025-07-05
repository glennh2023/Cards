import React, { useState } from 'react';
import { Box, Button, Text, Grid, VStack, HStack, Flex } from '@chakra-ui/react';
import Card from './assets/Card';

function App() {
  // Euchre deck: 9, 10, J, Q, K, A of each suit (24 cards total)
  const suits = [
    { name: 'Hearts', symbol: '♥', color: 'red.500' },
    { name: 'Diamonds', symbol: '♦', color: 'red.500' },
    { name: 'Clubs', symbol: '♣', color: 'black' },
    { name: 'Spades', symbol: '♠', color: 'black' }
  ];
  
  const ranks = ['9', '10', 'J', 'Q', 'K', 'A'];
  
  // Create the full Euchre deck
  const createDeck = () => {
    const deck = [];
    suits.forEach(suit => {
      ranks.forEach(rank => {
        deck.push({
          id: `${rank}-${suit.name}`,
          rank,
          suit: suit.name,
          symbol: suit.symbol,
          color: suit.color
        });
      });
    });
    return deck;
  };

  const [deck] = useState(createDeck());
  const [selectedCard, setSelectedCard] = useState(null);
  const [score, setScore] = useState(0);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setScore(score + 1);
  };

  const resetSelection = () => {
    setSelectedCard(null);
    setScore(0);
  };

  // const Card = ({ card, isSelected }) => (
  //   <Box
  //     onClick={() => handleCardClick(card)}
  //     cursor="pointer"
  //     bg={isSelected ? 'yellow.100' : 'white'}
  //     border="2px solid"
  //     borderColor={isSelected ? 'yellow.400' : 'gray.300'}
  //     borderRadius="lg"
  //     p={3}
  //     minH="120px"
  //     minW="80px"
  //     display="flex"
  //     flexDirection="column"
  //     alignItems="center"
  //     justifyContent="space-between"
  //     boxShadow="md"
  //     transition="all 0.2s"
  //     _hover={{
  //       transform: 'translateY(-4px)',
  //       boxShadow: 'lg',
  //       borderColor: 'blue.400'
  //     }}
  //   >
  //     {/* Top rank and suit */}
  //     <VStack spacing={0}>
  //       <Text fontSize="lg" fontWeight="bold" color={card.color}>
  //         {card.rank}
  //       </Text>
  //       <Text fontSize="xl" color={card.color}>
  //         {card.symbol}
  //       </Text>
  //     </VStack>
      
  //     {/* Center suit symbol */}
  //     <Text fontSize="2xl" color={card.color}>
  //       {card.symbol}
  //     </Text>
      
  //     {/* Bottom rank and suit (rotated) */}
  //     <VStack spacing={0} transform="rotate(180deg)">
  //       <Text fontSize="lg" fontWeight="bold" color={card.color}>
  //         {card.rank}
  //       </Text>
  //       <Text fontSize="xl" color={card.color}>
  //         {card.symbol}
  //       </Text>
  //     </VStack>
  //   </Box>
  // );

  return (
    <Box p={6} bg="green.800" minH="100vh">
      {/* Header */}
      <VStack spacing={4} mb={6}>
        <Text fontSize="3xl" fontWeight="bold" color="white" textAlign="center">
          🃏 Yuker DECK 🃏
        </Text>
        <Text fontSize="lg" color="green.100" textAlign="center">
          24 Cards: 9, 10, J, Q, K, A of each suit
        </Text>
        
        {/* Score and Controls */}
        <HStack spacing={4}>
          <Text fontSize="xl" color="white">
            Cards Selected: {score}
          </Text>
          <Button onClick={resetSelection} colorScheme="red" size="sm">
            Reset
          </Button>
        </HStack>
        
        {/* Selected Card Display */}
        {selectedCard && (
          <Box bg="white" p={4} borderRadius="lg" boxShadow="xl">
            <Text fontSize="lg" textAlign="center" color="gray.700">
              Last Selected: <Text as="span" fontWeight="bold" color={selectedCard.color}>
                {selectedCard.rank} of {selectedCard.suit} {selectedCard.symbol}
              </Text>
            </Text>
          </Box>
        )}
      </VStack>

      {/* Card Grid - Organized by Suit */}
      <VStack spacing={6}>
        {suits.map(suit => (
          <Box key={suit.name} w="100%">
            <Text 
              fontSize="xl" 
              fontWeight="bold" 
              color="white" 
              mb={3} 
              textAlign="center"
            >
              {suit.symbol} {suit.name}
            </Text>
            <Grid 
              templateColumns="repeat(auto-fit, minmax(100px, 1fr))" 
              gap={4} 
              justifyItems="center"
              maxW="600px"
              mx="auto"
            >
              {deck
                .filter(card => card.suit === suit.name)
                .map(card => (
                  <Card 
                    key={card.id} 
                    card={card} 
                    isSelected={selectedCard?.id === card.id}
                    onClick={() => handleCardClick(card)}
                  />
                ))
              }
            </Grid>
          </Box>
        ))}
      </VStack>

      {/* Footer */}
      <Text 
        fontSize="sm" 
        color="green.200" 
        textAlign="center" 
        mt={8}
      >
        Click any card to select it • Total: {deck.length} cards
      </Text>
    </Box>
  );
}

export default App;
