//data binding
let count = 0;
var appRoot = document.getElementById("app");
const plus=()=>{count++;render()};

const render=()=>{
const template5=(
    <div>
        <h2>Count: {count}</h2>
        <button id="plus" className="button" onClick={plus}>+1</button>
        <button id="minus" className="button" onClick={()=>{count-1}}>-1</button>
        <button id="reset" className="button" onClick={()=>{count=0}}>reset</button>
    </div>
);


ReactDOM.render(template5, appRoot);
}

render();