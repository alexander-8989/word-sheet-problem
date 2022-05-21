function findPair(nums, target) {

    for (let i = 0; i < nums.length - 1; i++) {
        // start from the i'th element until the last element
        for (let j = i + 1; j < nums.length; j++) {
            // if the desired sum is found, print it
            if (nums[i] + nums[j] == target) {
                console.log("Pair found (" + nums[i] + "," + nums[j] + ")");
                return;
            }
        }
    }
    console.log("Pair not found");
}

let nums = [8, 7, 2, 5, 3, 1];
let target = 15;

findPair(nums, target);