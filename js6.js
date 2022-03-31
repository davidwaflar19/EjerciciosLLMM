
(function() {
  const quotes = [
    {
      quote:
        "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse",
      author: " Charles Baudelaire"
    },
    {
      quote:
        "Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos",
      author: "Bob Marley"
    },
    {
      quote:
        "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad",
      author: "Albert Einstein "
    },
    {
      quote: "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera.",
      author: "Albert Einstein"
    },
    {
      quote:
        "Si es bueno vivir, todavía es mejor soñar, y lo mejor de todo, despertar. ",
      author: "Antonio Machado"
    },
    {
      quote:
        "Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida.",
      author: " Lao Tsé"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();