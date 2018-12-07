import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export class Post extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { post: "" };
    this.getPost = this.getPost.bind(this);
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
  }

  componentWillMount() {
    this.getPost();
  }

  public render() {
    const post = this.state.post;
    if (!post) {
      return <div className="container" />;
    }
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
                  href="/tema/redaguoti"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Redaguoti
                </a>
              </span>
              <span className="label label-warning">Užrakinti</span>
              <span className="label label-danger">Ištrinti</span>
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

        <div
          className="box"
          style={{
            width: "50%",
            borderWidth: 5,
            borderRadius: 20,
            padding: 5
          }}
        >
          <div className="box-header">
            <div className="box-tools pull-right">
              <span className="label label-primary">
                <a
                  href="/komentaras/redaguoti"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Readaguoti
                </a>
              </span>
              <span className="label label-danger">Ištrinti</span>
            </div>
          </div>
          <div className="box-body" style={{ fontSize: 20 }}>
            Susitaisyk
          </div>
          <div
            className="box-footer"
            style={{
              textAlign: "right"
            }}
          >
            <i>Marius 2018-12-04</i>
          </div>
        </div>
        <div
          className="box"
          style={{
            width: "50%",
            borderWidth: 5,
            borderRadius: 20,
            padding: 5
          }}
        >
          <div className="box-header">
            <div className="box-tools pull-right">
              <span className="label label-primary">
                <a
                  href="/komentaras/redaguoti"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Readaguoti
                </a>
              </span>
              <span className="label label-danger">Ištrinti</span>
            </div>
          </div>
          <div className="box-body" style={{ fontSize: 20 }}>
            Nzn
          </div>
          <div
            className="box-footer"
            style={{
              textAlign: "right"
            }}
          >
            <i>Marius 2018-12-04</i>
          </div>
        </div>

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
          <form className="form-horizontal">
            <div className="box-body">
              <div className="form-group">
                <div className="col-lg-12">
                  <textarea
                    className="form-control"
                    rows={3}
                    style={{ fontSize: 20 }}
                    placeholder="Rašykite komenstarą ..."
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
