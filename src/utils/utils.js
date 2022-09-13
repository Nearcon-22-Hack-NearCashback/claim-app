import { Account, connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from "../config";

const nearConfig = getConfig('mainnet')

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  window.keyStore = new keyStores.InMemoryKeyStore();
  window.nearConnection = await connect(Object.assign({ deps: { keyStore: window.keyStore } }, nearConfig))
  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(window.nearConnection)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()
  window.account = await new Account(window.nearConnection.connection, "cashback.nearprotocolua.near")

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.account || window.account, nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_claiming_key', 'get_cashback_amount'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['claim'],
  })
  console.log('window.nearConnection', window.nearConnection.connection);
}

export function logout() {
  window.walletConnection.signOut()
}

export async function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  await window.walletConnection.requestSignIn(nearConfig.contractName)
}
