/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    let maxWidth = 0;

    for (let i = 1; i < points.length; i++){
        maxWidth = Math.max(maxWidth, points[i][0] - points[i-1][0]);
    }
    return maxWidth;
};
maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]);

/* 
    We need to find widest vertical area, so simply we sort x-coordinates in input array, then find the widest area.

    Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
    We don't need y-coordinates, so take all x-coordinates only and sort them.

    [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
    ↓
    [3,9,1,1,5,8]
    ↓
    x_sorted = [1, 1, 3, 5, 8, 9]
    Since it's sorted, the latter number should be larger. Width between two points should be

    width = (number at current index + 1) - (number at current index)
    Let's see one by one. Number of loop should be length of x_sorted - 1 to prevent out of bounds
*/