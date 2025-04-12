// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

// 1. Hydrogen reacts with Oxygen   = H2O
// 2. Carbon   reacts with Oxygen   = CO2
// 3. Carbon   reacts with Hydrogen = CH4


public class Fusion_Chamber_Shutdown {
    public static int[] burner(int c, int h, int o) {
        int water = Math.min(h / 2, o);
        h -= water * 2;
        o -= water;

        int carbonDioxide = Math.min(c, o / 2);
        c -= carbonDioxide;
        o -= carbonDioxide * 2;

        int methane = Math.min(c, h / 4);
        
        return new int[] {
            water, carbonDioxide, methane
        };
    }
}
