import React, { useState } from 'react'
import './index.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
function MarkdownList() {
    const [input,setInput]=useState('Type something');
    const [isActive,setIsActive]=useState(true);
    const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;


  return (
    <div className='md-container'>
        <div className={isActive===true ? 'md-questionmark-active' : 'md-questionmark' } onClick={()=>isActive===true ? setIsActive(false): setIsActive(true)}>
            ?
        </div>
        <div className="md-header">
           <h1>Markdown Previewer</h1> 
        </div>
        <div className='md-box-container'>
            <div className="md-text">
                <textarea name="" id="" value={isActive===true ? help : input} onChange={(e)=>setInput(e.target.value)} ></textarea>
            </div>
            <div className="md-md">
            <ReactMarkdown className='md-otherside' children={isActive===true ? help : input} remarkPlugins={[remarkGfm]} ></ReactMarkdown>
                
            </div>
        </div>
    </div>
  )
}

export default MarkdownList