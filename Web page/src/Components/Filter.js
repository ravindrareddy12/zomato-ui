import React from 'react';
import axios from 'axios';
import '../Styles/Filt.css'
import '../Styles/Filter.css'
import '../Styles/Deta.css'
import queryString from 'query-string';

// Class Component
class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantData: [],
            locationValues: []
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const restaurantId = qs.restaurant;
        axios(
            {
                method: 'GET',
                url: 'https://apizom.herokuapp.com/city/getcitylist',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ locationValues: response.data })).catch()
        axios(
            {
                method: 'GET',
                url: 'https://apizom.herokuapp.com/restaurant/getAllResturants',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurantData: response.data })).catch()
    }

    handleLocationChange = () => {

    }


    render() {
        const { restaurantData, locationValues } = this.state;
        return (
            <React.Fragment>
            <div className="filter-header">
              <div className="filter-logo-div mx-5">
                <span className="filter-logo">e!</span>
              </div>
            </div>
            <div className="row container my-4 mx-auto">
              {/* Filter Section */}
              <div
                className="accordion col-12 col-sm-12 col-md-3 col-lg-3 px-3 py-3 mb-3 filter-section"
                id="accordionExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Filter/Sort
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <label className="select-loc-title">Select Location</label>
                      <select className="select-loc">
                      <option value="0">Select</option>
                      {locationValues && locationValues.map((item) => {
                        return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                      })}
                      </select>
    
                      <div>
                        <div className="cuisines-title">Cuisines</div>
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label" for="defaultCheck1">
                            North Indian
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                          />
                          <label class="form-check-label" for="defaultCheck2">
                            South Indian
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"
                          />
                          <label class="form-check-label" for="defaultCheck3">
                            Chinese
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          />
                          <label class="form-check-label" for="defaultCheck4">
                            Fast Food
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck5"
                          />
                          <label class="form-check-label" for="defaultCheck5">
                            Street Food
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="costfortwo-title">Cost For Two</div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Less than &#8377;500
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1">
                            &#8377;500 - &#8377;1000
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1">
                            &#8377;1000 - &#8377;1500
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1">
                            &#8377;1500 - &#8377;2000
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1">
                            &gt; &#8377;2000
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="sort-title">Sort</div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Price low to high
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Price high to low
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 mx-auto results">
                <div className="row result-section ms-md-3 mb-3 p-4">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                    <img
                      className="thumb"
                      src={require("../Assets/breakfast.jpg").default}
                      alt="Restaurant Thumb"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-9">
                    <h3>The Big Chill Cakery</h3>
                    <h5>FORT</h5>
                    <h6>Shop 1, Plot D, Samruddhi Complex, Chincholi …</h6>
                  </div>
                  <hr className="line-break mt-3" />
                  <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4">
                      <table className="table-transparent">
                        <thead>
                          <tr>
                            <th scope="row">CUISINES:</th>
                            <td>Bakery</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">COST FOR TWO:</th>
                            <td>&#8377;700</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
    
                <div className="row result-section ms-md-3 mb-3 p-4">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                    <img
                      className="thumb"
                      src={require("../Assets/lunch.jpg").default}
                      alt="Restaurant Thumb"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-9">
                    <h3>The Bake Shop</h3>
                    <h5>FORT</h5>
                    <h6>Shop 1, Plot D, Samruddhi Complex, Chincholi …</h6>
                  </div>
                  <hr className="line-break mt-3" />
                  <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4">
                      <table className="table-transparent">
                        <thead>
                          <tr>
                            <th scope="row">CUISINES:</th>
                            <td>Bakery</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">COST FOR TWO:</th>
                            <td>&#8377;700</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className='col-12 col-sm-12 my-3 mx-auto text-center'>
                        {restaurantData && restaurantData.length > 0 ?
                        <div className='Filterpagination' >
                            <a href="#" className="p-3 border page" >1</a>
                            <a href="#" className="p-3 border page">2</a>
                            <a href="#" className="p-3 border page" >3</a>
                            <a href="#" className="p-3 border page" >4</a>
                        </div> : `No Records Found`  
                    }
                    </div>
                    </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default Filter;
