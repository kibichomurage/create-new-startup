import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { useGetIPAddressQuery } from '../AnalyticsPage/Redux/AnalyticsEndpoints';
import UAParser from 'ua-parser-js';

const Container = styled.div`
height: 100vh;
width: 100vw;
display:block;
`;
 
const Analytics = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const currentTime = Date.now();
  const pageDetails = {'path':location.pathname, 'time': currentTime};
  const {data, isLoading} = useGetIPAddressQuery();

  const deviceDetails = new UAParser(window.navigator.userAgent).getResult();
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
return(
  <Container>
    <b> PivotJS analytics </b> <br/>
    Current Page : <b>{pageDetails.path}</b> <br/>
    Current Time : <b>{new Date(currentTime).toString()}</b> <br/>
    <br/> <b> Page Viewer's Address </b> <br/>
    Country Code : <b> {!isLoading && data.country_code} </b> <br/>
    Country :<b> {!isLoading && data.country_name} </b> <br/>
    City : <b> {!isLoading && data.city} </b> <br/>
    Zip : <b> {!isLoading && data.postal} </b> <br/>
    IP Address : <b> {!isLoading && data.IPv4} </b> <br/> <br/>
    <b> Device details  </b> <br/>
    Browser : <b> {deviceDetails && deviceDetails.browser.name} </b> <br/>
    CPU : <b> {deviceDetails && deviceDetails.cpu.architecture} </b> <br/>
    OS : <b> {deviceDetails && deviceDetails.os.name} </b> <br/>
    ScreenHeight : <b> {screenHeight} </b> <br/>
    ScreenWidth : <b> {screenWidth} </b> <br/>
  </Container>
);
}



export default Analytics