# 👪🌳 Family Tree Migration AP Human Website ✈️

This is a crazy ambitious project that I will be completing in under 15 days. I am essentially learning how to use TypeScript, Vite, Three.js, Node.js, and React all at once. I will likely Dockerize this project once it is done, and create documentation to refer to in the future.

---

## GSAP Notes

### .from

gsap.from('.className', { duration: 1, y: '-100%', ease: 'bounce'})

animates every component that has the .className class
from the state that you give it to the state that it is
written in your code, this is mostly used for animations
when the website first loads in

the line above would animate from the bottom of the page
to the top with a duration of 1

ease has different preset curves from GSAP

the stagger property staggers each element in each class

the rest of these should be self-explanatory

gsap.from('.class2', { duration: 1, opacity: 0, delay: 1 })
gsap.from('.class3', { duration: 2, x: '-100vw', delay: 1, ease: 'power2.in' })

### .to

gsap.to('.classTo', {duration: 1, y: 0, ease: 'elastic', delay: 2.5 })

animates to a certain position if you apply a transform to the class
.class2 {
    transform: translateY(100%);
}

### .fromTo

gsap.fromTo('.class5', 
            { opacity: 0, scale: 0, rotation: 720 }, 
            { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })

this is just a better version of gsap.to
because it allows you to specify the start
and end values in one line of code

### onUpdate

const obj = { x: 0 }
gsap.to(obj, { x: 100 , onUpdate: () => console.log(obj.x) })

onUpdate: () => runs every time you update, so it can be good for SVGs

### Timelines

A timeline helps you line up all of these animations and set defaults

const timeline = gsaptimeline( {defaults: { duration: 1 }} )
timeline.from('.class1', { y: '-100%', ease: 'bounce' }).from('.nextClass' { opacity: 0, stagger: .5}, '<.5')

the animation now has the default value of the timeline

you can chain them together by just adding another .from after
just remember that you can override things

timelines also have absolute and relative delays from the previous item

if you just write a number after all of the parameters, it is absolute
if you use a carat, it references the animation in that direction
in this example, you go .5 seconds after the previous animation

you can easily reverse a timeline like so

const button = document.querySelector('.button')

**button.addEventListener('click', () => {timeline.reverse()})**