#!/bin/bash
build=`npm run build`
rm build_log.txt
touch build_log.txt
echo "$build" >> build_log.txt
cd ../sycamore-maven/web/
rm -r static *.js *.json *.html *.ico *.png
cd ../../sycamore-react/build/
cp -r * ../../sycamore-maven/web/
cd ../../sycamore-react
