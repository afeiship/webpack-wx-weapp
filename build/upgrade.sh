#!/usr/bin/env bash

rm -rf package-lock.json
rm -rf node_modules/next-*
npm install --registry=https://registry.npm.taobao.org
