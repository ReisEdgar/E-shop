import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export class EditPost extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Text: "",
      Category: "",
      Edited: false,
      EditedDate: "",
      ForumID: "",
      post: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getPost = this.getPost.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  getDate() {
    var today = new Date().toISOString().slice(0, 10);
    return today;
  }

  onChangeTitle = e => {
    this.setState({ Title: e.target.value });
  };

  onChangeText = e => {
    this.setState({ Text: e.target.value });
  };

  onChangeCategory = e => {
    var state: any = this.state;
    state.Category = e.target.value;
    this.setState(state);
  };

  handleSubmit(e) {
    e.preventDefault();

    var data = {
      Id: this.state.post.id,
      Text: this.state.Text,
      Title: this.state.Title,
      Category: this.state.Category,
      Edited: true,
      EditedDate: this.getDate()
    };
    console.log(data);
    fetch("/api/post/keisti", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: "bearer " + window.localStorage.accessToken
      },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
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
          Title: res.title,
          Text: res.text,
          Category: res.category,
          postsLoader: false
        });
      });
  }

  componentWillMount() {
    this.getPost();
  }

  public render() {
    const post = this.state.post;
    if (!post) return <div />;
    const { Title, Text, Category } = this.state.post;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
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
                  <b>
                    <label>Tema</label>
                    <input
                      style={{ fontSize: 20 }}
                      className="form-control"
                      type="text"
                      id="tema"
                      placeholder="Įveskite temos pavadinimą ..."
                      defaultValue={post.title}
                      value={Title}
                      onChange={this.onChangeTitle}
                    />
                  </b>
                </i>
              </h2>
            </div>
            <div className="box-body" style={{ fontSize: 20 }}>
              <div className="form-group">
                <label>Turinys</label>
                <textarea
                  className="form-control"
                  rows={3}
                  style={{ fontSize: 15 }}
                  placeholder="Rašykite komenstarą ..."
                  id="turinys"
                  defaultValue={post.text}
                  value={Text}
                  onChange={this.onChangeText}
                />
              </div>
              <div className="form-group">
                <label>Pasirinkti kategoriją</label>
                <select
                  className="form-control"
                  id="kategorija"
                  defaultValue={post.category}
                  onChange={this.onChangeCategory}
                >
                  <option value="0">PC žaidimai</option>
                  <option value="1">Konsolių žaidimai</option>
                  <option value="2">Įranga</option>
                  <option value="3">Kita</option>
                </select>
              </div>
              <div
                className="box-footer"
                style={{
                  textAlign: "right"
                }}
              >
                <i>
                  Marius 2018-12-04
                  <br />
                </i>
                <i> Redaguota Admin 2018-12-05</i>
              </div>
              <button
                type="submit"
                className="btn btn-block btn-success btn-lg"
              >
                Išsaugoti pakeitimus
              </button>
            </div>
          </div>
        </form>
        <button type="button" className="btn btn-success btn-lg">
          <a href="/forum" style={{ color: "white", textDecoration: "none" }}>
            Atgal
          </a>
        </button>
      </div>
    );
  }
}
