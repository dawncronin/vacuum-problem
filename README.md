# Vacuum-Problem

This is an exercise to take an input file for an auto cleaning robot (like a roomba) and return the results of the instructions. It uses a webpage to take take the input and return the results. The exercise uses vanilla javascript, HTML and CSS. 

## Getting Started

To test this project, clone the repository to your computer. Then open the repo in a code editor of your choice. To edit the instructions, you can change the input.txt file based on the following:

*The first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
*The second line holds the hoover position
*Subsequent lines contain the zero or more positions of patches of dirt (one per line)
*The next line then always contains the driving instructions (at least one)

It will look something like this: 
``` text
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

Open the html file with a web broswer, and upload the input.txt file. You can create your own, or use the one provided in this repo. The webpage will show the end position of the robot on screen, as well as the amount of dirt cleaned.  Additionally,  it will console log the results. 

## Comments

I decided to create a webpage to allow the program to be more dynamic. Rather than hard coding the input.txt file to an executable in the terminal, I allowed any text file with the given format to be uploaded. This allows me to give instructions on the web page, as well as display the results. 



