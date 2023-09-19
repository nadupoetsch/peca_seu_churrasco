const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Analisar solicitações JSON

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peca_seu_churrasco_2',
});

// Adicionar um novo usuário
app.post('/user', function (req, res) {
  const { email, senha, nome, cpf, endereco } = req.body;

  // Validar se os campos obrigatórios foram fornecidos
  if (!email || !senha || !nome || !cpf || !endereco) {
    res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    return;
  }

  // Verificar se o email já existe no banco de dados
  const checkEmailQuery = 'SELECT * FROM user WHERE email = ?';
  connection.query(checkEmailQuery, [email], function (checkError, checkResults) {
    if (checkError) {
      console.error('Erro ao verificar o email:', checkError);
      res.status(500).json({ error: 'Erro Interno do Servidor' });
      return;
    }

    // Se o email já existe, retorne um erro
    if (checkResults.length > 0) {
      res.status(400).json({ error: 'Email já existe' });
      return;
    }

    // Se o email não existe, insira o novo usuário
    const insertUserQuery = 'INSERT INTO user (email, senha, nome, cpf, endereco) VALUES (?, ?, ?, ?, ?)';
    connection.query(insertUserQuery, [email, senha, nome, cpf, endereco], function (insertError, insertResults) {
      if (insertError) {
        console.error('Erro ao inserir os dados do usuário:', insertError);
        res.status(500).json({ error: 'Erro Interno do Servidor' });
        return;
      }

      console.log('Usuário criado com sucesso com o ID:', insertResults.insertId);

      // Retorne os dados do novo usuário criado
      const newUser = {
        id: insertResults.insertId,
        email,
        senha,
        nome,
        cpf,
        endereco,
      };

      res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    });
  });
});

// Recuperar todos os usuários
app.get('/user', function (req, res) {
  connection.query('SELECT * FROM user', function (error, results) {
    if (error) {
      console.error('Erro ao recuperar os usuários:', error);
      res.status(500).json({ error: 'Erro Interno do Servidor' });
      return;
    }
    res.status(200).json(results);
  });
});

