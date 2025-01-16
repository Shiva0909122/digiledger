# Shiva0909122-DigiLedger

DigiLedger is a web application designed to manage digital ledgers effectively. This project utilizes modern web technologies including React, TypeScript, TailwindCSS, and Supabase for a robust and scalable solution.

## Directory Structure

```
shiva0909122-digiledger/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   └── supabase.ts
│   └── pages/
│       ├── Blog.tsx
│       ├── Contact.tsx
│       ├── Dashboard.tsx
│       ├── Features.tsx
│       ├── Home.tsx
│       ├── Login.tsx
│       ├── SignUp.tsx
│       └── Testimonials.tsx
├── supabase/
│   └── migrations/
│       └── 20250116022600_nameless_bridge.sql
└── .bolt/
    ├── config.json
    └── prompt
```

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or later).
- **npm or yarn**: Package manager for handling dependencies.
- **Supabase**: A Supabase project configured with your database and keys.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shiva0909122-digiledger.git
cd shiva0909122-digiledger
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Set Up Supabase

1. Navigate to `src/lib/supabase.ts`.
2. Replace the placeholders with your Supabase project details:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
3. Apply the database migrations using Supabase CLI:

```bash
supabase db push
```

### 4. Start the Development Server

Run the development server using the Vite command:

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to:

```
http://localhost:5173
```

### 5. Build for Production

To create a production build of the project, run:

```bash
npm run build
```

The output will be available in the `dist/` directory.

### 6. Run Linting

Ensure your code follows best practices using ESLint:

```bash
npm run lint
```

### 7. Environment Variables

If the project requires environment variables, create a `.env` file in the root directory and define the required variables. Refer to `vite.config.ts` or `supabase.ts` for placeholders and expected keys.

### 8. Format Code

If Prettier is configured, format your code:

```bash
npm run format
```

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Supabase
- **Build Tool**: Vite

## Contributing

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Description of changes"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch-name
   ```

5. Create a pull request.
