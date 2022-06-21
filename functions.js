function onboardStudent(studentObj, emailStudent) {
    if (studentObj.firstName !== "") {
        console.log(`Welcome to semicolon ${studentObj.firstName}`);
        setTimeout(() => emailStudent(studentObj), 30000)
        console.log(`${studentObj.firstName}, check your email in the next 1 min for further instructions`)
    } else {
        return
    }
}

let newStudent = {firstName: "Olubunmi", number: "+2348109739734"}

onboardStudent(newStudent, (student) => {
    console.log(`Email by semicolon to ${student.firstName} with phoneNumber ${student.number}`)
})


// function dialNumber(countryCode, number) {
//     console.log(`${countryCode}${number}`)
// }

// function dialCustomer(customer, caller) {
//     if (customer.nationality === "Nigerian") {
//         caller("234", customer.phoneNumber)
//     } else {
//         setTimeout(() => caller("233", customer.phoneNumber), 100000)
//     }
// }

// let customer = {nationality: "Nigerian", phoneNumber: "8033375704"}
// dialCustomer(customer, dialNumber)
