/// <reference path="types.ts"/>
/** @module assignmentsanddistributions */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * List of asset assignments.
 * 
 * An assignment is an allocation of an asset to an investor. An assignment can be updated to adjust the amount assigned and also to prepare an assignment for distribution using /assets/{assetUuid}/assignments/{assignmentId}/edit.
 * If you want to distribute a lesser amount than the amount already assigned, you must reduce the amount assigned (what will be the remaining amount assigned) and create another assignment entry for the investor that is flagged as ready_for_distribution and set the amount to the value you want to later distribute.
 * 
 * Assignments flagged as ready_for_distribution that do not have a distribution_uuid value will be included in the distribution transaction script returned by /assets/{assetUuid}/distributions/create/, which will also assign and return a distribution_uuid which can be used in distribution related api calls.
 * 
 * Assignments with a distribution_uuid and a status of pending can either be cancelled using /assets/{assetUuid}/distributions/{distributionUuid}/cancel or the transaction performing the distribution can be confirmed using /assets/{assetUuid}/distributions/{distributionUuid}/confirm.
 * 
 * Assignements with a status of 'unconfirmed' or 'confirmed' can be viewed using /{assetUuid}/distributions/{distributionUuid}/details. The status refers to the Liquid transaction status.
 * 
 * An investor may only have one entry of status 'assigned' and one entry with a status of either 'pending' or 'unconfirmed'. An investor may have many rows with a status of 'confirmed'.
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.Assignment[]>} List of Asset Assignments
 */
export function getAssetsAssetUuidAssignments(assetUuid: string): Promise<api.Response<api.Assignment[]>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidAssignmentsOperation, parameters)
}

/**
 * Details of the assignment. See /assets/{assetUuid}/assignments for description of returned fields and available actions.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {number} assignmentId Id of assignment
 * @return {Promise<module:types.Assignment>} Asset Assignment
 */
export function getAssetsAssetUuidAssignmentsAssignmentId(assetUuid: string, assignmentId: number): Promise<api.Response<api.Assignment>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid,
      assignmentId
    }
  }
  return gateway.request(getAssetsAssetUuidAssignmentsAssignmentIdOperation, parameters)
}

/**
 * The investor parameter should be the id of the investor the assigment is being made against.
 * 
 * You can only set the 'ready_for_distribution' value to true if the investor has no currently 'pending' or 'unconfirmed' distributions. You can only have one entry with a 'ready_for_distribution' value of true and a null 'distribution_uuid' value. 
 * 
 * See /assets/{assetUuid}/assignments for description of returned fields and available actions.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {object} body 
 * @return {Promise<module:types.Assignment[]>} Asset Assignments
 */
export function postAssetsAssetUuidAssignmentsCreate(assetUuid: string, body: any): Promise<api.Response<api.Assignment[]>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    },
    body: {
      body
    }
  }
  return gateway.request(postAssetsAssetUuidAssignmentsCreateOperation, parameters)
}

/**
 * Allows the amount assigned and the ready_for_distribution flag to be amended. You can only have one entry with a 'ready_for_distribution' value of true and a null 'distribution_uuid' value.
 * 
 * See /assets/{assetUuid}/assignments for description of returned fields and available actions.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {number} assignmentId Id of assignment
 * @param {object} body 
 * @return {Promise<module:types.Assignment>} Asset Assignment
 */
export function putAssetsAssetUuidAssignmentsAssignmentIdEdit(assetUuid: string, assignmentId: number, body: any): Promise<api.Response<api.Assignment>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid,
      assignmentId
    },
    body: {
      body
    }
  }
  return gateway.request(putAssetsAssetUuidAssignmentsAssignmentIdEditOperation, parameters)
}

/**
 * Sets the assignment to deleted so it will be excluded from future lists and details views etc.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {number} assignmentId Id of assignment
 * @return {Promise<object>} Successful delete
 */
export function deleteAssetsAssetUuidAssignmentsAssignmentIdDelete(assetUuid: string, assignmentId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid,
      assignmentId
    }
  }
  return gateway.request(deleteAssetsAssetUuidAssignmentsAssignmentIdDeleteOperation, parameters)
}

/**
 * Distributions of assigned amounts of an asset. A distribution represents the sending of an asset amount to one or more investors. One of more confirmed Liquid transactions represent the completion of a distribution. The returned data includes details of transaction data and is grouped by distribution_uuid. A distribution may span multiple transactions, depending on the number of outputs required. The distribution_status field is derived from the status of each transaction making up the distribution.
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.Distribution[]>} List of Asset Distributions
 */
