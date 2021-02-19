#!/bin/sh
echo "!!!! Start "

source ./allconfig.cfg

for host in ${hostjq[*]}
do

	echo "=====开始执行资源文件部署至服务器：${host}:${prjName}"
	
	echo "${user}@${host}, location_static_data_path: ${location_static_data_path}"
	
	cd ${location_static_data_path}
	
	zip -r ${prjName}.zip ./*
	echo "删除原有zip，并上传zip包到服务器"
	ssh ${user}@${host} "pwd"
	ssh ${user}@${host} "rm ${prjName}.zip"
	scp ${prjName}.zip ${user}@${host}:~/${prjName}.zip
	
	echo "解压新zip包到指定static位置"
	if [  ! ${static_data_path} ]; then
        echo "static_data_path is null"
        exit
    fi
	# 如果目录不存在 目录
	ssh ${user}@${host} "
		if [ ! -d ${static_data_path} ]; then 
			mkdir -p ${static_data_path}
		fi
	"
	ssh ${user}@${host} "rm -rf ${static_data_path}/*"
	ssh ${user}@${host} "unzip -oq ~/${prjName}.zip -d ${static_data_path}/"
	rm -rf ${prjName}.zip
	
	echo "!!!! done upload-static"

done