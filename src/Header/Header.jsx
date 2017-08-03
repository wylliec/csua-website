import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import './style.scss';

import {AppBar} from 'yui-md/lib/AppBar';
import {Tab} from 'yui-md/lib/Tab';
import {TabList} from 'yui-md/lib/TabList';
import {Menu} from 'yui-md/lib/Menu';
import {MenuItem} from 'yui-md/lib/MenuItem';
import {_NavCreator} from './_NavCreator';
import logo from 'static/images/logos/logo.svg';


class Header extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
    this.state = {
      isActive: {
        aboutMenu: false,
        eventsMenu: false
      }
    };
  }

  setMenuActive(menuName, active) {
    let currentlyActive = typeof(active) === 'undefined' ? !this.state.isActive[menuName] : active;
    this.state.isActive[menuName] = currentlyActive;
    this.setState({isActive: this.state.isActive});
  }

  render() {
    return (
      <AppBar height={82}
        style={{paddingTop: '12px', boxSizing: 'border-box'}}
        className={'z-depth-1'}
        backgroundColor={'white'}>
        <img style={{height: '40px', marginBottom: '-12px'}} src={logo}/>
        <h2 style={{display: 'inline-block'}}>&nbsp;&nbsp;CSUA</h2>
        <_NavCreator/>
      </AppBar>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

  };
}

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Guac(Header)));

export {Header};
