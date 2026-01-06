/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
    // Use bottom-up DP with O(n) space
    const dp = [...triangle[n - 1]];
    
    for (let row = n - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
        }
    }
    
    return dp[0];
};