class Solution {
    findMissingAndRepeatedValues(grid) {
        let g = grid.flat().sort((a,b) => a-b);
        let set = new Set();
        let a, b;

        for(let i=1;i<g.length;i++){
            if(g[i] == g[i-1]){
                a = g[i];
                break;
            }
        }

        for(let row of grid){
            for(let num of row){
                set.add(num);
            }
        }

        for(let i=1;i<=g.length;i++){
            if(!set.has(i)){
                b = i;
                break;
            }
        }

        return [a,b];
    }
}