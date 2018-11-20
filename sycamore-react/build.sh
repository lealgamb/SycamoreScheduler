#!/bin/bash
npm run build
cd ../sycamore-maven/web/
rm -r static *.js *.json *.html *.ico *.png
cd ../../sycamore-react/build/
cp -r * ../../sycamore-maven/web/
cd ../../sycamore-maven
mvn package
cd ../sycamore-react
