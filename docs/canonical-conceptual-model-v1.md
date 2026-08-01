# NexusG Canonical Conceptual Model

Version: 1.0.0  
Status: Draft  
Scope: Product-wide

## 1. Purpose

Define the official conceptual model of NexusG.

Its objective is to guarantee that every representation of NexusG, human or computational, preserves the same conceptual model.

This specification governs the language, concepts, relationships, naming rules, and semantic boundaries used across:

- backend and frontend code;
- APIs and JSON contracts;
- motors and internal services;
- prompts and agents;
- technical documentation;
- public website;
- `llms.txt`;
- README files;
- one-pagers and presentations;
- demos and partner materials.

The CCM is not a style guide. It is a semantic specification.

## 2. Core rules

### Rule 1 — Canonical terms are part of the product contract

Canonical terms must preserve the same meaning across all representations of NexusG.

### Rule 2 — Canonical terms do not have public synonyms

Do not replace a canonical term only to vary style.

### Rule 3 — Syntax may vary; terminology may not

Sentence structure can change. Canonical names, definitions, and relationships must remain stable.

### Rule 4 — All new representations must conform

Every new page, FAQ, one-pager, prompt, agent, README, JSON contract, API, example, or presentation must use the canonical model.

## 3. Canonical concepts

### 3.1 Operational Comprehension

**Canonical name:** Operational Comprehension  
**Public term in Spanish:** Comprensión operativa

**Definition:**
A representation of the operation built by NexusG from authorized sources, evidence, rules, calculations, and operational context.

**Rules:**

- Use `Operational Comprehension` or `comprensión operativa` consistently.
- Do not replace with `intelligence`, `insight`, `vision`, `understanding`, or equivalent marketing terms.
- Operational Comprehension is built for a User and its Decision Domain.

### 3.2 Decision Domain

**Canonical name:** Decision Domain  
**Public term in Spanish:** Dominio de decisión

**Definition:**
The scope of responsibilities, priorities, signals, and decisions relevant to a specific User.

**Rules:**

- A Decision Domain belongs to a User.
- NexusG does not assume a single global Decision Domain for the whole organization.
- Different Users may receive different Operational Comprehension and different PressureBoards.

### 3.3 User

**Canonical name:** User  
**Public term in Spanish:** Usuario

**Definition:**
A person who interacts with NexusG through Workspace, PressureBoard, or another authorized interface.

**Rules:**

- Use `User` for domain and interface context.
- Use `company` or `empresa` for the organization.
- Use `client` or `cliente` for commercial, contractual, ownership, and partner contexts.
- Use `person` or `persona` only for human attention or generic human limits.

### 3.4 Situation

**Canonical name:** Situation  
**Public term in Spanish:** Situación

**Definition:**
A prioritizable operational unit built from related Evidence, rules, calculations, and context that may require attention or intervention.

**Rules:**

- Do not substitute `Situation` with `alert`, `case`, `event`, or `notification` when referring to the canonical entity.
- Events and alerts may exist as raw inputs, but they are not Situations.
- Situations are built and validated in controlled backend capabilities.

### 3.5 Evidence

**Canonical name:** Evidence  
**Public term in Spanish:** Evidencia

**Definition:**
Traceable information that supports a result, conclusion, Situation, or response.

**Rules:**

- Evidence must preserve source traceability.
- Evidence may reference source records, calculations, rules, and execution paths.
- Do not replace with vague terms such as `signals` or `data` when traceable support is meant.

### 3.6 Capability

**Canonical name:** Capability  
**Public term in Spanish:** Capacidad

**Definition:**
A permanent operational function incorporated into the company through NexusG.

**Rules:**

- Do not replace with `feature`, `functionality`, or `module` when referring to the commercial and architectural concept.
- A Capability may include connections, rules, calculations, validation, evidence, and interfaces.
- Commercial pricing may be defined per Capability when explicitly stated.

### 3.7 Source

**Canonical name:** Source  
**Public term in Spanish:** Fuente

**Definition:**
An authorized system, repository, API, database, document set, mailbox, or other origin of operational information.

**Rules:**

- Sources remain authoritative for their native records.
- NexusG does not replace Sources.
- Operational Comprehension is built over authorized Sources.

### 3.8 Attention

**Canonical name:** Attention  
**Public term in Spanish:** Atención

**Definition:**
The scarce resource that NexusG helps allocate by prioritizing Situations that require intervention.

**Rules:**

- The product thesis is not lack of intelligence or cognitive capacity.
- The problem is limited time, attention, and prioritization.
- PressureBoard is the primary product interface for attention allocation.

### 3.9 Discovery

**Canonical name:** Discovery  
**Public term in Spanish:** Descubrimiento

**Definition:**
The process by which NexusG builds context from Evidence already present in the company’s systems.

**Rules:**

- Do not use `learning` or `training` as substitutes.
- Discovery precedes targeted confirmation questions.
- NexusG first discovers and then asks only what is necessary.

### 3.10 Pressure

