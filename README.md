# MapResizer
1. Choose the map

2. Select the top-left vertex and then the bottom-right vertex of a single grid square somewhere in the top-left of the map

3. Select the farthest bottom-right vertex you can see

3. input pixel width per cell of resized map (default 50)

4. Click Save to save the resized image


# How it does it

For each axis

int newPixelWidth = 50 (or other user input);

int approxCellWidth = xSecondClick - xFirstClick;
int canvasSize = xThirdClick - xFirstClick;

{

int xCells = round(canvasSize / approxCellWidth);
int newCanvasSize = xCells * newPixelWidth;

double xResizePercent = 100 * (newCanvasSize/canvasSize)

OR

double xResizePercent = 100 * (round(canvasSize/approxCellWidth) * newPixelWidth)/canvasSize

}

It might look like canvasSize can be canceled out, but it really can't because of the rounding that needs to happen.

# Sample Map

The sample map has some pixels circled that show the preferred locations of the three necessary clicks

