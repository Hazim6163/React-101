
# Me 4 Life &nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp; My Code &nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp; React   
<br>

[Branches Explain](#complete-react-tutorial)

## What need to know before React: 
- [x] HTML
- [x] CSS
- [x] JS
---
<br>


## Docs 101 : 
1. [Create React App and Templates](#create-react-app-)
   - [run react app](#run-react-app-)
   - [Hygen Template](#hygen-template)

2. [Notes about React](#my-notes-about-react)
   - [Fetching Data From the Web](#fetching-data-to-know)
   - [React Router](#react-router-)

3. [To Know 101](#todo-101-)
4. [Functions inside Props ](#passing-function-throw-components)
5. [Branches explain](#complete-react-tutorial)
   - [Getting-Started](#branch-level-1-explain-)
   - [React-Router](#branch-level-2-explain)
   - [Server Requests](#branch-level-3-fetching-data)

---
<br>

## Create React App : 

### Hygen Template
please check it [Link](https://github.com/Hazim6163/Generators#generate-starter-react-app)

### Default Create React App:
<pre>
npm install -g create react app
</pre>
and then in the console : 
<pre>
npx create-react-app myFirstReactApp
</pre>

### Run React APP : 

<pre>
cd myFirstReactApp
npm start
</pre>



---
<br>

# My Notes About React

## ⚠ Warnings:
### missed Commit 
Level 3 Branch Fetching and Listing the  commit is pushed in the Level 2 Branch last Commit.

<br />

## Fetching data to know
- useEffect Hook 
- useState Hook 
- custom Hook 
the Hooks above is in the Net Ninjas [YouTube ](https://www.youtube.com/watch?v=gv9ugDJ1ynU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=14) Tutorial from the Lesson 14 to 20 short Videos don't cate that is really good. 

<br />

## React Router : 
``` bash
## change version when use this in future
npm install react-router-dom@5
```
then import in App : 
``` js
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
```
1. Wrap App in Router 
2. Wrap the Pages in Switch 
3. Wrap Component with Rout and **exact path** see The Net Ninja's when need Help check that: Router / Exact Path Ex. [#YouTube](https://www.youtube.com/watch?v=EmUa_tcSM-k&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=22) [#GitHub](https://github.com/iamshaunjp/Complete-React-Tutorial/tree/lesson-22)
4. then you can use Link when you need to 
  ``` js
  import {Link} from 'react-router-dom'
  <Link to="/">Home</Link>
  ```
   
---
<br>

## TODO 101 : 
For each bottoms Ideas Branch to cover the Idea and will be Ex for it .

- [x] Render  
- [x] State 
- [x] Props 
- [x] Events 
- [x] Async in Component 
- [x] React Router
- [x] useState hook
- [x] Forms in React 
- [x] Styling using CSS
- [x] Component life cycle
- [ ] Clean up after fetch check the Net Ninjas lesson [#24](https://www.youtube.com/watch?v=aKOQtGLT-Yk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=24) 

---
<br />

# Complete React Tutorial: 

## branch Level-1 explain :
- [x] Generate Template from the Hygen.
- [x] Create Component.
- [x] Import and use it in the App Component.
- [x] Using the State inside the Component.
- [x] Passing Props to the Component. 

### passing function throw components
```js
const function = (params) => {
  console.log(params[0])
}
<Name name="Muhammad" functionName={function}>
// in the nested : 
<button onClick={() => {function(params)}}>
```

note use it as **arrow** function in the Nested component

---
<br>

## Branch Level-2 explain:
- [x] Using React Router 
- [x] Pages: Home, Contact, About
  we have explain it in the read me please [check](#react-router-)
  That was Awesome !! .  
---
<br>

## Branch Level 3 Fetching Data:
- Objects Map to List in React  
- Setting useEffect Function.
- Fetch inside JS File instead of using it directly from Component it Self to reuse Whenever We want that.
- Using Then Keyword.  
- Handle Errors and throw it.

### Important:  Map Function to List: 
Note the Brackets right there it's deferent on the normal JS
```js 
{orgs.map(org => (
  <div key={org.id}>
      {org.name}
  </div>
))}
```
when using JSON Sever be sure to run it on other Port of the React App otherwise will be in Trouble
```bach
npx json-server --watch  myData.json --port 8000 
```
---
<br>