**Canonical name:** Pressure  
**Public term in Spanish:** Presión

**Definition:**
The operational relevance, urgency, or potential cost that makes a Situation compete for a User’s attention.

**Rules:**

- Pressure is not equivalent to a raw alert.
- Pressure is evaluated within a User’s Decision Domain.
- Pressure may influence prioritization but does not replace Evidence or Situation.

## 4. Canonical products

### 4.1 NexusG

**Definition:**
A SaaS product that adds Operational Comprehension to systems a company already uses.

**Rules:**

- Always write `NexusG`.
- NexusG is not a consultancy and not the result of a consultancy.
- NexusG delivers permanent operational Capabilities.

### 4.2 Workspace

**Definition:**
The investigation interface used to explore Evidence, reconstruct context, and prepare decisions through natural language and verifiable results.

**Relationships:**

- Workspace consumes Operational Comprehension.
- Workspace investigates Situations and Evidence.
- Workspace does not calculate business logic by itself.

**Naming rules:**

- Always use `Workspace`.
- Do not replace with `chat`, `assistant`, or `bot`.
- Do not translate the product name.

### 4.3 PressureBoard

**Definition:**
The prioritization interface that presents the Situations a User cannot afford to ignore, explains why they matter, and indicates where intervention should be considered.

**Relationships:**

- PressureBoard consumes Operational Comprehension.
- PressureBoard presents and prioritizes Situations.
- PressureBoard is built for a specific User and Decision Domain.
- PressureBoard does not discover, calculate, or validate Situations by itself.

**Naming rules:**

- Always use `PressureBoard`.
- Do not replace with `dashboard`, `board`, `panel`, or `tablero`.
- Do not translate the product name.

## 5. Canonical actions

### discover

Build context from Evidence already present in authorized Sources.

Do not use `learn` or `train` as substitutes.

### build

Create a canonical operational artifact from validated inputs.

Use for Operational Comprehension, Situations, and canonical models.

### prioritize

Order or rank Situations according to their relevance to a User’s Decision Domain.

### understand

Use only when referring to Operational Comprehension or to a User understanding a result.

### incorporate

Add a permanent Capability over existing systems without replacing them.

### present

Render or expose a validated result. Workspace and PressureBoard present results; they do not own backend calculations.

## 6. Canonical relationships

The following relationships are normative:

```text
A User owns a Decision Domain.

Operational Comprehension is built for a User and its Decision Domain.

Operational Comprehension is built from authorized Sources, Evidence, rules, calculations, and context.

A Situation is built from Evidence, rules, calculations, and context.

Pressure is evaluated within a Decision Domain.

PressureBoard consumes Operational Comprehension.

PressureBoard presents and prioritizes Situations.

Workspace consumes Operational Comprehension.

Workspace investigates Situations and Evidence.

Capabilities produce validated outputs for Workspace and PressureBoard.

Sources remain authoritative for native records.
```

## 7. Forbidden substitutions

| Do not use as substitute | Canonical term |
| --- | --- |
| alert | Situation |
| case | Situation |
| event | Situation |
| feature | Capability |
| functionality | Capability |
| chat | Workspace |
| assistant | Workspace |
| dashboard | PressureBoard |
| panel | PressureBoard |
| learning | Discovery |
| training | Discovery |
| business intelligence | Operational Comprehension |
| overview | Operational Comprehension |
| company-wide model | User-specific Operational Comprehension |

These substitutions may be valid in other contexts, but they must not replace the canonical concept.

## 8. Conformance

A representation conforms to CCM v1.0.0 when:

- it uses canonical terms consistently;
- it preserves canonical definitions;
- it does not introduce incompatible aliases;
- it preserves canonical relationships;
- it does not assign product responsibilities to the wrong component;
- it distinguishes Sources, Evidence, Situations, Operational Comprehension, Workspace, and PressureBoard;
- it reflects User-specific Decision Domains where relevant.

Recommended declaration:

```text
Conforms to NexusG Canonical Conceptual Model v1.0.0
```

## 9. Evolution rules

The CCM follows semantic versioning.

### Major

Use a major version when:

- removing a canonical concept;
- changing a concept definition incompatibly;
- changing a canonical relationship incompatibly;
- renaming a canonical term;
- reassigning responsibility between core products or layers.

### Minor

Use a minor version when:

- adding a new canonical concept;
- adding a compatible canonical relationship;
- adding a new canonical action;
- adding a new conformance rule that does not invalidate existing compliant representations.

### Patch

Use a patch version when:

- clarifying wording;
- correcting examples;
- adding non-normative notes;
- fixing editorial inconsistencies without changing meaning.

## 10. Current status and limits

This first version is an initial formalization of concepts already used across NexusG.

It is expected to evolve as the product stabilizes.

CCM v1.0.0 does not yet define:

- all internal motor names;
- all JSON field names;
- all capability taxonomies;
- all pressure dimensions;
- all validation states;
- all domain-specific entities.

Those elements may be added in compatible minor versions or in linked specifications.
