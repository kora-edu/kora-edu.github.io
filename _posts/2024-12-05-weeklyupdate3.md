---
tags: []
layout: post  
title: "Weekly Update #4"  
date: 2024-12-27  
categories: weeklyupdate  
---

### Weekly Update: Major Milestones!

Here’s what we accomplished this week:  

---

#### **1. Exam Generation Page and UI Refactoring**  
*Kahu* developed the **Exam Generation Page**, which allows students to create exams tailored to their needs. Alongside this, he refactored all other pages on the site to ensure a consistent look and feel.  

- **Responsive Design Fix:** The site was also updated to work smoothly across all screen sizes. [Watch here](https://www.youtube.com/shorts/hJ73RzTt1BE).  
- **Exam Generation Demo:** [Watch here](https://www.youtube.com/watch?v=XOMWb4fhtdw).  

---

#### **2. Programming IDE Development**  
*Kahu* developed a **browser-based programming interface (IDE)** that integrates programming question generation. This serverless IDE now supports:  
- **Question generation** through the **VAST AI Qwen Coder endpoint**.  
- **Test case execution**, with clear pass/fail indicators for students.  

Here’s what it looks like in action:  

![IDE Screenshot](C:\Users\OKH20\OneDrive - University of Canterbury\Projects\KORA\Website\kora-edu.github.io\img\ide.png)  

This achievement provides a fully functional, in-browser IDE for programming practice and evaluation.  

---

#### **3. Research and Development on RAG**  
*Joel* made significant progress on Retrieval-Augmented Generation (RAG):  
- Set up a **local development environment for RAG** on structured data using **Ollama** and **R2R-lite**, allowing experimentation with different models and configurations.  
- Researched modern RAG methods to understand **which algorithms suit varying levels of needs**.  
- Determined that a hybrid approach combining **an agent with reranking, HYDE, and RAG-fusion** is suitable for current goals.  
- Finalized the RAG implementation plan using:  
  - **vLLM** for R2R-based completions.  
  - **Qwen model** for temporary completions.  
  - **mxbai-embed-large** as the embedding model.  
  - **bge-reranker-v2-m3** as the reranker.  

---

#### **4. Pipelines and Documentation**  
*Lev*:

---

These updates reflect our continued commitment to building a reliable, student-focused platform. Stay tuned for more progress next week!  
