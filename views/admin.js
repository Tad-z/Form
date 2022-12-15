const tbody = document.querySelector("#tbody");

async function getData() {
    const response = await fetch("/bookings");
    console.log(response);
    if (!response.ok) {
      throw new Error("An error occured");
    }
    const data = await response.json();
    const bookings = data.data.bookings;
    console.log(bookings);
  
    bookings.forEach((booking) => {
      let {
        fullName,
        Department,
        Level,
        phoneNumber,
        departureDate,
        dropOffPoint,
        noOfLuggage,
      } = booking;
      tbody.innerHTML += `<tr>
      <td>${fullName}</td>
      <td>${Department}</td>
      <td>${Level}</td>
      <td>${phoneNumber}</td>
      <td>${departureDate}</td>
      <td>${dropOffPoint}</td>
      <td>${noOfLuggage}</td>
      </tr>`;
    });
  }
  getData();
  
  