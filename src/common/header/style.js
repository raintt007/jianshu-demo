import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.header`
  position: relative;
  height: 60px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 60px;
  background: url(${logoPic});
  background-size: cover;
  cursor: pointer;
`
export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  margin: 0 auto;
  
`;
export const NavItem = styled.div`
  line-height: 60px;
  padding: 0 15px;
  color: #333;
  cursor: pointer;
  &.left{
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  /* overflow:hidden; */
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    transition: .2s linear;
    /* background: green; */
    text-align: center;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const SearchInfo = styled.div`
  &::after {
    content: '';
    display: block;
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color: white;
    top: -18px;
    left: 60px;
  }
  position: absolute;
  left: 0;
  top: 60px;
  width: 260px;
  /* height: 100px; */
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  transition: 1s linear all;
`;
export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size: 14px;
   color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
  font-size: 12px;
  .spin {
    font-size: 12px;
    margin-right: 2px;
    display: block;
    float: left;
    transition: .2s all linear;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: block;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 15px;
  float: left;
  line-height: 20px;
  padding:0 5px;
  border:1px solid #ddd;
  font-size: 12px;
  color: #969696;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`

  width: 160px;
  height: 40px;
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 30px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #eee;
  font-size:14px;
  transition: .4s linear;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 60px;

`
export const Button = styled.div`
    cursor: pointer;
  float: right;
  padding: 0 20px;
  line-height: 40px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  margin: 10px 20px;

  &.writting {
    background-color: #ec6149;
    color: white
  }
  &.req {
    background-color: #fff;
    color: #ec6149
  }
`