export function getAssetsAssetUuidDistributions(assetUuid: string): Promise<api.Response<api.Distribution[]>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidDistributionsOperation, parameters)
}

/**
 * Returns details of the Assets distribution.
 * 
 * See /assets/{assetUuid}/distributions for an exlanation of the structure of a distribution.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {string} distributionUuid UUID of distribution
 * @return {Promise<module:types.Distribution>} Asset Distribution details
 */
export function getAssetsAssetUuidDistributionsDistributionUuid(assetUuid: string, distributionUuid: string): Promise<api.Response<api.Distribution>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid,
      distributionUuid
    }
  }
  return gateway.request(getAssetsAssetUuidDistributionsDistributionUuidOperation, parameters)
}

/**
 * Creates an asset distribution script that can be run locally against a Liquid node to distribute the asset to investors.
 * 
 * Any assignments marked as 'ready_for_distribution' without an existing 'distribution_uuid' will be assigned a distribution_uuid and a script generated to perform the distribution transaction. When run, the script will also send the distribution_uuid and transaction details back to the /assets/{assetUuid}/distributions/{distributionUuid}/confirm api so Liquid Securities can monitor the transaction for confirmation.
 * 
 * @param {string} assetUuid UUID of asset
 * @return {Promise<module:types.DistributionCreate>} Asset Distribution Script
 */
export function getAssetsAssetUuidDistributionsCreate(assetUuid: string): Promise<api.Response<api.DistributionCreate>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid
    }
  }
  return gateway.request(getAssetsAssetUuidDistributionsCreateOperation, parameters)
}

/**
 * Confirms the distribution transaction was made. 'tx_data' is that returned from liquid-cli's 'gettransaction' method, including surrounding '{' and '}' marks; 'change_data' is that returned from liquid-cli's 'listunspent' method, including surrounding '{' and '}' marks.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {string} distributionUuid UUID of distribution
 * @param {object} body 
 * @return {Promise<object>} Asset Distribution
 */
export function postAssetsAssetUuidDistributionsDistributionUuidConfirm(assetUuid: string, distributionUuid: string, body: any): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid,
      distributionUuid
    },
    body: {
      body
    }
  }
  return gateway.request(postAssetsAssetUuidDistributionsDistributionUuidConfirmOperation, parameters)
}

/**
 * Cancel an asset distribution. The status of the distribution must be 'pending'. Removes the 'distribution_uuid' from pending distributions. This essentially returns the distribution to an assignment marked as 'ready_for_distribution'.
 * 
 * @param {string} assetUuid UUID of asset
 * @param {number} distributionUuid UUID of distribution batch
 * @return {Promise<object>} The distribution was cancelled
 */
export function deleteAssetsAssetUuidDistributionsDistributionUuidCancel(assetUuid: string, distributionUuid: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      assetUuid,
      distributionUuid
    }
  }
  return gateway.request(deleteAssetsAssetUuidDistributionsDistributionUuidCancelOperation, parameters)
}

const getAssetsAssetUuidAssignmentsOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/assignments',
  method: 'get'
}

const getAssetsAssetUuidAssignmentsAssignmentIdOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/assignments/{assignmentId}',
  method: 'get'
}

const postAssetsAssetUuidAssignmentsCreateOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/assignments/create',
  method: 'post'
}

const putAssetsAssetUuidAssignmentsAssignmentIdEditOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/assignments/{assignmentId}/edit',
  method: 'put'
}

const deleteAssetsAssetUuidAssignmentsAssignmentIdDeleteOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/assignments/{assignmentId}/delete',
  method: 'delete'
}

const getAssetsAssetUuidDistributionsOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/distributions',
  method: 'get'
}

const getAssetsAssetUuidDistributionsDistributionUuidOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/distributions/{distributionUuid}',
  method: 'get'
}

const getAssetsAssetUuidDistributionsCreateOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/distributions/create/',
  method: 'get'
}

const postAssetsAssetUuidDistributionsDistributionUuidConfirmOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/distributions/{distributionUuid}/confirm',
  method: 'post'
}

const deleteAssetsAssetUuidDistributionsDistributionUuidCancelOperation: api.OperationInfo = {
  path: '/assets/{assetUuid}/distributions/{distributionUuid}/cancel',
  method: 'delete'
}
