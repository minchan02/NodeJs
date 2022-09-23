const crypto = require('crypto');
const StretchingKey = 9999;

const createSalt = () =>
	new Promise((resolve,reject)=>{
		crypto.randomBytes(64, (err,buf)=>{
			if(err) reject(err);
			resolve(buf.toString('base64'));
		});
});

const createHashedPassword = (plainPassword) =>
		new Promise(async (resolve, reject)=>{
			const salt = await createSalt();
			crypto.pbkdf2(plainPassword, salt, StretchingKey, 64, 'sha512', (err, key)=>{
				if(err) reject(err);
				resolve({password : key.toString('base64'), salt});
			})
		});

module.exports = createHashedPassword;