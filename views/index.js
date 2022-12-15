// const submit = document.querySelector(".submit-btn");

// submit.addEventListener("click", function () {
//   alert("You have been registered ✔");
// });
const form = document.getElementById("form");


function onSubmit(event) {
  event.preventDefault();

  const fullName = document.querySelector("#fullname").value;
  const Department = document.querySelector("#department").value;
  const Level = document.querySelector('input[name="level"]:checked').value;
  const phoneNumber = document.querySelector("#phoneNumber").value;

  const departureDate = document.querySelector("#date").value;
  const dropOffPoint = document.querySelector("#dropoff").value;
  const noOfLuggage = document.querySelector("#luggage").value;

  postData(
    fullName,
    Department,
    Level,
    phoneNumber,
    departureDate,
    dropOffPoint,
    noOfLuggage
  );
  const formElement = form.querySelector("form");
  formElement.reset();
}

async function postData(
  fullName,
  Department,
  Level,
  phoneNumber,
  departureDate,
  dropOffPoint,
  noOfLuggage
) {
  const response = await fetch("/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      Department,
      Level,
      phoneNumber,
      departureDate,
      dropOffPoint,
      noOfLuggage,
    }),
  });
  if (!response.ok) {
    alert("You have not been registered ❌");
    throw new Error("An error occured");
  } else {
    alert("You have been registered ✔");
  }
  // return response.json();
}

document.querySelector("#form").addEventListener("submit", onSubmit);