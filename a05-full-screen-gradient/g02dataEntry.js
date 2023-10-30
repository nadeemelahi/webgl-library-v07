// author: Ned - Nadeem Elahi nadeem@webscripts.biz

// verts - triangle points
//               
//    -1,1 +----+ 1,1
//         |   /|
//         |  / |
//         | /  |
//         |/   |
//         +----+
//     -1,-1    1,-1
//
//
var verts = [
	-1,-1, 0 ,
	 1,-1, 0 ,
	 1, 1, 0 ,

	-1,-1, 0 ,
	 1, 1, 0 ,
	-1, 1, 0 ,
];
var vertsCnt = verts.length / 3;

// colours
var colours = [
	1 , 0 ,  0  ,  // red
	1 , 0 ,  0  ,  // red
	1 , 1 ,  1  ,  // white 

	1 , 0 ,  0  ,  // red
	1 , 1 ,  1  ,  // white 
	1 , 1 ,  1  ,  // white 
];


