// rcc , rccp
import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { Link } from "react-router-dom";
// import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

// const getListArea = (show) => {
//   if (show) {
//     return (
//       <SearchInfo>
//           <SearchInfoTitle>
//             热门搜索
//             <SearchInfoSwitch>换一批</SearchInfoSwitch>
//           </SearchInfoTitle>
//           <SearchInfoList>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//             <SearchInfoItem>教育</SearchInfoItem>
//           </SearchInfoList>

//         </SearchInfo>
//     )
//   }
// }

class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    let newList = list.toJS();
    let pageList = [];
    if (newList.length) {
      let length = page * 10 > newList.length ? newList.length : page * 10;
      for (let i = (page - 1) * 10; i < length; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe837;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  }

  render() {
    const {
      focused,
      handleInputBlur,
      handleInputFocus,
      list,
      login,
      logout
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <Link to="/">
            <NavItem className="left active">首页</NavItem>
          </Link>

          <NavItem className="left">下载APP</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
            />
            <span
              className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            >
              &#xe60d;
            </span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>

        <Addition>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe678;</span>写文章
            </Button>
          </Link>

          <Button className="req">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

// const Header = (props) => {
//   return (

//   )
// }

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 180}deg)`;
      page = ++page % (totalPage + 1);
      page = page === 0 ? 1 : page;
      dispatch(actionCreators.changePage(page));
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
