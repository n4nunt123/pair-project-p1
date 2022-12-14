function timeFormatter(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();

  if(month < 10) month = 0 + `${month}`;
  if(day < 10) day = 0 + `${day}`;
  if(hour < 10) hour = 0 + `${hour}`;
  if(minute < 10) minute = 0 + `${minute}`;
  
  return `${year}-${month}-${day} (${hour}:${minute})`
}

function dateFormatter(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if(month < 10) month = 0 + `${month}`;
  if(day < 10) day = 0 + `${day}`;
  
  return `${year}-${month}-${day}`
}

function listErrrors(error) {
  return error.errors.map(el => el.message);
}

let imageFormated = (imgUrl) => {
  return imgUrl.substring(7)
}

module.exports = { 
  timeFormatter,
  dateFormatter,
  listErrrors,
  imageFormated
};