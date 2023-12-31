const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date) {
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return month + " " + day + ", " + year;
}

export default formatDate;
