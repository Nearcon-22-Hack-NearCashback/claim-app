# Getting Started with Near Cashback Frontend App

## About frontend

Deployed frontend: https://app.nearcashback.com/claim

Simple frontend application with 1 page /claim that allows you to claim your cashback that you received on the receipt in QR-code way.
Here user don't need to login because we create functional key for our contract to get claim the money.
So the flow:
1. You have the link(QR-code) from receipt with private-key to claim money
2. We do view call on our smart-contract to get functional-key to use without login user
3. And grab amount of the cashback from SC
4. Then user click "Claim" button, receive, we lock the money and create the link via linkdrop
5. User redirects on linkdrop where create/login and grab cashback

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


Thanks for watchin, subscribes on us:
https://twitter.com/nearuaguild
https://t.me/nearprotocolua
https://t.me/nearprotocoluachannel