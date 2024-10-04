'use strict'
    const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
    
    
});


//switches the body element to dark theme class 
//makes sure change to dark mode occurs
//makes sure change to light mode occurs
//console message will show up in web browser developer tool and can help see the result of ypour code



//allows you to toggle between dark and light modes
//event handler and listener for clicking on the button
//add interactivity with JavaScript after creating the structure and styling of the webpage
//define behavior or event for what happens when a user selects a button, pop up window, toggle between dark and light themes


