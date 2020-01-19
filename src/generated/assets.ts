/// <reference path="types.ts"/>
/** @module assets */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Returns a list of all assets
 */
export function getAssets(): Promise<api.Response<api.Asset[]>> {
  return gateway.request(getAssetsOperation)
}

/**
 * Issue an asset on the Liquid Network. If is_reissuable is true then reissuance_amount and reissuance_address must be provided. Name, ticker, domain and pubkey are committed to the issuance transaction, thus they cannot be changed later.
 * 
 * @param {module:types.Issuance} body 
 * @return {Promise<module:types.IssuanceResponse>} Asset Issuance
 */
export function postAssetsIssue(body: api.Issuance): Promise<api.Response<api.IssuanceResponse>> {
  const parameters: api.OperationParamGroups = {
    body: {
      body
    }
  }
  return gateway.request(postAssetsIssueOperation, parameters)
}

/**
 * Gets details of a given asset
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.Asset>} Asset
 */
export function getAssetsAssetUuid(assetUuid: string): Promise<api.Response<api.Asset>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidOperation, parameters)
}

/**
 * The only field that can be updated is the asset's authorization endpoint.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} body 
 * @return {Promise<module:types.Asset>} Assets
 */
export function putAssetsAssetUuidEdit(assetUuid: string, body: any): Promise<api.Response<api.Asset>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    body: {
      body
    }
  }
  return gateway.request(putAssetsAssetUuidEditOperation, parameters)
}

/**
 * The deletion cannot be undone. Deletion does not affect the underlying asset on the Liquid blockchain, neither does it destroy an issued asset amount. Use with caution for assets accidentally issued.
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<object>} Successful delete
 */
export function deleteAssetsAssetUuidDelete(assetUuid: string): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(deleteAssetsAssetUuidDeleteOperation, parameters)
}

/**
 * An asset can be assigned one or more investor categories
 * There must be Categories set up (you can use the /investors/categories/add API) before they can be assigned to an asset.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} body Category ID or array of Category IDs
 * @return {Promise<module:types.Asset>} Asset
 */
export function postAssetsAssetUuidCategoriesAdd(assetUuid: string, body: any): Promise<api.Response<api.Asset>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    body: {
      body
    }
  }
  return gateway.request(postAssetsAssetUuidCategoriesAddOperation, parameters)
}

/**
 * Used to remove existing investor categories from an asset.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} body Category ID or array of Category IDs
 * @return {Promise<module:types.Asset>} Asset
 */
export function deleteAssetsAssetUuidCategoriesDelete(assetUuid: string, body: any): Promise<api.Response<api.Asset>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    body: {
      body
    }
  }
  return gateway.request(deleteAssetsAssetUuidCategoriesDeleteOperation, parameters)
}

/**
 * Registers the asset if the requirements are satisifed.
 * 
 * The asset registry allows you to register an asset and prove ownership against a domain name.
 * The asset needs to have a ticker, domain and pubkey.
 * For more information see: https://docs.blockstream.com/liquid/developer-guide/developer-guide-index.html#proof-of-issuance-blockstream-s-liquid-asset-registry
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.Asset>} Asset
 */
export function getAssetsAssetUuidRegister(assetUuid: string): Promise<api.Response<api.Asset>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidRegisterOperation, parameters)
}

/**
 * Authorizes the asset within Green to be handled by Green's wallet control features. Allows whitelisting etc.
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.Asset>} Asset
 */
export function getAssetsAssetUuidRegisterAuthorized(assetUuid: string): Promise<api.Response<api.Asset>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidRegisterAuthorizedOperation, parameters)
}

/**
 * Request the command that can be used to reissue the given amount of the asset. The amount to be reissued should be provided and the return value will be in the form of a script that must be run locally against your Liquid node. The script will reissue the stated amount of the asset and post the resulting transaction data back to the Liquid Securities API reissue-confim endpoint to confirm and register the transaction and increase the available supply within Liquid Securities.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} body 
 * @return {Promise<object>} Reissuance command in bash script
 */
export function postAssetsAssetUuidReissueRequest(assetUuid: string, body: any): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    body: {
      body
    }
  }
  return gateway.request(postAssetsAssetUuidReissueRequestOperation, parameters)
}

/**
 * Confirms the reissuance was made. Post the exact data returned from liquid-cli's 'gettransaction' method, including surrounding '{' and '}' marks. As such, no schema property is provided. Example post data: { 'amount': { 'bitcoin': 0, ... etc. You should not need to call this manually as the reissue-request API command provides a bash script that calls this API endpoint as part of its execution.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} body 
 * @return {Promise<object>} Confirmation of the validity of the reissuance transaction.
 */
export function postAssetsAssetUuidReissueConfirm(assetUuid: string, body: any): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    body: {
      body
    }
  }
  return gateway.request(postAssetsAssetUuidReissueConfirmOperation, parameters)
}

