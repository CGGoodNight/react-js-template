import React, {PureComponent} from 'react';
import { Button } from "antd";
import history from "../../../routers/history";

class Item1 extends PureComponent {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        现在是page one
        <Button onClick={() => {
          history.replace("/nestedRoute/item2");
        }}>Link To Page Two</Button>
      </div>
    );
  }
}

export default Item1;