(function(){

	var DayDate = function(date){

	
	this.myDate = function(entry){
		if(entry == undefined){
			entry = new Date();
			var today = entry.getUTCDay();
			if (today == 0){
				return ("Today is Sunday");
			}		
			else if (today == 1){
				return("Today is Monday");
			}				
			else if (today == 2){
				return("Today is Tuesday");
			}				
			else if (today == 3){
				return("Today is Wednesday");
			}				
			else if (today == 4){
				return("Today is Thursday");
			}				
			else if (today == 5){
				return("Today is Friday");
			}				
			else if (today == 6){
				return("Today is Saturday");
			}
		}
		else{
		
	
	
			var format_one = new RegExp(/(([\d]){2}([\/]|[-]){1}(\d{2})([\/]|[-]{1})([00-99]){2})/i); // 01-02-03 (day/month/year shortform)
			var format_two =new RegExp(/(([\d]){2}([\s]|[\/]|[-]){1}(([Jan]|[Feb]|[Mar]|[Apr]|[May]|[June]|[July]|[Aug]|[Sept]|[Oct]|[Nov]|[Dec]|[January]|[February]|[March]|[April]|[May]|[June]|[July]|[August]|[September]|[October]|[November]|[December]){3,9})([\s]|[\/]|[-]1})([0000-9999]){4})/i); // 12 Jan 2012
			var format_three = new RegExp(/((([January]|[February]|[March]|[April]|[May]|){3,9})([\s]{1})([a-z1-9]{3,4})([\s]{1})([0000-9999]){4})/i); // March 12th 2012

			if(format_one.test(entry)){
				//return "Format one" - This is  01-02-03 (day/month/year shortform)
				var date = entry.split(/[\s,\/-]+/);
				var month = date[1];
				var day = parseFloat(date[0]);
				var century = 20;
				var year = date[2]
			} else if(format_two.test(entry)){
				//return 'format two' - this is 12 Jan 2012
				var date = entry.split(/[\s,\/-]+/);
				var month = date[1].toLowerCase();
				var day = parseFloat(date[0]);

				var yandc = date[2];
				var c = ""+ yandc[0] + "" +  yandc[1]; 
				var y = ""+ yandc[2] + "" +  yandc[3]; 
				
				var century = c;
				var year = y;
				
			} else if(format_three.test(entry)){
				//return 'format three' - March 12th 2012
				var date = entry.split(/[\s,\/-]+/);
				var month = date[0].toLowerCase();
			
			
				var day = parseFloat(date[1]);

				var yandc = date[2];
				var c = ""+ yandc[0] + "" +  yandc[1]; 
				var y = ""+ yandc[2] + "" +  yandc[3]; 
			
				var century = c;
				var year = y;
			
			} 
			else {
				return 'invalid format';
			}

			//change the month value to work in the algorithm
				if (month == "january" || month == "october" || month == "01" || month == "10" || month == "jan" || month == "oct") {
					if(year % 4 == 0){
						month = -1;
					}
					else {
						month = 0;
					}
				} else if(month == "may" || month == "05" || month == "may"){
					month = 1;
				} else if(month == "august" || month == "08" || month == "aug"){
					month = 2;
				} else if(month == "february" || month == "march" || month == "november" || month == "02" || month == "03" || month == "11" || month == "feb" || month == "mar" || month == "nov"){
					if(year % 4 == 0){
						month = 2;
					}
					else {
						month = 3;
					}
				} else if(month == "june" || month == "06" || month == "jun"){
					month = 4
				} else if(month == "september" || month == "december"  || month == "09" || month == "12" || month == "sept" || month == "dec"){
					month = 5
			} else if(month == "april" || month == "july" || month == "04" || month == "07" || month == "apr" || month == "july"){
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
	}
	
	this.test = function(values){
		var test = values+1;
		console.log(test);
	}
	
	}
	// Pass the module back to window
	window.DayDate = DayDate;
	
})();