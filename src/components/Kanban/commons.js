export const getColumnHeaderColors = (columnHeaderName) => {
  switch (columnHeaderName) {
    case "open":
      return "grey";
    case "inProgress":
      return "pink";
    case "pending":
      return "#FFC53D";
    case "completed":
      return "green";
    case "closed":
      return "red";
    default:
      return "black";
  }
};
