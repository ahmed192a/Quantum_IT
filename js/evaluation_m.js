var child_info = {};
// var help_circumstances = [];
var subjects = [];


function initialization() {
    console.log("initialization");
    var http = new XMLHttpRequest();
    var url = "../php/handler.php";
    var params = "op=child_info";

    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);


    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            var response = http.responseText;
            console.log(response);
            child_info = JSON.parse(response);
            console.log(child_info);
            // document.getElementById("child_name_index").innerHTML = "بيانات الطفل "+ child_info['name'];
            document.getElementById("child_name_evaluation").innerHTML = "بيانات الطفل " + child_info['name'];
            document.getElementById("rating_age").innerHTML = "عمر التقييم : " + child_info['rating_age'];
            document.getElementById("age_gap").innerHTML = "فارق العمر : " + child_info['age_gap'];
            document.getElementById("child_age").innerHTML = "العمر : " + child_info['age'];
            document.getElementById("child_evaluation").innerHTML = "التقييم : " + child_info['evaluation'];
            // child name
            document.getElementById("child_name").innerHTML = "الطفل " + child_info['name'];

        }
    }

    // send POST request to get help circumstances
    var http1 = new XMLHttpRequest();
    var params = "op=subjects";
    http1.onreadystatechange = function () {
        if (http1.readyState == 4 && http1.status == 200) {
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
        button.setAttribute("data-target", "#collapseExample" + i);
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "collapseExample" + i);
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
        tr.style = "color: white; font-size: 15px;";
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "اخرى : " +subject.other;
        th.id = "subject_button"+i+"other";
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "ضعف : "+subject.weakness;
        th.id = "subject_button"+i+"weakness";
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "قوى : "+subject.strength;
        th.id = "subject_button"+i+"strength"; 
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        var count = 0;
        for (var j = 0; j < subjects[i]['sub_subjects'].length; j++) {
            count += subjects[i]['sub_subjects'][j]['available_skills'].length;
        }
        var reamining = count - subject.strength-subject.weakness-subject.other;
        th.innerHTML = "متبقي : " +reamining;
        th.id = "subject_button"+i+"reamining";
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        // count number of available skills in all sub_subjects of this subject

        th.innerHTML = "مهارات متاحه : " + count;
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "عدد المجالات الفرعيه : " + subjects[i]['sub_subjects'].length;
        tr.appendChild(th);
        // create th
        var th = document.createElement("th");
        th.scope = "col";
        th.innerHTML = "المجال : " + subjects[i]['name'];;
        tr.appendChild(th);

        thead.appendChild(tr);
        table.appendChild(thead);
        div.appendChild(table);
        button.appendChild(div);
        li.appendChild(button);
        // cerate collapse div
        var div_collapse = document.createElement("div");
        div_collapse.className = "collapse";
        div_collapse.id = "collapseExample" + i;
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
            button.setAttribute("data-target", "#collapseExample" + i + "" + j);
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-controls", "collapseExample" + i + "" + j);
            
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
            tr.style = "color: white; font-size: 15px;";
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "اخرى : "+sub_subject.other;
            th.id = "sub_subject_button" + i + "" + j+"other";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "ضعف : "+sub_subject.weakness;
            th.id = "sub_subject_button" + i + "" + j+"weakness";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "قوى : "+sub_subject.strength;
            th.id = "sub_subject_button" + i + "" + j+"strength";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            var remain_i = sub_subject.available_skills.length- ( sub_subject.other + sub_subject.weakness + sub_subject.strength);
            th.innerHTML = "متبقي : "+ remain_i;
            th.id = "sub_subject_button" + i + "" + j+"remaining";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "الفجوة العمرية : 5 شهور";
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "مهارات متاحه : " + sub_subject.available_skills.length;
            tr.appendChild(th);
            // create th
            var th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "المجال الفرعي : " + sub_subject.name;
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
            div_lg.id = "collapseExample" + i + "" + j;
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
                tr.id = "skill_row"+ i + "" + j + "" + k;
                tr.style = "background-color: white; color: black; font-size: 15px;";
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault" + i + "" + j + "" + k;
                input.id = "flexRadioDefault1" + i + "" + j + "" + k;
                input.value = "null";

                td.appendChild(input);
                tr.appendChild(td);
                // create td
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault" + i + "" + j + "" + k;
                input.id = "flexRadioDefault2" + i + "" + j + "" + k;
                input.value = "null";
                td.appendChild(input);
                tr.appendChild(td);
                // create td
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault" + i + "" + j + "" + k;
                input.id = "flexRadioDefault3" + i + "" + j + "" + k;
                input.value = "null";

                td.appendChild(input);
                tr.appendChild(td);
                // create td
                var td = document.createElement("td");
                // create input
                var input = document.createElement("input");
                input.className = "form-check-input";
                input.type = "radio";
                input.name = "flexRadioDefault" + i + "" + j + "" + k;
                input.id = "flexRadioDefault4" + i + "" + j + "" + k;
                input.value = "null";
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

                var radioButtons = document.querySelectorAll('input[name="flexRadioDefault'+i+''+j+''+k+'"]');
                // handle check and uncheck of the radio buttons
                radioButtons.forEach(function (radioButton) {
                    radioButton.addEventListener('change',showSelected);
                });


            
            }

        }

    }
}

