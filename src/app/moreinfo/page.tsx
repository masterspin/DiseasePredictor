'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {

  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');


  useEffect(() =>{
    fetch("http://localhost:5000/gpt", {
      mode: 'no-cors',
      headers: headers
    }).then((data) => {
      console.log(data); 
    });
  },[]);
  
  return (
    <div>
      <h1>OpenAI Chat Response:</h1>
    </div>
  );
};

export default YourComponent;
