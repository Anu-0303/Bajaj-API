const express = require("express");
const app = express();
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data) || data.length !== 5) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid data format" });
  }

  const userId = "req.body._id";
  const emailId = "req.body.email";
  const collegeRollNumber = "req.body.roll_number";

  const evenNumbers = data.filter((num) => parseInt(num) % 2 === 0);
  const oddNumbers = data.filter((num) => parseInt(num) % 2 !== 0);

  // Filtering alphabets and converting to uppercase
  const alphabets = data.filter(
    (char) =>
      typeof char === "string" && char.length === 1 && /^[a-zA-Z]$/.test(char),
  );
  const uppercaseAlphabets = alphabets.map((char) => char.toUpperCase());

  const response = {
    is_success: true,
    user_id: userId,
    email: emailId,
    roll_number: collegeRollNumber,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets: uppercaseAlphabets,
  };

  res.json(response);
});

// Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
