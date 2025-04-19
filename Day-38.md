# Backend Development with Bun js and Elysia

---

#### **Overview**

Today’s session was a hands-on introduction to backend development using **Bun** and **Elysia**. The class was led by Shreeram, who walked us through setting up a simple backend project from scratch. He explained the core concepts clearly and gave us real-time coding excersise.

---

###

#### **1. Introduction to Bun**

We began the session by learning about **Bun**, a modern  JavaScript runtime like Node.js, but faster. It includes a package manager, bundler, and test runner all in one.

#### **2. Installing Bun**

We used the following command to install Bun on our systems:

```bash
curl -fsSL https://bun.sh/install | bash
```

#### **3. Installing Elysia**

Next, we installed **Elysia**, a lightweight web framework built for Bun. It’s similar to Express.js but optimized for Bun's performance.

```bash
bun add elysia
```

To add Swagger support for API documentation, we also ran:

```bash
bun add @elysiajs/swagger
```

#### **4. Writing the Backend Code**

Shreeram then guided us through building a small backend API that could do the following:

- Create a directory and write a file inside it
- Read content from the file
- Update the file
- Delete the directory
- Read from a directory ( `readFileSync` which is  for reading files)

##### **Key Concepts Covered:**

- Using Elysia routes: `app.get`, `app.post`, `app.put`, `app.delete`

- Using `fs` module for file system operations: `mkdirSync`, `writeFileSync`, `readFileSync`, `rmdirSync`

- Defining request body schemas using `t.Object`

- Hosting the server on `localhost:3000`

- Using Swagger for API testing/documentation

##### **Sample Code Snippet (Create Directory & Write File):**

```typescript
app.put(
  "/create-directory",
  async ({ body }) => {
    const { fileName, fileContent } = body;
    mkdirSync(fileName, { recursive: true });
    writeFileSync(`${fileName}/my-file.txt`, fileContent, {
      encoding: "utf8",
      flag: "w",
    });
    return {
      status: "ok",
      body,
    };
  },
  {
    body: t.Object({
      fileName: t.String(),
      fileContent: t.String(),
    }),
  }
);
```

---

### **Key Learnings:**

- **How to build a backend server using Bun and Elysia**
- **Performing CRUD operations with the file system**
- **Structuring API endpoints with validation**
- **Setting up Swagger to test and document APIs**

