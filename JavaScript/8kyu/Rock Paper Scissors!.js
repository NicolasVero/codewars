// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
  
    const winners = {
        rock: { scissors: "Player 1", paper: "Player 2" },
        paper: { rock: "Player 1", scissors: "Player 2" },
        scissors: { paper: "Player 1", rock: "Player 2" }
    };

    return p1 === p2 ? "Draw!" : `${winners[p1][p2]} won!`;
};