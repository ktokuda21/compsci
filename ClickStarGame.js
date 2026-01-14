(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah7B5IlzgKIEnjgIhqllIExDTIEyjTIhqFlIEnDgIlzAKIh8Feg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-49.4,-47,98.9,94.1), null);


(lib.restartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Restart", "24px 'Times'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-45.45,-10.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AqYEdIAAo5IUxAAIAAI5g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-28.5,132.9,57);


// stage content:
(lib.ClickStarGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.score = 0;
		this.timeLeft = 10;
		
		this.score_txt.text = "Score: 0";
		this.timer_txt.text = "Time: " + this.timeLeft;
		
		this.star_mc.cursor = "pointer";
		
		this.star_mc.on("click", function () {
		    this.score++;
		    this.score_txt.text = "Score: " + this.score;
		
		    this.star_mc.x = Math.random() * 400 + 50;
		    this.star_mc.y = Math.random() * 250 + 50;
		}.bind(this));
		
		this.countDown = function () {
		    this.timeLeft--;
		    this.timer_txt.text = "Time: " + this.timeLeft;
		
		    if (this.timeLeft <= 0) {
		        clearInterval(this.timerInterval);
		        this.endGame();
		    }
		}.bind(this);
		
		this.timerInterval = setInterval(this.countDown, 1000);
		
		this.endGame = function () {
		    this.star_mc.removeAllEventListeners("click");
		    alert("Time's up! Final Score: " + this.score);
		}.bind(this);
		
		this.restart_btn.cursor = "pointer";
		
		this.restart_btn.on("click", function () {
		    this.restartGame();
		}.bind(this));
		
		this.restartGame = function () {
		    clearInterval(this.timerInterval);
		
		    // Reset values
		    this.score = 0;
		    this.timeLeft = 10;
		
		    // Update text
		    this.score_txt.text = "Score: 0";
		    this.timer_txt.text = "Time: " + this.timeLeft;
		
		    // Re-enable clicking
		    this.star_mc.removeAllEventListeners("click");
		    this.star_mc.on("click", function () {
		        this.score++;
		        this.score_txt.text = "Score: " + this.score;
		
		        this.star_mc.x = Math.random() * 400 + 50;
		        this.star_mc.y = Math.random() * 250 + 50;
		    }.bind(this));
		
		    // Restart timer
		    this.timerInterval = setInterval(this.countDown, 1000);
		}.bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.restart_btn = new lib.restartBtn();
	this.restart_btn.name = "restart_btn";
	this.restart_btn.setTransform(96.5,395.5);
	new cjs.ButtonHelper(this.restart_btn, 0, 1, 1);

	this.timer_txt = new cjs.Text("Time:  10", "24px 'Times'", "#FF0000");
	this.timer_txt.name = "timer_txt";
	this.timer_txt.lineHeight = 26;
	this.timer_txt.lineWidth = 100;
	this.timer_txt.parent = this;
	this.timer_txt.setTransform(511,413.25);

	this.score_txt = new cjs.Text("Score:  0", "81px 'Times'", "#FF0000");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 83;
	this.score_txt.parent = this;
	this.score_txt.setTransform(96,3.3);

	this.star_mc = new lib.star();
	this.star_mc.name = "star_mc";
	this.star_mc.setTransform(266.95,198);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star_mc},{t:this.score_txt},{t:this.timer_txt},{t:this.restart_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(350.1,241.3,262.9,201.7);
// library properties:
lib.properties = {
	id: 'E370C3967A0945CC9BDE1C9811711A14',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E370C3967A0945CC9BDE1C9811711A14'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;