function showSelected(event) {
    var _id = event.target.id;
    _id = _id.replace("flexRadioDefault", "");
    console.log(_id);
    console.log(subjects[0]);
    let others_e = document.getElementById("sub_subject_button" + _id[1] + "" + _id[2]+"other");
    let weakness_e = document.getElementById("sub_subject_button" + _id[1] + "" + _id[2]+"weakness");
    let strength_e = document.getElementById("sub_subject_button" + _id[1] + "" + _id[2]+"strength");
    let remaining_e = document.getElementById("sub_subject_button" + _id[1] + "" + _id[2]+"remaining");

    let s_other_e = document.getElementById("subject_button" + _id[1]+"other");
    let s_weakness_e = document.getElementById("subject_button" + _id[1]+"weakness");
    let s_strength_e = document.getElementById("subject_button" + _id[1]+"strength");
    let s_remaining_e = document.getElementById("subject_button" + _id[1]+"reamining");

    let g_other_c = document.getElementById("global_other_counter");
    let g_weakness_c = document.getElementById("global_weakness_counter");
    let g_strength_c = document.getElementById("global_strength_counter");


    if (event.target.checked) {

        if (event.target.value != "null")
        {
            console.log("NOT FIRST : " + event.target.value);
            // decrement the value of the previous radio button
            // get element by id = sub_subject_button+ _id[1] +""+ _id[2] 


            switch (event.target.value) {
                case "1":
                case "2":
                    
                    subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].other -= 1;
                    others_e.innerHTML = "اخري : "+subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].other;
                    subjects[parseInt(_id[1])].other -= 1;
                    s_other_e.innerHTML = "اخري : "+subjects[parseInt(_id[1])].other;
                    child_info.other -= 1;
                    g_other_c.innerHTML = "اخري : "+child_info.other;
                    
                    break;
                case "3":
                    subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].weakness -= 1;
                    weakness_e.innerHTML = "ضعف : "+subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].weakness;
                    subjects[parseInt(_id[1])].weakness -= 1;
                    s_weakness_e.innerHTML = "ضعف : "+subjects[parseInt(_id[1])].weakness;
                    child_info.weakness -= 1;
                    g_weakness_c.innerHTML = "ضعف : "+child_info.weakness;

                    break;
                case "4":
                    subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].strength -= 1;
                    strength_e.innerHTML = "قوي : "+subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].strength;
                    subjects[parseInt(_id[1])].strength -= 1;
                    s_strength_e.innerHTML = "قوي : "+subjects[parseInt(_id[1])].strength;
                    child_info.strength -= 1;
                    g_strength_c.innerHTML = "قوي : "+child_info.strength;
                    break;
            }
           
        }else{
            console.log("FIRST : " + _id[0]);
        }
        // querySelectorAll radio buttons with the same name
        var _radioButtons = document.querySelectorAll('input[name="flexRadioDefault'+_id[1]+''+_id[2]+''+_id[3]+'"]');
        // uncheck all other radio buttons
        _radioButtons.forEach(function (_radioButton) {
            _radioButton.value = _id[0];
        });
        // get document element by id skill_row + _id[1] + "" + _id[2] + "" + _id[3]
        var _skill_row = document.getElementById("skill_row" + _id[1] + "" + _id[2] + "" + _id[3]);

         // increment the value of the current radio button
        switch (_id[0]) {
            case "1":
            case "2":
                subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].other += 1;
                others_e.innerHTML = "اخري : "+subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].other;
                subjects[parseInt(_id[1])].other += 1;
                s_other_e.innerHTML = "اخري : "+subjects[parseInt(_id[1])].other;
                child_info.other += 1;
                g_other_c.innerHTML = "اخري : "+child_info.other;
                _skill_row.style.backgroundColor = "#f8d7da";
                break;
            case "3":
                subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].weakness += 1;
                weakness_e.innerHTML = "ضعف : "+subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].weakness;
                subjects[parseInt(_id[1])].weakness += 1;
                s_weakness_e.innerHTML = "ضعف : "+subjects[parseInt(_id[1])].weakness;
                child_info.weakness += 1;
                g_weakness_c.innerHTML = "ضعف : "+child_info.weakness;
                _skill_row.style.backgroundColor = "#fff3cd";
                break;
            case "4":
                subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].strength += 1;
                strength_e.innerHTML = "قوي : "+subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].strength;
                subjects[parseInt(_id[1])].strength += 1;
                s_strength_e.innerHTML = "قوي : "+subjects[parseInt(_id[1])].strength;
                child_info.strength += 1;
                g_strength_c.innerHTML = "قوي : "+child_info.strength;
                _skill_row.style.backgroundColor = "#d4edda";
                break;
        }
        var remain_i = subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].available_skills.length-subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].other-subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].weakness-subjects[parseInt(_id[1])].sub_subjects[parseInt(_id[2])].strength;
        remaining_e.innerHTML = "متبقي : "+ remain_i;
        // count all available skills in all sub subjects of subjects[parseInt(_id[1])]
        var count = 0;
        for (var i = 0; i < subjects[parseInt(_id[1])].sub_subjects.length; i++) {
            count += subjects[parseInt(_id[1])].sub_subjects[i].available_skills.length;
        }
        remain_i = count-subjects[parseInt(_id[1])].other-subjects[parseInt(_id[1])].weakness-subjects[parseInt(_id[1])].strength;
        s_remaining_e.innerHTML = "متبقي : "+ remain_i;
    }

}

// function to save child_info and subjects in database
function save_data(){
    var http = new XMLHttpRequest();
    var url = "../php/handler.php";
    var params = "op=save_data&child_info="+JSON.stringify(child_info)+"&subjects="+JSON.stringify(subjects);
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
            // if response is success display success message
            if(http.responseText == "success"){
                // create alert message
                alert("تم حفظ البيانات بنجاح");
                // create popup window and display success message
                // var popup = document.createElement("div");
                // popup.setAttribute("class", "popup");
                // var popup_content = document.createElement("div");
                // popup_content.setAttribute("class", "popup-content");
                // var popup_text = document.createElement("p");
                // popup_text.innerHTML = "تم حفظ البيانات بنجاح";
                // popup_content.appendChild(popup_text);
                // popup.appendChild(popup_content);
                // document.body.appendChild(popup);
                // // remove popup after 3 seconds
                // setTimeout(function(){
                //     document.body.removeChild(popup);
                // }, 3000);
            
                
            }
        }
    }
    http.send(params);
}


