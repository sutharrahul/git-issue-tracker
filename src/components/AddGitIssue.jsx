import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGitIssue } from "../app/Slice/addGitIssueSlice";

function AddGitIssue() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addGitIssue(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className=" pt-5 pb-28 px-8">
      <textarea
        type="text"
        className="textarea textarea-bordered w-full"
        placeholder="Add new issue..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-green-700 text-white rounded float-end"
      >
        Add issue
      </button>
    </form>
  );
}

export default AddGitIssue;
