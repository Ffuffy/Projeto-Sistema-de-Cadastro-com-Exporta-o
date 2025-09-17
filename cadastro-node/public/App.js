// public/app.js
document.getElementById('submit').addEventListener('click', async () => {
  const nome = document.getElementById('nome').value.trim();
  const sobrenome = document.getElementById('sobrenome').value.trim();
  const idade = Number(document.getElementById('idade').value);
  const genero = document.getElementById('genero').value;
  const senha = document.getElementById('senha').value;

  const msg = document.getElementById('msg');
  msg.textContent = 'Enviando...';

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ nome, sobrenome, idade, genero, senha })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Erro');
    msg.style.color = 'green';
    msg.textContent = `Criado: ${data.nome} ${data.sobrenome} (id ${data.id})`;
    // limpar formulário
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('senha').value = '';
  } catch (err) {
    msg.style.color = 'red';
    msg.textContent = err.message;
  }
});
