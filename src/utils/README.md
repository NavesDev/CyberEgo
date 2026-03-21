# Storage Utility Module

Módulo de persistência reutilizável para gerenciar dados no localStorage de forma type-safe e robusta.

## Características

- **Type-safe**: Suporte completo para TypeScript com tipagem genérica
- **Validação**: Validação opcional de dados antes de usar
- **Tratamento de erros**: Gerenciamento robusto de erros com fallback para valores padrão
- **Reutilizável**: Interface simples e genérica para qualquer tipo de dado

## Uso Básico

### Exemplo 1: Storage simples

```typescript
import { createStorage } from '../utils/storage';

// Criar um storage manager
const userNameStorage = createStorage<string>({
  key: 'user_name',
  defaultValue: 'Anonymous',
});

// Salvar valor
userNameStorage.set('João Silva');

// Ler valor
const name = userNameStorage.get(); // 'João Silva'

// Remover valor
userNameStorage.remove();
```

### Exemplo 2: Storage com validação

```typescript
import { createStorage } from '../utils/storage';

type UserRole = 'admin' | 'user' | 'guest';

const isValidRole = (value: unknown): value is UserRole => {
  return typeof value === 'string' && ['admin', 'user', 'guest'].includes(value);
};

const roleStorage = createStorage<UserRole>({
  key: 'user_role',
  defaultValue: 'guest',
  validate: isValidRole,
});

// Se o valor salvo for inválido, retorna 'guest'
const role = roleStorage.get();
```

### Exemplo 3: Storage de objetos complexos

```typescript
import { createStorage } from '../utils/storage';

interface UserPreferences {
  notifications: boolean;
  theme: 'light' | 'dark';
  language: string;
}

const prefsStorage = createStorage<UserPreferences>({
  key: 'user_preferences',
  defaultValue: {
    notifications: true,
    theme: 'light',
    language: 'en',
  },
});

// Salvar preferências
prefsStorage.set({
  notifications: false,
  theme: 'dark',
  language: 'pt',
});

// Ler preferências
const prefs = prefsStorage.get();
```

### Exemplo 4: Uso em React Context

```typescript
import { createContext, useState, useEffect } from 'react';
import { createStorage, STORAGE_KEYS } from '../utils/storage';

const settingsStorage = createStorage<Settings>({
  key: STORAGE_KEYS.USER_PREFERENCES,
  defaultValue: defaultSettings,
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettingsState] = useState(() => {
    return settingsStorage.get();
  });

  useEffect(() => {
    settingsStorage.set(settings);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings: setSettingsState }}>
      {children}
    </SettingsContext.Provider>
  );
};
```

## API Reference

### `createStorage<T>(config: StorageConfig<T>)`

Cria uma instância do StorageManager.

**Parâmetros:**
- `config.key`: Chave única para identificar o dado no localStorage
- `config.defaultValue`: Valor padrão retornado quando o dado não existe ou é inválido
- `config.validate`: (Opcional) Função de validação para verificar se o valor é válido

**Retorna:** `StorageManager<T>`

### Métodos do StorageManager

#### `get(): T`
Obtém o valor do localStorage. Retorna o valor padrão se não existir ou for inválido.

#### `set(value: T): void`
Salva o valor no localStorage.

#### `remove(): void`
Remove o valor do localStorage.

#### `has(): boolean`
Verifica se existe um valor salvo.

#### `clear(): void`
Remove o valor e reseta para o padrão.

## Storage Keys Predefinidas

Use as chaves predefinidas em `STORAGE_KEYS` para manter consistência:

```typescript
import { STORAGE_KEYS } from '../utils/storage';

// Chaves disponíveis:
STORAGE_KEYS.THEME              // 'cyberego_theme'
STORAGE_KEYS.LANGUAGE           // 'cyberego_language'
STORAGE_KEYS.USER_PREFERENCES   // 'cyberego_user_preferences'
```

## Exemplos de Implementação no Projeto

### ThemeContext (src/contexts/ThemeContext.tsx)
Gerencia o tema da aplicação com persistência.

### I18nContext (src/i18n/I18nContext.tsx)
Gerencia o idioma da aplicação com persistência.

## Boas Práticas

1. **Use validação** para dados críticos que podem causar erros se inválidos
2. **Defina valores padrão sensatos** que mantenham a aplicação funcional
3. **Use STORAGE_KEYS** ao invés de strings mágicas
4. **Adicione prefixo único** nas chaves para evitar conflitos (ex: 'cyberego_')
5. **Documente os tipos** usando TypeScript para facilitar manutenção