// Recuperar um usuário específico pelo ID
app.get('/user/:id', function (req, res) {
  const userId = req.params.id;

  connection.query('SELECT * FROM user WHERE id = ?', [userId], function (error, results) {
    if (error) {
      console.error('Erro ao recuperar o usuário pelo ID:', error);
      res.status(500).json({ error: 'Erro Interno do Servidor' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Atualizar um usuário pelo ID
app.put('/user/:id', function (req, res) {
  const userId = req.params.id;
  const { email, senha, nome, cpf, endereco } = req.body;

  // local para adicionar validação para campos obrigatórios

  const updateUserQuery = 'UPDATE user SET email = ?, senha = ?, nome = ?, cpf = ?, endereco = ? WHERE id = ?';
  connection.query(
    updateUserQuery,
    [email, senha, nome, cpf, endereco, userId],
    function (error, results) {
      if (error) {
        console.error('Erro ao atualizar o usuário pelo ID:', error);
        res.status(500).json({ error: 'Erro Interno do Servidor' });
        return;
      }

      if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Usuário não encontrado' });
      } else {
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
      }
    }
  );
});

// Excluir um usuário pelo ID
app.delete('/user/:id', function (req, res) {
  const userId = req.params.id;

  const deleteUserQuery = 'DELETE FROM user WHERE id = ?';
  connection.query(deleteUserQuery, [userId], function (error, results) {
    if (error) {
      console.error('Erro ao excluir o usuário pelo ID:', error);
      res.status(500).json({ error: 'Erro Interno do Servidor' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(200).json({ message: 'Usuário excluído com sucesso' });
    }
  });
});

// Rota para criar um novo pedido
app.post('/order', function (req, res) {
  const {
    pao_de_alho,
    linguica_fina,
    liguica_groca,
    queijo,
    frango,
    porco,
    costela_de_ovelha,
    paleta_de_ovelha,
    picanha,
    file_mignion,
    maminha,
    entrecort,
    costela,
    vazio,
    alcatra,
    capa_de_file,
    sorvete,
    chocolate_barra,
    bombom,
    ceveja_lata,
    refrigerante,
    agua_sem_gas,
    agua_com_gas,
    espumante,
    entrega,
    pagamento,
  } = req.body;

  // adicionar validação para campos obrigatórios

  const insertOrderQuery = `
    INSERT INTO orders (
      pao_de_alho,
      linguica_fina,
      liguica_groca,
      queijo,
      frango,
      porco,
      costela_de_ovelha,
      paleta_de_ovelha,
      picanha,
      file_mignion,
      maminha,
      entrecort,
      costela,
      vazio,
      alcatra,
      capa_de_file,
      sorvete,
      chocolate_barra,
      bombom,
      ceveja_lata,
      refrigerante,
      agua_sem_gas,
      agua_com_gas,
      espumante,
      entrega,
      pagamento
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    insertOrderQuery,
    [
      pao_de_alho,
      linguica_fina,
      liguica_groca,
      queijo,
      frango,
      porco,
      costela_de_ovelha,
      paleta_de_ovelha,
      picanha,
      file_mignion,
      maminha,
      entrecort,
      costela,
      vazio,
      alcatra,
      capa_de_file,
      sorvete,
      chocolate_barra,
      bombom,
      ceveja_lata,
      refrigerante,
      agua_sem_gas,
      agua_com_gas,
      espumante,
      entrega,
      pagamento,
    ],
    function (error, results) {
      if (error) {
        console.error('Erro ao inserir os dados do pedido:', error);
        res.status(500).json({ error: 'Erro Interno do Servidor' });
        return;
      }

      console.log('Pedido criado com sucesso com o ID:', results.insertId);

      // Retorne os dados do novo pedido criado
      const newOrder = {
        id: results.insertId,
        pao_de_alho,
        linguica_fina,
        liguica_groca,
        queijo,
        frango,
        porco,
        costela_de_ovelha,
        paleta_de_ovelha,
        picanha,
        file_mignion,
        maminha,
        entrecort,
        costela,
        vazio,
        alcatra,
        capa_de_file,
        sorvete,
        chocolate_barra,
        bombom,
        ceveja_lata,
        refrigerante,
        agua_sem_gas,
        agua_com_gas,
        espumante,
        entrega,
        pagamento,
      };

      res.status(201).json({ message: 'Pedido criado com sucesso', order: newOrder });
    }
  );
});

// Recuperar todos os pedidos
app.get('/order', function (req, res) {
  connection.query('SELECT * FROM orders', function (error, results) {
    if (error) {
      console.error('Erro ao recuperar os pedidos:', error);
      res.status(500).json({ error: 'Erro Interno do Servidor' });
      return;
    }
    res.status(200).json(results);
  });
});

// Recuperar um pedido específico pelo ID
app.get('/order/:id', function (req, res) {
  const orderId = req.params.id;

  connection.query('SELECT * FROM orders WHERE id = ?', [orderId], function (error, results) {
    if (error) {
      console.error('Erro ao recuperar o pedido pelo ID:', error);
      res.status(500).json({ error: 'Erro Interno do Servidor' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Pedido não encontrado' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Atualizar um pedido pelo ID
app.put('/order/:id', function (req, res) {
  const orderId = req.params.id;
  const {
    pao_de_alho,
    linguica_fina,
    liguica_groca,
    queijo,
    frango,
    porco,
    costela_de_ovelha,
    paleta_de_ovelha,
    picanha,
    file_mignion,
    maminha,
    entrecort,
    costela,
    vazio,
    alcatra,
    capa_de_file,
    sorvete,
    chocolate_barra,
    bombom,
    ceveja_lata,
    refrigerante,
    agua_sem_gas,
    agua_com_gas,
    espumante,
    entrega,
    pagamento,
  } = req.body;

  // adicionar validação para campos obrigatórios

  const updateOrderQuery = `
    UPDATE orders
    SET
      pao_de_alho = ?,
      linguica_fina = ?,
      liguica_groca = ?,
      queijo = ?,
      frango = ?,
      porco = ?,
      costela_de_ovelha = ?,
      paleta_de_ovelha = ?,
      picanha = ?,
      file_mignion = ?,
      maminha = ?,
      entrecort = ?,
      costela = ?,
      vazio = ?,
      alcatra = ?,
      capa_de_file = ?,
      sorvete = ?,
      chocolate_barra = ?,
      bombom = ?,
      ceveja_lata = ?,
      refrigerante = ?,
      agua_sem_gas = ?,
      agua_com_gas = ?,
      espumante = ?,
      entrega = ?,
      pagamento = ?
    WHERE id = ?
  `;

  connection.query(
    updateOrderQuery,
    [
      pao_de_alho,
      linguica_fina,
      liguica_groca,
      queijo,
      frango,
      porco,
      costela_de_ovelha,
      paleta_de_ovelha,
      picanha,
      file_mignion,
      maminha,
      entrecort,
      costela,
      vazio,
      alcatra,
      capa_de_file,
      sorvete,
      chocolate_barra,
      bombom,
      ceveja_lata,
      refrigerante,
      agua_sem_gas,
      agua_com_gas,
      espumante,
      entrega,
      pagamento,
      orderId,
    ],
    function (error, results) {
      if (error) {
        console.error('Erro ao atualizar o pedido pelo ID:', error);
        res.status(500).json({ error: 'Erro Interno do Servidor' });
        return;
      }

      if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Pedido não encontrado' });
      } else {
        res.status(200).json({ message: 'Pedido atualizado com sucesso' });
      }
    }
  );
});

// Excluir um pedido pelo ID
app.delete('/order/:id', function (req, res) {
  const orderId = req.params.id;

  const deleteOrderQuery = 'DELETE FROM orders WHERE id = ?';
  connection.query(deleteOrderQuery, [orderId], function (error, results) {
    if (error) {
      console.error('Erro ao excluir o pedido pelo ID:', error);
      res.status(500).json({ error: 'Erro Interno do Servidor' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Pedido não encontrado' });
    } else {
      res.status(200).json({ message: 'Pedido excluído com sucesso' });
    }
  });
});

app.listen(3005, () => {
  console.log('Servidor está rodando em http://localhost:3005');
});
