import swagger from "@elysiajs/swagger";
import { Elysia, t } from "elysia";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "fs";

const app = new Elysia().use(swagger());

// Read content from file
app.get("/", () => readFileSync("my-file.txt", "utf8"));

// Create directory and write fileContent into a file
app.put(
  "/createdir",
  ({ body }) => {
    const { fileName, fileContent } = body;

    mkdirSync(fileName, { recursive: true }); //delete all files in directory
    writeFileSync(`${fileName}/my-file.txt`, fileContent, {
      encoding: "utf8",
      flag: "w",
    });

    return { status: "directory and file created" };
  },
  {
    body: t.Object({
      fileName: t.String(),
      fileContent: t.String(),
    }),
  }
);

// DELETE DIRECTORY
app.delete(
  "/deletedir",
  ({ body }) => {
    const { fileName } = body;

    rmSync(fileName, { recursive: true, force: true });
    return { status: `Directory '${fileName}' deleted.` };
  },
  {
    body: t.Object({
      fileName: t.String(),
    }),
  }
);
// app.put("/", ({ body }) => {
//     writeFileSync("my-file.txt", JSON.stringify(body), {
//         encoding: "utf8",
//         flag: "w",
//     });
//     return {
//         status: "ok",
//         body,
//     };
// });

console.log("Elysia & Server running at http://localhost:3000");
app.listen({ port: 3000, hostname: "0.0.0.0" });
