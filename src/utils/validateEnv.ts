import { cleanEnv, host, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    HOST: host(),
    PORT: port(),
  });
};

export default validateEnv;
