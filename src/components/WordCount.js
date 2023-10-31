import React,{useState} from "react";

function WordCount()
{
    //  let text=document.getElementById("t1").value;
     let  [text, setText] = useState('');
    let handle = (e) => {
      setText(e.target.value);
       };
    let wordCount= text.trim().split(/\s+/).filter(word => word !== '').length;
    return(
        <div>
            <h1 id="i1">Responsive Paragraph Word Counter</h1>
            <textarea rows={10}  id="t1" value={text} onChange={handle}></textarea>
            <p>Word Count: {wordCount}</p>
        </div>
    );
}
export default WordCount;