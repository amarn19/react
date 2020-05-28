const title="Demo React Application";
const subtitle="This is a blog.you can post and read posts";

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

const reset = () => {
    blog.posts = [];
    renderfinal();
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
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
                 <button className="button" onClick={reset}> Reset</button>
                <Option/>
            </div>
        );
    }
}
class Option extends React.Component {
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

class RootComponent extends React.Component {
    render() {
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Alert />
                <Options />
                <Submission />
            </div>
        );
    }
}




const renderfinal = () => {
    ReactDOM.render(<RootComponent />, document.getElementById('app'));
}
renderfinal();
