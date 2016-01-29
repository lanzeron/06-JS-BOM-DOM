(function() {
    "use strict";
    var form = document.createElement('form');
    createForm();
    setDate();
    form.onsubmit = validateForm;

    //build the form
    function createForm() {
        var fild;
        var label;
        var br;
        var wraper = document.getElementsByTagName('body')[0];
        wraper.appendChild(form);
        var filds = [{
            type: "text",
            name: "age",
            value: "",
            label: "age: "
        }, {
            type: "text",
            name: "username",
            value: "",
            label: "username: "
        }, {
            type: "text",
            name: "date",
            value: "",
            label: "date: "
        }, {
            type: "submit",
            value: "Validate Me"
        }];

        //var input = document.createElement("input");
        form.name = "myForm";
        form.action = "http://google.com/";
        form.id = "form";
        wraper.appendChild(form);
        // create inputs filds
        filds.forEach(function(item) {
            fild = document.createElement("input");
            fild.name = item.name;
            fild.type = item.type;
            fild.value = item.value;
            label = document.createElement("label");
            label.textContent = item.label;
            label.appendChild(fild);
            br = document.createElement('br');
            form.appendChild(label);
            form.appendChild(br);
        });
    }

    //input date value
    function setDate() {
        var dateObject = new Date();
        var date = dateObject.getDate() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getFullYear();
        var DateForm = form.date;
        DateForm.value = date;
    }

    // validation function
    function validateForm() {
        var ruleAge = new RegExp('\\d');
        var ageFild = form.age;
        var age = ageFild.value;
        var ruleUsername = new RegExp('^user_');
        var userFild = form.username;
        var user = userFild.value;

   	//age validation
        if (!ruleAge.test(age)) {
            alert("You age is invlid, pleas enter onnly digits!");
        }
        if (!ruleUsername.test(user)) {
            alert("Username must username should start from 'user_'");
        }
        return false;
    }
})();