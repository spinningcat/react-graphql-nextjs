import React from "react"
import {Query} from "react-apollo"
import gpl from "graphql-tag"
import Data from "../pages/data"



const ComingData = () => {

    <Query query={gpl`
        {
            user {
                id 
                firstname
                age
            }
        } 
        `
        
    }
        
    
>
    {({loadPartialConfig, error, data}) => {
    console.log(data)
    if(loading){
       return <p>Loading...</p>
    }
    if(error){
        return <p>Error : (</p>
    }
    return data.user.map(({currentData}) =>
        console.log(currentData),
        <Data data={currentData} /> 
    ) 
}}   
</Query>
 

}
export default ComingData