/**
 * Returned activities can be of type: issuance, reissuance, distribution, transactions. Results are paged and sortable. See parameter notes for details of use. The start parameter is 1 (not zero) based to make paging easier for clients. start=1, count=50 should return activities list indexes 0 to 49. start=51, count=50 should return activities list indexes 50 to 99. a negative value can be provided to return from the end of the list.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} options Optional options
 * @param {number} [options.start=1] Start index for pagination
 * @param {number} [options.count=100000] Number of results per call
 * @param {string} [options.sortcolumn=1] The sortcolumn parameter can either be an index number (starting at 1) or the string name of the column.
 * @param {string} [options.sortorder=asc] The sortorder parameter can either be asc (for ascending) or desc (for descending) and defaults to asc if the parameter is not included.
 * @return {Promise<module:types.Activity[]>} List of Asset activities
 */
export function getAssetsAssetUuidActivities(assetUuid: string, options?: GetAssetsAssetUuidActivitiesOptions): Promise<api.Response<api.Activity[]>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    query: {
      start: options.start,
      count: options.count,
      sortcolumn: options.sortcolumn,
      sortorder: options.sortorder
    }
  }
  return gateway.request(getAssetsAssetUuidActivitiesOperation, parameters)
}

/**
 * Returns ownership distribution.
 * 
 * Ownership point in time is based upon the confirmation datetime of the associated transaction.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} options Optional options
 * @param {number} [options.height] If provided the height parameter must be a valid Liquid block height else height will be set to the last Liquid block. Example: height=100.
 * @return {Promise<module:types.Ownership[]>} List of Asset ownerships based upon confirmed transactions.
 */
export function getAssetsAssetUuidOwnerships(assetUuid: string, options?: GetAssetsAssetUuidOwnershipsOptions): Promise<api.Response<api.Ownership[]>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    query: {
      height: options.height
    }
  }
  return gateway.request(getAssetsAssetUuidOwnershipsOperation, parameters)
}

/**
 * Returns the balance of an asset and the list of outputs that the server lost track of. Under normal circumstances, the list of lost outputs is empty.
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.Balance>} Balance of an assets.
 */
export function getAssetsAssetUuidBalance(assetUuid: string): Promise<api.Response<api.Balance>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidBalanceOperation, parameters)
}

/**
 * Details of each Liquid transaction where the associated asset was reissued. The reissuance itself would normally be carried out by the bash script returned from the reissue-request API endpoint.
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.Reissuance[]>} List of Asset reissuances
 */
export function getAssetsAssetUuidReissuances(assetUuid: string): Promise<api.Response<api.Reissuance[]>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidReissuancesOperation, parameters)
}

export interface GetAssetsAssetUuidActivitiesOptions {
  /**
   * Start index for pagination
   */
  start?: number
  /**
   * Number of results per call
   */
  count?: number
  /**
   * The sortcolumn parameter can either be an index number (starting at 1) or the string name of the column.
   */
  sortcolumn?: string
  /**
   * The sortorder parameter can either be asc (for ascending) or desc (for descending) and defaults to asc if the parameter is not included.
   */
  sortorder?: string
}

export interface GetAssetsAssetUuidOwnershipsOptions {
  /**
   * If provided the height parameter must be a valid Liquid block height else height will be set to the last Liquid block. Example: height=100.
   */
  height?: number
}

const getAssetsOperation: api.OperationInfo = {
  path: '/assets/',
  method: 'get'
}

const postAssetsIssueOperation: api.OperationInfo = {
  path: '/assets/issue',
  contentTypes: ['application/json'],
  method: 'post'
}

const getAssetsAssetUuidOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}',
  method: 'get'
}

const putAssetsAssetUuidEditOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/edit',
  method: 'put'
}

const deleteAssetsAssetUuidDeleteOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/delete',
  method: 'delete'
}

const postAssetsAssetUuidCategoriesAddOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/categories-add',
  method: 'post'
}

const deleteAssetsAssetUuidCategoriesDeleteOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/categories-delete',
  method: 'delete'
}

const getAssetsAssetUuidRegisterOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/register',
  method: 'get'
}

const getAssetsAssetUuidRegisterAuthorizedOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/register-authorized',
  method: 'get'
}

const postAssetsAssetUuidReissueRequestOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/reissue-request',
  method: 'post'
}

const postAssetsAssetUuidReissueConfirmOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/reissue-confirm',
  method: 'post'
}

const getAssetsAssetUuidActivitiesOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/activities',
  method: 'get'
}

const getAssetsAssetUuidOwnershipsOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/ownerships',
  method: 'get'
}

const getAssetsAssetUuidBalanceOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/balance',
  method: 'get'
}

const getAssetsAssetUuidReissuancesOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/reissuances',
  method: 'get'
}
