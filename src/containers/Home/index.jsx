import React, { PureComponent } from "react";
import { Button, DatePicker } from "antd";
import history from "../../routers/history";
import { connect } from "react-redux";
import * as Action from "./action";
import * as languageAction from "../LocaleProvider/action";
import languageType from "../../constants/languageType";
import { FormattedMessage, injectIntl } from "react-intl";
import Hooks from "./pages/Hooks";
import "./index.scss";
import "./index.less";
import axios from "axios";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      version: ""
    };
  }
  fetchVersion = () => {
    axios({
      method: "GET",
      url: "/fetchVersion",
      data: {}
    })
      .then(res => {
        console.log(res);
        this.setState({
          name: res.data.data.name,
          version: res.data.data.version
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  switchLanguage = () => {
    this.props.SwitchLanguage(
      this.props.language === "zh" ? languageType.EN : languageType.ZH
    );
  };

  render() {
    const { messages } = this.props.intl;
    const { intl } = this.props;
    return (
      <div className="home">
        <h1>Sass</h1>
        <p className="style-sass">HomePage</p>
        <br />
        <h1>Less</h1>
        <p className="style-less">HomePage</p>
        <h1>Ant Design(定制主题更多样式请点击)</h1>
        <Button
          href="https://ant.design/docs/react/customize-theme-cn"
          target="__blank"
          type="primary"
        >
          Ant Design
        </Button>
        <h1>React-Router</h1>
        <Button
          onClick={() => {
            history.push("/notFound");
          }}
        >
          NotFound Page
        </Button>
        <h1>嵌套路由</h1>
        <Button
          onClick={() => {
            history.replace("/nestedRoute/item1");
          }}
          type="primary"
        >
          NestedRoute
        </Button>
        <h1>React-Redux(saga thunk 自己安装配置即可 , 模版已经搭好)</h1>
        count: {this.props.count}{" "}
        <Button onClick={() => this.props.AddCount()}>+</Button>
        <h1>Mock & axios</h1>
        <Button onClick={this.fetchVersion}>获取版本</Button>
        <p>name: {this.state.name ? this.state.name : "默认"}</p>
        <p>version: {this.state.version ? this.state.version : "默认"}</p>
        <h1>react-intl 实现国际化 & Antd ConfigProvider</h1>
        <p>通过注入props(无参)</p>
        <Button onClick={this.switchLanguage}>
          {messages["home.switchLanguage"]}
        </Button>
        <p>
          通过FormattedMessage:{" "}
          <FormattedMessage
            id="home.introduce"
            values={{ age: 17, name: <span className="name">Evelyn</span> }}
          />
        </p>
        <p>
          通过注入props(有参, 不能像FormattedMessage那样传递jsx):{" "}
          {intl.formatMessage(
            { id: "home.introduce" },
            { age: 17, name: "Evelyn" }
          )}
        </p>
        <div>
          <p>Antd</p>
          <DatePicker />
        </div>
        <h1>Hooks(react 16.8 +)</h1>
        <Hooks />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  count: state.homeReducer.count,
  language: state.languageReducer.language
});
const mapDispatchToProps = dispatch => ({
  AddCount() {
    dispatch(Action.AddCount());
  },
  SwitchLanguage(lang) {
    dispatch(languageAction.SwitchLanguage(lang));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Home));
