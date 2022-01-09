const searchInsert = function (arr, val) {
    let lower = 0;
    let upper = arr.length - 1;

    if (arr[upper] < val) {
        return upper + 1;
    }

    if (arr[lower] > val) {
        return lower;
    }

    while (lower <= upper) {
        const middle = lower + Math.floor((upper - lower) / 2);
        if (val === arr[middle]) {
            return middle;
        }

        if (val < arr[middle] && val > arr[middle - 1]) {
            return middle;
        }

        if (val < arr[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
        }
    }
};
