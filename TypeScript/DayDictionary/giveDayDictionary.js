const testCases = require('./givenDayDictionoaryInput.js');

function solution(D){

    // Will store the days in given order
    let result = {};
    const day_dictionary = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // For calculating the given days
    for (const [key, value] of Object.entries(D)) {
        const day = new Date(key).getDay();
        result[day_dictionary[day]] = result[day_dictionary[day]] ? result[day_dictionary[day]] + value : value;
    }

    // For calculating days which are not given
    let i = 0;
    while (i < 7){
        if(!result[day_dictionary[i]]){
            let prevDay1 = i - 1 < 0 ? 6 : i - 1;
            let prevDay2 = prevDay1 - 1 < 0 ? 6 : prevDay1 - 1;
            result[day_dictionary[i]] = 2* result[day_dictionary[prevDay1]] - result[day_dictionary[prevDay2]];
        }
        i++;
    }

    // Will store the days in correct order
    let ans = {};
    const ans_day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for(const i of ans_day){
        ans[i] = result[i];
    }

    return ans;
}

testCases.testCase.forEach(({input, output}) => {
    if(JSON.stringify(output) !== JSON.stringify(solution(input))){
        console.log('Test case failed');
        console.log("For Input", input);
        console.log("Expected Output", output);
        console.log("Actual Output", solution(input));
        throw new Error("Test case failed");
    }
});

console.log('All test cases passed');

