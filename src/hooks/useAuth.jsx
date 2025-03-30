import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const storedToken = localStorage.getItem("token");
      const storedRole = localStorage.getItem("role");
  
      if (storedUser && storedToken) {
        setUser(storedUser);
        setToken(storedToken);
        setRole(storedRole || "colaborador");
        console.log("📌 Token carregado com sucesso:", storedToken);
      } else {
        console.warn("⚠️ Token ou usuário não encontrado no localStorage.");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      }
    } catch (error) {
      console.error("❌ Erro ao carregar o token:", error);
      localStorage.clear();
    }
  }, []);
  
  

  const login = (userData, token) => {
    if (!userData) {
      console.error("Erro: Dados de login inválidos.");
      return;
    }
  
    setUser(userData);
    setToken(token);
    setRole(userData.role || "colaborador");
  
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    localStorage.setItem("role", userData.role || "colaborador");
  };
  

  const logout = () => {
    setUser(null);
    setToken(null);
    setRole(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
