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
// normalize
function divideAllByFactor(vertsOver1, factor){
	var len = vertsOver1.length;
	for(var idx = 0 ; idx < len ; idx++ ){
		vertsOver1[idx] /= factor;
	}
}
divideAllByFactor(verts2D, 10);

var verts3D = [];
convert2Dto3D(verts3D, verts2D, 0);

var indices = [ 
	0,1,2  , 0,2,3 ,
	4,5,2  , 4,2,3 ,
	6,7,9  , 6,9,8 ,
];

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

];
var colours = [];
genThriceColoursArray(colours, coloursIn);

