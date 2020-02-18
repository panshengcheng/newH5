/*
 * timeDate.js
 * by LafiteWu	
 * by QQ:863512936
 * 2018-01-04 v1.0
 */


(function($) {
	$.fn.timeDate = function(options) {
		var that = $(this);
		var defaults = {
			show: "Y/M/D/W", //显示形式
     		zero: true, // 是否开启零,也是总开关，当它值为false时，下面的值无效
     		Month_zero: true, // 月份是否加零
     		Day_zero: true, // 日期上是否加零
     		Hours_zero: true, // 小时前是否加零
     		Min_zero: true, // 分钟前是否加零
     		Second_zero: true // 秒钟前加零
     	};
     	var data = $.extend(defaults,options);
     	var now = new Date(); 
     	var weekday = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
     	var time = {
     		year: now.getFullYear(),
     		month: now.getMonth()+1,
     		day: now.getDate(),
     		week: weekday[now.getDay()],
     		hours: now.getHours(),
     		minutes: now.getMinutes(),
     		seconds: now.getSeconds(),
     	};
     	if(data.zero) {
     		if(data.Month_zero) {
     			if(time.month < 10) {
	     			time.month = "0" + time.month;
	     		}
     		}
     		if(data.Day_zero) {
     			if(time.day < 10) {
	     			time.day = "0" + time.day;
	     		}
     		}
     		if(data.Hours_zero) {
     			if(time.hours < 10) {
	     			time.hours = "0" + time.hours;
	     		}
     		}
     		if(data.Min_zero) {
     			if(time.minutes < 10) {
	     			time.minutes = "0" + time.minutes;
	     		}
     		}
     		if(data.Second_zero) {
     			if(time.seconds < 10) {
	     			time.seconds = "0" + time.seconds;
	     		}
     		}
     	}
     	switch(data.show) {
     		case("Y"):
     			Html(time.year);
     			break;
     		case("M"):
     			Html(time.month);
     			break;
     		case("D"):
     			Html(time.day);
     			break;
     		case("H"):
     			Html(time.hours);
     			break;
     		case("m"):
     			Html(time.minutes);
     			break;
     		case("S"):
     			Html(time.seconds);
     			break;
     		case("W"):
     			Html(time.week);
     			break;
     		case("Y-M"):
     			Html(time.year+"年"+time.month+"月");
     			break;
     		case("Y/M"):
     			Html(time.year+"/"+time.month);
     			break;
     		case("M-D"):
     			Html(time.month+"月"+time.day+"日");
     			break;
     		case("M/D"):
     			Html(time.month+"/"+time.day);
     			break;
     		case("M-D-W"):
     			Html(time.month+"月"+time.day+"日 "+time.week);
     			break;
     		case("M/D/W"):
     			Html(time.month+"/"+time.day+" "+time.week);
     			break;
     		case("Y-M-D"):
     			Html(time.year+"年"+time.month+"月"+time.day+"日");
     			break;
     		case("Y-M-D-W"):
     			Html(time.year+"年"+time.month+"月"+time.day+"日 "+time.week);
     			break;
     		case("Y/M/D/W"):
     			Html(time.year+"/"+time.month+"/"+time.day+" "+time.week);
     			break;
     		case("Y/M/D"):
     			Html(time.year+"/"+time.month+"/"+time.day);
     			break;
     		case("H-m"):
     			Html(time.hours+":"+time.minutes);
     			break;
     		case("H-m-S"):
     			Html(time.hours+":"+time.minutes+":"+time.seconds);
     			break;
     		default:
     			throw new Error("Check if your format is correct");
     	}
     	function Html(a) {
     		that.html(a);
     	}
	}
})(jQuery);