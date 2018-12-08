import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export class Pc extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { posts: [] };
    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    this.setState({
      postsLoader: true
    });
      fetch("http://localhost:56147/api/post/bycategory?id=0")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          console: console.log(res),
          posts: res,
          postsLoader: false
        });
      });
  }

  componentDidMount() {
    this.getPosts();
  }
  public render() {
    return (
      <div className="container">
        <div
          className="box"
          style={{
            marginTop: "2%"
          }}
        >
          <div className="box-header">
            <h3 className="box-title">Pc žaidimų forumas</h3>
          </div>
          <div className="box-body">
            <div
              id="example1_wrapper"
              className="dataTables_wrapper form-inline dt-bootstrap"
            >
              <div className="row">
                <div className="col-sm-2">
                  <button type="button" className="btn btn-success">
                    <a
                      href="/kurti"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Kurti naują temą
                    </a>
                  </button>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      id="example1"
                      className="table table-bordered table-striped dataTable"
                      role="grid"
                      aria-describedby="example1_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="example1"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Rendering engine: activate to sort column descending"
                          >
                            Temos pavadinimas
                          </th>
                          <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="example1"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Rendering engine: activate to sort column descending"
                          >
                            Redagavimas
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example1"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Browser: activate to sort column ascending"
                          >
                            Autorius
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="example1"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Platform(s): activate to sort column ascending"
                          >
                            Įkėlimo data
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.posts.map(dynamicData => (
                          <tr role="row" className="odd" key={dynamicData.id}>
                            <td style={{ width: "50%" }}>
                              <div className="sorting_1">
                                <Link to={`/tema/${dynamicData.id}`}>{dynamicData.title}</Link>
                              </div>
                            </td>
                            <td style={{ width: "10%" }}>
                            <div>
                                <button type="button" className="btn btn-block btn-warning"><a href={`/tema/redaguoti/${dynamicData.id}`}>Redaguoti</a></button>
                            </div>
                            </td>
                            <td>{dynamicData.author.fullName}</td>
                            <td>{dynamicData.publishingDate.slice(0, 10)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-success btn-lg">
          <a href="/forum" style={{ color: "white", textDecoration: "none" }}>
            Atgal
          </a>
        </button>
      </div>
    );
  }
}
