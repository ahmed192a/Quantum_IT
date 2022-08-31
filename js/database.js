//  data structure for child information
var child = {
    name: "احمد محمد احمد",
    age: "10",
    evaluation: "",
    rating_age: "73 - 0",
    age_gap : "5 شهور"
};

// list data structure for help circumstances
var help_circumstances = [
    {
        from: "1",
        to: "6",
        sub: [
            {
                from: "1",
                to: "3",
            },
            {
                from: "4",
                to: "6",
            }
        ]
    },
    {
        from: "7",
        to: "12",
        sub: [
            {
                from: "7",
                to: "9",
            },
            {
                from: "10",
                to: "12",
            }
        ]
    },
    {
        from: "13",
        to: "18",
        sub: [
            {
                from: "13",
                to: "15",
            },
            {
                from: "16",
                to: "18",
            }
        ]
    },
    {
        from: "19",
        to: "24",
        sub: [
            {
                from: "19",
                to: "21"
            },
            {
                from: "22",
                to: "24"
            }
        ]
    }
];



// subjects data structure
var subjects = [
    {
        name: "اللغات",
        sub_subjects: [
            {
                name: "اللغة العربية",
                id: "1",
                available_skills : [
                    {
                        name: "القراءة",
                        ages: "1 - 6",
                        id: "1"
                    },
                    {
                        name: "الكتابة",
                        ages: "1 - 6",
                        id: "2"
                    },
                    {
                        name: "التحدث",
                        ages: "1 - 6",
                        id: "3"
                    }
                ]
            },
            {
                name: "اللغة الانجليزية",
                id: "2",
                available_skills : [
                    {
                        name: "القراءة",
                        ages: "1 - 6",
                        id: "1"
                    },{
                        name: "الكتابة",
                        ages: "1 - 6",
                        id: "2"
                    },
                    {
                        name: "التحدث",
                        ages: "1 - 6",
                        id: "3"
                    }
                ]
            }
        ]
    },
    {
        name: "الرياضيات",
        sub_subjects: [
            {
                name: "الرياضيات الابتدائية",
                id: "3",
                available_skills : [
                    {
                        name: "القراءة",
                        ages: "1 - 6",
                        id: "1"
                    },
                    {
                        name: "الكتابة",
                        ages: "1 - 6",
                        id: "2"
                    },
                    {
                        name: "التحدث",
                        ages: "1 - 6",
                        id: "3"
                    }
                ]
            },
            {
                name: "الرياضيات المتوسطة",
                id: "4",
                available_skills : [
                    {
                        name: "يستمتع بالاستماع للقصص و يحب مشاهدتها باستقلاليه",
                        ages: "7 - 12",
                        id: "1"
                    },
                    {
                        name: "الكتابة",
                        ages: "7 - 12",
                        id: "2"
                    },
                    {
                        name: "التحدث",
                        ages: "7 - 12",
                        id: "3"
                    }
                ]
            }
        ]
    }
];






