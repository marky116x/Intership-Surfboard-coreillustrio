Todays session was on Data managment with Gopi anna, a software developer at Surfboard Payments. 

# Data and Database Management

and it gave us a clearer understanding of how data works in programming.

### The first question that popped into our minds was, “What exactly is data?” 

In general, data is just information—but in programming, it’s the information a program uses to perform tasks. It could be numbers, text, images, audio—anything that's in a digital format.

Data management is all about collecting, storing, and organizing this information in a way that makes it easy to access and use. 

In programming, we use tools like arrays and lists to help manage data. These are index-based structures, meaning each item is stored at a specific position. On the other hand, linked lists don’t use indexes—they’re node-based they have an adress which points to another adress alone with data. This structure helps store data in a specific order and makes it easier to access, update, or remove particular items. While these tools help manage data within a program, they’re not full-blown data management systems like databases.

### Data lifecycle:

Collect data – For example, when someone fills out a form or provides information.

Organize data – Once collected, the data needs to be arranged properly so it’s easier to work with. This makes processes like sorting or updating more efficient.

Store data – After organizing, we need to safely store the data, either in a database or the cloud.

Secure data – It’s important to protect stored data using encryption or passwords, so only authorized users can access it.

Use data – We use this data in programs to perform tasks, generate reports, or support decision-making.

Archive or delete data – If the data isn’t needed right now but might be useful later, we archive it. If it’s no longer useful at all, we delete it.

Gopi anna emphasized that if data doesn’t follow this lifecycle, it can’t really be considered useful data. 


### Conclusion
Overall, it was a very practical session that helped us connect the dots between theoretical concepts of data and real-world data handling.


____

# Mentors report

I finished my login and logout for my disney angular App using Firebase.

Using the previous knowledge of using firebase in login forms.

### Steps to add authentication:
 1. Go to firebase console and create a project.<br> 
 Select Authentication methods: Email/password
 
 2. Use `ng add @angular/fire` command on your angular project and choose authentication.

 3. Use Firebase Auth SDK: getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, to make the login form .
