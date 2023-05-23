async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      headers: { Authorization: "Bearer " + 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 },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query("Write an extremely long lecture about a random topic ").then((response) => {
  console.log(JSON.stringify(response));
});
