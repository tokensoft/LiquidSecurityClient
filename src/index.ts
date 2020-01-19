//@ts-ignore
global.fetch = require("node-fetch");
import * as ServiceGateway from './generated/gateway'
import * as General from './generated/general'
import * as Assets from './generated/assets'
import * as User from './generated/user'

const getAuthorization = (security: api.OperationSecurity) => {
  console.log({security})
  return Promise.resolve({})
}

const debug = (obj: any) => {
  console.log(JSON.stringify(obj, null, 2))
}

const main  = async () => {  
  const info = await General.getInfo()
  debug(info)

  const login = await User.postUserObtain_token({
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  })
  debug(login)

  ServiceGateway.init({
    fetchOptions:{
      headers: {
        Authorization: 'token ' + login.data.token
      }
    }
  });

  const assets = await Assets.getAssets()
  debug(assets)
}

main()
