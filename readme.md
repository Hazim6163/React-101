
# Me 4 Life &nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp; My Code &nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp; React   
<br>

## Level-1 Plan
- [x] Generate Template from the Hygen.
- [x] Create Component.
- [x] Import and use it in the App Component.
4. Using the State inside the Component.
5. Passing Props to the Component. 
---
<br>

## Docs 101 : 
1. [Create React App and Templates](#create-react-app-)
   - [run react app](#run-react-app-)
   - [Hygen Template](#hygen-template)

2. [Notes about React](#my-notes-about-react)
   - [Fetching Data From the Web](#fetching-data-to-know)
   - [React Router](#react-router-)

3. [My TODO 101](#my-todo-101-)

---
<br>

## What need to know before React: 
- [x] HTML
- [x] CSS
- [x] JS
---
<br>

## Create React App : 
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

### Hygen Template
please check it [Link](https://github.com/Hazim6163/Generators#generate-starter-react-app)

---
<br>

## My Notes About React
### Fetching data to know
- useEffect Hook 
- useState Hook 
- custom Hook 
the Hooks above is in the Net Ninjas [YouTube ](https://www.youtube.com/watch?v=gv9ugDJ1ynU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=14) Tutorial from the Lesson 14 to 20 short Videos don't cate that is really good. 

### React Router : 
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

## My TODO 101 : 
For each bottoms Ideas Branch to cover the Idea and will be Ex for it .

- [x] Render  
- [x] State 

- [x] Props 

- [x] Events 

- [ ] Async in Component 

- [x] React Router

- [x] useState hook

- [ ] Forms in React 

- [x] Styling using CSS

- [ ] How to use Sass in React

- [ ] Component life cycle

- [ ] Create Component class Python Generator.

- [ ] Clean up after fetch check the Net Ninjas lesson [#24](https://www.youtube.com/watch?v=aKOQtGLT-Yk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=24) 

