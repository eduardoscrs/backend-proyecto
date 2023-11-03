
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "../envios.html");
});

app.post('/enviar', (req, res) => {

  const nombre = req.body.nombre;
  const pais = req.body.Pais;
  const ciudad = req.body.Ciudad;
  const direccion = req.body.direccion;
  const telefono = req.body.telefono;
  const comentario = req.body.Comentario;


  console.log(`Nombre: ${nombre}`);
  console.log(`Pais: ${pais}`);
  console.log(`Ciudad: ${ciudad}`);
  console.log(`Dirección: ${direccion}`);
  console.log(`Teléfono: ${telefono}`);
  console.log(`Comentario: ${comentario}`);

  res.send('Pedido enviado con éxito');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
