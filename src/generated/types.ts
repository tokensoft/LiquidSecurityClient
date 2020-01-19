/** @module types */
// Auto-generated, edits will be overwritten

namespace api {
export interface InvestorAdd {
  name: string
  /**
   * TODO
   */
  GAID?: string
  is_company?: boolean
}

export interface InvestorResponse {
  id?: number
  GAID?: string
  is_company?: boolean
  name?: string
  categories?: number[]
}

export interface InvestorEdit {
  GAID?: string
  name?: string
}

export interface InvestorCategoryAdd {
  name: string
  description?: string
}

export interface InvestorCategoryResponse {
  id?: number
  name?: string
  description?: string
  investors?: number[]
}

export interface InvestorCategoryEdit {
  name?: string
  description?: string
}

export interface Asset {
  name?: string
  asset_uuid?: string
  issuer?: number
  asset_id?: string
  requirements?: number[]
  ticker?: string
  domain?: string
  pubkey?: string
  is_registered?: boolean
  is_authorized?: boolean
  authorizer_endpoint?: string
}

export interface Assignment {
  id?: number
  investor?: number
  amount?: number
  receiving_address?: string
  distribution_uuid?: string
  ready_for_distribution?: boolean
  distribution_status?: 'ASSIGNED'|'PENDING'|'UNCONFIRMED'|'CONFIRMED'
}

export interface AssignmentCreate {
  investor: number
  amount: number
  ready_for_distribution?: boolean
}

export interface Distribution {
  distribution_uuid?: string
  distribution_status?: 'UNCONFIRMED'|'CONFIRMED'
  transactions?: Transaction[]
}

export interface Transaction {
  txid?: string
  transaction_status?: 'UNCONFIRMED'|'CONFIRMED'
  included_blockheight?: number
  confirmed_datetime?: Date
  assignments?: DistributionAssignment[]
}

export interface DistributionAssignment {
  investor?: number
  amount?: number
  vout?: number
}

export interface DistributionCreate {
  distribution_uuid?: string
  distribution_script?: string
}

export interface Activity {
  type?: string
  datetime?: Date
  description?: string
  txid?: string
  source_address?: string
  destination_address?: string
  amount?: number
}

export interface Ownership {
  /**
   * Id of the owner, if the owner is the issuer, this field is the string 'ISSUER'
   */
  owner?: number
  amount?: number
}

export interface Outpoint {
  txid?: string
  vout?: number
}

export interface Balance {
  confirmed_balance?: Ownership[]
  /**
   * List of output which the server has lost track of.
   */
  lost_outputs?: Outpoint[]
}

export interface Issuance {
  /**
   * Must be ASCII
   */
  name: string
  amount: number
  /**
   * Must be a valid Liquid address
   */
  destination_address: string
  /**
   * Domain for asset registry
   */
  domain: string
  /**
   * Ticker for asset registry
   */
  ticker: string
  /**
   * Pubkey for asset registry, must be a compressed pubkey in hex
   */
  pubkey: string
  is_confidential?: boolean
  is_reissuable?: boolean
  reissuance_amount?: number
  /**
   * Must be a valid Liquid address or the empty string
   */
  reissuance_address?: string
  /**
   * TODO
   */
  authorizer_endpoint?: string
}

export interface IssuanceResponse {
  name?: string
  amount?: number
  destination_address?: string
  domain?: string
  ticker?: string
  pubkey?: string
  is_confidential?: boolean
  is_reissuable?: boolean
  reissuance_amount?: number
  reissuance_address?: string
  /**
   * Asset id of the newly generated asset in hex
   */
  asset_id?: string
  /**
   * Reissuance token id of the newly generated asset in hex, may be null
   */
  reissuance_token_id?: string
  /**
   * Asset UUID used by the server
   */
  asset_uuid?: string
  /**
   * Issuance transaction id
   */
  txid?: string
  /**
   * Issuance transaction input
   */
  vin?: number
  /**
   * Issuance transaction output for newly created assets
   */
  asset_vout?: number
  /**
   * Issuance transaction output for newly created reissuance tokens, may be null
   */
  reissuance_vout?: number
  /**
   * TODO
   */
  authorizer_endpoint?: string
}

export interface Reissuance {
  txid?: string
  vout?: number
  destination_address?: string
  reissuance_amount?: number
  confirmed_in_block?: string
  created?: Date
}

export interface OpenApiSpec {
  host: string
  basePath: string
  schemes: string[]
  contentTypes: string[]
  accepts: string[]
  securityDefinitions?: {[key: string]: SecurityDefinition}
}

export interface SecurityDefinition {
  type: 'basic'|'apiKey'|'oauth2'
  description?: string
  name?: string
  in?: 'query'|'header'
  flow?: 'implicit'|'password'|'application'|'accessCode'
  authorizationUrl?: string
  tokenUrl?: string
  scopes?: {[key: string]: string}
}

export type CollectionFormat = 'csv'|'ssv'|'tsv'|'pipes'|'multi'
export type HttpMethod = 'get'|'put'|'post'|'delete'|'options'|'head'|'patch'

export interface OperationInfo {
  path: string
  method: HttpMethod
  security?: OperationSecurity[]
  contentTypes?: string[]
  accepts?: string[]
}

export interface OperationSecurity {
  id: string
  scopes?: string[]
}

export interface OperationParamGroups {
  header?: {[key: string]: string}
  path?: {[key: string]: string|number|boolean}
  query?: {[key: string]: string|string[]|number|boolean}
  formData?: {[key: string]: string|number|boolean}
  body?: any
}

export interface ServiceRequest {
  method: HttpMethod
  url: string
  headers: { [index: string]: string }
  body: any
}

export interface RequestInfo {
  baseUrl: string
  parameters: OperationParamGroups
}

export interface ResponseOutcome {
  retry?: boolean
  res: Response<any>
}

export interface ServiceOptions {
  /**
   * The service url.
   *
   * If not specified then defaults to the one defined in the Open API
   * spec used to generate the service api.
   */
  url?: string
  /**
   * Fetch options object to apply to each request e.g 
   * 
   *     { mode: 'cors', credentials: true }
   * 
   * If a headers object is defined it will be merged with any defined in
   * a specific request, the latter taking precedence with name collisions.
   */
  fetchOptions?: any
  /**
   * Function which should resolve rights for a request (e.g auth token) given
   * the OpenAPI defined security requirements of the operation to be executed.
   */
  getAuthorization?: (security: OperationSecurity, securityDefinitions: any, op: OperationInfo) => Promise<OperationRightsInfo>
  /**
   * Given an error response, custom format and return a ServiceError
   */
  formatServiceError?: (response: FetchResponse, data: any) => ServiceError
  /**
   * Before each Fetch request is dispatched this function will be called if it's defined.
   * 
   * You can use this to augment each request, for example add extra query parameters.
   * 
   *     const params = reqInfo.parameters;
   *     if (params && params.query) {
   *       params.query.lang = "en"
   *     }
   *     return reqInfo
   */
  processRequest?: (op: OperationInfo, reqInfo: RequestInfo) => RequestInfo
  /**
   * If you need some type of request retry behavior this function
   * is the place to do it.
   * 
   * The response is promise based so simply resolve the "res" parameter
   * if you're happy with it e.g.
   * 
   *     if (!res.error) return Promise.resolve({ res });
   * 
   * Otherwise return a promise which flags a retry.
   * 
   *     return Promise.resolve({ res, retry: true })
   * 
   * You can of course do other things before this, like refresh an auth
   * token if the error indicated it expired.
   * 
   * The "attempt" param will tell you how many times a retry has been attempted.
   */
  processResponse?: (req: api.ServiceRequest, res: Response<any>, attempt: number) => Promise<api.ResponseOutcome>
  /**
   * If a fetch request fails this function gives you a chance to process
   * that error before it's returned up the promise chain to the original caller.
   */
  processError?: (req: api.ServiceRequest, res: api.ResponseOutcome) => Promise<api.ResponseOutcome>
  /**
   * By default the authorization header name is "Authorization".
   * This property allows you to override it.
   * 
   * One place this can come up is where your API is under the same host as
   * a website it powers. If the website has Basic Auth in place then some
   * browsers will override your "Authorization: Bearer <token>" header with
   * the Basic Auth value when calling your API. To counter this we can change
   * the header, e.g.
   * 
   *     authorizationHeader = "X-Authorization"
   * 
   * The service must of course accept this alternative.
   */
  authorizationHeader?: string
}

export type OperationRights = {[key: string]: OperationRightsInfo}

export interface OperationRightsInfo {
  username?: string
  password?: string
  token?: string
  apiKey?: string
}

export interface Response<T> {
  raw: FetchResponse
  /**
   * If 'error' is true then data will be of type ServiceError
   */
  data?: T
  /**
   * True if there was a service error, false if not
   */
  error?: boolean
}

export interface FetchResponse extends FetchBody {
  url: string
  status: number
  statusText: string
  ok: boolean
  headers: Headers
  type: string | FetchResponseType
  size: number
  timeout: number
  redirect(url: string, status: number): FetchResponse
  error(): FetchResponse
  clone(): FetchResponse
}

export interface FetchBody {
  bodyUsed: boolean
  arrayBuffer(): Promise<ArrayBuffer>
  blob(): Promise<Blob>
  formData(): Promise<FormData>
  json(): Promise<any>
  json<T>(): Promise<T>
  text(): Promise<string>
}

export interface FetchHeaders {
  get(name: string): string
  getAll(name: string): Array<string>
  has(name: string): boolean
}

export declare enum FetchResponseType { 'basic', 'cors', 'default', 'error', 'opaque' }

export class ServiceError extends Error {
  status: number
}

/**
 * Flux standard action meta for service action
 */
export interface ServiceMeta {
  res: FetchResponse
  info: any
}

}
/**
 * @typedef InvestorAdd
 * @memberof module:types
 * 
 * @property {string} GAID TODO
 * @property {boolean} is_company 
 * @property {string} name 
 */

