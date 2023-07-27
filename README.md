# Headless Vector Search with Next.js and OpenAI Tutorial

This tutorial will guide you through building a custom ChatGPT-like search experience using Next.js and OpenAI. Instead of using pre-built APIs, we will go in-depth and create our search functionality from scratch. By following this tutorial, you will:

1. Convert your markdown content into embeddings using OpenAI.
2. Store the embeddings in Postgres using pgvector.
3. Deploy a function for answering users' questions.

If you want to see a complete example, you can check out our Supabase Clippy blog post.

## Prerequisites

Before you proceed, make sure you have a Next.js project set up with a collection of .mdx files nested inside the pages directory.

### Create a Project

First, create a new project in the Supabase Dashboard. Fill in the necessary project details and wait for the new database to launch.

### Prepare the Database

Next, prepare the database schema. You can use the "OpenAI Vector Search" quickstart in the SQL Editor or copy/paste the provided SQL and run it in the SQL Editor.

### Pre-process the Knowledge Base at Build Time

With the database set up, we need to process and store all .mdx files in the pages directory. Follow these steps:

1. Generate Embeddings: Create a new file `lib/generate-embeddings.ts` and copy the code from the provided GitHub repository.

2. Set Up Environment Variables: Add the required environment variables to your `.env` file. Make sure not to commit the `.env` file to your source control. You can get your local Supabase credentials by running `supabase status`.

3. Run the Script at Build Time: Include the script in your `package.json` script commands to enable Vercel to run it automatically at build time.

### Create Text Completion with OpenAI API

Whenever a user asks a question, we need to create an embedding for their question, perform a similarity search, and then send a text completion request to the OpenAI API with the query and context content merged together into a prompt. The code for this can be found on GitHub.

### Display the Answer on the Frontend

Finally, process the event stream from the OpenAI API and print the answer to the user on the frontend. The full code for this can be found on GitHub.

By following these steps, you'll have a custom ChatGPT-like search experience implemented in your Next.js project. Enjoy building your own search functionality and empowering users to find answers efficiently!
