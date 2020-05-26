import axios from '@/libs/api.request'

export function getArticles(params) {
  return axios.request({
    url: `/api/user/articles/categories/${params.id}?include=image`,
    method: 'get',
    params,
  })
}

export function getArticlesData(params) {
  return axios.request({
    url: `/api/user/articles/${params.id}?include=image,videos`,
    method: 'get',
    params,
  })
}

