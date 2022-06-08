(function()
{
	//automatically called as soon as the javascript is loaded
	window.addEventListener("load", main);
	window.addEventListener("load", main);
}());

var ground = [
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
 ];

var ground2 = [
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
	[88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88, 89, 88],
	[72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72, 73, 72],
];

var ground3 = [
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
	[180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180, 181, 180],
	[164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164, 165, 164],
];

var ground4 = [
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
	[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
];

var ground5 = [
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
	[176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176],
];

var ground6 = [
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
	[94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94, 95, 94],
	[78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78, 79, 78],
]; //lava floor; may be unused


const gameWidth = 800;
const gameHeight = 608;
var player;
var ctx;
var input;
var sinal = 0;
var lastTime = 0;
var vento_x = 0;
var objectos = [];
var vida=1;
var inimigos = [];
var inimigos = [];
var tilesetImage = new Image();
tilesetImage.src = '../Resources/tileset2upd5.png';
//tilesetImage.onload = drawImage;

function main(){
	var bonus1=localStorage.getItem("item1");
	var bonus2=localStorage.getItem("item2");
	var nivel = localStorage.getItem("nivel");
	criaCenario(nivel);
	vida=1;
	vento_x = Math.random() * 0.4 ;
	
	let canvas = document.getElementById("my_canvas");
	ctx = canvas.getContext("2d");	
	
	var img = new Image()
	img.src = "../Resources/ship_1.png"
	player = new Player(img,400,300,2,3,100,100);
	itemEffects(player);
	input = new inputHandler(player);
	ctx.imageSmoothingEnabled = false;
	ctx.fillStyle = "Aqua";
	ctx.fillRect(0,0, gameWidth, gameHeight);

	gameLoop();
}

function paintCanvas(){
	var tileSize = 32;       // The size of a tile (32×32)
	var rowTileCount = 19;   // The number of tiles in a row of our background (608/32 = 19)
	var colTileCount = 25;   // The number of tiles in a column of our background (800/32 = 25)
	var imageNumTiles = 16;  // The number of tiles per row in the tileset image (384/32 = 12)

	var tile;
	var tileRow;
	var tileCol;
	var nivel = localStorage.getItem("nivel");
	for (var r = 0; r < rowTileCount; r++) {
		for (var c = 0; c < colTileCount; c++) {
			if(nivel == "1"){
				tile = ground[ r ][ c ];
			}
			else if(nivel == "2"){
				tile = ground2[ r ][ c ];
			}
			else if(nivel == "3"){
				tile = ground3[ r ][ c ];
			}
			else if(nivel == "4"){
				tile = ground4[ r ][ c ];
			}
			else if(nivel == "5") {
				tile = ground5[ r ][ c ];
			}
        	tileRow = Math.floor(tile / imageNumTiles); 
			tileCol = Math.floor(tile % imageNumTiles);
			ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        }
	}
}

function gameLoop(timeStamp) {
	let deltaTime = timeStamp - lastTime;
	lastTime = timeStamp;

	barraVida();
	paintCanvas();
	sinal = 1;
	/*ctx.clearRect(0,0, gameWidth, gameHeight);
	ctx.fillStyle = "Aqua";
	ctx.fillRect(0,0, gameWidth, gameHeight);*/
	player.desvia(ctx);
	player.desviaCantos(ctx);
	player.update(deltaTime);
	player.draw(ctx);

	verificaColisoes(deltaTime);
	var x=0;
	for (i = 0; i < inimigos.length ; i++) {
		if (inimigos[i].getVida > 0) {
			x++;
			break;
		}
	}
	if (x==0) {
		terminou();
	} else if (vida == 1) {
		requestAnimationFrame(gameLoop);
	}
}
function barraVida(){
	ctx.fillStyle = "red";
	ctx.globalAlpha = 0.5;
	ctx.fillRect(1, 1, player.getVida, 20);
	ctx.beginPath();
	ctx.rect(0, 0, player.getVidaMax, 22);
	ctx.stroke();
}

function explosao(p){
	var img2 = new Image()
	img2.src = "../Resources/explosion.png"
	var x = p.getXInt;			//EXPLOOOOOOSIOOOOON
	var y = p.getYInt;
	explosion = new Explosion(img2, x, y);
	explosion.draw(ctx);
}
function criaCenario(nivel){
	var rochas = new Image()
	rochas.src = "../Resources/rocha.png"
	var arvore = new Image()
	arvore.src = "../Resources/arvore.png"
	var osso = new Image()
	osso.src = "../Resources/osso.png"
	var gelo = new Image()
	gelo.src = "../Resources/gelo.png"
	layer1 = [];
	var ob;
	var img = new Image()
	img.src = "../Resources/ship_2.png"
	var img2 = new Image()
	img2.src = "../Resources/ship_3.png"
	var img3 = new Image()
	img3.src = "../Resources/ship_4.png"
	var img4 = new Image()
	img4.src = "../Resources/ship_5.png"
	inimigos = [];

	switch(nivel){
		case("1"):
			ob = new Objeto(rochas,600,320);
			layer1.push(ob);
			ob = new Objeto(rochas,100,500);
			layer1.push(ob);
			ob = new Objeto(rochas,300,100);
			layer1.push(ob);
			ob = new Objeto(rochas,150,200);
			layer1.push(ob);
			ob = new Objeto(rochas,400,450);
			layer1.push(ob);
			inimigo = new Inimigo(img3,600,100,0.5,2,100,20);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img3,200,100,0.5,2,100,20);
			inimigos.push(inimigo);
			//inimigo = new Inimigo(img,600,400,1,2,100,50);
			//inimigos.push(inimigo);
			break;
		case("2"):
			ob = new Objeto(osso,600,320);
			layer1.push(ob);
			ob = new Objeto(osso,100,500);
			layer1.push(ob);
			ob = new Objeto(osso,300,100);
			layer1.push(ob);
			ob = new Objeto(osso,150,200);
			layer1.push(ob);
			inimigo = new Inimigo(img3,600,100,0.5,2,100,100);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img,200,100,1,2,100,100);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img,450,400,1,2,100,100);
			inimigos.push(inimigo);
			break;
		case("3"):
			ob = new Objeto(gelo,500,320);
			layer1.push(ob);
			ob = new Objeto(gelo,100,450);
			layer1.push(ob);
			ob = new Objeto(gelo,200,300);
			layer1.push(ob);
			ob = new Objeto(gelo,400,200);
			layer1.push(ob);
			ob = new Objeto(gelo,400,450);
			layer1.push(ob);
			ob = new Objeto(gelo,700,200);
			layer1.push(ob);
			inimigo = new Inimigo(img2,600,600,1,1,100,100);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img3,200,100,0.5,2,100,100);
			inimigos.push(inimigo);
			break;
		case("4"):
			ob = new Objeto(arvore,600,320);
			layer1.push(ob);
			ob = new Objeto(arvore,100,500);
			layer1.push(ob);
			ob = new Objeto(arvore,300,100);
			layer1.push(ob);
			ob = new Objeto(arvore,150,200);
			layer1.push(ob);
			ob = new Objeto(arvore,400,450);
			layer1.push(ob);
			ob = new Objeto(arvore,200,400);
			layer1.push(ob);
			ob = new Objeto(arvore,600,500);
			layer1.push(ob);
			inimigo = new Inimigo(img,600,100,1,2,100,100);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img2,200,100,1,1,100,100);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img,700,400,1,2,100,100);
			inimigos.push(inimigo);
			//inimigo = new Inimigo(img,100,400,1,2,100,100);
			//inimigos.push(inimigo);
			break;
		case("5"):
			inimigo = new Inimigo(img2,600,100,1,2,100,100);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img4,200,100,1,0.5,100,140);
			inimigos.push(inimigo);
			inimigo = new Inimigo(img4,400,200,1,0.5,100,140);
			inimigos.push(inimigo);
			break;
	}
}
function terminou(){
	var gold = localStorage.getItem("gold");
	gold = parseInt(gold) + 2500;
	localStorage.setItem("gold", gold);
	var modal = document.getElementById("ModalCtrl");
	var span2 = document.getElementById("back");
	modal.style.display = "block";
	var p = document.getElementById("mensagem").innerHTML = "Success! You completed this level!";
	var h = document.getElementById("header_mensagem").innerHTML = "Level Complete!";
	span2.addEventListener("click",backtomenu);
}
function saqueado(){
	//console.log("Colidiste com o inimigo e o teu barco foi invadido.(Foste saqueado)");
	vida=0;
	var modal = document.getElementById("ModalCtrl");
	var span = document.getElementById("restart");
	var span2 = document.getElementById("back");
	modal.style.display = "block";
	var p = document.getElementById("mensagem").innerHTML = "Captain, our enemy has taken the ship!";
	span.addEventListener("click",refresh);
	span2.addEventListener("click",backtomenu);
	
}
function atingido(){
	vida=0;
	var modal = document.getElementById("ModalCtrl");
	var span = document.getElementById("restart");
	var span2 = document.getElementById("back");
	modal.style.display = "block";
	var p = document.getElementById("mensagem").innerHTML = "Our ship has taken too many hits, we have to abandon it!";
	span.addEventListener("click",refresh);
	span2.addEventListener("click",backtomenu);
}
function colidiu(){
	vida=0;
	var modal = document.getElementById("ModalCtrl");
	var span = document.getElementById("restart");
	var span2 = document.getElementById("back");
	modal.style.display = "block";
	var p = document.getElementById("mensagem").innerHTML = "Captain, next time you should steer away from the rocks not into them!";
	span.addEventListener("click",refresh);
	span2.addEventListener("click",backtomenu);

}

