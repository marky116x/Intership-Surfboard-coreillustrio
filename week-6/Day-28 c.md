### **Overview**

Today, I explored various SQL concepts,  creating and insert values to tables, performing data manipulation, queries for data retrieval, and utilizing  SQL functions like substring operations and joins. 

### **1. Creating Tables**

I started by learning how to create  tables using SQL's `CREATE TABLE` statement. Two tables were designed practise:

- **Student Table:** Contains student records with `student_id` as the primary key, `name`, and `major` fields. The `major` field has a default value of 'College'.
- **Employee Table:** Contains employee details with `emp_id` as the primary key, `name`, `sex`, and `salary`.


### **2. Data Manipulation DML **

Once the tables were created, I practiced inserting, updating, and deleting records:

- **Insertion:** Used `INSERT INTO` to insert both tables with data.
- **Updating Records:** Updated the `major` field in the "student" table:
  - Changed 'bio' to 'bio-tech'.
  - Renamed 'psy' and 'py' to 'psychology' .
- **Deleting Records:** Removed a specific data from the `student` table using the `DELETE FROM` statement.

### **3. Fetching and Filtering Data (using SELECT)**

I learned how to retrieve and filter data:

- Fetch all records using `SELECT * FROM student;`.
- Displayed only `name` and `major`, ordering them alphabetically using `ORDER BY name ASC`.
- * acending : ASC
- * descending : DESC
-`LIMIT` is used to restrict the number of fetch to 1 row.
- Applied the `WHERE` to  filter.
- Used `DISTINCT` to retrieve unique values of `sex` from the `employee` table.

### **4. Functions & Subqueries**

- Used `COUNT()` to count the number of students and employees.
- Learned  to use subqueries, such as:
  ```sql
  SELECT (SELECT COUNT(student_id) FROM student) AS student_count,
         (SELECT COUNT(emp_id) FROM employee) AS employee_count;
  ```
- Used the `SUBSTRING()` function to extract parts of a string:
  ```sql
  SELECT SUBSTRING(name, 1, 3) FROM student;
  ```
  This was useful in extracting first & last characters of names.

### **5. Filtering with Wildcards**

- Used `LIKE` with wildcards (`%lee`) to find employees whose names contained 'lee'.

### **6. UNION & JOIN Operations**

- **UNION:** Combined results from multiple tables into a single list, avoiding duplicates:
  ```sql
  SELECT name FROM student
  UNION
  SELECT name FROM employee;
  ```
- **JOIN Operations:** Practiced different types of joins:
  - **INNER JOIN:**  only matching records from both tables.
    ```sql
    SELECT student.name, employee.salary 
    FROM student 
    INNER JOIN employee ON student.student_id = employee.emp_id;
    ```
  - **LEFT JOIN:** all records from the student table along with matching records from the employee table.
  - **RIGHT JOIN:**all records from the employee table with matching student records.
.

### **Conclusion : todays learning**

- **Database Design:** Structured tables with constraints and default values.
- **Data Manipulation:** Inserted, updated, and deleted records.
- **Query Optimization:** Used `WHERE`, `ORDER BY`, and `LIMIT` to fetch specific data.
Implemented `COUNT()` 
- **String Functions:** Used `SUBSTRING()` for text extraction in a string.
- **Wildcard Searches:** Implemented `LIKE` for pattern matching in text.
- **Data Combination:** Utilized `UNION` to merge results and `JOIN` to fetch related records from multiple tables.

###

---
