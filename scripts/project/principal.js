const moveSpeed = 200;
const jumpForce = 500;
const gravity = 1000;
let isJumping = false;
let velocityY = 0;
runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime){ 
    const dt = runtime.dt;
	const player = runtime.object.player.getFirstInstance();
	
	if (runtime.keyboard.inskeyDown("ArrowRight")){
	    player.x += moveSpeed * dt;
		
	}
	if (runtime.keyboard.inskeyDown("ArrowLeft")){
	    player.x -=moveSpeed * dt;
	}
}