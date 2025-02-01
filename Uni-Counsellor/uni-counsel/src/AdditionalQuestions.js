document.addEventListener("DOMContentLoaded", function () {
  const questions = [
      "What is your name?",
      "What is your favourite colour?",
      "Where do you live?",
      "What is your hobby?"
  ];

  const form = document.createElement("form");
  form.id = "qaForm";

  questions.forEach((question, index) => {
      const label = document.createElement("label");
      label.textContent = question;
      label.htmlFor = `answer${index}`;
      
      const input = document.createElement("input");
      input.type = "text";
      input.id = `answer${index}`;
      input.name = `answer${index}`;
      input.required = true;
      
      form.appendChild(label);
      form.appendChild(document.createElement("br"));
      form.appendChild(input);
      form.appendChild(document.createElement("br"));
  });

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "submit";

  form.appendChild(submitButton);

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "intermediate.html";
  });

  document.body.appendChild(form);
});
