function printUniqueSequences(input) {
    const uniqueArrays = [JSON.parse(input[0])];

    for (let i = 1; i < input.length; i++) {
        const currArr = JSON.parse(input[i]);

        let isUnique = true;

        for (let j = 0; j < uniqueArrays.length; j++) {
            if (compareArrays(currArr, uniqueArrays[j])) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            uniqueArrays.push(currArr);
        }
    }

    uniqueArrays.sort((arr1, arr2) => arr1.length - arr2.length);

    uniqueArrays.forEach(arr => {
        arr.sort((a, b) => b - a);
        console.log(arr);
    })

    function compareArrays(_arr1, _arr2) {
        if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length) return false;
        
        const arr1 = _arr1.concat().sort();
        const arr2 = _arr2.concat().sort();

        return arr1.every((val, index) => val === arr2[index]);
    }
}

printUniqueSequences(
["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);

printUniqueSequences(
["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
);