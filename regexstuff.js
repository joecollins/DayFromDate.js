function dateType(date){

var format_one = new RegExp(/(([\d]){2}([\/]|[-]){1}(\d{2})([\/]|[-]{1})([00-99]){2})/i); // 01-02-03
var format_two =new RegExp(/(([\d]){2}([\s]){1}(([Jan]|[Feb]|[Mar]){3,4})([\s]{1})([0000-9999]){4})/i); // 12 Jan 2012
var format_three = new RegExp(/((([January]|[February]|[March]|[April]|[May]|){3,9})([\s]{1})([a-z1-9]{3,4})([\s]{1})([0000-9999]){4})/i); // March 12th 2012
var format_four = new RegExp(/(((\d{1,2})([\/]|[-]){1}(\d{2})([\/]|[-]{1})(\d{2,4}))/i)   // 15/12/14 (day/month/year)

	if(format_one.test(date)){
		return "Format one";
	} else if(format_two.test(date)){
		return 'format two';
	} else if(format_three.test(date)){
		return 'format three';
	} else {
		return 'invalid format';
	}
}


