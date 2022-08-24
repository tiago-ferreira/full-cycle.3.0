const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'nodeuser',
    password: 'nodeuser',
    database:'nodedb'
};







 app.get('/', (req,res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('Tiago'),('Xablau'),('Hulk'),('Chaves')`
    connection.query(sql)

    connection.query('SELECT * FROM people;', (err, rows) => {
        if (err) {
          throw err;
        }
        let toReturn = ''
        rows.forEach(element => {
            toReturn += `<li>${element.name}</li>`
        });
        res.send(`<h1>Full Cycle Rocks!</h1>
                  <ul>
                    ${toReturn}
                 </ul>`);  
    });
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})