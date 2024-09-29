# Faro Shuffle Tool

This tool calculates the number and types of faro shuffles needed to move a card from any starting position to any ending position within a deck.

## Important Things to Know

1. **Slider Usage**: Always start with the green slider (starting position) before using the red slider (ending position). The tool doesn't support switching between them.

2. **Deck Sizes**: Works with 52 or 51 cards.
   - For 51 cards:
     - In shuffles: Cut 25 to left, 26 to right (when face up)
     - Out shuffles: Cut 26 to left, 25 to right (when face up)

3. **Shuffle Types**:
   - **I**: Modified In perfect faro shuffle
   - **O**: Regular Out perfect faro shuffle

4. **Modified In Shuffle Technique**:
   - Start with the deck face up in your left hand
   - For 52 cards: Cut 25 to the left, 27 to the right
   - Weave the cards together, keeping one card from the right packet on top
   - This leaves the bottom two cards of the right packet unweaved at the face of the deck

5. **Limitations**:
   - May not always provide the optimal number of shuffles
   - Not extensively tested for all scenarios

## How to Use

1. Use the green slider to set the card's starting position
2. Use the red slider to set the card's desired ending position
3. The tool will display the required shuffle sequence

## Features

- Works with decks of 52 or 51 cards
- Calculates shuffle sequence for card control
- Supports modified In shuffles and regular Out shuffles

## Learn More

This tool is based on concepts from the ebook "Faro Concepts" (pages 41-45). For those interested in the math and algorithms behind faro shuffles, you can find the ebook [here on Lybrary](https://www.lybrary.com/faro-concepts-p-260727.html).

## Feedback and Contributions

This tool offers fascinating insights into the mechanics of faro shuffles. If you find any issues or have suggestions for improvements, please feel free to contribute or provide feedback.

## Live Demo

[Try the Faro Shuffle Tool here](https://faroshufflewhilecoding.github.io/faro-shuffle-tool/)