function backtomenu(){
	var nivel = localStorage.getItem("nivel");
	if(nivel == "1"){
		nivel = "kingdom";
	}
	else if(nivel == "2"){
		nivel = "desert";
	}
	else if(nivel == "3"){
		nivel = "sherbet";
	}
	else if(nivel == "4"){
		nivel = "skulls";
	}
	else if(nivel == "5"){
		nivel = "blackhole";
	}
	location.href = "../html/" + nivel + ".html";
}

function refresh(){
	location.reload();
}

function verificaColisoes(deltaTime){
	var cannon=player.getCanhao;
	for (var i=0;i<inimigos.length;i++) {
		if (inimigos[i].getVida>0) {
			var cannon1=inimigos[i].getCanhao;
			inimigos[i].update(deltaTime, player);
			inimigos[i].draw(ctx);
			for (var indice=0;indice<cannon.length;indice++){
				//console.log(indice);
				if (inimigos[i].intersect(cannon[indice])){
					//console.log("sera");
					if (inimigos[i].intersectPixelCheck2(cannon[indice])){
						//console.log("foi");
						explosao(inimigos[i]);
						inimigos[i].levouCanhao("inimigos");
						player.removeCanhao(indice);
					}
				}
			}
			for (var indice=0;indice<cannon1.length;indice++){
				//console.log(indice);
				if (player.intersect(cannon1[indice])){
					//console.log("sera");
					if (player.intersectPixelCheck2(cannon1[indice])){
						//console.log("foi");
						explosao(player);
						player.levouCanhao("player");
						inimigos[i].removeCanhao(indice);
						if (player.getVida<=0) {
							atingido();
						}
					}
				}
			}
			if (player.intersect(inimigos[i])) {
				if (player.intersectPixelCheck(inimigos[i])) {
					explosao(player);
					//player.travar();
					//inimigos[i].travar();
					saqueado();
					//var xp=player.colisonX;
					//var yp=player.colisonY;
					//var xi=inimigo.colisonX;
					//var yi=inimigo.colisonY;
					//player.colisao(xi,yi);
					//inimigo.colisao(xp,yp);
				}
			}
			for (var j = 0; j < inimigos.length; j++) {
				if (inimigos[j].getVida>0) {
					if (i!=j) {
						if (inimigos[i].intersect2(inimigos[j])) {
							inimigos[i].desviaAliado(inimigos[j]);
							if (inimigos[i].intersectPixelCheck(inimigos[j])) {
								explosao(inimigos[i]);
								inimigos[i].bateu();
								inimigos[j].bateu();
								/*var xp=inimigos[i].colisonX;
                                var yp=inimigos[i].colisonY;
                                var xi=inimigos[j].colisonX;
                                var yi=inimigos[j].colisonY;
                                inimigos[i].colisao(xi,yi);
                                inimigos[j].colisao(xp,yp);*/
							}
						}
						for (var ind=0;ind<cannon1.length;ind++){
							if (inimigos[j].intersect(cannon1[ind])){
								//console.log("sera");
								if (inimigos[j].intersectPixelCheck2(cannon1[ind])){
									//console.log("foi");
									explosao(inimigos[j]);
									inimigos[j].levouCanhao("inimigos");
									inimigos[i].removeCanhao(indice);
								}
							}
						}
					}
				}
			}
			for (var z = 0; z < layer1.length; z++) {
				layer1[z].draw(ctx);

				if (inimigos[i].intersect(layer1[z])) {
					//inimigos[i].desviaObjetos(layer1[z]);
					if (inimigos[i].intersectPixelCheck2(layer1[z])) {
						explosao(inimigos[i]);
						inimigos[i].bateu();
					}
				}
			}
		}
	}
	for (var z = 0; z < layer1.length; z++) {
		layer1[z].draw(ctx);
		if (player.intersect(layer1[z])) {
			if (player.intersectPixelCheck2(layer1[z])) {

				explosao(player);
				player.bateu();
				if (player.getVida <= 0) {
					console.log("Bateste contra pedras");
					colidiu();
				}
				//player.travar();
			}
		}
	}
}

function itemEffects(player){
	var item1 = localStorage.getItem("item1");
	var item2 = localStorage.getItem("item2");

	if(item1 == "damage" || item2 == "damage"){
		localStorage.setItem("damageBoost","1");
	}
	else if(item1 == "speed" || item2 == "speed"){
		player.maxSpeed = player.maxSpeed + 2;
	}
	else if(item1 == "defense" || item2 == "defense"){
		localStorage.setItem("defenseBoost","1");
	}
	else if(item1 == "rotation" || item2 == "rotation"){
		player.rotateSpeed = player.rotateSpeed + 2;
	}
	else if(item1 == "shield" || item2 == "shield"){
		localStorage.setItem("invensibility", 1);
	}
	else if(item1 == "hp" || item2 == "hp"){
		player.vida = player.vida + 1;
	}
}
//desenhar sprites
/**
function draw(ctx, spArray)
{
	var dim = spArray.length;

	for (let i = 0; i < dim; i++)
	{
		spArray[i].draw(ctx);
	}
}**/