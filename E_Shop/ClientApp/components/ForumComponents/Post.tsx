import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export class Post extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
      this.state = {
          comments: [],
          post: '',
          PostID: '',
          Text: ''
      };
      this.getPost = this.getPost.bind(this);
      this.getComments = this.getComments.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.deleteComment = this.deleteComment.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  getPost() {
    this.setState({
      postsLoader: true
    });
    const { id } = this.props.match.params;
    fetch(`http://localhost:56147/api/post/byid?id=${id}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          post: res,
          postsLoader: false
        });
          });
      console.log(this.state.post);
    }

    getComments() {
        this.setState({
            commentsLoader: true
        });
        const { id } = this.props.match.params;
        fetch(`http://localhost:56147/api/post/commentsbypost?id=${id}`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({
                    console: console.log(res),
                    comments: res,
                    commentsLoader: false
                });
            });
    }

    onChangeText = (e) => {
        var state: any = this.state;
        state.Text = e.target.value;
        this.setState(state);
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log(this.state.post.id)
        fetch('/api/post/rasytikomentara', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': "bearer " + window.localStorage.accessToken
            },
            body: JSON.stringify({
                Text: this.state.Text,
                PostID: this.state.post.id
            })

        }).then(res => res.text())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }


    componentWillMount() {
        this.getPost();
        this.getComments();
    }

    handleDelete(e) {
        e.preventDefault();
        fetch("/api/post/trinti", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization: "bearer " + window.localStorage.accessToken
            },
            body: JSON.stringify(this.state.post)
        })
            .then(res => res.text())
            .then(response => console.log("Success:", JSON.stringify(response)))
            .catch(error => console.error("Error:", error));
    }


    deleteComment(e) {
        e.preventDefault();
        fetch("/api/post/trintikomentara", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization: "bearer " + window.localStorage.accessToken
            },
            body: JSON.stringify(this.state.comments)
        })
            .then(res => res.text())
            .then(response => console.log("Success:", JSON.stringify(response)))
            .catch(error => console.error("Error:", error));
    }


  public render() {
    const post = this.state.post;
    if (!post) {
      return <div className="container" />;
      }
    const Text = this.state.Text;

    return (
      <div className="container">
        <div
          className="box box-success"
          style={{
            marginTop: "5%",
            width: "70%",
            borderWidth: 5,
            borderRadius: 20,
            padding: 5
          }}
        >
          <div className="box-header with-border">
            <h2>
              <i>
                <b>{post.title}</b>
              </i>
            </h2>
            <div className="box-tools pull-right">
              <span className="label label-primary">
                <a
                  href={`/tema/redaguoti/${post.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Redaguoti
                </a>
                </span>
                <span className="label label-danger" onClick={this.handleDelete}>Ištrinti</span>
            </div>
          </div>
          <div className="box-body" style={{ fontSize: 20 }}>
            {post.text}
          </div>
          <div
            className="box-footer"
            style={{
              textAlign: "right"
            }}
          >
            <i>
              {post.author.fullName} {post.publishingDate.slice(0, 10)}
            </i>
          </div>
        </div>
        {this.state.comments.map(dynamicData => (
                <div
                    className="box"
                    style={{
                        width: "50%",
                        borderWidth: 5,
                        borderRadius: 20,
                        padding: 5
                    }}
                    key={dynamicData.id}
                >
                    <div className="box-body" style={{ fontSize: 20 }}>
                        {dynamicData.text}
                    </div>
                    <div
                        className="box-footer"
                        style={{
                            textAlign: "right"
                        }}
                    >
                        <i>{dynamicData.author.fullName}<br />
                            {dynamicData.date.slice(0, 10)}</i>
                    </div>
                </div>
            ))}
        <div
          className="box box-info"
          style={{
            width: `50%`,
            borderWidth: 5,
            borderRadius: 20
          }}
        >
          <div className="box-header with-border" style={{ fontSize: 20 }}>
            <h3 className="box-title">Komentaro rašymo langas</h3>
          </div>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="box-body">
              <div className="form-group">
                <div className="col-lg-12">
                  <textarea
                    className="form-control"
                    rows={3}
                    style={{ fontSize: 20 }}
                    placeholder="Rašykite komenstarą ..."
                    id="turinys"
                    value={Text}
                    onChange={this.onChangeText}
                  />
                </div>
              </div>
              <div className="box-footer">
                <button
                  type="submit"
                  className="btn btn-info pull-right"
                  style={{ borderWidth: 5, borderRadius: 20 }}
                >
                  Išsaugoti
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
