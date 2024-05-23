# PATCH

Mongoose ofrece métodos específicos para realizar actualizaciones PATCH en documentos de MongoDB. Estos métodos te permiten aprovechar las características y la sintaxis orientada a objetos de Mongoose para simplificar el proceso de actualización y hacerlo más intuitivo.

1. Método updateOne:

El método updateOne de Mongoose te permite actualizar campos específicos de un documento existente de manera similar a como lo harías en JavaScript. Puedes especificar el ID del documento a actualizar y un objeto de actualización que contenga los campos que deseas modificar y sus nuevos valores.

Ejemplo:

JavaScript
const pokemonData = {
  name: "Pikachu Nuevo",
  level: 30
};

const updateResult = await PokeModel.updateOne({ _id: req.params.id }, pokemonData);

if (updateResult.modifiedCount === 0) {
  console.error('Pokemon not found or not updated');
} else {
  console.log('Pokemon updated successfully');
}
Usa el código con precaución.
content_copy
2. Método findOneAndUpdate:

El método findOneAndUpdate de Mongoose combina la búsqueda y la actualización en un solo paso. Te permite encontrar un documento coincidente con una consulta específica y luego actualizarlo con los campos proporcionados. Devuelve el documento actualizado si se encuentra y lo actualiza, o null si no se encuentra ningún documento coincidente.

Ejemplo:

JavaScript
const pokemonData = {
  name: "Pikachu Nuevo",
  level: 30
};

const updatedPokemon = await PokeModel.findOneAndUpdate(
  { name: "Pikachu" },
  pokemonData,
  { new: true } // Retorna el documento actualizado
);

if (!updatedPokemon) {
  console.error('Pokemon not found');
} else {
  console.log('Pokemon updated:', updatedPokemon);
}
Usa el código con precaución.
content_copy
3. Método save:

Si ya tienes una instancia del documento existente cargada en tu aplicación (por ejemplo, después de recuperarlo de la base de datos), puedes usar el método save del documento para actualizarlo y guardar los cambios en la base de datos.

Ejemplo:

JavaScript
const existingPokemon = await PokeModel.findById(req.params.id);
if (!existingPokemon) {
  return res.status(404).json({ error: 'Pokemon not found' });
}

existingPokemon.name = "Pikachu Nuevo";
existingPokemon.level = 30;

await existingPokemon.save();

res.json({ message: 'Pokemon updated successfully' });
Usa el código con precaución.
content_copy
Beneficios de usar métodos de Mongoose:

Sintaxis más intuitiva: Los métodos de Mongoose te permiten utilizar una sintaxis más cercana a JavaScript estándar para definir las actualizaciones, en lugar de escribir consultas MongoDB crudas.
Validación integrada: Mongoose puede ayudarte a validar los datos de actualización antes de guardarlos en la base de datos, lo que reduce el riesgo de errores.
Manejo de errores simplificado: Mongoose proporciona mecanismos para manejar errores de manera más organizada y devolver respuestas informativas en caso de fallos.
Integración con modelos: Los métodos de Mongoose se integran perfectamente con los modelos de datos definidos en tu aplicación Mongoose, lo que facilita el acceso y la actualización de documentos.
En resumen, los métodos updateOne, findOneAndUpdate y save de Mongoose te brindan herramientas eficientes y convenientes para realizar actualizaciones PATCH en tus documentos de MongoDB. Al aprovechar estas funciones, puedes simplificar tu código, mejorar la legibilidad y reducir la posibilidad de errores.