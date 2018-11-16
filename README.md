# Once Daily

A new website every day to keep my skills sharp, test new concepts, and learn new things.

icons8 - Vector Icons

**Some websites are refactored into personal projects - deployment will be to the sprint here, the new repo will be listed if relevant**

#### !!! All Deployments are in 1920x1080 and non-reactive - unless otherwise defined !!!

**_A website a day keeps the errors away._**

# Day 1 - October 25, 2018

Day 1 of "Once Daily" - I found a website that I wanted to revamp, so I gave it a quick personalized spin. 2 hours of fingers on code brought this beauty to life. The main inspiration was trying to create something that doesn't use routes to shift between pages - much like how I do with state based navigations in React - through DOM manipulation.

**Used:** HTML, LESS, JQuery

**[Deployment](https://stoic-cray-5537db.netlify.com/)**

# Day 2 - October 26, 2018

Day 2 I created a portfolio Website for a good friend who just so happens to be a very talented video editor! This project was mainly just an attempt at embedding YouTube, which turned out to be pretty
simple, so I ended up just toying with some hover animations in the navigation - they turned out
fantastic.

**Used:** HTML, LESS

**[Deployment](https://ecstatic-bhabha-30485b.netlify.com/)**

# Day 3 - October 27, 2018

Today I created a simple website for a friend - my attempt was to utilize window scroll binds to run animations for me at different scrollY positions. This project features a fully-implemented pull from the Twitch.tv API, where it dynamically parses the top 4 clips of Shen's stream to the page. All done in vanilla JavaScript and HTML!

It also includes the wonderful Particle.js, as well as a live embeded video feed directly from his stream whenever he goes live.

**Used:** HTML, LESS, JQuery

**[Deployment](https://upbeat-hawking-b6bbf8.netlify.com/)**

# Day 4 - October 28, 2018

This project was actually the brain child of a good friend when we were going to school together. The idea is basically a website that allows the user to look-up, rate, and otherwise identify the players in the Looking For Group section of World of Warcraft for PvP. Current tools exist for PvE, but nothing really exists in the PvP market - so you're really left to the mercy of chance.

I attempted implementation of the Blizzard API on this project - however with their secruity features I was unable to crack into it with my allotted time for this sprint. I was able to grab the information I needed via Postman requests, but full implementation of the functionality will likely be done via React in the future.

**Used:** HTML, LESS, JQuery

**[Deployment](https://cocky-almeida-48e403.netlify.com/)**

**New Repo**

**[Repository](https://github.com/Serrowxd/IHLFG)**

# Day 5 - October 29, 2018:

Today's project is essentially a holster that displays my projects from the "Once Daily" github repository. The main feature of this project (not yet implemnented) is a light-dark theme transition!

**Used:** HTML, LESS, JQuery

**[Deployment](https://ecstatic-goodall-f7d3f8.netlify.com/)**

In addition to todays projecct, I was also able to completely refactor October 28th's project into a React repository that will be maintained here forwards.

**[Repository](https://github.com/Serrowxd/IHLFG)**

The exciting bits to this project are are hand-built login and signup modals complete with transition animations and implemented `onChange` and `onSubmit` functionality. Future work to the project will include things like `query strings`, full redux architecture, and dynamic search routing to a full back-end server.

Looking at possibly deploying the project to Firebase and having the server-side code managed by it, then doing a single 24hr pull to the World of Warcraft database to be implemented into our own, where we will do all our search functionality.

# Day 6 - October 30, 2018:

This project was a bit more of a rendition of a previous idea I had. I sat down and attempted to work through a few different ideas that were in my mind, design wise, for the Sinforsaken Guild Website (an old project) and decided on the current iteration. Lots of white space, very minimal, and some exciting transition animations to boot. The trick was working with rendering and unrendering, similar to React, but not mounting or unmounting the components as you would with normal State navigations, but instead simply hiding them and keeping the same styling across all the navigation links.

I was able to achieve this with JQuery by adding/removing a pair of class names that are designed to change the visiblity and opacity of the sections they are attached to, which in turn transitions the content of these sections as well. Makes for a very interesting navigation technique without using any routes!

**[Deployment](https://romantic-mclean-a61458.netlify.com/)**

# Day 7 - November 10, 2018:

After being unable to work on the project for an extended period of time due to work, I'm returning to it on the weekends as a side-project of sorts. Updates will be forthcoming!

# Day 8 - November 15, 2018:

Today's project was a slight dip back into the world of JQuery. My inspiration was my Grandmother, who just recently became a fully-certified Ceramics instructor! I was playing with some concepts that involved an `onHover` effect when mousing over the different images. They were to grow and shrink in accordance to the alloted space, without breaking the thumbnail size. I struggled a bit with a concept that I liked in order to achieve this.

I learned a valuable lesson as well - save lots, commit often. I lost the entire day's worth of work due to a random power outage that took me offline, and I was so sucked into the project that I forgot to save, or even commit my code.

Lesson learned! Will return to this project at a later date.
