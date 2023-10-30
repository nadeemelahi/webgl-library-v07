// author: nadeem@webscripts.biz
"use strict"; 
var ngl = new function (){
	this.canvas = document.body.children[0];
	this.canvas.width=window.innerWidth;
	this.canvas.height=window.innerHeight;

	var gl = this.canvas.getContext('webgl');
	if(!gl) { console.log("no gl support"); return; }

	this.get_gl = function() { return gl; };

	var vshdr = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vshdr , document.getElementById('vertex-shader-2d').text );
	gl.compileShader(vshdr);

	var fshdr = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fshdr , document.getElementById('fragment-shader-2d').text );
	gl.compileShader(fshdr);

	var shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram,vshdr); 
	gl.attachShader(shaderProgram,fshdr);
	gl.linkProgram(shaderProgram);
	gl.useProgram(shaderProgram);

	this.get_shaderProgram = function(){
		return shaderProgram;
	};

	this.loadAttribute = function(vertsName, verts, dim){
		// transfer data to gpu
		gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer() );
		gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

		// ---------point attribute location
		var ptr = gl.getAttribLocation(shaderProgram, vertsName);

		gl.vertexAttribPointer(ptr, dim, gl.FLOAT,false,0,0);
		gl.enableVertexAttribArray(ptr);

		// unbind
		gl.bindBuffer(gl.ARRAY_BUFFER,null);
	};

	this.loadUniform1f = function(name,i){
		var ptr = gl.getUniformLocation( shaderProgram, name );
		gl.uniform1f(ptr,i);
	};

	this.loadImageTexture = function(image){
		// Create a texture.
		gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());

		// Set the parameters so we can render any size image.
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

		// Upload the image into the texture.
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

		//gl.bindTexture(gl.TEXTURE_2D, null);// DO NOT UNBIND 
	};
	this.loadDataTexture = function(pixeldata, width, height){
		// Create a texture.
		gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

		// Upload the image into the texture.
		gl.texImage2D(gl.TEXTURE_2D, 
			0,                 // level
			gl.RGBA,           // internal format
			width,                 // width
			height,                 // height
			0,                 // border
			gl.RGBA,           // format
			gl.UNSIGNED_BYTE,  // type
			pixels,            // data
		);


		//gl.bindTexture(gl.TEXTURE_2D, null);// DO NOT UNBIND 
	};
	this.setBackgroundNviewport= function( bg, dim ){
		gl.clearColor( bg[0] , bg[1] , bg[2] , bg[3] );
		gl.enable(gl.DEPTH_TEST); 
		var xOrigin = dim[0] * this.canvas.width;
		var yOrigin = dim[1] * this.canvas.height;
		var width = dim[2] * this.canvas.width;
		var height = dim[3] * this.canvas.height;
		gl.viewport( xOrigin , yOrigin , width , height );
	};
	this.clear = function(){
		gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
	};
	this.drawTriangles = function(cnt){
		gl.drawArrays( gl.TRIANGLES , 0 , cnt );
	};

};

