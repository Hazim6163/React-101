
# Me 4 Life &nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp; My Code &nbsp;&nbsp;&nbsp;  |&nbsp;&nbsp;&nbsp; React   
<br>


### My Notes after 2 Projects . 
react is very easy to create front end web pages you need just to remember some Strategies Like : 
- user snnipt in the vs code is very important 
- create global vars to pass the data each componenets 
- use funcitons file in the Utils folder and stay updating the methods 
- use get class function and random id to create sections and so on 
- every small part can be component and it easy to controll 
- you need just to some practice and thats it
- use VS extenstion to add css class names random numbers and letters
- [functions file](https://gist.github.com/Mee4Life/886ddc502c81adde0db3f50da6cb2090)


### Imports :
```js
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { cWH } from './utils/functions'
```


### Extract Data from the Local Stroage Functions
```javascript
// extract local storage values functions
  const getIsDark = () => {
    return localStorage.getItem('isDark') &&
      localStorage.getItem('isDark') === "true"
  }
  const getFontSize = () => {
    let fSize = 20
    if (localStorage.getItem('fontSize'))
      fSize = parseInt(localStorage.getItem('fontSize'))
    return fSize
  }
  const getToken = () => {
    return localStorage.getItem('token')
  }
  const getUserCard = () => {
    return JSON.parse(localStorage.getItem("userCard"))
  }
```

### App State Expamle 
```javascript 
// setup app state
const [isDark, setIsDark] = useState(getIsDark())
const [token, setUserToken] = useState(getToken())
const [userCard, setUserCard] = useState(getUserCard())
const [vsNav, setVsNav] = useState(false)
const { height, width } = cWH();
```

### Get CSS Class Names Example : 
```javascript
const getCls = baseName => {
    let className = isDark ? baseName + ' ' + baseName + '-dark' : baseName + ' ' + baseName + '-light'
    width < 650 ? className = className + ' ' + baseName + '-' + 'sm' : className = className
    width <= 800 && width >= 650 ? className = className + ' ' + baseName + '-' + 'md' : className = className
    width > 800 ? className = className + ' ' + baseName + '-' + 'xl' : className = className
    return className
}
```

### Notes : 
please check the User Snnipt in the VS Code .


|        | description        |
| ------------- |:-------------:|
| os      | create state object  |
| oncl     | on click       |  
| exp     | export p       |  
| exex     | export ex       |  
|  getx    |   get x       |  
|  getp    |   get p      |  
|   getclass   |    create getCls()     |  
|   getwrapper   |  get wrapper div       |  
|   getContainer    | get containetr div         |  
|    getDiv |    get div    |    
|    spex |    spread out x object    |  







