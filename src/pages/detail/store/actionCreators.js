import axios from 'axios'
import * as constants from './actionTypes'
const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const data = res.data.data
      dispatch(changeDetail(data.title, data.content))
      console.log(data)
    })
  }
}