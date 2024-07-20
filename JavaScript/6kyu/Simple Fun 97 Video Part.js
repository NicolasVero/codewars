// Task
// You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

// Example
// For part = "02:20:00" and total = "07:00:00", the output should be [1, 3].

// You have watched 1 / 3 of the whole video.

// Input/Output
// [input] string part

// A string of the following format "hh:mm:ss" representing the time you have been watching the video.

// [input] string total

// A string of the following format "hh:mm:ss" representing the total video duration.

// [output] an integer array

// An array of the following format [a, b] (where a / b is a reduced fraction).



function videoPart(part, total) {

    const numerator = get_video_duration_in_second(part);
    const denominator = get_video_duration_in_second(total);
  
    const greatest_common_divisor = pgcd(numerator, denominator);
  
    return [numerator / greatest_common_divisor, denominator / greatest_common_divisor];
    
    
    function pgcd(a, b) {
        return b === 0 ? a : pgcd(b, a % b);
    }
    
    function get_video_duration_in_second(duration) {
        return duration
            .split(':')
            .map(Number)
            .reduce((total, current, index, array) => {
            return total + current * Math.pow(60, array.length - index - 1);
        }, 0);
    }
}