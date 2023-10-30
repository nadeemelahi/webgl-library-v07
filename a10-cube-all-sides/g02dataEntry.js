// author: Ned - Nadeem Elahi nadeem@webscripts.biz

//
// cube geometry
//                     7                6
//			+--------------+
//	           3    |           2  |
//		    +---|----------+   |
//		    |	|          |   |
//		    |	|          |   |
//		    |	|          |   |
//		    |  	+--------------+ ---Back z = +1
//                  |  4           |    5
//  		    +--------------+ ---Front z = -1 
//                 0                1
// 
var verts2D = [
	-1,-1, // 0
	 1,-1, // 1
	 1, 1, // 2
	-1, 1, // 3
];
var verts3Dfront = [];
var verts3Dback = [];
convert2Dto3D(verts3Dfront, verts2D, -1);
convert2Dto3D(verts3Dback, verts2D, 1);

vertsIn = [];
vertsIn = verts3Dfront.concat(verts3Dback);

var indices = [ 
	0,1,2 , 0,2,3 ,  // front : counter-clockwise
	4,7,6 , 4,6,5 ,  // back : clockwise
	1,5,6 , 1,6,2 ,  // right: counter-clockwise
	0,3,7 , 0,7,4 ,  // left: clockwise
	3,2,6 , 3,6,7 ,  // top: counter-clockwise
	0,4,5 , 0,5,1 ,  // bottom: clockwise
];

var verts = [];
genVertsByIndices(indices, verts, vertsIn);

var vertsCnt = verts.length / 3;

// colours
var coloursIn = [
	0.9 , 0.0 ,  0.0  ,  // front - red
	0.5 , 0.0 ,  0.0  ,  // red - dark

	0.0 , 0.9 ,  0.0  ,  // back - green
	0.0 , 0.5 ,  0.0  ,  // green - dark

	0.0 , 0.0 ,  0.9  ,  // right - blue 
	0.0 , 0.0 ,  0.5  ,  // blue - dark

	0.9 , 0.9 ,  0.0  ,  // left - green
	0.5 , 0.5 ,  0.0  ,  // green - dark

	0.0 , 0.9 ,  0.9  ,  // top - red
	0.0 , 0.5 ,  0.5  ,  // red - dark

	0.9 , 0.0 ,  0.9  ,  // bottom - green
	0.5 , 0.0 ,  0.5  ,  // green - dark
];
var colours = [];
genThriceColoursArray(colours, coloursIn);

