# Rick and Morty GraphQL App

A Next.js application that demonstrates the use of GraphQL to fetch and display data from the Rick and Morty API.

## Features

- Fetches and displays Rick and Morty episodes using GraphQL
- Built with Next.js and TypeScript
- Responsive design with Tailwind CSS
- Apollo Client for state management

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/alx-graphql-0x01.git
   cd alx-graphql-0x01
   ```

2. Install dependencies:
   ```bash
   cd alx-rick-and-morty-app
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
alx-rick-and-morty-app/
├── graphql/
│   ├── apolloClient.ts  # Apollo Client configuration
│   └── queries.ts      # GraphQL queries
├── src/
│   ├── pages/
│   │   ├── _app.tsx    # App wrapper with Apollo Provider
│   │   └── index.tsx   # Home page with episodes list
│   └── styles/
│       └── globals.css # Global styles
├── public/             # Static files
└── ...
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Rick and Morty API](https://rickandmortyapi.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)