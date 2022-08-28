var child_info = {};    // child info
var subjects = [];      // create subjects list


function initialization() {
    console.log("initialization");
    var http = new XMLHttpRequest();
    var url = "../php/handler.php";
    var params = "op=child_info";
    
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);

       
    http.onreadystatechange =  function() {
        if(http.readyState == 4 && http.status == 200) {
            var response = http.responseText;
            console.log(response);
            child_info = JSON.parse(response);
            console.log(child_info);
            // document.getElementById("child_name_index").innerHTML = "بيانات الطفل "+ child_info['name'];
            document.getElementById("child_name_evaluation").innerHTML = "بيانات الطفل "+ child_info['name'];
            document.getElementById("rating_age").innerHTML = "عمر التقييم : " + child_info['rating_age'];
            document.getElementById("age_gap").innerHTML = "فارق العمر : " + child_info['age_gap'];
            document.getElementById("child_age").innerHTML = "العمر : " + child_info['age'];
            document.getElementById("child_evaluation").innerHTML = "التقييم : " + child_info['evaluation'];
            // child name
            document.getElementById("child_name").innerHTML ="الطفل "+ child_info['name'];
        }
    }

    // send POST request to get help circumstances
    var http1 = new XMLHttpRequest();
    var params = "op=subjects";    
    http1.onreadystatechange =  function() {
        if(http1.readyState == 4 && http1.status == 200) {
            var response = http1.responseText;
            console.log(response);
            subjects = JSON.parse(response);
            console.log(subjects);
            create_subjects_list();

        }
    }
    http1.open("POST", url, true);   
    http1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http1.send(params);
}


// function create the list of subjects 
function create_subjects_list() {
    var list = document.getElementById("main_subject_list");
    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var li = document.createElement("li");
        list.appendChild(li);
        li.className = "list-group-item";
       
        var button = document.createElement("button");
        button.className = "btn btn-lg btn-block  ";
        button.type = "button";
        button.setAttribute("data-toggle", "collapse");
        button.setAttribute("data-target", "#collapseExample"+i);
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "collapseExample"+i);
        button.style = "background-color: #1d8e94; color: white; ";


        // create div class="table-responsive text-nowrap "
        var div = document.createElement("div");
        div.className = "table-responsive text-nowrap ";
        // create table class="table table-striped table-borderless" style="margin: 0px;"
        var table = document.createElement("table");
        table.className = "table table-striped table-borderless";
        table.style = "margin: 0px;";
        // create thead
        var thead = document.createElement("thead");
        // create tr
        var tr = document.createElement("tr");
        tr.className = "text-right";
        tr.style ="color: white; font-size: 15px;";
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "احري : 0";
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "نقاط ضعف : 0";
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "نقاط قوة : 0";
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "متبقي : 0";
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        // count number of available skills in all sub_subjects of this subject
        var count = 0;
        for (var j = 0; j < subjects[i]['sub_subjects'].length; j++) {
            count += subjects[i]['sub_subjects'][j]['available_skills'].length;
        }
        th.innerHTML = "مهارات متاحه : " + count;
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "عدد المجالات الفرعيه : "+ subjects[i]['sub_subjects'].length;
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "المجال : "+ subjects[i]['name']; ;
        tr.appendChild(th);

        thead.appendChild(tr);
        table.appendChild(thead);
        div.appendChild(table);
        button.appendChild(div);
        li.appendChild(button);
        // cerate collapse div
        var div_collapse = document.createElement("div");
        div_collapse.className = "collapse";
        div_collapse.id = "collapseExample"+i;
        li.appendChild(div_collapse);
        // create ul class="list-group list-group-flush"
        var ul = document.createElement("ul");
        ul.className = "list-group list-group-flush";
        div_collapse.appendChild(ul);
        // create lists for sub subjects
        for (var j = 0; j < subject.sub_subjects.length; j++) {
            var sub_subject = subject.sub_subjects[j];
            var li = document.createElement("li");
            li.className = "list-group-item";

            var button = document.createElement("button");
            button.style = "background-color: #03c0ca; color: white; ";
            button.className = "btn btn-lg btn-block  ";
            button.type = "button";
            button.setAttribute("data-toggle", "collapse");
            button.setAttribute("data-target", "#collapseExample"+i+""+j);
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-controls", "collapseExample"+i+""+j);
            // create div class="table-responsive text-nowrap "
            var div = document.createElement("div");
            div.className = "table-responsive text-nowrap ";
            // create table class="table table-striped table-borderless" style="margin: 0px;"
            var table = document.createElement("table");
            table.className = "table table-striped table-borderless";
            table.style = "margin: 0px;";
            // create thead
            var thead = document.createElement("thead");
            // create tr
            var tr = document.createElement("tr");
            tr.className = "text-right";
            tr.style ="color: white; font-size: 15px;";
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "احري : 0";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "نقاط ضعف : 0";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "نقاط قوة : 0";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "متبقي : 0";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "الفجوة العمرية : 5 شهور";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "مهارات متاحه : "+ sub_subject.available_skills.length;
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "المجال الفرعي : "+ sub_subject.name;
            tr.appendChild(th);

            thead.appendChild(tr);
            table.appendChild(thead);
            div.appendChild(table);
            button.appendChild(div);
            li.appendChild(button);
            ul.appendChild(li);
            // cerate collapse div
            var div_lg = document.createElement("div");
            li.appendChild(div_lg);
            div_lg.className = "collapse";
            div_lg.id = "collapseExample"+i+""+j;
            // create div class="table-responsive text-nowrap "
            var div = document.createElement("div");
            div_lg.appendChild(div);
            div.className = "table-responsive text-nowrap ";
            // create table class="table table-striped"
            var table = document.createElement("table");
            table.className = "table table-striped";
            // create thead
            var thead = document.createElement("thead");
            // create tr
            var tr = document.createElement("tr");
            tr.className = "text-right";
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "غير واضح";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "غير قابل للظهور";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "لا";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "نعم";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "المهارة";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "العمر";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "مسلسل";
            tr.appendChild(th);
            thead.appendChild(tr);
            table.appendChild(thead);
            div.appendChild(table);
            // create tbody
            var tbody = document.createElement("tbody");
            table.appendChild(tbody);
            for (var k = 0; k < sub_subject.available_skills.length; k++) {
                // create tr
                var tr = document.createElement("tr");
                tr.className = "text-right";
                tr.style = "background-color: white; color: black; font-size: 15px;";
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault"+i+""+j+""+k;
                input.id = "flexRadioDefault1"+i+""+j+""+k;
                td.appendChild(input);
                tr.appendChild(td);
                // create td
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault"+i+""+j+""+k;
                input.id = "flexRadioDefault2"+i+""+j+""+k;
                td.appendChild(input);
                tr.appendChild(td);
                // create td
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault"+i+""+j+""+k;
                input.id = "flexRadioDefault3"+i+""+j+""+k;
                td.appendChild(input);
                tr.appendChild(td);
                // create td
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault"+i+""+j+""+k;
                input.id = "flexRadioDefault4"+i+""+j+""+k;
                td.appendChild(input);
                tr.appendChild(td);
                // create td for name of the skill
                var td = document.createElement("td");
                td.innerHTML = sub_subject.available_skills[k].name;
                tr.appendChild(td);
                // create td for age
                var td = document.createElement("td");
                td.innerHTML = sub_subject.available_skills[k].ages;
                tr.appendChild(td);
                // create td for id
                var td = document.createElement("td");
                td.innerHTML = sub_subject.available_skills[k].id;
                tr.appendChild(td);
                tbody.appendChild(tr);


            }
        }






    }
}


