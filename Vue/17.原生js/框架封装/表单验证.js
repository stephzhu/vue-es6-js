
//邮箱
function chkEmail(strEmail)
{
    if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(strEmail)) {
        return false;
    }
    else
    {
        return true;
    }
}

//电话
function chkPhone(str)
{
    var reg = /^1[3,4,5,8]\d{9}$/;
    return reg.test(str);
}

//QQ
function chkQQ(str)
{
    return /^\d{5,13}$/.test(str);
}

//身份证号码
function chkIDcard(as_SourceString)
{
    if(!/^[0-9]{6}[1-2]{1}[0-9]{3}[0-1]{1}[0-9]{1}[0-3]{1}[0-9]{1}[0-9]{3}[xX0-9]{1}$/g.test(as_SourceString))
    {
        return false;
    }
    else
    {
        return true;
    }
}
//整数验证
function chkInteger( str )
{
    var regu = /^[-]{0,1}[0-9]{1,}$/;
    return regu.test(str);
}
//刷新验证码
function reloadcode(obj)
{
    obj.setAttribute('src','/system/resource/js/message/createimage.jsp?'+Math.random());
}

//提交
function goSub()
{

    $(".msg").each(function()
    {
        $(this).remove();
    })
    var isTrue = true;
    //验证所有必填项是否为空
    $("#saveform [null='false']").each(function()
    {
        var _value = $(this).val();
        var nullmsg = $(this).attr("nullmsg");
        var msg = $(this).next(".msg");
        if(!nullmsg || nullmsg==null)
        {
            nullmsg="该项为必填项！";
        }
        if($.trim(_value)==""||_value==nullmsg)
        {
            if($(msg).size()==0)
                $(this).attr("placeholder",nullmsg);
            else
                $(msg).html(nullmsg);
            isTrue = false;
        }else
        {
            $(msg).remove();
        }
    })

    //验证已填（int型）项是否合法
    isTrue = chkAll("int", chkInteger, isTrue);
    //验证已填（email型）项是否合法
    isTrue = chkAll("email", chkEmail, isTrue);
    //验证已填（QQ型）项是否合法
    isTrue = chkAll("QQ", chkQQ, isTrue);
    //验证已填（idcard型）项是否合法
    isTrue = chkAll("idcard", chkIDcard, isTrue);
    //验证已填（phone型）项是否合法
    isTrue = chkAll("phone", chkPhone, isTrue);

    if(false)
    {
        if(isTrue)
        {
            var yzm = document.getElementById("yzm").value;
            if(yzm == "")
            {
                alert("请填写验证码！");
            }else
            {
                Contribute.getRand(yzm,callbackdata);
            }
            return false;
        }
    }else if(isTrue)
    {
        document.getElementById("saveform").submit();
    }
}

function callbackdata(data)
{
    if(data==false)
    {
        alert('验证码错误！');
    }else
    {
        document.getElementById("saveform").submit();
    }
}

//验证已填项是否合法
function chkAll(orgtype, fun, isTrue)
{
    this.fun = fun;
    var _this = this;
    $("#saveform [orgtype='"+orgtype+"']").each(function()
    {
        var _value = $(this).val();
        var nullmsg = $(this).attr("nullmsg");
        var errormsg = $(this).attr("errormsg");
        var msg = $(this).next(".msg");
        if(!nullmsg || nullmsg==null)
        {
            nullmsg="该项为必填项！";
        }
        if(!errormsg || errormsg==null)
        {
            errormsg="格式不合法！";
        }
        if($.trim(_value)==""||_value==nullmsg)
            return true;

        if(!_this.fun(_value))
        {
            if($(msg).size()==0){
                var value = $(this).val();
                $(this).val("");
                $(this).attr("placeholder",value+"  "+errormsg);
            }else
            {
                $(msg).html(errormsg);
            }
            isTrue = false;
        }else
        {
            $(msg).remove();
        }
    })
    return isTrue;
}


$(function()
{
    //为日期控件增添事件
    $("#saveform :text[orgtype='date']").each(function()
    {
        $(this).focus(function()
        {
            WdatePicker({dateFmt:'yyyy-MM-dd'});
        })
    })
})


function updmsg(id){
    var plvalue = $("#"+id).attr("placeholder");
    if(plvalue==""){
        return;
    }else{
        var value = plvalue.substring(0,plvalue.indexOf(" "));
        $("#"+id).attr("value",value);
    }
}
