import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  background-color: red;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  width: 625px;
  height: 300px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
  padding: 20px 0 10px 0;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000000;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`




// List
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {

    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 26px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 12px;
    line-height: 24px;
    color: #999;
  }
`;

// recommend

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  cursor: pointer;
  background: url(${(props) => props.imgUrl});
  /* 写在背景后面 */
  background-size: contain;
`;


export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

// loadMore
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;

export const BackTop = styled.div`
   position: fixed;
   right: 100px;
   bottom: 30px;
   width: 60px;
   height: 60px;
   font-size: 12px;
   line-height: 60px;
   text-align: center;
   border: 1px solid #ccc;
   cursor: pointer;
`;