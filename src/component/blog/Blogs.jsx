import React from 'react'

const Blogs = () => {
  return (
    <div className='container my-5 mx-auto'>
      <div className='my-5'>
        <h1>Q1. Difference between javascript and nodejs</h1>
        <p><b>Ans. </b>Javascript is a web application framework on the other hand node js is the compiler which compile the javascript code.programmer has to install node js to run javascript code but no need to install javascript in computer.Node js writen in C, C++ and javascript on the other hand javascript by javascript ass it is a language for node js</p>
      </div>
      <div className='my-5'>
        <h1>Q2. When should you use nodejs and when should you use mongodb</h1>
        <p><b>Ans. </b> Node js is an open source, cross platform javascript runtime environment that executes javascript outside of a browser. so for javascript work we have to use node js. but for some simple baclend work we can use node js with mongodb. <br /> mongodb is a NoSQL database basically it use when server maintaining cost and effort is less and have to scale the database easily then mongodb is best choice.</p>
      </div>
      <div className='my-5'>
        <h1>Q3. Differences between sql and nosql databases. </h1>
        <p><b>Ans. </b>SQL database are relational on the other hand NoSQL are non relational that means SQL data are relatable to with other on the other hand NoSQL doesn't have such kind of requirments. SQL database are structured wherease NoSQL have dynamic schemas for unstrutured data. SQL database are good for multirow transaction but NoSQL is better for unstructured data.</p>
      </div>
      <div className='my-5'>
        <h1>Q4. What is the purpose of jwt and how does it work </h1>
        <p><b>Ans. </b>JWT means JSON Web Tokens. it basically make a secure get way for data transformation between two parties. it encrypt the json data object with the help of cryptographic algorithm</p>
      </div>
    </div>
  )
}

export default Blogs