import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  phone: yup.string().required('O telefone é obrigatório'),
  message: yup.string().required('A mensagem é obrigatória'),
});

export default validationSchema;
