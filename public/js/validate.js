<<<<<<< HEAD
$("#dl").bootstrapValidator({
    live: "submitted",
    message: "验证失败",
    fields: {
        username: {
            message: "验证失败",
            validators: {
                notEmpty: {
                    message: "用户名不能为空",

                },
                stringLength: {
                    min: 3,
                    max: 8,
                    message: '密码长度必须大于3位,小于8位'
                }
            },
        },
        pwd: {
            message: '验证失败',
            validators: {
                notEmpty: {
                    message: '密码不能为空'
                },
                stringLength: {
                    min: 6,
                    message: '密码长度必须大于6位'
                }
            }
        }
    }
=======
function validator() {
    $("#loginForm").bootstrapValidator({
        live: "submitted",
        message: "登录失败",
        fields: {
            username: {
                message: "登录失败",
                trigger: 'keyup',
                validators: {
                    notEmpty: {
                        message: "请输入用户名",

                    },
                },
            },
            pwd: {
                message: '登录失败',
                trigger: 'keyup',
                validators: {
                    notEmpty: {
                        message: '请输入密码'
                    }

                }
            }
        }
    });
    $("#registerForm").bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: "submitted",
        message: "注册失败",
        fields: {
            username: {
                message: "注册失败",
                trigger: 'keyup',
                validators: {
                    notEmpty: {
                        message: "用户名不能为空",

                    },
                    stringLength: {
                        min: 5,
                        max: 12,
                        message: '在5-12个字符之间'
                    },
                    regexp: {
                        regexp: /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/,
                        message: '不能包含特殊字符',
                    }

                },
            },
            pwd: {
                message: '注册失败',
                trigger: 'keyup',
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '需要在6-18位之间'
                    },
                    regexp: {
                        regexp: /^[A-Za-z0-9_]+$/,
                        message: '只能是字母、数字或下划线',
                    }

                }
            },
            repwd: {
                message: '注册失败',
                trigger: 'keyup',
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '需要在6-18位之间'
                    },
                    regexp: {
                        regexp: /^[A-Za-z0-9_]+$/,
                        message: '只能是字母、数字或下划线',
                    },
                    identical: {
                        field: 'pwd',
                        message: '用户密码与确认密码不一致！'
                    },


                }
            },
            _email:{
                // message: '注册失败',
                trigger: 'keyup',
                validators:{
                    notEmpty:{
                        message:"邮箱不能为空"
                    },
                }
            },
        }
    });


}

$(document).ready(function() {
    validator();
});

//清除和重置校验
$("#login").on("hidden.bs.modal", function() {

    //清空表单缓存信息
    $("#loginForm")[0].reset();
    //验证信息清空和重置
    $("#loginForm").data('bootstrapValidator').destroy();
    $("#loginForm").data('bootstrapValidator', null);
    validator();
});

$("#register").on("hidden.bs.modal", function() {

    //清空表单缓存信息
    $("#registerForm")[0].reset();
    //验证信息清空和重置
    $("#registerForm").data('bootstrapValidator').destroy();
    $("#registerForm").data('bootstrapValidator', null);
    validator();
>>>>>>> bootstrap3 、验证
});