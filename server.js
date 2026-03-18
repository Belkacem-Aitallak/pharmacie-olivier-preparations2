const express = require("express")

const app = express()
app.use(express.json())

// données exemple
let medicaments = [
  { id: 1, nom: "Paracetamol", stock: 120 },
  { id: 2, nom: "Ibuprofene", stock: 80 }
]

// route principale
app.get("/", (req, res) => {
  res.send("Pharmacie Olivier API running 🚀")
})

// liste medicaments
app.get("/medicaments", (req, res) => {
  res.json(medicaments)
})

// ajouter medicament
app.post("/medicaments", (req, res) => {
  const medicament = req.body
  medicaments.push(medicament)
  res.json({ message: "Medicament ajouté" })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})