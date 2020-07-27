import { setIn } from 'final-form';
import { string, object, number } from 'yup';

const driverInfoSchema = object().shape({
  nombre: string()
    .matches(/^.[a-zA-ZñÑÁáÉéÍíÓóÚúüÜ ]*$/, 'Solo se pueden ingresar letras')
    .min(3, 'El nombre debe superar los 3 caracteres')
    .max(254, 'El nombre no puede superar los 254 caracteres')
    .required('El nombre es requerido'),
  apellido: string()
    .matches(/^.[a-zA-ZñÑÁáÉéÍíÓóÚúüÜ ]*$/, 'Solo se pueden ingresar letras')
    .min(3, 'El apellido debe superar los 3 caracteres')
    .max(254, 'El apellido no puede superar los 254 caracteres')
    .required('El apellido es requerido'),
  edad: number()
    .typeError('El campo edad debe ser un número')
    .positive('El campo edad debe ser un número positivo')
    .nullable(true)
    .transform((v, o) => (o === '' ? null : v))
    .min(0, 'La edad debe ser mayor o igual a 0')
    .max(110, 'La edad debe ser menor a 110 años')
    .required('La edad es requerida'),
  telefono: string()
    .max(17, 'El teléfono no puede superar los 17 caracteres')
    .required('El teléfono es requerido'),
  email: string()
    .email('El campo email debe tener una sintaxis válida (ej: correo@dominio.com)')
    .required('El email es requerido'),
  password: string().required('La contraseña es requerida'),
  patente: string().required('La patente es requerida'),
  modelo: string().required('El modelo es requerido'),
  año: number()
    .typeError('El campo año debe ser un número')
    .positive('El campo año debe ser un número positivo')
    .nullable(true)
    .transform((v, o) => (o === '' ? null : v))
    .required('El campo año es requerido'),
});

const createValidator = (schema) => async (data) => {
  try {
    await schema.validate(data, { abortEarly: false });
  } catch (err) {
    return err.inner.reduce(
      (formErrors, { path, message }) => setIn(formErrors, path, message),
      {},
    );
  }
};

export const validateDriverInfo = createValidator(driverInfoSchema);
