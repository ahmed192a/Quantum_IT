<?php
switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        

        switch ($_POST['op']) {
            case "child_info":
                // get data from child.json
                $child_info = json_encode(json_decode(file_get_contents("child.json"), true));
                               
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
                $child_info = json_decode($_POST['child_info'], true);
                // save new data to child.json
                file_put_contents("child.json", json_encode($child_info));
                // send data to client
                echo json_encode($child_info);
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