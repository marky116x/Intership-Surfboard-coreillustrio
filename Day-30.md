# AI : Prompting.

## Overview

Learnt about Ai and LLMs function in programming. It’s been eye-opening to see both the *capabilities* and *limitations* of these tools, and how I can better prompt   to get the most useful output.

---

## What is a Token?

A token is the smallest chunk of text that  models recognize. This could be a word, part of a word, or even punctuation.&#x20;

Tokens are important because models have a **context window**—the maximum number of tokens they can process at once.

**Note:**

- Code typically uses fewer tokens than normal English.
- AI memory is limited by these tokens—not by characters or words.
- This context window affects how well the model can remember earlier parts of a conversation or file.

---

## Embeddings?

Embeddings are numerical representations of concepts . They’re basically how AI "understands" relationships between ideas.

eg :\
The concepts "dog" and "cat" will be closer in embedding space than "dog" and "car."

**How AI Uses Them:**

- Group similar ideas together
- Understand context 
- Match related inputs and outputs  

---

## Prompting Techniques

### Basic Prompting

Simple tasks like:

> “Create a React component for a login form”

Usually gets a decent result. But for more complex prompts, the model can start to forget things—e.g., validation logic & Auth integration.
## Complex Prompting
### Chain of Thought Prompting

Telling the model to *think step-by-step* before answering helps a lot with logical and multi-step problems.

###  Zero-Shot Prompting

Just give the instruction without examples. Surprisingly, GPT/ AI models can often produce good results from this, thanks to  pre-trained  Memory Systems in AI

 --- 
###  Memory Bank Systems
a logical unit of storage & memory.

- Structured, centralized storage of past context
- Standard format (e.g., Markdown)
- Helps maintain project history 
---

##  Practical Tool: Windsurf

A useful tool which helps with:

- Memory management
- Visualizing context
- Using prompt templates

It makes the whole process of working with AI more organized and efficient.

---

## Understanding Generated Code

A big lesson: **don’t blindly copy/paste AI-generated code**.

### Best Practices:

- Always read line-by-line
- Look out for outdated syntax or wrong logic

---

## The Golden Rules for AI Programming

### Documentation First:

- `README.md` – Project overview and usage
- `PLANNING.md` – Vision, architecture, constraints
- `TASK.md` – Ongoing tasks, backlogs, discoveries

### &#x20;General Guidelines:

- Keep files under 500 lines (modularize early)
- Start new chats often to avoid context decay
- Be precise and structured in prompts
- Always test and review AI code manually

---

## Conclusion

This session taught me Prompting using AI is a skill in itself, and combining it with good project organization and review makes AI a powerful tool in a developer's life.
