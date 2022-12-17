function fixTheMeerkat(arr) {
    let head = arr[2];
    let teil = arr[0];
    arr[0] = head;
    arr[2] = teil;
    return arr;
    }