import mysql from "mysql2/promise"
import dotenv from 'dotenv'

dotenv.config()

const server = await mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DABA
});

try {
    const [getBooking] = await server.query('SELECT * FROM Booking')
    const [insBooking] = await server.query('INSERT INTO Booking VALUES()')
    const [insCustomer] = await server.query('INSERT INTO Customer VALUES()')
    const [showBooking] = await server.query('DELETE FROM Booking')
    console.log(result)
} catch (error) {
    console.error(error)

}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
