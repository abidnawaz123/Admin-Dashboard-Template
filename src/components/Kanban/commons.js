export const getColumnHeaderColors = (columnHeaderName) => {
  switch (columnHeaderName) {
    case "OPEN":
      return "grey";
    case "INPROGRESS":
      return "pink";
    case "PENDING":
      return "#FFC53D";
    case "COMPLETED":
      return "green";
    case "CLOSED":
      return "red";
    default:
      return "black";
  }
};
