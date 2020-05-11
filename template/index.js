/*
module.exports = ({full_name, email, phone, linkedin, myItems: [{companyName, companyLocation, companyPosition,
        datesbulletPoints1, bulletPoints2, bulletPoints3, bulletPoints4,}], myEducation: [{institution, gradDate,
        gpa, degree,}], mySkills: [{skill,}], myAwards: [{ award:'',}]});*/

module.exports = ({full_name, email, phone, linkedin, myItems, myEducation, mySkills, myAwards}) => {

    return `
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
        body{
            font-family: "Georgia";
        }
        
        .lead {
        font-size: 2em;
        }
        
        .bold {
        font-weight: 800;
        }
        
        ul.bullet-text li {
        font-size:1.5em;
        }
        
        .mb-0 {
        margin-bottom: 0;
        }
        
    </style>

    </head>
    <body>

        <div class="col-10 offset-sm-1 mx-auto">
            <br/><br/>
            <div class="row text-center">
                <div class="col-lg-6">
                    <h1><b>${full_name}</b></h1>
                    <p class="lead email"><strong>Email:</strong> ${email}</p>
                    <p class="lead mb-0"><strong>Contact:</strong> ${phone}</p>
                    <p class="lead"><strong>LinkedIn:</strong> ${linkedin}</p>
                </div>
            </div>
            <hr/>
            
            <div class="col-12 mx-auto bg-light">
                <h3><b>Education</b></h3>
            </div>
            <div class="col-12 offset-sm-1 mx-auto">
                <p class="lead mb-0"><b class="bold">${myEducation[0].institution}</b> ${myEducation[0].gradDate}</p>
                 <p class="lead"><em>${myEducation[0].degree}</em> (GPA: ${myEducation[0].gpa})</p>
            </div>
        
            <div class="col-12 mx-auto bg-light">
                <h3><b>Experience</b></h3>
            </div>
            <div class="col-12 mx-auto">
                <p class="lead mb-0"><b class="bold">${myItems[0].companyName}</b> ${myItems[0].companyPosition} (${myItems[0].dates})</p>
                <ul class="bullet-text">    
                  <li style="list-style: disc"> ${myItems[0].bulletPoints1}</li>
                  <li style="list-style: disc"> ${myItems[0].bulletPoints2}</li>
                  <li style="list-style: disc"> ${myItems[0].bulletPoints3}</li>
                  <li style="list-style: disc"> ${myItems[0].bulletPoints4}</li>
                </ul>
            </div>
        
            <div class="col-12 mx-auto bg-light">
                <h3><b>Skills</b></h3>
            </div>
            <div class="col-12 mx-auto">
                <ul class="bullet-text mx-auto">    
                  <li style="list-style: disc"> ${mySkills[0].skill}</li>
                  <li style="list-style: disc"> ${mySkills[1].skill}</li>
                </ul>
               <ul class="bullet-text mx-auto">  
                  <li style="list-style: disc"> ${mySkills[0].skill}</li>
                  <li style="list-style: disc"> ${mySkills[1].skill}</li>
               </ul>
            </div>
        
            <div class="col-12 mx-auto bg-light">
                <h3><b>Awards</b></h3>
            </div>
             <div class="col-12 mx-auto">
                <ul class="bullet-text mx-auto">  
                  <li style="list-style: disc"> ${myAwards[0].award}</li>
                  <li style="list-style: disc"> ${myAwards[1].award}</li>
                </ul>
                <ul class="bullet-text mx-auto">  
                  <li style="list-style: disc"> ${myAwards[0].award}</li>
                  <li style="list-style: disc"> ${myAwards[1].award}</li>
                 </ul>
             </div>
        </div>
    </body>
</html>
`
}


