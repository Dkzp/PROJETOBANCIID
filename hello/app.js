var msg = 'Hello World';
console.log(msg);

// Serve todos os arquivos na pasta 'public' automaticamente
app.use(express.static('public')); // Sem rotas manuais!

