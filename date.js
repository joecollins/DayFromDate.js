(function(){

	var DayDate = function(date){
	
	this.myDate = function(day, month, year, century){
		month = month.toLowerCase();
		day = parseFloat(day);
		
		//change the month value to work in the algorithm
			if (month == "january" || month == "october") {
				if(year % 4 == 0){
					month = -1;
				}
				else {
					month = 0;
				}
			} else if(month == "may"){
				month = 1;
			} else if(month == "august"){
				month = 2;
			} else if(month == "february" || month == "march" || month == "november"){
				if(year % 4 == 0){
					month = 2;
				}
				else {
					month = 3;
				}
			} else if(month == "june"){
				month = 4
			} else if(month == "september" || month == "december"){
				month = 5
			} else if(month == "april" || month == "july"){
				month = 6
			}else {
				console.log("Month is missing");
			}	
		
		//change the year value to work in the algorithm
			zero_years = ['00','06','17','23','28','34','45','51','56','62','73','79','84','90'];
			one_years = ['01','07','12','18','29','35','40','46','57','63','68','74','85','91','96'];
			two_years = ['02','13','19','24','30','41','47','52','58','69','75','80','86','97'];
			three_years = ['03','08','14','24','31','36','42','53','59','64','70','81','87','92','98'];
			four_years = ['09','15','20','26','37','43','48','54','65','71','76','82','93','99'];
			five_years = ['04','10','21','27','32','38','49','55','60','66','77','83','88','94'];
			six_years = ['05','11','16','22','33','39','44','50','61','67','72','78','89','95'];
			
			if(zero_years.indexOf(year) >= 0){
				year = 0;
			} else if(one_years.indexOf(year)  >= 0){
				year = 1;
			} else if(two_years.indexOf(year)  >= 0){
				year = 2;
			} else if(three_years.indexOf(year)  >= 0){
				year = 3;
			} else if(four_years.indexOf(year)  >= 0){
				year = 4;
			} else if(five_years.indexOf(year)  >= 0){
				year = 5;
			} else if(six_years.indexOf(year)  >= 0){
				year = 6;
			} else {
				console.log("Year is missing");
			}
			
		var base = Math.floor(century/4)*4;
		var dif = century - base;
		var holder = [6,4,2,0];
		century = holder[dif];
			
		var datecalc =  Math.floor((day+month+year+(year/4)+century) % 7);
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		
		return days[datecalc] ? days[datecalc]  : 'unknown';
	
	}
	
	this.test = function(values){
		var test = values+1;
		console.log(test);
	}
	
	}
	// Pass the module back to window
	window.DayDate = DayDate;
	
})();