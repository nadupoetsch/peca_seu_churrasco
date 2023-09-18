const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON requests

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peca_seu_churrasco_2',
});

// Add a new user
app.post('/user', function (req, res) {
  const { email, senha, nome, cpf, endereco } = req.body;

  // Validate that required fields are provided
  if (!email || !senha || !nome || !cpf || !endereco) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  // Check if the email already exists in the database
  const checkEmailQuery = 'SELECT * FROM user WHERE email = ?';
  connection.query(checkEmailQuery, [email], function (checkError, checkResults) {
    if (checkError) {
      console.error('Error checking email:', checkError);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // If the email already exists, return an error
    if (checkResults.length > 0) {
      res.status(400).json({ error: 'Email already exists' });
      return;
    }

    // If the email doesn't exist, insert the new user
    const insertUserQuery = 'INSERT INTO user (email, senha, nome, cpf, endereco) VALUES (?, ?, ?, ?, ?)';
    connection.query(insertUserQuery, [email, senha, nome, cpf, endereco], function (insertError, insertResults) {
      if (insertError) {
        console.error('Error inserting user data:', insertError);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('User created successfully with ID:', insertResults.insertId);

      // Return the newly created user data
      const newUser = {
        id: insertResults.insertId,
        email,
        senha,
        nome,
        cpf,
        endereco,
      };

      res.status(201).json({ message: 'User created successfully', user: newUser });
    });
  });
});

// Retrieve all users
app.get('/user', function (req, res) {
  connection.query('SELECT * FROM user', function (error, results) {
    if (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json(results);
  });
});

// Retrieve a specific user by ID
app.get('/user/:id', function (req, res) {
  const userId = req.params.id;

  connection.query('SELECT * FROM user WHERE id = ?', [userId], function (error, results) {
    if (error) {
      console.error('Error retrieving user by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Update a user by ID
app.put('/user/:id', function (req, res) {
  const userId = req.params.id;
  const { email, senha, nome, cpf, endereco } = req.body;

  // ... (you may want to add validation for required fields here) ...

  const updateUserQuery = 'UPDATE user SET email = ?, senha = ?, nome = ?, cpf = ?, endereco = ? WHERE id = ?';
  connection.query(
    updateUserQuery,
    [email, senha, nome, cpf, endereco, userId],
    function (error, results) {
      if (error) {
        console.error('Error updating user by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      if (results.affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User updated successfully' });
      }
    }
  );
});

// Delete a user by ID
app.delete('/user/:id', function (req, res) {
  const userId = req.params.id;

  const deleteUserQuery = 'DELETE FROM user WHERE id = ?';
  connection.query(deleteUserQuery, [userId], function (error, results) {
    if (error) {
      console.error('Error deleting user by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
});


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

  // ... (you may want to add validation for required fields here) ...

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
        console.error('Error inserting order data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('Order created successfully with ID:', results.insertId);

      // Return the newly created order data
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

      res.status(201).json({ message: 'Order created successfully', order: newOrder });
    }
  );
});

// Retrieve all orders
app.get('/order', function (req, res) {
  connection.query('SELECT * FROM orders', function (error, results) {
    if (error) {
      console.error('Error retrieving orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json(results);
  });
});

// Retrieve a specific order by ID
app.get('/order/:id', function (req, res) {
  const orderId = req.params.id;

  connection.query('SELECT * FROM orders WHERE id = ?', [orderId], function (error, results) {
    if (error) {
      console.error('Error retrieving order by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Update an order by ID
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

  // ... (you may want to add validation for required fields here) ...

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
        console.error('Error updating order by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json({ message: 'Order updated successfully' });
      }
    }
  );
});

// Delete an order by ID
app.delete('/order/:id', function (req, res) {
  const orderId = req.params.id;

  const deleteOrderQuery = 'DELETE FROM orders WHERE id = ?';
  connection.query(deleteOrderQuery, [orderId], function (error, results) {
    if (error) {
      console.error('Error deleting order by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.status(200).json({ message: 'Order deleted successfully' });
    }
  });
});

app.listen(3005, () => {
  console.log('Server is running on http://localhost:3005');
});
