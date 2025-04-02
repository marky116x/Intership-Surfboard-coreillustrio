# **Continue from yesterday**  
Today, I completed the Delete API implementation from yesterdays CRUD operations , learnt the differences between JWT and sessions, and started learning SQL fundamentals. 

Additionally, I practiced 	`SELECT` and `WHERE` queries on HackerRank.  

## **1. Completed Delete API**  
The Delete api allows removing a product from the database using its ID.  

```javascript
app.delete("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

app.delete is the API used here.

---

## **2. JWT vs. Sessions**

## Authentication vs Authorization.
Before going to JWT & SESSION which methods for managing user authentication.
What exactly is authentication, and how does it differ from authorization?

- Authentication is the process of verifying who someone is, where as
- Authorization is the process of verifying what specific applications, files, and data a user has access to. 

### **JWT (JSON Web Token)** 
  - Stateless authentication method.  
  - Tokens are sent with each request, reducing server load.  
  - token are in client side
  - Ideal for APIs and distributed systems.  

### **Sessions**  

  - Server-side authentication mechanism.  
  -  token are in server side & -cokkies  are used .
  - Requires storing session data on the server.  
  - More secure for handling user-specific data but can be resource-intensive.  

---

## **3. Introduction to SQL**  
I started learning SQL and focused on the `SELECT` and `WHERE` clauses:  
- `SELECT` is used to retrieve specific columns from a table.  
- `WHERE` filters records based on conditions.  

Example:  
```javascript
SELECT * 
FROM CITY 
WHERE Population > 100000 
  AND CountryCode = 'USA';
```

## Practice on HackerRank.

I solved a few SQL questions on HackerRank to help me understand querys. The exercises helped me apply `SELECT` , `WHERE` & `AND` keywords.
