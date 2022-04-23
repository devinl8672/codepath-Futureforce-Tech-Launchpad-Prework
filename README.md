# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Devin Lin

Time spent: 4.5 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com/edit/#!/axiomatic-twisty-santanaraptor)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
* https://imgur.com/a/gFzopN6
* https://imgur.com/a/0zyRhym
* https://imgur.com/a/FAdB1kp
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I am not familiar with javascript so I had to search up how to do certain things like how to create arrays and how to get array length. I visited w3 schools a lot and used it as a reference.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I faced a few challenges during the time I spent on the pre-work. One challenge I faced was that I didn't have a lot of experience working with web programming, especially javascript. Javascript is different from what I am used to in Java and some of the syntaxes are a bit weird. This meant that I needed to translate my thinking from Java into Javascript and this included a lot of research on how things work in Javascript vs Java. Another thing that I faced was that I was stuck on the audio part for a while. I was confused about what the three functions playTone, starTone, and stopTone were doing on the inside of the function. I understood the purpose of each function but I wasn’t sure how each of them worked on the inside. I know that usually, programmers are to use the black box analogy where you just have to understand what a function takes and returns and don’t need to know how it is implemented. However, I wanted to have a deeper understanding of the three functions so after reading through the description on the prework page and carefully reading the creating sounds with audiocontext page I can somewhat understand what’s going on in those functions now. Another challenge I faced was trying to translate the flowchart into code. I wasn’t able to figure out how I could check for conditions like is this the last turn or not. I was able to overcome this by doing a manual debugging process. I ran through my code step by step and updated a spreadsheet of relevant variables to try to logic my way through creating the conditional statements to replicate the flow chart. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I had a few ideas for things that I can add to this project. One thing that I think would be great to add is to make the number of rounds much higher and then add a scoreboard. This way it seems more like a game you can play again and again plus you can compete with friends to see who can get the highest score. Another thing that I would want to add is having it play a song. So instead of random frequencies for each button, each one can be a note and then having the sequence of be the notes to a song. I start this by having my default sequence play happy birthday but I think I could have expanded on this and have multiple songs available. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I had a few ideas for things that I can add to this project. One thing that I think would be great to add is to make the number of rounds much higher and then add a scoreboard. This way it seems more like a game you can play again and again plus you can compete with friends to see who can get the highest score. Another thing that I would want to add is having it play a song. So instead of random frequencies for each button, each one can be a note and then having the sequence of be the notes to a song. I start this by having my default sequence play happy birthday but I think I could have expanded on this and have multiple songs available. 



## Interview Recording URL Link

[My 5-minute Interview Recording]https://youtu.be/9TDjdPcGmqI


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
