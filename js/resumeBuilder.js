// define JSON variables

var bio = {
	"name" : "Alex Moaveni",
	"role" : "Computer Graphics",
	"contacts" : {
		"mobile" : "310 733 0474",
		"email" : "almoav@gmail.com",
		"github" : "github.com/almoav",
		"twitter" : "n/a",
		"location" : "Los Angeles, CA"
		},
	"welcomessage" : "This is my resume, there are many like it but this is my own",
	"skills" : ["programming", "animation", "buoyancy control"],
	//"biopic" : "url"
	"biopic" : "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/10352909_10100423994039699_2550655943928779194_n.jpg?oh=fc0800b56955b4a19ed0482ad4330eb1&oe=55DA8B9C&__gda__=1436775281_9d889574fa01332ab6a15ff6569a6f77"
	}

bio.display = function(){
	// header
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	// top contacts
	for (contact in bio.contacts){
		var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
		formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContact);
	}

	// bio pic
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic)

	// welcome msg
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomessage);
	$("#header").append(formattedWelcome);

	// skills


}

bio.display();

var education = {
	"schools" : 
	[
		{
			"name" : "Chapman University",
			"location" : "Orange, CA",
			"degree" : "BFA",
			"majors" : ["Digital Art"],
			"dates" : 2009,
			"url" : "http://www.chapman.edu/"

		}
	],
	"online courses" :
	[
		{
			"title" : "Front-End Web Devoloper Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/"
		}
	]
}

education.display = function(){
	console.log("display education function")
}	

var work = {
	"jobs" : [
		{
			"employer" : "Sony Pictures Imageworks",
			"title" : "Fx Technical Director",
			"location" : "Culver City, CA",
			"dates" : "January 2015 - July 2015",
			"description" : "Artist position, responsible for the creation of stylized natural phenomena using simulated and procedural animation methods."
		},
		{
			"employer" : "Stereo D, LLC.",
			"title" : "VFX Technical Director",
			"location" : "Burbank, CA",
			"dates" : "March 2014 - January 2015",
			"description" : "Technical/artist position, responsible for VFX pipeline development, template scene generation, asset management + task tracking and some shot work."

		},
		{
			"employer" : "Sony Pictures Imageworks",
			"title" : "Fx Technical Director",
			"location" : "Culver City, CA",
			"dates" : "January 2012 - February 2014",
			"description" : "Artist position, responsible for the creation of stylized natural phenomena using simulated and procedural animation methods."
		},
		{
			"employer" : "The Mill",
			"title" : "Fx Artist",
			"location" : "Los Angeles, CA",
			"dates" : "February 2010 - February 2012",
			"description" : "Artist position, responsible for the creation of stylized natural phenomena using simulated and procedural animation methods."
		}		
	]
}

work.display = function(){
	console.log("display education function")	
}

var projects = [
	{
		"title" : "Hotel Transylvania 2",
		"dates" : "January 2015 - July 2015",
		"description" : "My highlights were large scale FLIP sims, vast ocean texture mapping, and tile artifact reduction dev.",
		"images": []
	},
	{
		"title" : "Mad Max",
		"dates" : "July 2014 - October 2014",
		"description" : "I created tire dust kickup and dust wash template which were then propagated to almost 800 shots via render scripting.",
		"images": []
	},
	{
		"title" : "The Amazing Spiderman 2",
		"dates" : "September 2013 - February 2014",
		"description" : "Various electricity effects using procedural animation and realistic tear gas simulation.",
		"images": []
	},
	{
		"title" : "Cloudy with a Chance of Meatballs 2",
		"dates" : "August 2012 - August 2013",
		"description" : "I did a little bit of everything from FLIP fluids, pyroclastics clouds, Rigid Body Dynamics, procedural animation, etc.",
		"images": []
	},
	{
		"title" : "Hotel Transylvania",
		"dates" : "February 2012 - August 2012",
		"description" : "Procedural electricity, large FLIP simulation and volumetric smoke sims",
		"images": []
	}

]

projects.display = function(){
	console.log("display function projects");
}