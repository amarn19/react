const book = {
    option: ['one', 'two']
};
const onformSubmit = (e) => {
    e.preventDefault();
    //console.log("form submitted");
    const option = e.target.elements.options.value;
    if (option) {
        console.log(option);
        book.option.push(option);
        e.target.elements.options.value = '';
        render();
    }
}
const app = document.getElementById("app");

const reset = () => {
    book.option = [];
    render();
}

const render = () => {
    const temp = (
        <div>
            <ol>
                {/*list of options*/}
                {
                    book.option.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onformSubmit}>
                <input type="text" name="options"></input>
                <button className="button">Submit</button>
            </form>
            <button className="button" onClick={reset}> Reset</button>
        </div>
    );
    ReactDOM.render(temp, app);
}

render();


