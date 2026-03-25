export const allTerrenosQuery = `*[_type == "terreno"] | order(nombre asc) {
  "id": terrenoId,
  nombre,
  empresa,
  claveCatastral,
  ubicacionCorta,
  superficieM2,
  superficieSqftEdificio,
  ubicacionLegal,
  servicios,
  ciudad,
  dentroDeParque,
  nota
}`
