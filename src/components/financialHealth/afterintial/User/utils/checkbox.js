import React from "react";
import { Checkbox } from "antd";

import "./checkbox.css";
const FormCheckbox = props => {
  return (
    <div className="form_checkbox">
      <div className="input">
        <div style={{ display: "flex" }}>
          <p className="input-lbl">{props.children}</p>
          {props.itemName[3] && (
            <span className="errormissting">* This field cannot be empty</span>
          )}
        </div>
        <p
          className={
            props.itemName[2] || props.itemName[3]
              ? "EruoSymbleDisableClass"
              : "EruoSymbleanableClass"
          }
        >
          &euro;
        </p>

        <input
          type="text"
          disabled={props.itemName[2]}
          name={props.itemName[0]}
          value={props.itemName[1]}
          onChange={props.onChangeTextSecond}
          className={
            props.itemName[2]
              ? "DisableClass"
              : props.itemName[3]
              ? "missingtext"
              : "anableClass"
          }
          placeholder="0"
        />

        <Checkbox
          className="checkbox"
          name={props.itemName[0]}
          checked={props.itemName[2] === true}
          onChange={props.onChangefunc}
        >
          {" "}
          Not Applicable?
        </Checkbox>
      </div>
    </div>
  );
};

export default FormCheckbox;
