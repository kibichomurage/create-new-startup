import { ReduxApi } from '../../../Redux/ReduxApi' 

export const AnalyticsEndpoints = ReduxApi.injectEndpoints({
    endpoints: builder => 
    ({
        //IPAddress GET request
        getIPAddress  : builder.query({
                    query: () => ({
                        url: 'https://geolocation-db.com/json/',
                        method: 'GET',
                    })
                }),
        
    })
})
export const { useGetIPAddressQuery } = AnalyticsEndpoints