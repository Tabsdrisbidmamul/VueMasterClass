# Vue.js v3 course

## Section-1 Starter Project
This directory will contain a simple example of a Vue.js project, this is to get a feel how Vue interacts and works

## Section-2 Basics
Here we go over basic state management, callbacks and injecting the functionality into the HTML via Vue directives

* methods
   * these are ran every re-render cycle used mainly for event listening and sometimes data binding
* computed
   * ran only once, and are better suited for data binding
* watch
   * watches over values, and perform logic when the condition has been met for the watcher

## Section-3-Lists-Conditionals
This is where go over rendering a list of values dynamically to the DOM, we also go over the conditionals that Vue offers to render DOM elements based of some conditions 

## Section-4-Monster-Slaying-Game
Here we are wrapping all the skills we have gained so far to implement a basic click-and-wait game

## Section-5-Behind-the-scenes
This section is monstly theoretical, where we go into how the Vue framework actually renders, keeps track of data and its lifecycle and lifecycle hooks available to us

## Section-6-Components
Here we go over Vue's interpretation of components

## Section-7-Vue-CLI-and-More-Components
We install the Vue-CLI and prepare a proper dev server to create our Vue apps on

## Section-8-Component-Communiaction
We delve further into components, and learn how to pass data among components through props etc.

## Section-9-Advacned-Components
We look at slots, slot props and generalising the components even further. We also look at teleporting components, and dynamic components with the keep-alive element

## Section-10-Components-Project
This project is where we use all the features we have learned thus far and implement them into a simple learning resources web application

## Section-11-Forms
We have looked into how we can retrieve values from form inputs, and we also looked at how we can make custom form inputs and styling them as well.

## Section-12-HTTP-Requests
Here we go over to http requests using axis/ fetch methods. Nothing really Vue related but good to go refresh and go over

## Section-13-Routing
In this section we go over the vue-router, which lets us to navigate around the SPA, whilst also maintaining the integrity of the URL for the users viewing the web appliaction

## Section-14-Animations
We look at how we can animate various parts of the application with CSS animations

## Section-15-VueX
Vuex is vue's state management, like Redux state management in React, Vue offers its own out of the box state management, so we move global state away from one component into the state managed and controlled area within the vue app

## Section-16-Coaches-project
This project brings together all the concepts that have been learnt thus far, routing, vuex, animations, HTTP-requests, forms and components and vue app structure. Overall a nice project to help you understand how vue projects work. In this section we also deploy the project to a static web host provider like Firebase to we can access the project from this URL: [Find a Coach](https://vue-http-demo-d2475.web.app/coaches)

## Section-17-Composition-API
We go over Composition API, where we primarily using the Options API throughout all previous projects, this time round we go over the biggest feature in Vue 3

## Section-18-Mixins-Composition-Functions
In this section we go over how to resue logically related code across multiple components, for the options API its mixins and for the composition API its composition functionsS