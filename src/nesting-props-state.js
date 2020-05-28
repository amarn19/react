


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
                <button disabled={!this.props.hasposts} className="button" onClick={this.props.popup}>Latest post</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button className="button" onClick={this.props.resetposts}> Reset</button>
                {this.props.options.map((opt) => <Option key={opt} opttext={opt} />)}
            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.opttext}
            </div>
        );
    }
}

class Submission extends React.Component {
    constructor(props){
        super(props);
        this.onformSubmit=this.onformSubmit.bind(this);
        this.state={
            error:undefined
        }
    }
    onformSubmit(e) {
        e.preventDefault();
        const post = e.target.elements.options.value.trim();
        console.log("jsadkjsad");
        if (post) {
           e.target.elements.options.value="";
           this.props.addPost(post);
        }
        // else if(this.)
        // else
        // {
        //     this.setState(()=>{
        //         return {
        //             error: "Enter a valid value"};
        //     })
        // }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onformSubmit}>
                    <input type="text" name="options"></input>
                    <button className="button">Submit</button>
                </form>
      
            </div>
        );
    }
}

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.popup = this.popup.bind(this);
        this.addPosts = this.addPosts.bind(this);
        this.state = {
            title: "Demo React Application",
            subtitle: "This is a blog.you can post and read posts",
            blog: {
                posts: ["This is test post", "sadgdsahsdgh"]
            }
        }
    }

    popup() {

        alert('Latest post: ' + this.state.blog.posts[this.state.blog.posts.length - 1]);
    }
    reset() {
        this.setState(() => {
            return {
                blog: {
                    posts: []
                }
            }
        });
    }
    addPosts(post) {
       this.setState((prevState)=>{
        prevState.blog.posts.push(post)
        return prevState;
       });
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Alert hasposts={this.state.blog.posts.length > 0} popup={this.popup} />
                <Options options={this.state.blog.posts} resetposts={this.reset} />
                <Submission addPost={this.addPosts} />
            </div>
        );
    }
}



ReactDOM.render(<RootComponent />, document.getElementById('app'));

