import React, {useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./mystyle.css";
import ReactHtmlParser from "react-html-parser";
import ReactScrollableFeed from "react-scrollable-feed";

function TextEditor(){
    const [value, setValue] = useState("")

    const handleOnChange = (e,editor)=>{
        const data = editor.getData()
        setValue(data)
    }

    return (
        <div >
            
            <CKEditor
                editor = {ClassicEditor}
                onChange={handleOnChange}
                
            />
            <div className="box">
                <div className="container">
                <p className = "text_2">Text</p>
                    <ReactScrollableFeed className="scroll">
                    {ReactHtmlParser(value)}
                    </ReactScrollableFeed>
                    
                </div>
            </div>


            <button className = "publish">Publish&emsp;&emsp; ></button>
        </div>

    )

}

export default TextEditor;