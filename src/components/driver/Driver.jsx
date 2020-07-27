import React, { useState } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { saveDriver } from '../../services/apiService';
import { validateDriverInfo } from '../../utils/formValidation';
import FieldError from './FieldError';

const Driver = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleOnSubmit = async (data) => {
    setIsSaving(true);
    await saveDriver(data);
    setIsSaving(false);
  };

  return isSaving ? (
    'Procesando...'
  ) : (
    <div>
      <h2>Cargar conductor</h2>
      <hr />
      <FinalForm
        onSubmit={handleOnSubmit}
        validate={validateDriverInfo}
        render={({ handleSubmit, hasValidationErrors, pristine, submitting }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Nombre</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="nombre"
                    placeholder="Ingresar nombre"
                  />
                  <FieldError name="nombre" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSurname">
                  <Form.Label>Apellido</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="apellido"
                    placeholder="Ingresar apellido"
                  />
                  <FieldError name="apellido" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAge">
                  <Form.Label>Edad</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    max="150"
                    min="1"
                    name="edad"
                    placeholder="Ingresar edad"
                    type="number"
                  />
                  <FieldError name="edad" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Teléfono</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="telefono"
                    placeholder="Ingresar teléfono"
                  />
                  <FieldError name="telefono" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="email"
                    placeholder="Ingresar email"
                  />
                  <FieldError name="email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="password"
                    placeholder="Ingresar password"
                    type="password"
                  />
                  <FieldError name="password" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPlate">
                  <Form.Label>Patente</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="patente"
                    placeholder="Ingresar patente"
                  />
                  <FieldError name="patente" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridModel">
                  <Form.Label>Modelo</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="modelo"
                    placeholder="Ingresar modelo"
                  />
                  <FieldError name="modelo" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridYear">
                  <Form.Label>Año</Form.Label>
                  <Field
                    autoComplete="nope"
                    className="form-control"
                    component="input"
                    name="año"
                    placeholder="Ingresar año"
                  />
                  <FieldError name="año" />
                </Form.Group>
              </Form.Row>

              <Button
                variant="primary"
                type="submit"
                disabled={hasValidationErrors || pristine || submitting}
              >
                Guardar
              </Button>
            </Form>
          );
        }}
      />
    </div>
  );
};
export default Driver;
