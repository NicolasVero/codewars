// Votre objectif dans ce kata est d'implémenter une fonction de différence, qui soustrait une liste d'une autre et renvoie le résultat.

// Il doit supprimer toutes les valeurs de list a, qui sont présentes dans list ben gardant leur ordre.

// Kata.ArrayDiff(new int[] {1, 2}, new int[] {1}) => new int[] {2}
// Si une valeur est présente dans b, toutes ses occurrences doivent être supprimées de l'autre :

// Kata.ArrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2}) => new int[] {1, 3}


using System;
using System.Linq;

public class Tableau_diff {
	public static int[] ArrayDiff(int[] a, int[] b) {
		int[] c = new int[a.Length];
		int index = 0;

		for (int i = 0; i < a.Length; i++) {
			if (!b.Contains(a[i])){
				c[index] = a[i];
				index++;
			}
		}

		int[] newArray = new int[index];
		Array.Copy(c, newArray, index);

		return newArray;
	}
}
