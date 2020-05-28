const blog = {
    posts: ["this is first post"]
}

const onformSubmit = (e) => {
    e.preventDefault();
    const post = e.target.elements.options.value;
    if (post) {
        console.log(post);
        blog.posts.push(post);
        console.log(blog.posts.length);
        e.target.elements.options.value = '';
        renderfinal();
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Demo Application</h1>
                <h4>Blog posting</h4>
            </div>
        );
    }
}
class Alert extends React.Component {
    render() {
        return (
            <div>
                <button className="button">Latest post</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                
                <ol>
                    {/*list of options*/}
                    {
                        blog.posts.map((post) => {
                            return <li key={post}>{post}</li>;
                        })
                    }
                </ol>
            </div>
        );
    }
}
class Submission extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={onformSubmit}>
                    <input type="text" name="options"></input>
                    <button className="button">Submit</button>
                </form>
            </div>
        );
    }
}

const renderfinal = () => {
    const jsx = (
        <div>
            <Header />
            <Alert />
            <Options />
            <Submission />
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
}
renderfinal();
