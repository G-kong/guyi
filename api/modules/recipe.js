import request from '../../utils/request'

const recipe = {
  // 
  list: (params) => request({
    url: 'data/recipelist.json',
    method: 'get',
    params,
    cache: 300
  }),
  details: (id,params) => request({
    url: `data/recipe_${id}.json`,
    method: 'get',
    params,
    cache: 300
  }),
}

export default recipe;