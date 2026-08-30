---
date: '2'
title: 'Raft Consensus Algorithm'
cover: ''
github: 'https://github.com/Nuthi-Sriram/raft-lab-speedboat'
external: ''
cta: ''
tech:
  - C++
  - gRPC
  - Distributed Systems
---

A complete C++ implementation of the Raft consensus algorithm, engineering the fault-tolerant leader election and log replication phases over gRPC to maintain distributed state consistency across a cluster.

Raft keeps a replicated log consistent across nodes even as they fail and recover. This implementation covers leader election, log replication, and the safety guarantees that keep committed entries durable once a majority has acknowledged them.
