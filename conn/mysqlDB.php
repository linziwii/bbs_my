<?php

/**
 * @Author: 林紫薇
 * @Date:   2019-12-05 21:55:59
 * @Last Modified by:   林紫薇
 * @Last Modified time: 2019-12-06 20:54:00
 */

	$config = include '../config/config.php';

	//连接数据库
	//须在php.ini中修改;extension=php_mysqli.dll，;extension_dir="./ext"等内容才能使用mysqli
	$conn = new mysqli($config['servername'],$config['username'],$config['password'],$config['db']);

	if ( $conn->connect_error ) {
		die('数据库连接失败'.$conn->connect_error);
	}
