/*
module.exports = ({full_name, email, phone, linkedin, myItems: [{companyName, companyLocation, companyPosition,
        datesbulletPoints1, bulletPoints2, bulletPoints3, bulletPoints4,}], myEducation: [{institution, gradDate,
        gpa, degree,}], mySkills: [{skill,}], myAwards: [{ award:'',}]});*/

module.exports = ({fullName, email, phone, linkedin, myItems, myEducation, mySkills, myAwards}) => {
var educationHTML = '';
myEducation.forEach(function(item, index) {
    var htmlString = '';
    var gpaString = '' ? (item.gpa === '') : "(GPA: " + item.gpa.toString() + ')';
    htmlString = `<div class="col-12 offset-sm-1 mx-auto">
        <p class="mb-0"><b class="bold-standout">${item.institution}</b> - ${item.gradDate}</p>
        <p class=""><em>${item.degree}</em> ` + gpaString + `</p>
    </div>
    `;
    educationHTML = educationHTML.concat(htmlString);
})
    var workHTML = '';
    myItems.forEach(function(item, index) {
        var htmlString = '';
        htmlString = `<div class="col-12 mx-auto">
                <p class="mb-0"><b class="bold-standout">${item.companyName}</b> ${item.companyPosition} (${item.dates})</p>
                <ul class="bullet-text">
                  <li style="list-style: disc"> ${item.bulletPoints1}</li>
                  <li style="list-style: disc"> ${item.bulletPoints2}</li>
                  <li style="list-style: disc"> ${item.bulletPoints3}</li>
                  <li style="list-style: disc"> ${item.bulletPoints4}</li>
                </ul>
            </div>`;
        workHTML = workHTML.concat(htmlString);
    });

    var skillsHTML = `<div class="col-12 mx-auto">
        <ul class="bullet-text mx-auto">`
    mySkills.forEach(function(item, index) {
        var htmlString = '';
        htmlString = `<li style="list-style: disc"> ${item.skill}</li>`
        skillsHTML = skillsHTML.concat(htmlString)
    });
    skillsHTML = skillsHTML.concat(`</ul></div>`);

    var awardHTML = `<div class="col-12 mx-auto">
        <ul class="bullet-text mx-auto">`
    myAwards.forEach(function(item, index) {
        var htmlString = '';
        htmlString = `<li style="list-style: disc"> ${item.award}</li>`
        awardHTML = awardHTML.concat(htmlString)
    });
    awardHTML = awardHTML.concat(`</ul></div>`);

   var fullString  = `
        <!doctype html>
        <html>
        <head>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
            <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
            <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
        <!-- JQuery -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>

        <style>
        @import url('https://fonts.googleapis.com/css?family=Open+Sans');

        html, body {
          font-family: 'Open Sans', sans-serif;
        }
        html{
            zoom: 0.55;
        }
        .rule{
            border-bottom: 1px solid black;
            width:80%;
        }
        .mobile{
            margin-top:-10px;
        }
        .email{
            margin-bottom: 0;
        }

        p {
        font-size: 2em;
        }

        .bold {
        font-weight: 800;
        }

        ul.bullet-text li {
        font-size:2.0em;
        }

        .mb-0 {
        margin-bottom: 0;
        }

        .bold-standout {
          font-weight: 600;
          font-size: 1.25em;
        }

        .banner-pad {
        padding: 1.5rem;
        }

        .ml-3 {
          margin-left: 3em;
        }

        .mr-3 {
          margin-right: 3em;
        }

    </style>

    </head>
    <body >

        <div class="col-11 ml-3 mr-3 mx-auto">
            <br/><br/>
            <div class="row text-center">
                <div class="col-lg-6">
                    <h1><b>${fullName}</b></h1>
                    <p class="email"><strong>Email:</strong> ${email}</p>
                    ${phone ? '<p class="mb-0"><strong>Contact #:</strong> ' + phone + ' </p>' : ''}
                    ${linkedin ? '<p class=""><strong>LinkedIn:</strong> ' + linkedin + ' </p>' : ''}
                </div>
            </div>
            <hr/>

            <div class="col-12 banner-pad mx-auto bg-light">
                <h2><b>Experience</b></h2>
            </div>
            ` + workHTML + `

            <div class="col-12 banner-pad mx-auto bg-light">
                <h2><b>Education</b></h2>
            </div> ` + educationHTML + `

            <div class="col-12 banner-pad mx-auto bg-light">
                <h2><b>Skills</b></h2>
            </div>`
            + skillsHTML + `
            <div class="col-12 banner-pad mx-auto bg-light">
                <h2><b>Awards</b></h2>
            </div>
             ` + awardHTML + `
        </div>
    </body>
</html>
`
    return fullString;
}


