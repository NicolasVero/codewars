// Take a look at wiki description of Connect Four game:

// Wiki Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.



function whoIsWinner(list){

    return create_grid(list)
    
    function detecte_winner(grid) {
      
      // Horizontal
      for(let i = 0; i < 6; i++) {

        let [r, y] = [0,0];
        for(let j = 0; j < grid[i].length; j++) {
          if(grid[i][j] === 'R') r++;
          if(grid[i][j] === 'Y') y++;
        }
        
        if(r >= 4 || y >= 4) {
          
          let symbol = (r >= 4) ? 'R' : 'Y';
          
          for(let j = 0; j < grid[i].length - 3; j++) {
            if(grid[i][j] === symbol && grid[i][j + 1] === symbol && grid[i][j + 2] === symbol && grid[i][j + 3] === symbol) 
              return (symbol === 'R') ? 'Red' : 'Yellow';
          }
        }  
      }
      
      // VERTICAL
      for(let i = 0; i < 7; i++) {
        let [r, y] = [0,0];
        for(let j = 0; j < 6; j++) {
          if(grid[j][i] === 'R') r++;
          if(grid[j][i] === 'Y') y++;
        }
        
         if(r >= 4 || y >= 4) {
          
          let symbol = (r >= 4) ? 'R' : 'Y';
 
              for(let j = 0; j < 6 - 3; j++) {
                if(grid[j][i] === symbol && grid[j + 1][i] === symbol && grid[j + 2][i] === symbol && grid[j + 3][i] === symbol) 
                  return (symbol === 'R') ? 'Red' : 'Yellow';

              }
          }  
      }
            
      // DIAGONALES DROITES 
      for(let k = 0; k < 3; k++) {
        for(let i = 3; i < 7; i++) {

          let symbols = [];
          let pos_x = i;
          let pos_y = k;
          for(let dec = 0; dec < 4; dec++) {
            symbols.push(grid[pos_y][pos_x])
            pos_x--;
            pos_y++;
          }

          if(symbols.filter((x, i) => symbols.indexOf(x) === i).length === 1 && symbols[0] !== ' ') 
            return (symbols[0] === 'R') ? 'Red' : 'Yellow';

        }
      }
      
      // DIAGONALES GAUCHES
      for(let k = 0; k < 3; k++) {
        
        for(let i = 0; i < 4; i++) {
        
          let symbols = [];
          let pos_x = i;
          let pos_y = k;
          for(let dec = 0; dec < 4; dec++) {
            symbols.push(grid[pos_y][pos_x])
            pos_x++;
            pos_y++;
          }

          if(symbols.filter((x, i) => symbols.indexOf(x) === i).length === 1 && symbols[0] !== ' ') 
            return (symbols[0] === 'R') ? 'Red' : 'Yellow';

        }
      }
      
      return "Draw";  
    }
  
    
    function create_grid(list) {
  
      const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      let positions = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ']
      ];
  
      for(const e of list) {
        
        if(e.length === 5 || e.length === 8)  
          for(let i = 5; i >= 0; i--) 
            if(positions[i][columns.indexOf(e.charAt(0))] === ' ') {
              positions[i][columns.indexOf(e.charAt(0))] = e.charAt(2);
              var winner = detecte_winner(positions);
              
              if(winner == 'Red' || winner == 'Yellow') 
                return winner;
              
              break;
            }
        }
  
      return "Draw";
    }
  }