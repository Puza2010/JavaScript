var a = 10,
    b = 5,
    value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {

    console.log("Wynik jest dodatni. Wynik nie jest równy 0."); 

} else if (value < 0) {

    console.log("Wynik jest ujemny. Wynik nie jest równy 0.");

} else  {

    console.log("Wynik jest równy 0");

}