const app = document.getElementById("app");
let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const temp = (
        <div>
            <h1>Toggle option</h1>
            <button onClick={toggle}>{visibility ? "Hide" : "Show"}</button>
            {
                visibility && (
                    <p>text displayed</p>
                )
            }
        </div>
    );
    ReactDOM.render(temp, app);
}

render();