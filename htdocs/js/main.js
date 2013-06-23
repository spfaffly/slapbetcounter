$(document).ready(function(){
	var myCountdown1 = new Countdown({
							width:900,
							height:200,
							rangeHi:"month",
							target: "slapbetcounter",
							style:"flip",
							labels	:	{
								font  	: "Special Elite",
								color 	: "#FFFFFF",
								weight	: "normal"	 // < - no comma on last item!
							},
							year  	: 2013,		// The target date's year (optional)
							month 	: 7,		// The target date's month (optional)
							day   	: 27,		// The target date's day (optional)
							hour  	: 8,		// The target date's hour (optional)
							ampm  	: "pm"		// Is the hour refering to AM (early/day) or PM (late/night)?
						});
});