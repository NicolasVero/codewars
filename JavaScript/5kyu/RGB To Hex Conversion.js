// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


function rgb(r, g, b) {
  
    let vals = [round(r), round(g), round(b)];
    let hexs = [];
  
    for (let i = 0; i < 3; i++) {
  
        let q = vals[i];
        let hex = [];
      
        while (q > 0) {
            let r = q % 16;
            hex.unshift(r);
            q = Math.floor(q / 16);
        }
    
        if(hex.length == 0) hex.unshift(0, 0);
        if(hex.length == 1) hex.unshift(0);
        
        hexs.push(hex);
    }
    
    return toHex(hexs)
    
    function toHex(arr) {
        let hex = '';
        
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
            hex += arr[i][j].toString(16);
            }
        }
        
        return hex.toUpperCase();
    }
    
    function round(e) {
        if(e >= 0 && e <= 255) return e;
        if(e < 0) return 0;
        if(e > 255) return 255;
    }
}