/**
 * @typedef InvestorResponse
 * @memberof module:types
 * 
 * @property {number} id 
 * @property {string} GAID 
 * @property {boolean} is_company 
 * @property {string} name 
 * @property {number[]} categories 
 */

/**
 * @typedef InvestorEdit
 * @memberof module:types
 * 
 * @property {string} GAID 
 * @property {string} name 
 */

/**
 * @typedef InvestorCategoryAdd
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 */

/**
 * @typedef InvestorCategoryResponse
 * @memberof module:types
 * 
 * @property {number} id 
 * @property {string} name 
 * @property {string} description 
 * @property {number[]} investors 
 */

/**
 * @typedef InvestorCategoryEdit
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} description 
 */

/**
 * @typedef Asset
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {string} asset_uuid 
 * @property {number} issuer 
 * @property {string} asset_id 
 * @property {number[]} requirements 
 * @property {string} ticker 
 * @property {string} domain 
 * @property {string} pubkey 
 * @property {boolean} is_registered 
 * @property {boolean} is_authorized 
 * @property {string} authorizer_endpoint 
 */

/**
 * @typedef Assignment
 * @memberof module:types
 * 
 * @property {number} id 
 * @property {number} investor 
 * @property {number} amount 
 * @property {string} receiving_address 
 * @property {string} distribution_uuid 
 * @property {boolean} ready_for_distribution 
 * @property {string} distribution_status 
 */

