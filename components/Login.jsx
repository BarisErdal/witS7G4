import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    accept: false,
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongPass = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;

  const validate = (name, value) => {
    let err = "";

    if (name === "email" && !emailRegex.test(value)) {
      err = "Geçerli bir email giriniz.";
    }

    if (name === "password" && !strongPass.test(value)) {
      err = "Parola en az 6 karakter olmalı, 1 büyük harf ve 1 sayı içermeli.";
    }

    if (name === "accept" && !value) {
      err = "Devam etmek için şartları kabul etmelisiniz.";
    }

    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: val });
    validate(name, val);
  };

  const isValid =
    emailRegex.test(form.email) &&
    strongPass.test(form.password) &&
    form.accept;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      nav("/success");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          className="input-field"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          data-cy="email"
        />
        {errors.email && <p data-cy="error-email">{errors.email}</p>}

        <input
          className="input-field"
          name="password"
          placeholder="Password"
          value={form.password}
          type="password"
          onChange={handleChange}
          data-cy="password"
        />
        {errors.password && <p data-cy="error-pass">{errors.password}</p>}

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="accept"
            checked={form.accept}
            onChange={handleChange}
            data-cy="accept"
          />
          Şartları kabul ediyorum
        </label>
        {errors.accept && <p data-cy="error-accept">{errors.accept}</p>}

        <button disabled={!isValid} data-cy="submit">
          Login
        </button>
      </form>
    </div>
  );
}
