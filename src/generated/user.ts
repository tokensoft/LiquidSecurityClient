/// <reference path="types.ts"/>
/** @module user */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * The username and password you provide should be the ones used to access Liquid Securties. The token returned can be used in subsequent API calls by setting the request header like so:
 * 
 *  { 'content-type': 'application/json', 'Authorization': 'token <returned_token>' } 
 * 
 * Examples of how to authenticate and call the API programmatically using Python and nodejs can be obtained by request.
 * 
 * @param {object} body 
 * @return {Promise<object>} Authentication token
 */
export function postUserObtain_token(body: any): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    body: {
      body
    }
  }
  return gateway.request(postUserObtain_tokenOperation, parameters)
}

const postUserObtain_tokenOperation: api.OperationInfo = {
  path: '/user/obtain_token',
  contentTypes: ['application/json'],
  method: 'post'
}
