#!/bin/bash

npm run build
cd ../sycamore-eclipse/WebContent/
rm -r *.js *.json index.html static favicon.ico
cd ../../sycamore-react/build/
cp -r * ../../sycamore-eclipse/WebContent/
cd ../../sycamore-react