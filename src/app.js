console.log('app is running');

//JSX - javascriot XML
var template = (
    <div>
        <h1>Demo Application</h1>
        <p>List of items</p>
        <ol>
            <li>Apple</li>
            <li>cider</li>
        </ol>
    </div>
);

var userName = "Amar";
var userAge = 26;
var userLocation = "chicago";
var template2 = (
    <div>
        <h1>{userName + "!"}</h1>
        <p>Age:{userAge}</p>
        <p>Location:{userLocation}</p>
    </div>

);


var user = {
    "name": "Amar",
    "age": 26,
    "location": "chicago"
}
function getLocation(location) {
    if (location)
        return location;
    return 'Unknown';
}
var template3 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age >= 18 && <p>Age:{user.age}</p>}

        <p>Location:{getLocation(user.location)}</p>
    </div>

);

var book = {
    title: "BookA",
    subtitle: "subtitle",
    options: ["one", "two"]
};

var template4 = (
    <div>
        <h1>Title:{book.title ? book.title : "Unknown title"}</h1>
        <h4>Subtitle:{book.subtitle ? book.subtitle : "No subtitle"}</h4>
        <p>Options:{book.options.length > 0 ? "options available" : "No options"}</p>
    </div>

);

//let count = 0;
//onst plus=()=>{console.log("sfds")};

//const template5=(
 //   <div>
   //     <h2>Count: {count}</h2>
   //     <button id="plus" className="button" onClick={plus}>+1</button>
   //     <button id="minus" className="button" onClick={()=>{count-1}}>-1</button>
    //    <button id="reset" className="button" onClick={()=>{count=0}}>reset</button>
    //</div>
//);
//var appRoot = document.getElementById("app");

//ReactDOM.render(template5, appRoot);

//data binding
let count = 0;
var appRoot = document.getElementById("app");
const plus=()=>{count++;render()};


const template5=(
    <div>
        <h2>Count: {count}</h2>
        <button id="plus" className="button" onClick={plus}>+1</button>
        <button id="minus" className="button" onClick={()=>{count-1}}>-1</button>
        <button id="reset" className="button" onClick={()=>{count=0}}>reset</button>
    </div>
);


ReactDOM.render(template5, appRoot);


