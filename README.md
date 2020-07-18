# MapResizer
1. Make sure the image you want to resize is in the same directory as MapResizer.html

2. Select the image with the "Choose File" button

3. Three clicks on the image

3a. First click should be the most upper-left intersection you can clearly see

3b. Second click should be the intersection diagonally down-right of the previous click

3c. Third click should be the most bottom-right intersection you can clearly see (for best results)

NOTE: No matter what, each click needs to be farther down and farther right than the previous click

4. [optional] Change the size of grid you want the resized image to have

5. Click the "Download!" button



# How it does it

For each axis

newCellSize = 50 (or other user input);

approxCellSize = SecondClickPos - FirstClickPos;

canvasSize = ThirdClickPos - FirstClickPos;

double ResizePercent = (round(canvasSize/approxCellSize) * newCellSize)/canvasSize


It might look like canvasSize can be canceled out, but it really can't because of the rounding that needs to happen.

The third click needs to be as far down as we can go so that the error from trying to eyeball where to click is smaller.

# Sample Map

The sample map has some pixels circled that show the preferred locations of the three necessary clicks

