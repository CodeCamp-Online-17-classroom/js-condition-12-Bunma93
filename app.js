let ticket = "";
while (ticket.length !== 2) {
    ticket = prompt("กรอกโซนที่นั่ง (ตัวอักษร 2 ตัว)");
}

if (ticket === "AA") {
    alert("5,000");
} else if (ticket === "BB") {
    alert("4,000");
} else if (ticket === "CC") {
    alert("3,000");
} else if (ticket === "DD") {
    alert("2,000");
} else {
    alert("ไม่มีโซนนี้");
}