var work = {
    "jobs": [
        {
            "employer": "ICC Georgia",
            "title": "Adviser to Chairman",
            "location": "Tbilisi, Georgia",
            "dates": "December 2016-present",
            "description": "Responsible for defending and lobbying interests of members of ICC Georgia. Work with the government on regulations that affect business climate"
},
        {
            "employer": "ICC Georgia",
            "title": "Secpnd Vice Chairman",
            "location": "Tbilisi, Georgia",
            "dates": "May 2015-December 2016",
            "description": "Responsible for defending and lobbying interests of members of ICC Georgia. Work with the government on regulations that affect business climate"
},

        {
            "employer": "Petrocas Energy Group",
            "title": "Vice President, Marketing & PR",
            "location": "Tbilisi, Georgia",
            "dates": "March 2014-November 2016",
            "description": "Responsible for marketing strategy development of the group and its implementation. Established good relations with Georgian media, conducted press conferences for reporters. Acted as a spokesperson for billionaire (according to Forbes magazine) of Georgian origin Mr. David Iakobashvili. Developed marketing research plan for Gulf, biggest in the country gas station network, retail branch of the group. Conducted GR activities for the group and lobbied its interests with the government of Georgia."
},

        {
            "employer": "Japan Tobacco International",
            "title": "Corporate Affairs and Communications Director for Caucasus",
            "location": "Tbilisi, Georgia",
            "dates": "August 2011-February 2014",
            "description": "Monitored regulatory environment of tobacco in three markets of Caucasus – Georgia, Azerbaijan and Armenia. Actively engaged with Governments of Caucasus countries to defend interests of JTI and to shape regulations in favor of the industry. In Georgia, as a result of effective engagement with very anti-tobacco government, succeeded to maintain existing regulations that led to increase of sales of JTI Caucasus and stable operating environment. Established good relations with all three government of Caucasus at the highest levels – PM’s, ministers, MPs, departmental heads. Established excellent relations with media in the region that resulted in very favorable for tobacco industry news coverage. Developed excise and regulatory strategies for the markets. Developed internal and external communication strategies and successfully implemented. Conducted successful PR and GR campaigns that turned JTI as a first point of reference among tobacco companies present in the region for media and government officials for tobacco related issues."
},
        {
            "employer": "Government of Georgia",
            "title": "Head of Press Service of Prime Minister of Georgia",
            "location": "Tbilisi, Georgia",
            "dates": "February 2010-August 2011",
            "description": "Organized news conferences for PM . Acted as a speaker of PM and addressed media on behalf of the government. Took part in high level negotiations on Russia’s accession to WTO. Met with State Secretary of US Mrs. Hilary Clinton in Washington. Twice met with PM Secretary General of UN Mr. Ban Ki-Moon. Participated in negotiations with potential investors in Georgian economy, discussed multi-million and billion investment projects. reated web site of the government of Georgia - www.government.gov.ge."
},

        {
            "employer": "Thomson Reuters",
            "title": "Economic & Technology news Correspondent in Caucasus",
            "location": "Tbilisi, Georgia",
            "dates": "August 1997-December 2009",
            "description": "Wrote stories about technology and economic events in Caucasus. Reported about government’s economic activities. Accompanied Georgian highest level officials during their visits abroad several times (Including visit to White House and meeting with former president of US George W. Bush). Regularly wrote economic analyses of the situation in the region."
}
    ],

    "display": "function"
};

var projects = {
    "projects": [
        {
            "title": "Personal Portfolio web page",
            "dates": "May 2017",
            "description": "This is my web page",
            "images": ["images/webpage.png"]

},

        {
            "title": "Animal Card",
            "dates": "May 2017",
            "description": "This is my first project",
            "images": ["images/dog.png"]

}
],
    "display": "function"
};


var bio = {
    "name": "Nikoloz Mchedlishvili",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+995 599 330403",
        "email": "mchedlish@yahoo.com",
        //        gitHub changed to github
        "github": "mchedlish",
        "twitter": "@NikoGeorgia",
        "location": "Tbilisi, Georgia"
    },
    "welcomeMessage": "I'm a web developer with Udacity NanoDegree :)",

    "skills": ["HTML 5", "CSS 3", "JavaScript", "jQuery", "JSON"],
    "biopic": "images/nik.jpg",
    "display": "function"
};

var education = {

    "schools": [

        {
            "name": "Grenoble Business School (France)",
            "location": "Tbilisi Campus, Georgia",
            "degree": "MBA",
            "majors": ["Global Management"],
            "dates": "2008-2011"
        },

        {
            "name": "Tbilisi State University",
            "location": "Tbilsi, Georgia",
            "degree": "Master of Science",
            "majors": ["Theoretical Physics", "Solid State Physics"],
            "dates": "1986-1991"
        }
        ],
    "onlineCourses": [
        {
            "title": "The Complete jQuery Course: From Beginner To Advanced",
            "school": "udemy.com",
            "dates": "May 2017",
            "url": "https://www.udemy.com/certificate/UC-LU6C6UKG/"
       },



        {
            "title": "Git Essential Training",
            "school": "linkedin.com",
            "dates": "May 2017",
            "url": "https://www.linkedin.com/learning/git-essential-training"
       },


        {
            "title": "HTML5.1x: HTML5 Part 1: HTML5 Coding Essentials and Best Practices",
            "school": "edX.org",
            "dates": "Dec 2016",
            "url": "https://courses.edx.org/certificates/c35f1e6d3f674f2a8d2a5945205ae66c"
       },

        {
            "title": "JavaScript Exam",
            "school": "w3schools.com",
            "dates": "Nov 2016",
            "url": "http://www.refsnesdata.no/certification/w3certified.asp?email=mchedlish@yahoo.com"
       },


        {
            "title": "HTML5.0x: HTML5 Introduction",
            "school": "edX.org",
            "dates": "Oct 2016",
            "url": "https://courses.edx.org/certificates/d8d667c2387645f0a241bfc6cd34cb0c"
       }

   ],

    "display": "function"

};

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

education.display = function () {

    $("#education").append(HTMLschoolStart);
    for (var i = 0; i <= education.schools.length - 1; i++) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

        //        location added here
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);

    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var k = 0; k <= education.onlineCourses.length - 1; k++) {
        var fortmattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        $(".education-entry:last").append(fortmattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", "Click here to view certificate");
        formattedonlineURL = formattedonlineURL.replace("#", education.onlineCourses[k].url);
        $(".education-entry:last").append(formattedonlineURL);

    }
};
education.display();


bio.display = function () {

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        //        "for" loop introduced here
        for (var i = 0; i <= bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);

        }
    }
    var formattedName = HTMLheaderName.replace("%data%", "Nikoloz Mchedlishvili");
    $("#header").prepend(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
    $("#header").prepend(formattedRole);
    //    $("#topContacts").append(HTMLcontactGeneric);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    //    here #footerContact selector added

    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts,#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts ").append(formattedLocation);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedPic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

};
bio.display();

work.display = function () {
    for (var i = 0; i <= work.jobs.length - 1; i++) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
        //        here location formatted and added
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedworkLocation);
    }
};
work.display();

projects.display = function () {
    for (var i = 0; i <= projects.projects.length - 1; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[i].images.length > 0) {



            for (var k = 0; k <= projects.projects[i].images.length - 1; k++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[k]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);
