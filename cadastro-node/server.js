const ExcelJS = require('exceljs');

// rota para exportar usuários em Excel
app.get('/api/users/excel', async (req, res) => {
  try {
    const users = await User.findAll({ 
      attributes: ['id','nome','sobrenome','idade','genero','createdAt'] 
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Usuários');

    // Cabeçalhos
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Nome', key: 'nome', width: 20 },
      { header: 'Sobrenome', key: 'sobrenome', width: 20 },
      { header: 'Idade', key: 'idade', width: 10 },
      { header: 'Gênero', key: 'genero', width: 15 },
      { header: 'Criado em', key: 'createdAt', width: 25 }
    ];

    // Inserir os dados
    users.forEach(user => worksheet.addRow(user.toJSON()));

    // Configurar resposta como download
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=usuarios.xlsx'
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao gerar Excel');
  }
});
