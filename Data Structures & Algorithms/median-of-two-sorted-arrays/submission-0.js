class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a=nums1.concat(nums2)
        a.sort((x,y) => x-y)
        let n=a.length;
        let median=0
        if(n%2 !== 0){
            median=a[Math.floor(n/2)];
        

        
        }
        else if(n%2===0){
            median=(a[(n/2)-1]+a[n/2])/2
        }
        return median;

    }
}
