#!/bin/sh
echo "!!!! Start deploy "

cd ./deploy/
sleep 1
./uploaddata.sh
sleep 1
./uploadimage.sh
