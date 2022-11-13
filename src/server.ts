import dotenv from 'dotenv';
import app from './app';
import chalk from 'chalk';

dotenv.config({path:'../.env'});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(chalk.green.bold(`Rodando ${process.env.NOMEE} Lisu on Port: ${process.env.PORT}`));
});