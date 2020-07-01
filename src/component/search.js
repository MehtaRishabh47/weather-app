import React from 'react'
import './search.css';
const Search = ({ loadweather, error }) => {
    return (
        <div className="container ">
            <div>{error ? errorr() : null}</div>
            <form onSubmit={loadweather}>
                <div className="row tc">
                    <div className="col-md-3">
                        <input type="text" className="a" name="city" placeholder="city" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="a" name="country" placeholder="country" />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

const errorr = () => {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}


export default Search;