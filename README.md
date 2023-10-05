# faro-shuffle-tool
A tool to calculate the number of and types of faro shuffles to control a card from any starting position to any other position.

Currently you always need to start with the green slider and input the card at the starting position and then the red one for the ending position each time. So you can't switch between them, it always has to start and end from green to red.

To make sure it works correctly, here's some very important things to know:

1) Make sure to read above about the green and red sliders
2) It currently works with a deck of 52 or 51 cards (For 51, when faceup cut 25 to left and 26 to right for In shuffles, 26 to left and 25 to right for Outs)
3) I is for a modified In perfect faro shuffle
4) O is for a regular Out perfect faro shuffle
5) I find it easiest to execute the modified In shuffle by starting the shuffle in the left hand face up. For 52 cards, you cut 25 to the left, 27 to the right and the left hand goes one card below or into the right leaving the bottom two cards on the bottom.
6) I haven't tested it extensively so it may not work 100% of the time or may not always be the optimal amount of shuffles however it has been working well the times I have tested it

If you're interested in faro shuffles or want to learn more about the math and algorithm behind how this tool works I based it off of an ebook called Faro Concepts. Particularly pages 41 to 45 were most useful in figuring it out. It's available here on Lybrary: https://www.lybrary.com/faro-concepts-p-260727.html

I'm guessing there aren't too many people who would find this useful or even interesting but I do find it very fascinating how it all works and that it can work in general and with not too many shuffles.

Live Demo Here: https://faroshufflewhilecoding.github.io/faro-shuffle-tool/


