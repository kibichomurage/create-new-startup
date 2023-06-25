import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { useGetIPAddressQuery } from '../AnalyticsPage/Redux/AnalyticsEndpoints';


const Container = styled.div`
height: 100vh;
width: 100vw;
display:block;
`;
 
const Landing = () => {
  const dispatch = useDispatch()
  const location = useLocation();

  const currentTime = Date.now();
  const pageDetails = {'path':location.pathname, 'time': currentTime};
  const {data, isLoading} = useGetIPAddressQuery();
  if(!isLoading)
  {
    console.log(data)
  }
return(
  <Container>
    PivotJS analytics <br/>
    Current Page {pageDetails.path} <br/>
    Current Time {new Date(currentTime).toString()} <br/>
    <br/> Page Viewer's Address <br/>
    Country Code: {!isLoading && data.country_code} <br/>
    Country: {!isLoading && data.country_name} <br/>
    City: {!isLoading && data.city} <br/>
    Zip: {!isLoading && data.postal} <br/>
    IP Address: {!isLoading && data.IPv4} <br/>
  </Container>
)
}



export default Landing