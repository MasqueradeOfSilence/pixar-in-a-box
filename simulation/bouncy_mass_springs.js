 // INITIAL SETTINGS
var gravity = 5;
var mass = 30;

// Mass 1
var mass1PositionY = 238;
var mass1PositionX = 289;
var mass1VelocityY = 1;
var mass1VelocityX = 0;

// Mass 2
var mass2PositionY = 106;
var mass2PositionX = 85;
var mass2VelocityY = 0;
var mass2VelocityX = 6;

// Mass 3
var mass3PositionY = 45;
var mass3PositionX = 20;
var mass3VelocityY = 1;
var mass3VelocityX = 3;

var timeStep = 0.28;
var anchorX = 109;
var anchorY = 53;
var k = 2;
var damping = 1;

// DRAW FUNCTION
draw = function() {
     // Mass 1 Spring Force
     var mass1SpringForceY = -k*(mass1PositionY - anchorY);
     var mass1SpringForceX = -k*(mass1PositionX - anchorX);
     
     // Mass 2 Spring Force
     var mass2SpringForceY = -k*(mass2PositionY - mass1PositionY);
     var mass2SpringForceX = -k*(mass2PositionX - mass1PositionX);
     
     // mass 3 spring force
     var mass3SpringForceY = -k*(mass3PositionY - mass2PositionY);
     var mass3SpringForceX = -k*(mass3PositionX - mass2PositionX);
     
     // Mass 1 damping
     var mass1DampingForceY = damping * mass1VelocityY;
     var mass1DampingForceX = damping * mass1VelocityX;
     
     // Mass 2 damping
     var mass2DampingForceY = damping * mass2VelocityY;
     var mass2DampingForceX = damping * mass2VelocityX;
     
     // Mass 3 damping
     var mass3DampingForceY = damping * mass3VelocityY;
     var mass3DampingForceX = damping * mass3VelocityX;
     
     // Mass 1 net force
     var mass1ForceY = mass1SpringForceY + mass * gravity - mass1DampingForceY - mass2SpringForceY + mass2DampingForceY + mass3DampingForceY;
     
     var mass1ForceX = mass1SpringForceX - mass1DampingForceX - mass2SpringForceX + mass2DampingForceX + mass3DampingForceX;
     
     // Mass 2 net force
     var mass2ForceY = mass2SpringForceY + mass * gravity - mass2DampingForceY - mass3SpringForceY + mass3DampingForceY;
     var mass2ForceX = mass2SpringForceX - mass2DampingForceX - mass3SpringForceX + mass3DampingForceX;
     
     // Mass 3 net force
     var mass3ForceY = mass3SpringForceY + mass * gravity - mass3DampingForceY;
     var mass3ForceX = mass3SpringForceX - mass3DampingForceX;
     
     // Mass 1 acceleration
     var mass1AccelerationY = mass1ForceY/mass;
     var mass1AccelerationX = mass1ForceX/mass;
     
     // Mass 2 acceleration
     var mass2AccelerationY = mass2ForceY/mass;
     var mass2AccelerationX = mass2ForceX/mass;
     
     // Mass 3 acceleration
     var mass3AccelerationY = mass3ForceY/mass;
     var mass3AccelerationX = mass3ForceX/mass;
     
     // Mass 1 velocity
     mass1VelocityY = mass1VelocityY + mass1AccelerationY * timeStep;
     mass1VelocityX = mass1VelocityX + mass1AccelerationX * timeStep;
     
     // Mass 2 velocity
     mass2VelocityY = mass2VelocityY + mass2AccelerationY * timeStep;
     mass2VelocityX = mass2VelocityX + mass2AccelerationX * timeStep;
     
     // mass 3 velocity
     mass3VelocityY = mass3VelocityY + mass3AccelerationY * timeStep;
     mass3VelocityX = mass3VelocityX + mass3AccelerationX * timeStep;
     
     // Mass 1 position
     mass1PositionY = mass1PositionY + mass1VelocityY * timeStep;
     mass1PositionX = mass1PositionX + mass1VelocityX * timeStep;
     
     // Mass 2 position
     mass2PositionY = mass2PositionY + mass2VelocityY * timeStep;
     mass2PositionX = mass2PositionX + mass2VelocityX * timeStep;
     
     // Mass 3 position
     mass3PositionY = mass3PositionY + mass3VelocityY * timeStep;
     mass3PositionX = mass3PositionX + mass3VelocityX * timeStep;
    
     
     background(0, 255, 255);
     rect(anchorX-5, anchorY-5, 10, 10);
     // Draw mass 1
     line(mass1PositionX, mass1PositionY, anchorX, anchorY);
     ellipse(mass1PositionX, mass1PositionY, 20, 20);
     // Draw mass 2
     line(mass2PositionX, mass2PositionY, mass1PositionX, mass1PositionY);
     ellipse(mass2PositionX, mass2PositionY, 20, 20);
     // Draw mass 3
     line(mass3PositionX, mass3PositionY, mass2PositionX, mass2PositionY);
     ellipse(mass3PositionX, mass3PositionY, 20, 20);
};