/**
 * @typedef AssignmentCreate
 * @memberof module:types
 * 
 * @property {number} investor 
 * @property {number} amount 
 * @property {boolean} ready_for_distribution 
 */

/**
 * @typedef Distribution
 * @memberof module:types
 * 
 * @property {string} distribution_uuid 
 * @property {string} distribution_status 
 * @property {module:types.Transaction[]} transactions 
 */

/**
 * @typedef Transaction
 * @memberof module:types
 * 
 * @property {string} txid 
 * @property {string} transaction_status 
 * @property {number} included_blockheight 
 * @property {date} confirmed_datetime 
 * @property {module:types.DistributionAssignment[]} assignments 
 */

/**
 * @typedef DistributionAssignment
 * @memberof module:types
 * 
 * @property {number} investor 
 * @property {number} amount 
 * @property {number} vout 
 */

/**
 * @typedef DistributionCreate
 * @memberof module:types
 * 
 * @property {string} distribution_uuid 
 * @property {string} distribution_script 
 */

/**
 * @typedef Activity
 * @memberof module:types
 * 
 * @property {string} type 
 * @property {date} datetime 
 * @property {string} description 
 * @property {string} txid 
 * @property {string} source_address 
 * @property {string} destination_address 
 * @property {number} amount 
 */

/**
 * @typedef Ownership
 * @memberof module:types
 * 
 * @property {number} owner Id of the owner, if the owner is the issuer, this field is the string 'ISSUER'
 * @property {number} amount 
 */

/**
 * @typedef Outpoint
 * @memberof module:types
 * 
 * @property {string} txid 
 * @property {number} vout 
 */

/**
 * @typedef Balance
 * @memberof module:types
 * 
 * @property {module:types.Ownership[]} confirmed_balance 
 * @property {module:types.Outpoint[]} lost_outputs List of output which the server has lost track of.
 */

/**
 * @typedef Issuance
 * @memberof module:types
 * 
 * @property {string} name Must be ASCII
 * @property {number} amount 
 * @property {string} destination_address Must be a valid Liquid address
 * @property {string} domain Domain for asset registry
 * @property {string} ticker Ticker for asset registry
 * @property {string} pubkey Pubkey for asset registry, must be a compressed pubkey in hex
 * @property {boolean} is_confidential 
 * @property {boolean} is_reissuable 
 * @property {number} reissuance_amount 
 * @property {string} reissuance_address Must be a valid Liquid address or the empty string
 * @property {string} authorizer_endpoint TODO
 */

/**
 * @typedef IssuanceResponse
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {number} amount 
 * @property {string} destination_address 
 * @property {string} domain 
 * @property {string} ticker 
 * @property {string} pubkey 
 * @property {boolean} is_confidential 
 * @property {boolean} is_reissuable 
 * @property {number} reissuance_amount 
 * @property {string} reissuance_address 
 * @property {string} asset_id Asset id of the newly generated asset in hex
 * @property {string} reissuance_token_id Reissuance token id of the newly generated asset in hex, may be null
 * @property {string} asset_uuid Asset UUID used by the server
 * @property {string} txid Issuance transaction id
 * @property {number} vin Issuance transaction input
 * @property {number} asset_vout Issuance transaction output for newly created assets
 * @property {number} reissuance_vout Issuance transaction output for newly created reissuance tokens, may be null
 * @property {string} authorizer_endpoint TODO
 */

/**
 * @typedef Reissuance
 * @memberof module:types
 * 
 * @property {string} txid 
 * @property {number} vout 
 * @property {string} destination_address 
 * @property {number} reissuance_amount 
 * @property {string} confirmed_in_block 
 * @property {date} created 
 */
