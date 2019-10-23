import React from "react"
import ReactDOM from "react-dom"
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/">
      <a>Main Page</a>
    </Link>
    <Link href="data">
      <a>Data Page</a>
    </Link>
    <p>Welcome to page</p>
  </div>
);

export default Index;