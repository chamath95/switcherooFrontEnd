import React from "react";
import { Select } from "antd";
const { Option } = Select;

class Selectbox extends React.Component {
  // state = {
  //   typeOfProperty: "",

  // };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (!prevState.valueItem && nextProps.valueItem) {
  //     return {
  //       ...prevState,
  //       typeOfProperty: nextProps.typeOfProperty,
  //       valueItem: nextProps.valueItem,
  //       handlebedFunc: nextProps.handlebedFunc,
  //       optionsItem:nextProps.optionsItem
  //     };
  //   }
  //   return prevState;
  // }

  render() {
    const { valueItem, handlebedFunc, optionsItem } = this.props;
    return (
      <Select
        className={
          valueItem !== ""
            ? "selectPRo maltaback" + " " + valueItem
            : "selectPRo "
        }
        name={valueItem}
        defaultValue={valueItem === "" ? "Select Option " : valueItem}
        onChange={handlebedFunc}
        size="large"
      >
        {optionsItem.map((item, key) => (
          <Option value={item} key={key}>
            {item}
          </Option>
        ))}
      </Select>
    );
  }
}

export default Selectbox;
