# Overview
This document is meant as a game design documentation for Bergen Game Jam 2023.
This will contain overview and high level ideas of the board game we are making.

# Team
- Eugene 'marengo_hue' Rebedailo
- Ørjan 'Jasker' Polden

# Theme
Theme of the jam is "ROOTS" - be it in literal sense (as in roots of the tree), metaphorical sense (as it 'I got no roots') or philosophical sense.

# Ideas
## Project Mountainhome (WIP Name)
The overall concept of the game is a deckbuilder in which you are playing a dwarven chieftain. Your goal is to unite the roaming dwarven tribes under your banner and make them settle down in your city, allowing them to obtain 'ROOTS'.


The game is played in a series of turns in which players get to do the following:
- In the initial phase of the turn, players get to play cards from their hand. They draw a certain amount (TBD) cards from their deck and build up their town to produce resources, mine for new resources and refine items into higher-tier items. They also get to play special ```event``` cards that allow them to interact with other players and the world.

- In the end of their turn, players get to ```explore```. Exploration is an action that allows the current player to draw the topmost card of the exploration deck, either obtaining new event event cards, unique resources or building blueprints which they could later draw and play from their hand.

### Exploration mechanic
The primary goal of the game is to unite the dwarves. As such, sometimes during exploration, a dwarf will reveal themselves at the top of the exploration deck. If this were to happen, players can draw a certain extra amount of cards and commit some of them to ```Bribe``` the dwarf to join their side. Players commit any amount of cards they want to the bribery, and they do so in secret (face down), meaning that other players can see the amount of cards but not their contents. Then all players reveal their commited cards and the player who had commited the most ```Shinies``` and ```Booze``` wins the dwarf over, allowing them to add the dwarf to their deck. Then the committed cards get permanently discarded from their decks. Sometimes, players might want to use this mechanic to get rid of the junk from their decks and other times they might want to genuinely win the dwarf.

### Dwarves
Dwarves are needed to win the game, hovewer some dwarves also provide unique bonuses. There could be dwarves that are better at doing certain activities in town, like brewing booze or mining shinies, there are good builder dwarves and so on. This mechanic could be expanded upon.

### Win condition
The player with the most dwarves wins the game at the end of the exploration deck. That means that when all of the dwarves have been found, the player with the most dwarves in town is declared the king of the Mountainhome. Their quest in bringing stability and prosperity to the realm is over. Everyone else gets to call them 'My Liege' util the end of the day.

## Project ```root@jam $``` (WIP name but pretty cool)
The game is a competitive (or collaborative) hacking card game. There are several permutations of the idea.

### Overall setup
The server is represented as a random stack of cards with various obstacles. They might include stuff like "firewalls", "encryption" and "antiviruses". Every individual obstacle has associated attack vectors and vulnurabilities that hackers get to exploit during their turn.

Hackers have a hand of cards and a common deck from which they get to:
- Draw 1
- Scry 3

Then they get to play a single (or maybe multiple) attacks from their hand to weaken the server's defences.
When a layer of the server defence has been overcome, it is discarded and the next card in the stack is revealed.
The first player to reach the bottom the pile and obtain ```root``` access - wins the game.

### Formats
#### I - Single server race.
The first to hack the machine wins the game and gets the l33tHaxor status.

#### II - Players attacking each other.
Each player has their own server and attacks the opponent's server. You could both attack the opponent and defend your own server.
The first player to reach root of the opponent's server wins the game.

#### III - Collaboartive hacking.
X players are trying to hack the server and defend their own server against the "AI" deck, who is playing X+1 actions at a time. If they manage to reach the root first, they win the game. If their server is breached - they lose the game.

#### --- More formats and ideas to come ---

### Attacks and obstacles
TBD, the idea could be that various attacks and obstacles interact in a Rock-Paper-Scissors game with some potential attacks allowing to either take over many types of defences or perform special actions like taking extra turns or drawing more cards.

