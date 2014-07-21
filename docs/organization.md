# Project Organization

* Introduction
** Acknowledgements
** Terms
** Contributing to Safetag
** What is SAFETAG?
** Why is SAFETAG different
Target population focused. Focused on behavior change.

* Trainer Resources
** The Training Plan
** The ADIDS Approach
** About the Modules
** Pretraining Documents
*** Setting Expectations with host
*** Questionarre for trainees
*** Questionarre for organizers
*** Contract between trainees/ers and host

** Training Tips
*** Managing Expectations
*** Planning the training
*** Common training materials
*** Participant security
*** Creating a contract
*** Schedule

** Best Practices
*** Committment to learning
*** Using open source software 
*** Mitigating risks
*** Simplifying Jargon
*** Make it participatory
*** Preparing Presentations
*** Value of hands on learning

* Getting Started
** The goals of a SAFETAG audit
** The role and duties of an assessor
** Working with vulnerable populations
** What an org gets out of it

* The SAFETAG audit

** Pre-Engagement Interactions
*** Operational Security Concerns
Each phase has an operational security section
**** Setting up secure channels
*** Reaching out
*** Relationship Building / Identification
*** Pre-Audit Interview
**** Pre-audit interview questionarre
*** Assessment Plan Development
*** Negotiation of Assessment Plan

** Engagement
*** Operational Security
Each phase has an operational security section
*** Audit Preperation
*** Remote Assessment
*** External Probing and Enumeration
*** Internal Probing and Enumeration
*** Vulnerability Analysis
*** Physical Assessment
****  Physical
**** Human
*** Training
Not a full training as-hoc brief up-skilling focused targeted event to raise awareness and interests

** Post Engagement
*** Operational Security
Each phase has an operational security section
*** Post-Audit Debrief
*** Introductions to External Resources
*** Final Report
*** Follow Up


# File Tree:

```
Build_Book.py
content/
├── audit
│   ├── engagement
│   │   ├── external
│   │   │   ├── access
│   │   │   │   ├── ADIDS
│   │   │   │   │   └── context
│   │   │   │   ├── vpn
│   │   │   │   └── wifi
│   │   │   │       ├── wep
│   │   │   │       │   ├── reccomendation.md
│   │   │   │       │   └── summary.md
│   │   │   │       ├── wpa_key
│   │   │   │       │   ├── description.md
│   │   │   │       │   ├── instructions.md
│   │   │   │       │   ├── reccomendation.md
│   │   │   │       │   └── summary.md
│   │   │   │       └── wps_pin
│   │   │   │           └── summary.md
│   │   │   ├── services
│   │   │   │   ├── ADIDS
│   │   │   │   │   └── context
│   │   │   │   │       └── why_it_matters.md
│   │   │   │   ├── mail
│   │   │   │   │   └── unencrypted
│   │   │   │   └── web
│   │   │   │       ├── cms_version
│   │   │   │       │   ├── approach.md
│   │   │   │       │   ├── description.md
│   │   │   │       │   ├── recommendation.md
│   │   │   │       │   └── summary.md
│   │   │   │       └── insecure_login
│   │   │   │           ├── approach.md
│   │   │   │           ├── description.md
│   │   │   │           ├── recommendation.md
│   │   │   │           └── summary.md
│   │   │   └── vuln_research
│   │   ├── internal
│   │   │   ├── ADIDS
│   │   │   ├── firewall
│   │   │   │   └── ADIDS
│   │   │   │       └── context
│   │   │   ├── index.adids.md
│   │   │   ├── privilege_separation
│   │   │   ├── social_engineer
│   │   │   │   └── personal_info
│   │   │   ├── software_version
│   │   │   │   └── example
│   │   │   │       └── browser_java_plugin.md
│   │   │   └── traffic
│   │   │       ├── ADIDS
│   │   │       │   └── context
│   │   │       │       └── why_it_matters.md
│   │   │       └── example
│   │   │           └── unsigned_ntml_auth.md
│   │   ├── physical
│   │   │   ├── access
│   │   │   │   ├── network_jacks
│   │   │   │   ├── servers
│   │   │   │   └── user_devices
│   │   │   ├── beacons
│   │   │   │   └── index.adids.md
│   │   │   ├── data_backup
│   │   │   ├── data_retention
│   │   │   ├── data_storage
│   │   │   │   └── index.adids.md
│   │   │   ├── index.adids.md
│   │   │   └── passwords
│   │   ├── remote
│   │   │   ├── individuals
│   │   │   ├── services
│   │   │   └── spiderfoot
│   │   │       ├── approach.md
│   │   │       ├── instructions.md
│   │   │       ├── scope.md
│   │   │       └── summary.md
│   │   └── threat_modeling
│   │       ├── assets
│   │       └── process
│   ├── post_engagement
│   └── pre_engagement
├── getting_started
├── images
├── indexes
├── intro
└── trainer_resources
themes/
├── set_theme.py/sh [script to setup or change themes]
└── pandoc-templates [submodule]
evidence/
├── 01
├	├── test_o1.png
├	├── NMAPViz.jpg
├	├── mapOfSpace.png
├	├── All_those_items.png
├   └── More_images.jpg
├── 02
├── 03
└── etc.
audit/
├──Reports/
  ├──02.12.2014-09.35/
      ├── raw/
      ├	├── SUMMARY.MD
      ├	├── README.MD
      ├	├── 01
      ├	├── 02
      ├   └── etc.
      ├── website/
      ├── ebook/
      └── pdf/
  └── 02.12.2014-09.35
      ├── .....
docs/
└── templates
	├── ADIDS/
         ├── activity
         │   ├── activity.md
         │   ├── alternatives.md
         │   ├── conducting_the_activity.md
         │   ├── getting_started.md
         │   ├── overview.md
         │   └── preparation.md
         ├── context
         │   ├── before_you_start.md
         │   ├── materials_needed.md
         │   ├── note_to_trainers.md
         │   ├── objectives.md
         │   ├── practical_uses.md
         │   ├── prerequisite_skills.md
         │   ├── related_modules.md
         │   ├── reminder.md
         │   ├── what_participants_will_learn.md
         │   └── why_it_matters.md
         ├── deepening
         │   └── deepening.md
         ├── discussion
         │   └── discussion.md
         ├── input
         │   └── input.md
         ├── sidebar
         │   ├── additional_materials.md
         │   ├── alternatives.md
         │   ├── note.md
         │   ├── reminder.md
         │   └── trainers_note.md
         ├── supporting_materials
         │   ├── additional_reading.md
         │   ├── class_notes.md
         │   └── glossary.md
         └── synthesis
              └── synthesis.md
```


