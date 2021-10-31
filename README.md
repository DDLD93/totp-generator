###Cloud Time base One Time Password
# This TOTP cloud base application that generate a token code with an interval of 30sec..
# The is created to bring a client covinient since client can always log into account with out the fear of losing his security key or the authentication app
# This uses firebase authention to register and verify user upon login there allowing each client to have is own tailored exprience and privacy
# Then token is being generated server side hence the app invoke a cloud function deployed on firebase to do that with an interval of 30sec
# 

###Tools used for this project
React js
material UI and icons
react router DOM
Firebase auth
firebase cloud fuc=nction
firebase firestore
TOTP module developed by bellstrand
