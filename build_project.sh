#!/usr/bin/env bash

# download npm modules
npm install

# push project to webtask.io and capture URL
URL=$(./node_modules/.bin/wt create \
  --secret TWILIO_SID=$TWILIO_SID \
  --secret AUTH_TOKEN=$AUTH_TOKEN \
  --secret TO_NUM=$TO_NUM \
  --secret FROM_NUM=$FROM_NUM \
  temperature-texter.js | grep https)

# substitute URL into app.js
WEBTASK_URL=$URL ./node_modules/.bin/envify app.js > bundle.js
