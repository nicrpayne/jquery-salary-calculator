console.log( 'js' );

$(document).ready(onReady);

function onReady() {
    console.log(onReady);
//create click event
    $('#addEmpBtn').on('click', submitEmployee);
    $('#salaries').on('click', '.deleteBtn', deleteEmp);

}
//global empty array
let employeeArray = [];

//add click listener function
function submitEmployee(){
    console.log('Clicked submitEmployee');

    //get user input
    let firstName = $('#nameIn').val();
    let lastName = $('#lastNameIn').val();
    let title = $('#titleIn').val();
    let idNumber = $('#idNumIn').val();
    let salaryIn = $('#salIn').val();

    //tests get user inputs
    let employeeAdded = { firstName, lastName, title, idNumber, salaryIn };
    console.log(employeeAdded);

        $('#salaries').append(
            `
            <tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${title}</td>
                    <td>${idNumber}</td>
                    <td>${salaryIn}</td>
                    <td><button class="deleteBtn">DELETE!</button></td>
                </tr>
            `

        );
    //empty inputs
    $('#nameIn').val('');
    $('#lastNameIn').val('');
    $('#titleIn').val('');
    $('#idNumIn').val('');
    $('#salIn').val('');

    //will take employeeAdded and push into an empty array
    (employeeArray).push(employeeAdded);
    console.log(employeeArray);

    calculateMonthly();
}

function deleteEmp() {
    console.log('deleteEmp Clicked!');

    $(this).closest('tr').remove();
}

function calculateMonthly(){
    console.log ('in calculateMonthly')
    //variable named totalSalaries set to zero
    let totalSalaries = 0

    for(let i=0; i < employeeArray.length; i++);
//will loop through new array
    totalSalaries += Number(employyArray[i].salary);

//sum of objects at [i]4 in new array
//divide total by 12
//if statement total>20k
//append total monthly to DOM


}

