// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// For example:

// bags = 2
// cap = 2
// x (or garden) =
// [[ _ , _ , _ , _ , _ , _ ],
//  [ _ , _ , _ , _ , @ , _ ],
//  [ @ , _ , _ , _ , _ , _ ]]
// returns 'Clean'



function crap(x, bags, cap) {
    for (let row of x) {
        if (row.includes('D')) {
            return 'Dog!!';
        }
    }

    if (bags === 0) {
        return 'Cr@p';
    }

    const crapCount = x.flat().filter(cell => cell === '@').length;
    return (bags * cap >= crapCount) ? 'Clean' : 'Cr@p';
}
