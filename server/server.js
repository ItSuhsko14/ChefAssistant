import express from 'express';
import jwt from 'jsonwebtoken'	

const app = express();

const PORT = 5000;

app.use(express.json());

app.get('/',  (req, res) => {
	res.send("Chef assistants");
});

app.post('/auth/login', (req, res) =>{
	console.log(req.body);

	const token = jwt.sign({
		email: req.body.email,
		password: req.body.password
	}, 'sekretKey');
	
	res.json({
		success: true,
		token
	})

} )

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
});

	console.log('Server started on PORT ' + PORT);
	