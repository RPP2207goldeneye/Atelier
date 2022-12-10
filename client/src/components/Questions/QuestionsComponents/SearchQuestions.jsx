import React, {useState} from "react";

export const SearchQuestions = (props) => {

  return (
    <div style={{color: 'red'}} data-testid="SearchComponent">
      <input
      type="text"
      placeholder="Have a question? Search for answers…"
      name="searchQuestions"
      onChange={(event) => {
        if (event.target.value.length > 2){
          props.setSearch(event.target.value)} else {
            props.setSearch('');
          }
        }}
      />
    </div>
  );
};

// onChange={(event) => {props.setSearch(event.target.value)}}
