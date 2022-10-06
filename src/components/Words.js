var programming_languages = [
	"guja",
	"rompetronos",
	"solitario",
	"escudo",
	"equipo",
	"mentira",
	"verdad",
    "lucecita",
	"asaltante",
	"centinela",
	"quiebrasol",
	"arrepentimiento",
	"furia",
  "desenfreno",
  "destino"
]

function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }