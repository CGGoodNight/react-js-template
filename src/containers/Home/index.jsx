import React, {PureComponent} from 'react';
import { Button } from "antd";
import history from "../../routers/history";
import { connect } from "react-redux";
import * as Action from "./action";
import './index.scss';
import "./index.less";
import axios from 'axios';

class Home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      version: "",
    }
  }
  fetchVersion = () => {
    axios({
      method: "GET",
      url: "/fetchVersion",
      data: {}
    }).then(res => {
      console.log(res);
      this.setState({
        name: res.data.data.name,
        version: res.data.data.version,
      })
    }).catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="home">
        <h1>Sass</h1>
        <p className="style-sass">HomePage</p>
        <br />
        <h1>Less</h1>
        <p className="style-less">HomePage</p>
        <h1>Ant Design(定制主题更多样式请点击)</h1>
        <Button href="https://ant.design/docs/react/customize-theme-cn" target="__blank" type="primary">Ant Design</Button>
        <h1>React-Router</h1>
        <Button onClick={() => {
          history.push("/notFound");
        }}>NotFound Page</Button>
        <h1>嵌套路由</h1>
        <Button onClick={() => {
          history.replace("/nestedRoute/item1");
        }} type="primary">NestedRoute</Button>
        <h1>React-Redux</h1>
        count: {this.props.count} <Button onClick={() => this.props.AddCount()}>+</Button>
        <h1>Mock & axios</h1>
        <Button onClick={this.fetchVersion}>获取版本</Button>
        <p>name: {this.state.name ? this.state.name : "默认"}</p>
        <p>version: {this.state.version ? this.state.version : "默认"}</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  count: state.homeReducer.count
});
const mapDispatchToProps = dispatch => ({
  AddCount() {
    dispatch(Action.AddCount());
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);