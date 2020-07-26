import React, {Component} from 'react';
import {connect} from 'react-redux';


import {filterByValue, loadData, loadExactPage, loadNewPage, sortByAlphabet, sortByPrice} from "./store";

class App extends Component {

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const pageQueryParam = params.get('page');
        if (!pageQueryParam) {
            window.history.pushState({page: 1}, "title 1", "?page=1");
        } else {

        }
        this.props.dispatch(loadData({count: 40}));
    }

    filterByInput(e){
        let input = e.target.value;
        this.props.dispatch(filterByValue({value: input}))
    }

    nextPage() {
        this.props.dispatch(loadNewPage({page: 1}))
    }

    previousPage() {
        this.props.dispatch(loadNewPage({page: -1}));
    }

    goToPage(page) {
        this.props.dispatch(loadExactPage({page}))
    }

    sortByInput(e){
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('price')){
            this.props.dispatch(sortByPrice({direction}))
        }else {
            this.props.dispatch(sortByAlphabet({direction}));
        }
    }

    render() {
        let products = this.props.state.filteredProducts;
        return (
            <div className="App">
                <section className="hero"  style={{alignItems: "center"}}>
                    <div className="hero-body">
                       
                        <figure className="image is-128x128px">
                        <img src={require('../src/img/logo.png')} alt="continental" />
                        </figure>
                        
                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <nav className="pagination" role="navigation" aria-label="pagination">
                            <button className="button pagination-previous" onClick={() => {
                                this.previousPage()
                            }}>Previous
                            </button>
                            <button className="button pagination-next" onClick={() => {
                                this.nextPage()
                            }}>Next page
                            </button>
                            <ul className="pagination-list">
                                {
                                    [...Array(this.props.state.filteredPages)].map((value, index) => (
                                        <button
                                            className={`button pagination-link ${this.props.state.currentPage === index + 1 ? "is-current" : ""}`}
                                            aria-label="Page 1"
                                            onClick={() => this.goToPage(index + 1)}
                                            aria-current="page">
                                            {index + 1}
                                        </button>
                                    ))
                                }
                            </ul>
                        </nav>

                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <div>
                            <div className="field is-grouped" style={{alignItems: "center"}}>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={e => {
                                            this.sortByInput(e)
                                        }}>
                                            <option value="" disabled selected>Sort by</option>

                                            <option value='alphabet_asc'>Name - A-Z</option>
                                            <option value='alphabet_desc'>Name - Z-A</option>

                                            <option value='price_asc'>Price - Lowest to Highest</option>
                                            <option value='price_desc'>Price - Highest to Lowest</option>

                                        </select>
                                    </div>
                                </div>

                                <div className='control' style={{minWidth: "300px"}}>
                                    <input onChange={e => {
                                        this.filterByInput(e);
                                    }} style={{width: "100%"}} placeholder='Filter by' type='text'/>
                                </div>
                            </div>
                        </div>
                          <div>
                            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth table__wrapper" >
                                <thead  >
                                    <tr>
                                    <th>Title</th>
                                    <th>Request by Person</th>
                                    <th>Description</th>
                                    <th>Part Number</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Issue Date</th>
                                    </tr>
                                </thead>
                                    <tbody >
                                    
                                    {
                                        products && products.length && products.map(product => (
                                                    <>
                                                    <tr>
                                                    <td> {product.title}</td>
                                                    <td> {product.user}</td>
                                                    
                                                    <td> {product.description}</td>

                                                    
                                                    <td> {product.part_number}</td>

                                                    
                                                    <td><img src={product.image} alt=""/></td>
                                                    <td> {product.quantity}</td>
                                                    <td> {product.price}</td>
                                                    <td > {product.dates}</td>
                                                    </tr>
                                                    </>
                                                    
                                                    
                                                    
                                                    ))
                                                }
                                               
                                        </tbody>
                                </table>
                                </div>
                       
                    </div>
                </section>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(App);


