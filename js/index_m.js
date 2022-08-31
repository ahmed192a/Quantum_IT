

var help_list = document.getElementById("help_ages_list");
var help_circumstances = [];
var child_info = {};

function add_help_age_items() {

    console.log("add_help_age_items");
    // send POST request to database.js to get help ages
    



    for (var i = 0; i < help_circumstances.length; i++) {
        var help_age = help_circumstances[i];
        var from = help_age.from;
        var to = help_age.to;
        var sub = help_age.sub;


        var li = document.createElement("li");
        // add class to li
        li.className = "list-group-item";
        var button = document.createElement("button");
        button.className = "btn btn-lg btn-block main_card";
        button.type = "button";
        button.setAttribute("data-toggle", "collapse");
        button.setAttribute("data-target", "#collapseExample"+i);
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "collapseExample"+i);

        button.innerHTML = "منهج هيلب المرحله العمرية من" + from + " إلى " + to;
        li.appendChild(button);
        if (sub) {
            // create div class="collapse" id="collapseExample" style="margin-top: 10px;"
            var div = document.createElement("div");
            div.className = "collapse";
            div.id = "collapseExample"+i;
            div.style = "margin-top: 10px;";
            // create ul class="list-group list-group-flush"
            var ul = document.createElement("ul");
            ul.className = "list-group list-group-flush";
            for (var j = 0; j < sub.length; j++) {
                var sub_li = document.createElement("li");
                sub_li.className = "list-group-item";
                // create a href="./evaluation.html" class="btn btn-lg btn-block sub_card"
                var sub_button = document.createElement("button");
                // set action to button
                sub_button.setAttribute("onclick", "set_evaluation("+sub[j].from+","+sub[j].to+")");

                sub_button.href = "./pages/evaluation.html";
                sub_button.className = "btn btn-lg btn-block sub_card";
                sub_button.innerHTML = "هيلب من " + sub[j].from + " إلى " + sub[j].to;
                sub_li.appendChild(sub_button);
                ul.appendChild(sub_li);
            }
            div.appendChild(ul);
            li.appendChild(div);
        }
        help_list.appendChild(li);
    }
}

function initialization() {
    console.log("initialization");
    var http = new XMLHttpRequest();
    var url = "php/handler.php";
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
            document.getElementById("child_name_index").innerHTML = "بيانات الطفل "+ child_info['name'];

        }
    }

    // send POST request to get help circumstances
    var http1 = new XMLHttpRequest();
    var url = "php/handler.php";
    var params = "op=help_circumstances";    
    http1.onreadystatechange =  function() {
        if(http1.readyState == 4 && http1.status == 200) {
            var response = http1.responseText;
            console.log(response);
            help_circumstances = JSON.parse(response);
            console.log(help_circumstances);
            add_help_age_items();

        }
    }
    http1.open("POST", url, true);   
    http1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http1.send(params);
    
}



// ceate button action set_evaluation
function set_evaluation(from, to) {
    // edit child object in database.js set evaluation help
    child_info["evaluation"] = "منهج هيلب من " + from + " إلى " + to;
    // send UPDATE request to save child info
    var http = new XMLHttpRequest();
    var url = "php/handler.php";
    var params = "op=update_child_info&child_info="+JSON.stringify(child_info);
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);
    http.onreadystatechange =  function() {
        if(http.readyState == 4 && http.status == 200) {
            var response = http.responseText;
            // var result = JSON.parse(response);
            // console.log(result);

            window.location.href = "./pages/evaluation.html";
        }
    }
}





