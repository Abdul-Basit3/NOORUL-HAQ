import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: 'user' | 'admin') => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role: 'user' | 'admin' = 'user') => {
    // Admin credentials
    if (role === 'admin') {
      if (email === 'admin@gmsa.edu' && password === 'GMSA@Admin2026') {
        setUser({ email, role: 'admin' });
        return true;
      }
      return false;
    }
    
    // Regular user login
    if (email && password) {
      setUser({ email, role: 'user' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
