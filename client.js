console.log( 'js' );

$(document).ready(onReady);

function onReady() {
    console.log(onReady);
//create click event
    $('#addEmpBtn').on('click', submitEmployee);
    $('#salary').on('click', '.deleteBtn', deleteEmp);




}

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
    //let employeeAdded = { firstName, lastName, title, idNumber, salaryIn };
    //console.log(employeeAdded);

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

}

function deleteEmp() {
    console.log('deleteEmp Clicked!');

    $(this).closest('tr').remove();
}