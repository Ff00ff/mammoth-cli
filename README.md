# Mammoth CLI

- generate: Generate migrations based on tables and existing migrations
    - Convert tables from Db to create table statements which the simulator can load.
    - Generate queries by comparing two simulators.
- define: generate define tables, types based on migrations
- guard: check if the migrations match all the tables e.g. didn't forget to run this one.
- setup: Generate tables based on an existing remote schema. So we need the connection stirng.
- migrate: Actually migrate them migrations just from 001 to XXX
- force-sync: instead of migrations just 