# Code your own simulation

This program simulates a particle falling due to gravity. Try changing the initial settings. What do you think will happen if you...

- Increase gravity? _This will speed up the particle as it falls. Making it negative will make it go up instead._
- Change the mass of the particle? _This will slow down the particle as it falls._
- Make the time step negative? _If you change the timestep from positive to negative as the physics simulation is running (it updates in real-time), you can cause the particle to bounce back up, effectively traveling backwards in time._

Since we are simply tweaking existing variable values, there is no need to add code here.

# Spring-Mass system

This program simulates a particle connected to an anchor by a spring.

Try changing the value of the k variable. Press "Restart" after changing the value.

- How does the length of the spring change as k increases? *It gets shorter. Though glitchy behavior begins when you set it to super, super high values, and it actually seems to get longer. According to my research on this issue, this is most likely an issue with the timestep being unable to accurately represent what is going on for very high values of k. In fact, put the value high enough and the spring will just vanish entirely. But when you decrease the timestep value to something like 0.01, the spring continually shortens with higher values of k as expected.*
- How does the speed of the particle change as k increases? *It moves much faster as k increases.*

# Dampened spring-mass system

This program simulates a particle connected to an anchor by a damped spring. Can you make a realistic looking spring?

Try changing the value of k and the amount of damping. Press "Restart" each time you change a value.

How does the behavior of the spring change if you:
- Keep damping constant and change k? *Lower values of k make the spring longer, higher values make it shorter. Larger spring constant = less displacement. [more info](https://www.jamesspring.com/news/spring-constant/)*
- Keep k constant and change damping? *Lower damping values are bouncier. Higher damping values come to rest very quickly.* 

# 2D spring-mass system

This program simulates a particle connected to an anchor by a damped spring in two dimensions. Try changing the initial settings.

- How does the initial position of the particle affect its position when the spring comes to rest? *It seems to come to rest at effectively the same position.* NOTE I am going to double check on this
- How does positionX compare to anchorX when the spring comes to rest?
- How does positionY compare to anchorY when the spring comes to rest?
- What causes the difference between the horizontal and vertical position?
