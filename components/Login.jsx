import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button, NavItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';


const initialForm = {
  email: '',
  password: '',
  terms: false,
};

export default function Login() {
  const [form, setForm] = useState(initialForm);

  const history = useHistory();

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    setForm({ ...form, [name]: value });

    if (type === 'checkbox') {
      if (checked) {
        setForm({ ...form, [name]: true });
      } else {
        setForm({ ...form, [name]: false });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          onChange={handleChange}
          value={form.password}
        />
      </FormGroup>
      {/* reactstrap checkbox ekleyelim*/}
      <FormGroup check>
        <Input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={handleChange}
        />{' '}
        <Label htmlFor="terms" check>
          I agree to terms of service and privacy policy
        </Label>
      </FormGroup>
      <FormGroup className="text-center p-4">
        <Button color="primary" disabled={!form.terms}>
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}