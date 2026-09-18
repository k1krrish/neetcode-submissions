class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let seen=new Set(nums)
     
        
        for(let i=1;i<=nums.length;i++){
            if(!seen.has(i)){
                return i;
            }
        }
        return nums.length+1
       
       

        
    }
}
