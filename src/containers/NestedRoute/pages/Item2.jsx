import React, {PureComponent} from 'react';
import { Button } from "antd";
import history from "../../../routers/history";

class Item2 extends PureComponent {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        现在是page two
        <Button onClick={() => {
          history.replace("/nestedRoute/item1");
        }}>Link To Page One</Button>
      </div>
    );
  }
}

export default Item2;