import React from 'react';
import { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function Copyurl(){
//  const text="Hi this is react body"

const url="http://127.0.0.1:3000/srtUrl"
const [text, setText]= useState('')

const url2="http://127.0.0.1:3000/ogurl"
const [text2, setText2]= useState('')

const fetchInfo = () => {
  return fetch(url)
  .then ((res) => res.json())
  .then((d) => setText(d))
}

useEffect(() => {
  fetchInfo();
});

const fetchInfo2 = () => {
    return fetch(url2)
    .then ((res) => res.json())
    .then((d) => setText2(d))
  }
  useEffect(() => {
    fetchInfo2();
  });

function handleCopy(){
  const copyText=navigator.clipboard.writeText(text)
  alert("Copied Successfully")
}

    return (
        <div className='p-1 '>
            <div className='box-1'>
      <div className='container'>
        The Original URL is:<input type="text" name="name" value={text2} />
          The Shortened URL is :<input type="text" name="name" value={text} />
          <button onClick={handleCopy}>Copy</button>
      </div>
      </div>
      </div>
  )
}

export default Copyurl