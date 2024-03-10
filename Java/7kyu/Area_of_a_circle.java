// Complete the function which will return the area of a circle with the given radius.

// Returned value is expected to be accurate up to tolerance of 0.01.

// If the radius is not positive, throw IllegalArgumentException.

// Example:

// Circle.area(43.2673);     // returns 5881.248  (± 0.01)
// Circle.area(68);          // returns 14526.724 (± 0.01)
// Circle.area(0);           // throws IllegalArgumentException
// Circle.area(-1);          // throws IllegalArgumentException



public class Area_of_a_circle {
    public static double area(double radius) {
        if (radius <= 0) {
            throw new IllegalArgumentException("Le rayon doit être positif.");
        }
        
        double area = Math.PI * Math.pow(radius, 2);
        return Math.round(area * 100) / 100.0;
    }
}