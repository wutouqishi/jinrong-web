import Cookies from 'js-cookie'
import {url} from '@/config/index'
import { token_test } from '@/config'

export const TOKEN_KEY = 'token'



export const setToken = (token, day) => {
  Cookies.set(TOKEN_KEY, token, { expires: day || 1 })
}

export const getToken = () => {
  const token = token_test?token_test:Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const imageSrc = (html) => {
  const result = html.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function(match, capture) {
    if (capture.indexOf('http') >= 0) {
      return `<img src=${capture} style="width:100%">`
    } else {
      return `<img src=${ url + capture} style="width:100%">`
    }
  })
  return result
}
