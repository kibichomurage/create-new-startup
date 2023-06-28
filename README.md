[Follow on Twitter](https://twitter.com/murage_kibicho) \
[Join Reddit Community](https://www.reddit.com/r/PivotJS/) 


A React framework for startup founders to <ins>test ideas super fast</ins> while writing <ins>reusable code for their next pivot.</ins>  
# Get Started Immediately
```
npx create-new-startup YourStartupName
```
**Example**
```
npx create-new-startup PivotJs
```
# Target User
* Your <ins>#1 goal</ins> is to acquire **Paying Customers**. You care little  about SSR, CSR or RSC lol.  
* You aim to write <ins>**code you can share**</ins> across projects. 
* You've learnt that **adding more** features **won't bring in** users. <ins>Talking to customers</ins> and <ins>analytics</ins> will.
* You're an indie-hacker who can learn/knows Express, React and Redux.

##### Table of Contents  
[Framework Features](#features)  
[Style Guide](#styles) \
[Redux Cheatsheet](#rtk-cheatsheet) \
[RtkQuery Cheatsheet](#rtkquery-cheatsheet)


<a name="features"/>

## Framework Features
*	#### Frontend 
    * Redux State Management with custom code completion in VScode
    * RTKQuery API code generators and end-point injectors
    * Customizable webpack.config 
    * Built-in analytics to detect user activity

* #### Backend 
    * Express backend
    * Optional MongoDB bindings
    * Plugin ecosystem
    * Server-side rendering

<a name="styles"/>

## Style Guide
#### Disclaimer: 

You **MUST** follow a design pattern to make your code reusable. Don't worry about OOP or functional programming. This guide defines a **Directory Structure** for reusable components.

#### Goal: 

We aim to ensure entire routes can be reused. Routes are pages. 

Every page shares a folder with its components, RTKQuery API calls and Redux states. 

#### Frontend Directory Tree
* Pages 
	- **ChosenName**Page Folder ie. "HomePage, LandingPage..." 
	    - ChosenName.jsx - <ins>UI logic</ins> and <ins>declare nested routes</ins>(if needed)
	    - Components - Stuff like sidebars, navs, forms...
	    - SubPages Folder
	        - Write code for nested routes **BUT** maintain state in **ChosenName**Reducer.js and define endpoints in **ChosenName**Endpoints.js defined below.
	    - Redux Folder
	        - **ChosenName**Reducer.js - Redux state management
	        - **ChosenName**Endpoints.js - RTKQuery API calls 
	  
* Redux Folder
	- ReduxStore.js - configure Redux store.
	- ReduxApi.js - **ONLY** place you write `createAPI`. Endpoints should be empty
* App.js
	- Main routes ie. "home...landing...store...etc" defined here
* index.js
    - Redux Provider and CSS variables **MUST** be defined here

#### Backend Directory Tree
* WIP

<a name="rtk-cheatsheet"/>

## Redux Cheatsheet
* Redux is mostly boiler plate. This framework offers code code completion in VScode.
1. **pvtSlice** - Generates a Redux slice and and its exports
2. **pvtBool** - Generates a Boolean initial state variable and true/false reducers
3. **pvtList** - Generates a List initial state variable and add/remove reducers
4. **pvtVar** - Generates a general initial state variable. Default is string but can be anything you want
5. **pvtAl** - Generates a functional component with imports for basic analytics

<a name="rtkquery-cheatsheet"/>

## RTKQuery Cheatsheet
1. **pvtApi** - Generates an API slice and exports. Only need to run once in a project.
2. **pvtInject** - Generates an Endpoint Injector for ReduxApi.js
3. **pvtPost** - Generates a POST mutation and its exports.
4. **pvtGet** - Generates a GET query and its exports.

	
   

## Milestones
1. Test on Windows and Mac.
2. Get Listed on [Styled-Components website](https://styled-components.com/showcase?item=miui)
3. Get listed by the React dev team as a [production-grade](https://react.dev/learn/start-a-new-react-project) framework.


## Author
Murage Kibicho \
Branford College \
New Haven, Connecticut 

[Follow on Twitter](https://twitter.com/murage_kibicho) \
[Join Reddit Community](https://www.reddit.com/r/PivotJS/)
