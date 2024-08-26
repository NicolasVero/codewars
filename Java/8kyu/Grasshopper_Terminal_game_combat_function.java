// Create a combat function that takes the player's current health and the amount of damage recieved,
// and returns the player's new health. Health can't be less than 0.


public class Grasshopper_Terminal_game_combat_function {
    
    public static int combat(int health, int damage) {
        return Math.max(0, health - damage);
    }
}
