<?php

/**
 * @Author: 林紫薇
 * @Date:   2019-12-05 21:28:11
 * @Last Modified by:   林紫薇
 * @Last Modified time: 2019-12-09 22:16:44
 * */

/*
 *项目文件初始化
 */
error_reporting(0);
	//头设置
	header('Content-type:text/html;charset=utf-8');
	//定义常量
	define("DIR_ROOT", dirname(_FILE_).'/');		//当前目录的绝对路径

	define("DIR_CONFIG", DIR_ROOT . 'config/');

	define("DIR_CONN", DIR_ROOT .'/../'. 'conn/');

	define('DIR_MODEL', DIR_ROOT .'/../'. 'model/');

	define("DIR_VIEW", DIR_ROOT .'/../'. 'view/');

	//引入前端资源时要用相对路径
	define("DIR_PUBLIC", DIR_ROOT . 'public');

	define("DIR_UPLOAD", DIR_ROOT .'/../'. 'upload/');
	//echo DIR_ROOT.'<hr>'.DIR_CONFIG.'<HR>'.DIR_CONN.'<HR>'.DIR_CORE;

?>
