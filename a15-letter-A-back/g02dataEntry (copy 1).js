// author: Ned - Nadeem Elahi nadeem@webscripts.biz

/*
//array.reverse()
var arr1 = [ 0,1,2,3,4 ];
var len = arr1.length;
var atmp = []; 
var idx;
for( idx = 0; idx < len; idx++ ){
	atmp.push( arr1[len-1-idx] );
}*/

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

var indices = [];
indices = indicesFront.concat(indicesBack);

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

