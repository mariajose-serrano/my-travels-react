# ✈️ My Travels App

Aplicación web para planificar y gestionar tus viajes de forma visual e intuitiva.

🔗 **[Ver la web aquí](https://mariajose-serrano.github.io/my-travels-react/)**

---

## ✨ Funcionalidades

- Añadir viajes con destino, fechas y notas
- Información automática del destino via Wikipedia
- Imagen automática de cada destino
- Gestión del estado global con Redux

---

## 🚀 Tecnologías utilizadas

- ⚛️ React + TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🗂️ Redux Toolkit
- 🌍 API de Wikipedia para información de destinos

---

## 🛠️ Instalación local
```bash
git clone https://github.com/mariajose-serrano/my-travels-react.git
cd my-travels-react
npm install
npm run dev
```

---

Desarrollado por **María José Serrano** 🙋‍♀️

---

## ⚙️ Configuración del proyecto

Este proyecto usa React + TypeScript + Vite. A continuación la configuración técnica de la plantilla base.

### ESLint

Para aplicaciones en producción se recomienda activar reglas con tipado:
```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

También puedes instalar [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom):
```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```