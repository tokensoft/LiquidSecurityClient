/// <reference path="types.ts"/>
/** @module investors */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * List of all Investors.
 */
export function getInvestors(): Promise<api.Response<api.InvestorResponse[]>> {
  return gateway.request(getInvestorsOperation)
}

/**
 * Details of the Investor requested.
 * 
 * @param {number} investorId ID of investor
 * @return {Promise<module:types.InvestorResponse>} 
 */
export function getInvestorsInvestorId(investorId: number): Promise<api.Response<api.InvestorResponse>> {
  const parameters: api.OperationParamGroups = {
    path: {
      investorId
    }
  }
  return gateway.request(getInvestorsInvestorIdOperation, parameters)
}

/**
 * Adds an Investor
 * 
 * @param {module:types.InvestorAdd} body 
 * @return {Promise<module:types.InvestorResponse>} 
 */
export function postInvestorsAdd(body: api.InvestorAdd): Promise<api.Response<api.InvestorResponse>> {
  const parameters: api.OperationParamGroups = {
    body: {
      body
    }
  }
  return gateway.request(postInvestorsAddOperation, parameters)
}

/**
 * is_company can't be modified
 * 
 * @param {number} investorId ID of investor
 * @param {module:types.InvestorEdit} body 
 * @return {Promise<module:types.InvestorResponse>} 
 */
export function putInvestorsInvestorIdEdit(investorId: number, body: api.InvestorEdit): Promise<api.Response<api.InvestorResponse>> {
  const parameters: api.OperationParamGroups = {
    path: {
      investorId
    },
    body: {
      body
    }
  }
  return gateway.request(putInvestorsInvestorIdEditOperation, parameters)
}

/**
 * Deletes an Investor
 * 
 * @param {number} investorId ID of investor
 * @return {Promise<object>} Successful delete
 */
export function deleteInvestorsInvestorIdDelete(investorId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      investorId
    }
  }
  return gateway.request(deleteInvestorsInvestorIdDeleteOperation, parameters)
}

/**
 * Lists all Categories that can be associated with Investors.
 */
export function getInvestorsCategories(): Promise<api.Response<api.InvestorCategoryResponse[]>> {
  return gateway.request(getInvestorsCategoriesOperation)
}

/**
 * Adds a new category that can then be assigned to one or more Investors.
 * 
 * @param {module:types.InvestorCategoryAdd} body 
 * @return {Promise<module:types.InvestorCategoryResponse>} Investor Category
 */
export function postInvestorsCategoriesAdd(body: api.InvestorCategoryAdd): Promise<api.Response<api.InvestorCategoryResponse>> {
  const parameters: api.OperationParamGroups = {
    body: {
      body
    }
  }
  return gateway.request(postInvestorsCategoriesAddOperation, parameters)
}

/**
 * Returns details of the category. The id can be used to associate investors with the category elsewhere.
 * 
 * @param {number} categoryId ID of investor category
 * @return {Promise<module:types.InvestorCategoryResponse>} Investor Category
 */
export function getInvestorsCategoriesCategoryId(categoryId: number): Promise<api.Response<api.InvestorCategoryResponse>> {
  const parameters: api.OperationParamGroups = {
    path: {
      categoryId
    }
  }
  return gateway.request(getInvestorsCategoriesCategoryIdOperation, parameters)
}

/**
 * Allows the update of the name and description of an investor category.
 * 
 * @param {number} categoryId ID of investor category
 * @param {module:types.InvestorCategoryEdit} body 
 * @return {Promise<module:types.InvestorCategoryResponse>} Investor Category
 */
export function putInvestorsCategoriesCategoryIdEdit(categoryId: number, body: api.InvestorCategoryEdit): Promise<api.Response<api.InvestorCategoryResponse>> {
  const parameters: api.OperationParamGroups = {
    path: {
      categoryId
    },
    body: {
      body
    }
  }
  return gateway.request(putInvestorsCategoriesCategoryIdEditOperation, parameters)
}

