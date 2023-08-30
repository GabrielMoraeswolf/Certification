import React, { useState } from 'react';
import XLSX from 'xlsx';
import jsPDF from 'jspdf';

function App() {
  const [studentName, setStudentName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleGenerateCertificate = () => {
    if (!studentName || !selectedCourse) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Certificado para ${studentName}`, 20, 20);
    doc.text(`Curso: ${selectedCourse}`, 20, 30);

    // Adicione mais informações ao PDF, como assinaturas, selos, etc.

    doc.save('certificado.pdf');
  };

  return (
    <div className="App">
      <h1>Emissor de Certificados</h1>
      <label>
        Nome do Aluno:
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      </label>
      <br />
      <label>
        Curso:
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">Selecione o curso</option>
          <option value="Curso 1">Curso 1</option>
          <option value="Curso 2">Curso 2</option>
          {/* Adicione mais opções de cursos aqui*/}
        </select>
      </label>
      <br />
      <button onClick={handleGenerateCertificate}>Gerar Certificado</button>
    </div>
  );
}

export default App;
