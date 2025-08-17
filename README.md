# Rick and Morty GraphQL App

A Next.js application that uses GraphQL to fetch and display Rick and Morty episodes data.

## Setup

1. Install dependencies:
   ```bash
   npm install @apollo/client graphql @types/graphql
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- `/graphql` - Contains Apollo Client configuration and GraphQL queries
  - `apolloClient.ts` - Apollo Client setup
  - `queries.ts` - GraphQL queries
- `/pages` - Next.js pages
  - `_app.tsx` - Custom App component with Apollo Provider

## Technologies Used

- Next.js
- TypeScript
- Apollo Client
- GraphQL
- Tailwind CSS
