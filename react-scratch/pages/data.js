import React from "react"
import ReactDOM from "react-dom"
import Link from 'next/link';
import 'cross-fetch/polyfill';
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import ComingData from "../src/ComingData"


const client = new ApolloClient({
    uri: "https://fakeql.com/graphql/a71922b8f580b9d032824a2751413a40"
});


const data = (props) => {
  console.log(props)

 
return (


 <div>
    
    <Link href="index">
      <a>Main Page</a>
    </Link>
    <Link href="/">
      <a>Data Page</a>
    </Link>
    <p>Welcome to data page</p>
    <ApolloProvider client = {client}>
        <div>
            <h2>
             <ComingData /> 
            </h2>
        </div>
    </ApolloProvider>
    </div>
)

   


  /*<div>
  
  </div>*/
}


export default data;