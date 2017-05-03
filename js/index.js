var testApp = angular.module("testApp",[]);
	testApp.controller("testAppController",["$scope","$http",function($scope,$http){
    var btn = document.getElementById('btn');
		btn.onclick = function(){
			alert(111)
		}

		var u = navigator.userAgent;
		btn.innerHTML = u;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    //     setTimeout(function(){
    //     	alert('是否是Android：'+isAndroid);
    //     alert('是否是iOS：'+isiOS);
    // },1000)

function focus(){
    $('#forminput').focus();
}
// $scope.tijiao = function(){
//        $http.get("http://myserver/api").then(function(data) {  
//         focus()
//     }).catch(function(){
//        focus()
//     })
// }

$scope.tijiao = function(){
     $.ajax({
    url: "http://www.baidu.com/",
    async:false,
    success: function(data){
        alert(2)
    },
    error:function(data){
        alert(1)
    }
});
alert(3)
focus()
}

	//点击下一步时验证报错
    $scope.clickError = function (thisName, errTxt1, errTxt2) {
        var $this = $('#' + thisName),_thisVal = $this.val();
        //document.addEventListener("animationend", function (t) {
        //    $this.closest(".redbor").removeClass("active")
        //})
        //红框报错动画
        $this.closest(".redbor").addClass("active");
        window.setTimeout(function (e) {
            $this.closest(".redbor").removeClass("active")
        }, 1000);
        //顶部报错动画
        if (!_thisVal) {
            $('.error-tc').html(errTxt1).addClass("slide");
            window.setTimeout(function (e) {
                $('.error-tc').removeClass("slide");
            }, 2500);
        } else {
            $('.error-tc').html(errTxt2).addClass("slide");
            window.setTimeout(function (e) {
                $('.error-tc').removeClass("slide");
            }, 2500);
        }
    }
	}])