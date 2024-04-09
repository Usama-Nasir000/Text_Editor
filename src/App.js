import {useEffect, useState} from "react";

import EditableEditor from "./Editor/EditableEditor.js";
// import "./App.css";
import NonEditableEditor from "./Editor/NonEditableEditor.js";
import ListEditableEditor from "./Editor/ListEditableEditor.js";

function App() {
  const  [editorState, setEditorState]= useState('');
  useEffect(()=>{

    setTimeout(() => {
      // console.log("this is run")
      setEditorState(`{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}`)
    }, [2000]);
    console.log(editorState)
  },[])
  useEffect(()=>{
    console.log(editorState)
  },[editorState])
  return (
    <>
    <div className="editor-shell">
      {
        editorState &&
      <EditableEditor text={editorState} setText={setEditorState}/>
      }
    </div>
    {
      editorState?
    <div className="editor-shell">
      <NonEditableEditor text={editorState}/>
    </div>
    :<div className="editor-shell">
      <ListEditableEditor text={editorState} setText={setEditorState}/>
    </div>
    }
    </>
  );
}

export default App;
