import React, {Component} from 'react';
//react 国际化
import {IntlProvider,addLocaleData} from 'react-intl';
import 'moment/locale/zh-cn'; // 导入moment中文包 不然antd datePicker 日期为英文
import { ConfigProvider } from 'antd';
import antd_en_US from 'antd/es/locale/en_US';
import antd_zh_CN from 'antd/es/locale/zh_CN';
import {connect} from "react-redux";
import zh_CN from "../../locales/zh_CN";//个人配置
import en_US from "../../locales/en_US";//个人配置
import zh from 'react-intl/locale-data/zh';//react-intl语言包
import en from 'react-intl/locale-data/en';//react-intl语言包
addLocaleData([...en, ...zh]);//需要放入本地数据库
// antd 国际化
const antdLocaleConfig = {
  zh: antd_zh_CN, // 默认采用中文
  en: antd_en_US,
};
 // react intl 国际化
 const localeConfig = {
  zh: zh_CN,
  en: en_US,
};
class LocaleProvider extends Component {
  render() {
    return (
      <ConfigProvider locale={antdLocaleConfig[this.props.language]}>
        <IntlProvider
          key={this.props.language}
          locale={this.props.language}
          messages={localeConfig[this.props.language]}
        >
          {this.props.children}
        </IntlProvider>
      </ConfigProvider>
    );
  }
}
const mapStateToProps = (state) => ({
  language:state.getIn(['languageReducer','language']),
});

export default connect(mapStateToProps)(LocaleProvider);