Life is a simple cellular automata program. It has these rules:

Cells are either alive or dead,
All the cells are laid out on a rectangular grid (WHICH WRAPS AROUND THE EDGES),
Each cell has 8 neighbors. For example : cell (2,2) has the neighbors : (1,1) (1,2) (1,3) (2,1) (2,3) (3,1) (3,2) (3,3)
If your board is wrapping correctly cell (0,4) has the neighbors : (0,3) (1,3) (1,4) (1,5) (0,5) (xsize - 1,3) (xsize -1,4) (xsize-1,5)
If a dead cell has exactly 3 living neighbors it becomes alive in the next generation
If a living cell has exactly 2 or 3 living neighbors it stays alive in the next generation, otherwise, it dies

Someone has tried to write a version of the Life program in JavaScript but hasn't had time to make it work right yet. So far it can setup and draw the grid (in text) which shows the 1st generation of cells. A click of a 'next' link tries to transform and draw the grid in the 2nd generation of cells by applying the above rules but it fails!

Your goal: Make it work! 

All three of the provided BoardSetups should work according to the rules listed above. To view the boards (flower, blinker & glider) working correctly, please see attached developertest.zip.

If you have remaining time in the 1 hour allowed feel free to make the program do cooler things!

Some suggestions:

allow for gigantic grids without O(n^2) on grid dimension
animate without clicking like crazy
prettier board drawing
hexagonal grids
more interesting visible states than just dead and alive