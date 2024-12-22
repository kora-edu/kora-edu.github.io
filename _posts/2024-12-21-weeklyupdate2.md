---
tags: [featured]
title: "Weekly Update 2" 
description: Progress update on the ongoing development of KORA Edu.
header: "Weekly Update: ML and Data Processing"
---

# December 21st: Recap

This is a more specific dive into what we have been up to since *Milestone 3*. \
 For more specific changes, feel free to visit our [Github](https://github.com/kora-edu). Although note; much back-end work is local & research/testing based.

---

### Key Outline:
- Fleshed out **Query2Latex** [(Q2L)](https://github.com/kora-edu/q-extractor/tree/main/tex_paper_gen) for future use in physical files (q/a, practice in pdf)
- Experimenting with local inference to accumulate a *synthetic* db of a initial given RAG db
- Technical research / outreach for our purposes in terms of best approach of *'tuning'*
- Set up a more flexible endpoint for testing purposes, with future scalability plans in mind
- Successfully implemented an early-stage on-site 'IDE' for student programming purposes

---

### Detailed Highlights:

#### **Try KORA:**
- **IDE:** *Kahu* implemented the new endpoints + model with his front-end for a large improvement in overall capabilities
	- Accuracy and better handling generative test-cases for respective code. 
	- Working towards supporting more lang (py, java, js, cpp) for now   

#### **ML Research and Data Processing:**
- Conducted *ongoing* testing for technical approach of data-fitting for a given set (especially small in size)
	- Fine-tuning on a small given dataset is on the surface a similar behaviour to a large RAG approach (this is being tested)
- Improved Q2L pipeline to work near full-auto for later implementing
	- Merging cleaning & compilation processes; now leveraging a document-familiar model to handle parsing, checkups etc.

- Adding localisation of latex templates to specific uni's is planned & possible [VUW example](https://ecs.wgtn.ac.nz/Main/ProjectTemplates#Exam_Templates)
---

This update is a reminder of how continued progress drives us behind the scenes while we work toward **Milestone 4**

Stay tuned!
