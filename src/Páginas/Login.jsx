export default function Login() {
    return <h1>Tela de Login</h1>
}

return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <p style={{ color: "red" }}>{erro}</p>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  );