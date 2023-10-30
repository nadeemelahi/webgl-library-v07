// author: Ned - Nadeem Elahi nadeem@webscripts.biz

var load = {

	// translation
	xLoc : 0 , yLoc : 0 , zLoc : 0 ,
	// scale
	xScale : 0.5 , yScale : 0.5 , zScale : 0.5,
	// rotation
	xAngle : 0 , yAngle : 0 , zAngle : 0,
	
	// vanishing point perspective divide
	psvFactor: 0, 
	
	scaleXYZ : function(scale){
		this.xScale = this.yScale = this.zScale = scale;
	},

	// t-translation s-scale r-rotation
	// p-perspective
	tsrp : function(){
		ngl.loadUniform1f("xLoc",this.xLoc);
		ngl.loadUniform1f("yLoc",this.yLoc);
		ngl.loadUniform1f("zLoc",this.zLoc);

		ngl.loadUniform1f("xScale",this.xScale);
		ngl.loadUniform1f("yScale",this.yScale);
		ngl.loadUniform1f("zScale",this.zScale);

		ngl.loadUniform1f("xAngle",this.xAngle);
		ngl.loadUniform1f("yAngle",this.yAngle);
		ngl.loadUniform1f("zAngle",this.zAngle);

		ngl.loadUniform1f("psvFactor",this.psvFactor);
	},
	
	vertsNcolours : function(verts,colours){
		if( verts.length != colours.length) {
			alert("ERRORS verts/colours count not matching");
		}
		ngl.loadAttribute("vert",new Float32Array(verts),3);
		ngl.loadAttribute("colour",new Float32Array(colours),3);
	}
};
