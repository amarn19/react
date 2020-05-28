"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h4",
            null,
            props.subtitle
        )
    );
};
Header.defaultProps = {
    title: "New Demo Application"
};
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h4>{this.props.subtitle}</h4>
//             </div>
//         );
//     }
// }
var Alert = function Alert(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasposts, className: "button", onClick: props.popup },
            "Late post"
        )
    );
};
// class Alert extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button disabled={!this.props.hasposts} className="button" onClick={this.props.popup}>Latest post</button>
//             </div>
//         );
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { className: "button", onClick: props.resetposts },
            " Reset"
        ),
        props.options.map(function (opt) {
            return React.createElement(Option, { key: opt, opttext: opt });
        })
    );
};
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button className="button" onClick={this.props.resetposts}> Reset</button>
//                 {this.props.options.map((opt) => <Option key={opt} opttext={opt} />)}
//             </div>
//         );
//     }
// }
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.opttext
    );
};
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.opttext}
//             </div>
//         );
//     }
// }

var Submission = function (_React$Component) {
    _inherits(Submission, _React$Component);

    function Submission(props) {
        _classCallCheck(this, Submission);

        var _this = _possibleConstructorReturn(this, (Submission.__proto__ || Object.getPrototypeOf(Submission)).call(this, props));

        _this.onformSubmit = _this.onformSubmit.bind(_this);
        _this.state = {
            error: undefined
        };
        return _this;
    }

    _createClass(Submission, [{
        key: "onformSubmit",
        value: function onformSubmit(e) {
            e.preventDefault();
            var post = e.target.elements.options.value.trim();
            console.log("jsadkjsad");
            if (post) {
                e.target.elements.options.value = "";
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
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.onformSubmit },
                    React.createElement("input", { type: "text", name: "options" }),
                    React.createElement(
                        "button",
                        { className: "button" },
                        "Submit"
                    )
                )
            );
        }
    }]);

    return Submission;
}(React.Component);

var RootComponent = function (_React$Component2) {
    _inherits(RootComponent, _React$Component2);

    function RootComponent(props) {
        _classCallCheck(this, RootComponent);

        var _this2 = _possibleConstructorReturn(this, (RootComponent.__proto__ || Object.getPrototypeOf(RootComponent)).call(this, props));

        _this2.reset = _this2.reset.bind(_this2);
        _this2.popup = _this2.popup.bind(_this2);
        _this2.addPosts = _this2.addPosts.bind(_this2);
        _this2.state = {
            title: "Demo React Application",
            subtitle: "This is a blog.you can post and read posts",
            blog: {
                posts: ["This is test post", "sadgdsahsdgh"]
            }
        };
        return _this2;
    }

    _createClass(RootComponent, [{
        key: "popup",
        value: function popup() {

            alert('Latest post: ' + this.state.blog.posts[this.state.blog.posts.length - 1]);
        }
    }, {
        key: "reset",
        value: function reset() {
            this.setState(function () {
                return {
                    blog: {
                        posts: []
                    }
                };
            });
        }
    }, {
        key: "addPosts",
        value: function addPosts(post) {
            this.setState(function (prevState) {
                prevState.blog.posts.push(post);
                return prevState;
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: this.state.subtitle }),
                React.createElement(Alert, { hasposts: this.state.blog.posts.length > 0, popup: this.popup }),
                React.createElement(Options, { options: this.state.blog.posts, resetposts: this.reset }),
                React.createElement(Submission, { addPost: this.addPosts })
            );
        }
    }]);

    return RootComponent;
}(React.Component);

ReactDOM.render(React.createElement(RootComponent, null), document.getElementById('app'));
