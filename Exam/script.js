// Ticket Booking System
// Description: Develop a basic ticket booking application.
// Requirements:
// Add bookings with Name, Event, and Seats.
// Display all bookings in a table.
// Allow updating the number of seats.
// Include a delete option for removing bookings.

let inputName = document.getElementById('name');
let inputEvent = document.getElementById('event');
let inputNumber = document.getElementById('seats');
let tableData = document.getElementById('tableData');
let isEdite = false;
let editId = null;

let bookings = () => {
  let data = JSON.parse(localStorage.getItem("bookingData")) || [];
  return data;
}

let submitBooking = (event) => {
  event.preventDefault();

  let record = {
    id: editId || Math.floor(Math.random() * 1000),
    name: inputName.value,
    event: inputEvent.value,
    seats: inputNumber.value
  };
  console.log(record);

  let bookingData = bookings();

  if (isEdite) {
    bookingData = bookingData.map((b) =>
      (b.id == record.id ? record : b));

    isEdite = false;
    editId = null;
  }
  else {
    bookingData.push(record);
  }
  localStorage.setItem("bookingData", JSON.stringify(bookingData));

  inputName.value = '',
    inputEvent.value = '',
    inputNumber.value = '',
    showBookings();
}

let editBooking = (id) => {
  let bookingData = bookings();
  let editRecord = bookingData.find((b) =>
    b.id == id
  );

  if (editRecord) {
    isEdite = true;
    editId = id;
    inputName.value = editRecord.name;
    inputEvent.value = editRecord.event;
    inputNumber.value = editRecord.seats;
  }
}

let deleteBooking = (id) => {
  let bookingData = bookings();
  let updateData = bookingData.filter((b) =>
    b.id != id);
  localStorage.setItem("bookingData", JSON.stringify(updateData));
  showBookings();
};

let showBookings = () => {
  let bookingData = bookings();

  tableData.innerHTML = "";
  bookingData.forEach((booking, index) => {
    tableData.innerHTML += ` 
    <tr>
        <th>${index + 1}</th>
        <td>${booking.name}</td>
        <td>${booking.event}</td>
        <td>${booking.seats}</td>
      <td>
        <button onclick = "editBooking(${booking.id})">Edite</button>
        <button onclick ="deleteBooking(${booking.id})">Delete</button>
      </td>
    </tr>
`
  });

}
showBookings();