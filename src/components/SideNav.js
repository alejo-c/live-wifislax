import React, { Component } from 'react'

export default class SideNav extends Component {
    render() {
        return <div className="fixed-sn black-skin">

            <header>
                <div id="slide-out" className="side-nav sn-bg-4 fixed">
                    <ul className="custom-scrollbar">
                        <li>
                            <div className="logo-wrapper waves-light">
                                <a href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" className="img-fluid flex-center" />></a>
                            </div>
                        </li>
                        <li>
                            <ul className="social">
                                <li><a href="#" className="icons-sm fb-ic"><i className="fab fa-facebook-f"> </i></a></li>
                                <li><a href="#" className="icons-sm pin-ic"><i className="fab fa-pinterest"> </i></a></li>
                                <li><a href="#" className="icons-sm gplus-ic"><i className="fab fa-google-plus-g"> </i></a></li>
                                <li><a href="#" className="icons-sm tw-ic"><i className="fab fa-twitter"> </i></a></li>
                            </ul>
                        </li>
                        <li>
                            <form className="search-form" role="search">
                                <div className="form-group md-form mt-0 pt-1 waves-light">
                                    <input type="text" className="form-control" placeholder="Search" />>
                  </div>
                            </form>
                        </li>
                        <li>
                            <ul className="collapsible collapsible-accordion">
                                <li><a className="collapsible-header waves-effect arrow-r"><i className="fas fa-chevron-right"></i> Submit blog<i
                                    className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="waves-effect">Submit listing</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">Registration form</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a className="collapsible-header waves-effect arrow-r"><i className="fas fa-hand-pointer"></i> Instruction<i
                                    className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="waves-effect">For bloggers</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">For authors</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a className="collapsible-header waves-effect arrow-r"><i className="fas fa-eye"></i> About<i className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="waves-effect">Introduction</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">Monthly meetings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a className="collapsible-header waves-effect arrow-r"><i className="far fa-envelope"></i> Contact me<i className="fas fa-angle-down rotate-icon"></i></a>
                                    <div className="collapsible-body">
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="waves-effect">FAQ</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">Write a message</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">FAQ</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">Write a message</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">FAQ</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">Write a message</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">FAQ</a>
                                            </li>
                                            <li><a href="#" className="waves-effect">Write a message</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="sidenav-bg mask-strong"></div>
                </div>
                <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
                    <div className="float-left">
                        <a href="#" data-activates="slide-out" className="button-collapse black-text"><i className="fas fa-bars"></i></a>
                    </div>
                    <div className="breadcrumb-dn mr-auto">
                        <p>Material Design for Bootstrap</p>
                    </div>
                    <ul className="nav navbar-nav nav-flex-icons ml-auto">
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-envelope"></i> <span className="clearfix d-none d-sm-inline-block">Contact</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-comments"></i> <span className="clearfix d-none d-sm-inline-block">Support</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><i className="fas fa-user"></i> <span className="clearfix d-none d-sm-inline-block">Account</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Dropdown
                </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>

            <div>

                <div className="container-fluid text-center">

                    <div className="card card-cascade wider reverse my-4 pb-5">

                        <div className="view view-cascade overlay wow fadeIn">
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(1).jpg" className="img-fluid" />>
                                    <a href="#!">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div className="card-body card-body-cascade text-center wow fadeIn" data-wow-delay="0.2s">
                            <h4 className="card-title"><strong>My adventure</strong></h4>
                            <h5 className="blue-text"><strong>Photography</strong></h5>

                            <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                              laudantium, totam rem aperiam.
                </p>

                            <a className="btn btn-primary btn-lg">Primary button</a>
                            <a className="btn btn-secondary btn-lg">Secondary button</a>
                            <a className="btn btn-default btn-lg">Default button</a>

                        </div>

                    </div>

                </div>

            </div>

            <footer className="page-footer text-center text-md-left pt-4">

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-3">
                            <h5 className="text-uppercase font-weight-bold mb-4">Footer Content</h5>
                            <p>Here you can use rows and columns here to organize your footer content.</p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>

                        <hr className="w-100 clerfix d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 mx-auto">
                            <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <hr />

                <div className="call-to-action text-center my-4">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <h5>Register for free</h5>
                        </li>
                        <li className="list-inline-item"><a href="" className="btn btn-primary">Sign up!</a></li>
                    </ul>
                </div>

                <hr />

                <div className="social-section text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-fb"><i className="fab fa-facebook-f"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-tw"><i className="fab fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-gplus"><i className="fab fa-google-plus-g"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-li"><i className="fab fa-linkedin-in"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-git"><i className="fab fa-github"> </i></a></li>
                    </ul>
                </div>

            </footer>

        </div>
    }
}