const similarStyle = {
  fontSize: 14,
  color: "blue",
  fontWeight: 600,
  lineHeight: 21,
  letterSpacing: "0em",
};

const BoldLabels = {
  label1: <span style={similarStyle}>Bonnie Green</span>,
  label2: <span style={similarStyle}>#00910</span>,
  label3: <span style={similarStyle}>#087651</span>,
  label4: <span style={similarStyle}>Bonnie Green</span>,
  label5: <span style={similarStyle}>Jese Leos</span>,
  label6: <span style={similarStyle}>THEMSBERG LLC</span>,
};

export const data = [
  {
    key: "1",
    transaction: `Payment from ${BoldLabels.label1}`,
    dateNtime: "18,Oct,2023",
    amount: "$2300",
  },
  {
    key: "2",
    transaction: `Payment refund to ${BoldLabels.label2}`,
    dateNtime: "18,Oct,2023",
    amount: "$2300",
  },
  {
    key: "3",
    transaction: `Payment failed from ${BoldLabels.label3}`,
    dateNtime: "18,Oct,2023",
    amount: "$2300",
  },
  {
    key: "4",
    transaction: `Payment from ${BoldLabels.label4}`,
    dateNtime: "18,Oct,2023",
    amount: "$2300",
  },
  {
    key: "5",
    transaction: `Payment from ${BoldLabels.label5}`,
    dateNtime: "18,Oct,2023",
    amount: "$2300",
  },
  {
    key: "6",
    transaction: `Payment from ${BoldLabels.label6}`,
    dateNtime: "18,Oct,2023",
    amount: "$2300",
  },
];
