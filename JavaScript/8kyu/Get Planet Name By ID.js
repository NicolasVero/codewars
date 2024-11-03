// Example (Input --> Output ):

// 3 --> "Earth"


function getPlanetName(id){
    const planets = [
        "Mercury",
        "Venus",   
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus", 
        "Neptune" 
    ];
    
    return planets[id - 1];
}