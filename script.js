let storedData = []; 

        function submitForm() {
            var name = document.getElementById("name").value;
            var studentClass = document.getElementById("class").value;
            var roll = document.getElementById("roll").value;
            var cgpa = document.getElementById("cgpa").value;

            var newData = {
                name: name,
                class: studentClass,
                roll: roll,
                cgpa: cgpa
            };

            var exists = storedData.some(data => 
                data.name === newData.name &&
                data.class === newData.class &&
                data.roll === newData.roll &&
                data.cgpa === newData.cgpa
            );

            if (exists) {
                alert("This data already exists!");
            } else {
                storedData.push(newData); 

                document.getElementById("output").innerHTML = 
                    "Name: " + name + "<br>" +
                    "Class: " + studentClass + "<br>" +
                    "Roll No: " + roll + "<br>" +
                    "CGPA: " + cgpa;
            }
        }