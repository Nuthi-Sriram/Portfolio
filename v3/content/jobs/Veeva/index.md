---
date: '2024-05-20'
title: 'Associate Software Engineer'
company: 'Veeva Systems'
location: 'San Francisco Bay Area, USA'
range: 'May 2024 - Present'
url: 'https://www.veeva.com/'
---

- Delivered the **Vault CRM ↔ PromoMats** content integration by programmatically packaging custom source files into CrossLinks, so CLM presentations and rich media transfer with full fidelity — eliminating manual file hand-offs.
- Reduced document batch-API database connection calls by **79%** (133 to 28 per batch) by profiling hot paths and eliminating a 1:1 query-to-connection ratio, stabilizing threads generating 5,000+ excess requests.
- Eliminated **4+ hour CrossLinks syncs** and drained an **80,000+ message backlog** blocking the Vault CRM integration, by fixing Tomcat's silent dropping of non-ASCII HTTP headers.
- Unblocked recovery of **100–450 GB** files from AWS Glacier by replacing S3 single-object copy (capped at 5 GiB) with a multipart pipeline supporting files up to 500 GB.
- Sole engineer of **Vault File Manager**, a native Windows C#/.NET client — resolved P2 production issues including **39,000+ file** upload resiliency and remediated a phantom DLL-hijacking vulnerability across 30+ libraries.
- Shipped **Export Documents**, a bulk asynchronous export of exact document versions with configurable renditions, metadata, and audit trails — cutting manual effort by nearly 90% and tripling export throughput.
- Hardened **24+ document endpoints** against CSRF across 17 stories via shared nonce-token validation, leading the Documents side across 8+ platform and application teams.
- Architected an automated document restoration system recovering files from **AWS Glacier Deep Archive**, replacing a manual CLI process, with a React UI, Java REST endpoints, a message queue, and a stateful SQL database.

_Technologies_: Java, Spring Boot, C#/.NET, AWS (S3, Glacier), REST APIs, JMS, SQL, React
