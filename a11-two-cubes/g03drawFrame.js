// author: Ned - Nadeem Elahi nadeem@webscripts.biz

ngl.setBackgroundNviewport( background , viewport ); 
load.vertsNcolours(verts, colours);

load.scaleXYZ(0.1);
//load.psvFactor = 1;
//load.tsrp();
drawFrame();

function drawFrame(){

	ngl.clear();
	
	load.xLoc = -0.2;
	load.zLoc =  0.5;
	load.tsrp();
	ngl.drawTriangles(vertsCnt);


	load.xLoc = +0.2;
	load.zLoc = -0.5;
	load.tsrp();
	ngl.drawTriangles(vertsCnt);
	
	animateXYrotation();
}

var speed = 100;
function animateXYrotation(){
	load.xAngle++; load.yAngle++;
	if(load.xAngle > 360) load.xAngle = 0;
	if(load.yAngle > 360) load.yAngle = 0;
	load.tsrp();

	setTimeout(drawFrame, speed);
}
