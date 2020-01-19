/// <reference path="types.ts"/>
/** @module general */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * API version information. Not to be confused with the version of this specification. 
 * When the API version is incremented, any breaking changes to the previous API will be listed in the notes returned, as shown in the Response example below.
 */
export function getInfo(): Promise<api.Response<any>> {
  return gateway.request(getInfoOperation)
}

const getInfoOperation: api.OperationInfo = {
  path: '/info',
  method: 'get'
}
