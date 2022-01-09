function twoSum(arr, target) {

	for(var i = 0; i < arr.length; i++) {
		
		for(var j = 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target && j !== i) {
				return [i, j]
			}
		}
	}
}


twoSum([3,7,2,15], 9)
twoSum([3,2,4], 6)
twoSum([3,3], 6)	
