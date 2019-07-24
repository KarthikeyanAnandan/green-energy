// DATA RESOURCES
let dataResorce = [
    {
        heading: "Solar Power",
        bodyText: "Solar energy is the cheapest and one of the most effecient forms of energy. It is easier to to install and takes up the least ampont of space. also can be installed and used anywhere and capable of producing more energy depending upon amount of solar panals are installed.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "./image/page1.jpg"
    },
    {
        heading: "Windmill Power",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "./image/page2.jpg"
    },
    {
        heading: "Energy Effeciency",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgUrl: "./image/page3.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 
 $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;

// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // fetch the clicked button
    let clickedBtn = ev.target;
    
    // read the text inside the button
    let btnText = clickedBtn.innerText;
    
    // print the text of the clicked button
    //console.log(btnText);
    
    if (btnText === "Page 1") {
        $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "Page 2") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}</h3>
                                <img src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else if (btnText === "Page 3") {
        $content.innerHTML = `<h3>${dataResorce[2].heading}</h3>
                                <img src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }
    
}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}