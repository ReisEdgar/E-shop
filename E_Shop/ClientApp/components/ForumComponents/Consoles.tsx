import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export class Consoles extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {

        return <div className="container">

            <div className="box" style={{
                marginTop: '2%'
            }}>
                <div className="box-header">
                    <h3 className="box-title">Konsolių žaidimų forumas</h3>
                </div>
                <div className="box-body">
                    <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                        <div className="row">
                            <div className="col-sm-10">
                                <div className="dataTables_length" id="example1_length">
                                    <label>Rodyti <select name="example1_length" aria-controls="example1" className="form-control input-sm">
                                        <option value="10">
                                            10
                                            </option>
                                        <option value="25">
                                            25
                                            </option>
                                        <option value="50">
                                            50
                                            </option>
                                        <option value="100">
                                            100
                                            </option>
                                    </select>
                                        temų per puslapį
                                        </label>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <button type="button" className="btn btn-success"><a href="/kurti" style={{ color: 'white', textDecoration: 'none' }}>Kurti naują temą</a></button>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                                                    Temos pavadinimas
                                                    </th>
                                                <th className="sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                                                    Redagavimas
                                                    </th>
                                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">
                                                    Autorius
                                                    </th>
                                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">
                                                    Įkėlimo data
                                                    </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td style={{ width: '50%' }}>
                                                    <div className="sorting_1">
                                                        <Link to='/tema'>Neveikia ps4</Link>
                                                    </div>
                                                </td>
                                                <td style={{ width: '10%' }}>
                                                    <div className="btn-group-xs closed">
                                                        <button type="button" className="btn btn-default">Redaguoti</button>
                                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                            <span className="caret"></span>
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="/tema/redaguoti">Redaguoti</a></li>
                                                            <li><a href="/tema/redaguoti">Užrakinti</a></li>
                                                            <li><a href="/tema/redaguoti">Trinti</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Marius</td>
                                                <td>2018-12-04</td>
                                            </tr><tr role="row" className="even">
                                                <td style={{ width: '50%' }}>
                                                    <div className="sorting_1">
                                                        <Link to='/tema'>Neveikia ps4</Link>
                                                    </div>
                                                </td>
                                                <td style={{ width: '10%' }}>
                                                    <div className="btn-group-xs closed">
                                                        <button type="button" className="btn btn-default">Redaguoti</button>
                                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                            <span className="caret"></span>
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="/tema/redaguoti">Redaguoti</a></li>
                                                            <li><a href="/tema/redaguoti">Užrakinti</a></li>
                                                            <li><a href="/tema/redaguoti">Trinti</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Marius</td>
                                                <td>2018-12-04</td>
                                            </tr><tr role="row" className="odd">
                                                <td style={{ width: '50%' }}>
                                                    <div className="sorting_1">
                                                        <Link to='/tema'>Neveikia ps4</Link>
                                                    </div>
                                                </td>
                                                <td style={{ width: '10%' }}>
                                                    <div className="btn-group-xs closed">
                                                        <button type="button" className="btn btn-default">Redaguoti</button>
                                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                            <span className="caret"></span>
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="/tema/redaguoti">Redaguoti</a></li>
                                                            <li><a href="/tema/redaguoti">Užrakinti</a></li>
                                                            <li><a href="/tema/redaguoti">Trinti</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Marius</td>
                                                <td>2018-12-04</td>
                                            </tr><tr role="row" className="even">
                                                <td style={{ width: '50%' }}>
                                                    <div className="sorting_1">
                                                        <Link to='/tema'>Neveikia ps4</Link>
                                                    </div>
                                                </td>
                                                <td style={{ width: '10%' }}>
                                                    <div className="btn-group-xs closed">
                                                        <button type="button" className="btn btn-default">Redaguoti</button>
                                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                            <span className="caret"></span>
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="/tema/redaguoti">Redaguoti</a></li>
                                                            <li><a href="/tema/redaguoti">Užrakinti</a></li>
                                                            <li><a href="/tema/redaguoti">Trinti</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Marius</td>
                                                <td>2018-12-04</td>
                                            </tr><tr role="row" className="odd">
                                                <td style={{ width: '50%' }}>
                                                    <div className="sorting_1">
                                                        <Link to='/tema'>Neveikia ps4</Link>
                                                    </div>
                                                </td>
                                                <td style={{ width: '10%' }}>
                                                    <div className="btn-group-xs closed">
                                                        <button type="button" className="btn btn-default">Redaguoti</button>
                                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                            <span className="caret"></span>
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="/tema/redaguoti">Redaguoti</a></li>
                                                            <li><a href="/tema/redaguoti">Užrakinti</a></li>
                                                            <li><a href="/tema/redaguoti">Trinti</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>Marius</td>
                                                <td>2018-12-04</td>
                                            </tr></tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">
                                        Showing 1 to 10 of 57 entries
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button previous disabled" id="example1_previous">
                                                <a href="#" aria-controls="example1" data-dt-idx="0" tabIndex={1}>
                                                    Previous
                                                    </a>
                                            </li>
                                            <li className="paginate_button active">
                                                <a href="#" aria-controls="example1" data-dt-idx="1" tabIndex={0}>
                                                    1
                                                    </a>
                                            </li>
                                            <li className="paginate_button ">
                                                <a href="#" aria-controls="example1" data-dt-idx="2" tabIndex={0}>
                                                    2
                                                    </a>
                                            </li>
                                            <li className="paginate_button ">
                                                <a href="#" aria-controls="example1" data-dt-idx="3" tabIndex={0}>
                                                    3
                                                    </a>
                                            </li>
                                            <li className="paginate_button ">
                                                <a href="#" aria-controls="example1" data-dt-idx="4" tabIndex={0}>
                                                    4
                                                    </a>
                                            </li>
                                            <li className="paginate_button ">
                                                <a href="#" aria-controls="example1" data-dt-idx="5" tabIndex={0}>
                                                    5
                                                    </a>
                                            </li>
                                            <li className="paginate_button ">
                                                <a href="#" aria-controls="example1" data-dt-idx="6" tabIndex={0}>
                                                    6
                                                    </a>
                                            </li>
                                            <li className="paginate_button next" id="example1_next">
                                                <a href="#" aria-controls="example1" data-dt-idx="7" tabIndex={0}>
                                                    Next
                                                    </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-success btn-lg"><a href="/forum" style={{ color: 'white', textDecoration: 'none' }}>Atgal</a></button>
        </div>
    }
}