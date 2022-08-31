<?php
switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
    
        switch ($_POST['op']) {
            case "child_info":
                // get data from child.json
                $child_info = json_encode(json_decode(file_get_contents('child.json'), true));
                               
                // send data to client
                echo $child_info;

                break;
            case "help_circumstances":
                // get data from help_circumstances.json
                $help_circumstances = json_encode(json_decode(file_get_contents("help_c.json"), true));
                               
                // send data to client
                echo $help_circumstances;

                break;
            case "subjects":
                // get data from subjects.json
                $subjects = json_encode(json_decode(file_get_contents("subjects.json"), true));
                               
                // send data to client
                echo $subjects;

                break;
            case "update_child_info":
                // get data from client
                $new_child_info = json_encode(json_decode($_POST['child_info'], true));

                file_put_contents("child.json", $new_child_info);
                // // read new data from child.json
                $check_child_info = json_encode(json_decode(file_get_contents('child.json'), true));
                // // send data to client
                echo $check_child_info;
                break;
            case "save_data":
                // get data from client
                $child_info_n = json_encode(json_decode($_POST['child_info'], true));
                $subjects_n = json_encode(json_decode($_POST['subjects'], true));
                //save data to child.json
                if (file_put_contents("child.json", $child_info_n)) {
                    //save data to subjects.json
                    if (file_put_contents("subjects.json", $subjects_n)) {
                       echo "success";
                       break;
                    }
                }
                
                echo "fail";
                break;
            default:
                echo "Error";
                break;
            }
        die();

        break;
    case "GET":
        $data = $_GET;
        break;
    default:
        $data = $_REQUEST;
        break;
}
?>