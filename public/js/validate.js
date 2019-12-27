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
});