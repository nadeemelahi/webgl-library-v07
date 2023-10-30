// author: Ned - Nadeem Elahi nadeem@webscripts.biz



//
// letter A
//
var verts2D = [
	 -10 , -10 ,
	  -7 , -10 ,
	   1 ,  10 ,
	  -1 ,  10 ,

	   7 , -10 ,
	  10 , -10 ,

	  -3 ,   0 ,
	   3 ,   0 ,
	  -3 ,   2 ,
	   3 ,   2 ,
];

normalizeArray(verts2D);
var verts3Dfront = [];
var verts3Dback = [];

convert2Dto3D(verts3Dfront, verts2D, -1);
convert2Dto3D(verts3Dback, verts2D, 1);

var verts3D = [];
verts3D = verts3Dfront.concat(verts3Dback);




var indicesFront = [ 
	0,1,2  , 0,2,3 ,
	4,5,2  , 4,2,3 ,
	6,7,9  , 6,9,8 ,
];

var indicesBack = [];
offsetIndices(indicesBack, indicesFront);
// reverse the indices for the back side
// so the triangles are clockwise
var indicesBackReversed = [];
reverseArray(indicesBackReversed, indicesBack);

var indicesFrontBack = [];
indicesFrontBack = indicesFront.concat(indicesBack);

var indicesMore = [
	5,15,12 , 5,12, 2  , // right side
	0, 3,13 , 0,13,10  , // left side
	1,11,12 , 1,12, 2  , // left inside side
	4, 3,13 , 4,13,14  , // right inside side
	9, 9,19 , 8,19,18  , // bridge top
	6,16,17 , 6,17, 7  , // bridge bottom 
	2,12,13 , 2,13, 3  , // top
	0,10,11 , 0,11, 1  , // bottom left
	4,14,15 , 4,15, 5  , // bottom right  
];

var indices = [];
indices = indicesFrontBack.concat(indicesMore);



var vertsIn = verts3D;
var verts = [];
genVertsByIndices(indices, verts, vertsIn);

var vertsCnt = verts.length / 3;

// colours
var coloursIn = [
	0.9 , 0.0 ,  0.0  ,  // front - red
	0.9 , 0.0 ,  0.0  ,  // front - red
	0.9 , 0.0 ,  0.0  ,  // front - red
	0.9 , 0.0 ,  0.0  ,  // front - red
	0.9 , 0.0 ,  0.0  ,  // front - red
	0.9 , 0.0 ,  0.0  ,  // front - red

	0.5 , 0.5 ,  0.5  ,  // back - gray 
	0.5 , 0.5 ,  0.5  ,  // back - gray 
	0.5 , 0.5 ,  0.5  ,  // back - gray 
	0.5 , 0.5 ,  0.5  ,  // back - gray 
	0.5 , 0.5 ,  0.5  ,  // back - gray 
	0.5 , 0.5 ,  0.5  ,  // back - gray 

	0.0 , 0.5 ,  0.5  ,  // right side
	0.0 , 0.5 ,  0.5  ,  // 

	0.9 , 0.5 ,  0.2  ,  // left side
	0.9 , 0.5 ,  0.2  ,  // 

	0.3 , 0.5 ,  0.3  ,  // left inside side
	0.3 , 0.5 ,  0.3  ,  // 

	0.4 , 0.9 ,  0.5  ,  // right inside side
	0.4 , 0.9 ,  0.5  ,  // 

	0.1 , 0.5 ,  0.1  ,  // bridge top
	0.1 , 0.5 ,  0.1  ,  //

	0.1 , 0.1 ,  0.5  ,  // bridge bottom 
	0.1 , 0.1 ,  0.5  ,  // 

	0.1 , 0.9 ,  0.5  ,  // top 
	0.1 , 0.9 ,  0.5  ,  // 

	0.9 , 0.9 ,  0.5  ,  //  bottom left
	0.9 , 0.9 ,  0.5  ,  // 

	0.9 , 0.3 ,  0.9  ,  //  bottom right
	0.9 , 0.3 ,  0.9  ,  // 
];
var colours = [];
genThriceColoursArray(colours, coloursIn);


// normalize
function normalizeArray(vertsOver1){
	var len = vertsOver1.length, max = 0 ;
	for(var idx = 0 ; idx < len ; idx++ ){
		if (vertsOver1[idx] > max ) max = vertsOver1[idx];
	}
	for(var idx = 0 ; idx < len ; idx++ ){
		vertsOver1[idx] /= max;
	}
}

// build matching indices list for back face indices of front face
function offsetIndices(indicesOut, indicesIn){
	var len = indicesIn.length, max = 0;
	for(var idx = 0; idx < len; idx++){
		if (indicesIn[idx] > max ) max = indicesIn[idx];
	}
	max++;
	for(var idx = 0; idx < len; idx++){
		indicesOut[idx] = indicesIn[idx] + max;
	}
}
//array.reverse()
function reverseArray(arrR, arrIn){
	var len = arrIn.length;
	for( var idx = 0; idx < len; idx++ ){
		arrR.push( arrIn[len-1-idx] );
	}
}
