$(document).ready(function () {
    $("input[name='discount']").change(function () {
        var maxAllowed = 1;
        var cnt = $("input[name='discount']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('Voit valita vain ' + maxAllowed + ':n alennuksen.');
        }
    });
});
$(document).ready(function () {
    $("#info").hide();
});
$(document).ready(function () {
    $("#hide").click(function () {
        $("#info").hide("slow");
    });
});
$(document).ready(function () {
    $("#show").click(function () {
        $("#info").show("slow");
    });
});

$(document).ready(function () {
    $('#calculatePrice').click(function () {
        var under7Checked = $('#under7').is(':checked');
        var under15Checked = $('#under15').is(':checked');
        var over65Checked = $('#over65').is(':checked');
        var studentChecked = $('#student').is(':checked');
        var mtkMemberChecked = $('#mtkMember').is(':checked');
        var conscriptChecked = $('#conscript').is(':checked');
        var mtkStudentChecked = $('#mtkStudent').is(':checked');

        // En saannut järkevästi alennus.json tiedostoa toimimaan, joten laitoin json tiedot javascriptin sisälle
        var obj = {
            "normaaliHinta": 16,
            "alennusryhma": [
                {
                    "id": 0,
                    "alennus": "Alle 7v",
                    "alennusprosentti": 100
                },
                {
                    "id": 1,
                    "alennus": "7-15v",
                    "alennusprosentti": 50
                },
                {
                    "id": 2,
                    "alennus": "Yli 65v",
                    "alennusprosentti": 50
                },
                {
                    "id": 3,
                    "alennus": "Opiskelija",
                    "alennusprosentti": 45
                },
                {
                    "id": 4,
                    "alennus": "Mtk jäsen",
                    "alennusprosentti": 15
                },
                {
                    "id": 5,
                    "alennus": "Varusmies",
                    "alennusprosentti": 50
                },
                {
                    "id": 6,
                    "alennus": "Opiskelija & Mtk jäsen",
                    "alennusprosentti": 60
                }
            ]
        }

        if (under7Checked) {
            console.log(obj.alennusryhma[0].alennus);
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[0].alennusprosentti / 100));
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + (obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[0].alennusprosentti / 100)) + "€";
        }
        else if (under15Checked) {
            console.log(obj.alennusryhma[1].alennus);
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[1].alennusprosentti / 100));
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + (obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[1].alennusprosentti / 100)) + "€";
        }
        else if (over65Checked) {
            console.log(obj.alennusryhma[2].alennus);
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[2].alennusprosentti / 100));
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + (obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[2].alennusprosentti / 100)) + "€";
        }
        else if (studentChecked) {
            console.log(obj.alennusryhma[3].alennus);
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[3].alennusprosentti / 100));
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + (obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[3].alennusprosentti / 100)) + "€";
        }
        else if (mtkMemberChecked) {
            console.log(obj.alennusryhma[4].alennus);
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[4].alennusprosentti / 100));
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + (obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[4].alennusprosentti / 100)) + "€";
        }
        else if (conscriptChecked) {
            console.log(obj.alennusryhma[5].alennus);
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[5].alennusprosentti / 100));
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + (obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[5].alennusprosentti / 100)) + "€";
        }
        else if (mtkStudentChecked) {
            console.log(obj.alennusryhma[6].alennus);
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[6].alennusprosentti / 100));
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + (obj.normaaliHinta - obj.normaaliHinta * (obj.alennusryhma[6].alennusprosentti / 100)) + "€";
        }
        else {
            console.log("Ei alennusta");
            console.log("Lipun hinta: "); console.log(obj.normaaliHinta);
            document.getElementById("lippuHinta").innerHTML = "Lipun hinta: " + obj.normaaliHinta + "€";
        }
    });
});
function submitName() {
    console.log(frm1.fullName.value);
    console.log(frm1.email.value);
    document.getElementById("lippuNimi").innerHTML = frm1.fullName.value;
    document.getElementById("lippuEmail").innerHTML = frm1.email.value;
}