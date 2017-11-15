var triangleArea1 = getTriangleArea(10,15),
		triangleArea2 = getTriangleArea(5,20),
		triangleArea3 = getTriangleArea(100,4);


function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log("Nieprawidłowe dane")
	} else {
		return a*h/2;
	}
}

console.log(getTriangleArea(10,6));
console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);