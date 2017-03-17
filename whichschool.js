
// function determines which school a person should go to based on age

function whichSchool(age) {
  if (age < 13) {
    return ("Elementary School");
  } else if (age < 18) {
    return ("Secondary School");
  } else {
    return ("Lighthouse Labs");
  }
}