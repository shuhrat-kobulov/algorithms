package main

import "fmt"

func twoSum(nums []int, target int) []int {

	for i := 0; i < len(nums); i++ {

		for j := 0; j < len(nums); j++ {
			if nums[i]+nums[j] == target && j != i {
				sum := []int{i, j}
				return sum
			}
		}
	}
	return []int{0}
}

func main() {

	arr := []int{7, 2, 9}
	fmt.Println(twoSum(arr, 9))
}
