const Dasboard = ({ generateDocuments }) => {
  return (
    <div>
      <h1>Aca se manipulan los datos desde admin</h1>
      <button onClick={generateDocuments}>Generar</button>
    </div>
  );
};

export default Dasboard;
