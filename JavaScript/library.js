//==Scroll Control==
function scrollSongs(direction, row) {
  //Row1
  const container1 = document.getElementById("row1scroll");
  const scrollAmount1 = 1405;
  console.log(row);
  if (direction === "left" && row === 1) {
    container1.scrollLeft -= scrollAmount1;
  } else if (direction != "left" && row === 1) {
    container1.scrollLeft += scrollAmount1;
  }
  //Row2
  const container2 = document.getElementById("row2scroll");
  const scrollAmount2 = 1405;

  if (direction === "left" && row === 2) {
    container2.scrollLeft -= scrollAmount2;
  } else if (direction != "left" && row === 2) {
    container2.scrollLeft += scrollAmount2;
  }
}
