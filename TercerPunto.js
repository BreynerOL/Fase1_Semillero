/*3. Dado un arreglo de palabras, determina si los elementos dentro de los ()
de dicho arreglo son válidos o no acorde al siguiente ejemplo:

"bici coche (balón) bici coche peluche" // -> OK
"(muñeca) consola bici" // -> OK

"bici coche (balón bici coche" // -> FAIL
"peluche (bici [coche) bici coche balón" // -> FAIL
"(peluche {) bici" // -> FAIL
"() bici" // -> FAIL

Los () no pueden estar vacíos, deben siempre abrir y cerrar paréntesis,
no puede haber caracteres especiales dentro de los paréntesis;
la presentación de los resultados es libre
*/