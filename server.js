import mysql from "mysql2"
import dotenv from 'dotenv'

dotenv.config()
const server = mysql.createPool({
    host        : process.env.SQL_HOST,
    user        : process.env.SQL_USER,
    password    : process.env.SQL_PASS,
    database    : process.env.SQL_DABA
}).promise()

const [getBooking] = await server.query('SELECT * FROM Bookings')
const [insBooking] = await server.query('INSERT INTO Booking VALUES()')
const [insCustomer] = await server.query('INSERT INTO Customer VALUES()')
const [showBooking] = await server.query('DELETE FROM Booking')
console.log(result)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