/**
 * Delete a category.
 * 
 * @param {number} categoryId ID of category
 * @return {Promise<object>} Successful delete
 */
export function deleteInvestorsCategoriesCategoryIdDelete(categoryId: number): Promise<api.Response<any>> {
  const parameters: api.OperationParamGroups = {
    path: {
      categoryId
    }
  }
  return gateway.request(deleteInvestorsCategoriesCategoryIdDeleteOperation, parameters)
}

/**
 * An Investor can be assigned to one or more investor categories using the categories array and providing the ids of the categories to associate with the Investor. 
 * There must be Categories set up (you can use the /investors/categories/add API) before an Investor can be assigned to them.
 * The wallet id should be the Green wallet id that has been created for the Investor.
 * 
 * @param {number} categoryId ID of investor category
 * @param {object} body Investor ID or array of Investor IDs
 * @return {Promise<module:types.InvestorCategoryResponse>} Investor Category
 */
export function postInvestorsCategoriesCategoryIdInvestorsAdd(categoryId: number, body: any): Promise<api.Response<api.InvestorCategoryResponse>> {
  const parameters: api.OperationParamGroups = {
    path: {
      categoryId
    },
    body: {
      body
    }
  }
  return gateway.request(postInvestorsCategoriesCategoryIdInvestorsAddOperation, parameters)
}

/**
 * Remove an array of investors from a category.
 * 
 * @param {number} categoryId ID of investor category
 * @param {object} body Investor ID or array of Investor IDs
 * @return {Promise<module:types.InvestorCategoryResponse>} Investor Category
 */
export function deleteInvestorsCategoriesCategoryIdInvestorsDelete(categoryId: number, body: any): Promise<api.Response<api.InvestorCategoryResponse>> {
  const parameters: api.OperationParamGroups = {
    path: {
      categoryId
    },
    body: {
      body
    }
  }
  return gateway.request(deleteInvestorsCategoriesCategoryIdInvestorsDeleteOperation, parameters)
}

const getInvestorsOperation: api.OperationInfo = {
  path: '/investors/',
  method: 'get'
}

const getInvestorsInvestorIdOperation: api.OperationInfo = {
  path: '/investors/{investorId}',
  method: 'get'
}

const postInvestorsAddOperation: api.OperationInfo = {
  path: '/investors/add',
  method: 'post'
}

const putInvestorsInvestorIdEditOperation: api.OperationInfo = {
  path: '/investors/{investorId}/edit',
  method: 'put'
}

const deleteInvestorsInvestorIdDeleteOperation: api.OperationInfo = {
  path: '/investors/{investorId}/delete',
  method: 'delete'
}

const getInvestorsCategoriesOperation: api.OperationInfo = {
  path: '/investors/categories',
  method: 'get'
}

const postInvestorsCategoriesAddOperation: api.OperationInfo = {
  path: '/investors/categories/add',
  method: 'post'
}

const getInvestorsCategoriesCategoryIdOperation: api.OperationInfo = {
  path: '/investors/categories/{categoryId}',
  method: 'get'
}

const putInvestorsCategoriesCategoryIdEditOperation: api.OperationInfo = {
  path: '/investors/categories/{categoryId}/edit',
  method: 'put'
}

const deleteInvestorsCategoriesCategoryIdDeleteOperation: api.OperationInfo = {
  path: '/investors/categories/{categoryId}/delete',
  method: 'delete'
}

const postInvestorsCategoriesCategoryIdInvestorsAddOperation: api.OperationInfo = {
  path: '/investors/categories/{categoryId}/investors-add',
  method: 'post'
}

const deleteInvestorsCategoriesCategoryIdInvestorsDeleteOperation: api.OperationInfo = {
  path: '/investors/categories/{categoryId}/investors-delete',
  method: 'delete'
}
