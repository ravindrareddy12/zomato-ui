import React from 'react';
import axios from 'axios';
import '../Styles/Deta.css'
import '../Styles/Details.css'
import queryString from 'query-string';
import { Tabs, TabPanel , Tab, TabList} from 'react-tabs'

// Class Component
class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantData: {}
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const restaurantId = qs.restaurant;
        axios(
            {
                method: 'GET',
                url: `https://apizom.herokuapp.com/restaurant/GetRestaurantByID?id=63291ce905f48dc1d1ea01af`,
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurantData: response.data })).catch()
    }


    render() {
        const { restaurantData } = this.state;
        return (<div className="mb-5">
        <div className="filter-header">
          <div className="filter-logo-div mx-5">
            <span className="filter-logo">e!</span>
          </div>
        </div>
        <div className="px-5">
          <img
            src={restaurantData.image} className="detailMainPic" alt=""
          />
          
        </div>

        <div className="px-5 pt-5">
          <div class="h1 mt-3">
          {restaurantData.name}
            <button className="btn btn-danger btn">Place Online Order</button>
          </div>
          <div class="tabs">
            <Tabs>
              <TabList className="TabList">
                <Tab>Overview</Tab>
                <Tab>Contact</Tab>
              </TabList>
              <hr className="tabline" />
              <TabPanel className="Details">
                <h2 class="about">About the place</h2>
                <h4 class="head">{restaurantData.cuisine}</h4>
                <h6 class="value">Fast Food</h6>
                <h4 class="head">Average Cost</h4>
                <h6 class="value">&#8377; {`${restaurantData.min_price} for two people (approx)`}</h6>
              </TabPanel>
              <TabPanel>
                <h4 class="head">Phone Number</h4>
                <h6 class="value">{restaurantData.contact}</h6>
                <h4 class="head">The Big Chill Cakery</h4>
                <h6 class="value">{`${restaurantData.city}`}</h6>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>);
    }
}

export default Details;
