---
title: Tool Usability Feedback Collection
position: 25
approaches:
  - Interpersonal
  - Research
  - Technical
authors:
  - Neil Blazevic
  - Ashley Fowler
skills_required:
  - Group Facilitation
  - Facilitation
  - Report writing
remote_options:
  - Partial
time_required_minutes: 60
organization_size_under: 100
summary: >-
  Conducting a SAFETAG assessment can put you in a unique and valuable position
  to evaluate the usability and efficacy of tools used by at-risk organizations,
  as well as tools used during the assessment itself. Many tools are developed
  without input from high-risk users in global majority countries, leaving them
  lacking in usability and functionality considerations important to those
  populations. Your ability to collect feedback offers a unique opportunity to
  contribute to building feedback loops between tool teams and those users.


  The [USABLE guidebook](https://usable.tools/guidebook/) is a compilation of activities and resources designed to integrate feedback collection into existing digital security training frameworks, and can equally be used during digital security assessments. The Guidebook provides guidance on collecting feedback from users, engaging developers/tool teams, and how best to document and provide that feedback to provide actionable feedback to developers.


  As a SAFETAG auditor you may find themselves in a good position, several USABLE activities are highlighted here, with pointers to the full activity descriptions in the guidebook
short_summary: SAFETAG assessors can evaluate tool usability for at-risk
  organizations and contribute to building feedback loops between users and tool
  teams.
overview: >-
  Collecting and communicating feedback can be useful in two scenarios: (A)
  identifying usability issues in open-source tools used by the assessed
  organization, or (B) reporting usability difficulties encountered in
  open-source tools you yourself used during the assessment.


  For scenario (A), the following steps can be taken:


  1. Identify the open-source tool causing pain points for the organization.

  2. Select an appropriate feedback collection activity from the USABLE Guidebook (several suggestions are listed below).

  3. Use an appropriate method to submit feedback to the developers or tool teams, such as GitHub Issues queues or other direct submission methods.


  For scenario (B), a similar procedure can be followed, but feedback can be collected at a time and in a way that works best for you, using methods described in the USABLE Guidebook.
Considerations`: >-
  Review screenshots or samples collected from devices used by the partner
  organization to ensure they do not contain identifying images (such as profile
  images, usernames, or filenames) or other metadata which could negatively
  impact them.


  Be mindful of the limited time available during assessments, as you may need to trade-off time spent doing feedback collection with time spent on other assessment activities.
walk_through: >-
  After identifying open-source tools either used by the organization being
  assessed, or tools you yourself used during the assessment which had usability
  issues you would like to ensure gets communicated to their developers, select
  an activity from the [USABLE
  Guidebook](https://usable.tools/pdfs/USABLE_UX-Feedback-Collection-Guidebook.pdf)
  to utilise or inform your feedback collection work.


  Below you will find a selection of sections identified in the [Guidebook](https://usable.tools/pdfs/USABLE_UX-Feedback-Collection-Guidebook.pdf) which may be useful. Full activity walkthroughs as well as additional feedback collection and communication activities you may find useful can be found in the full document.


  ### Collecting feedback to better understand the user (Part I)


  * **User Stories** - gather feedback from users about their experiences and needs. This involves creating a narrative that describes a user's experience with a tool or platform. The narrative should include details about the user's goals, motivations, and frustrations, and will help to identify pain points in a tool or platform experienced by the organization and provide insights into how it can be improved to better meet their needs.


  ### Collecting tool-specific feedback (Part II)


  * The **Pluses vs. Deltas** activity is a feedback exercise that identifies a tool's strengths and weaknesses from a user's perspective. Participants brainstorm and list positive aspects (pluses) and negative aspects (deltas) of the tool, then prioritize them based on importance and potential impact.

  * The **Mark-up a Screenshot** activity helps identify usability issues specific to a tool. It involves taking screenshots of a tool in action, marking them up to highlight issues, and categorizing them based on severity or frequency. Participants can use tools like Skitch, Snagit, or GIMP to annotate the screenshots with text, arrows, boxes, or circles.

  * The **User and Observer** activity involves observing user behavior during a task with a tool and then analyzing their process to identify areas of difficulty. Firs select a task for the user to complete within the tool, then ask them to complete the task while being observed or recorded. The observer should take note of any difficulties or errors the user encounters, as well as any comments or feedback they provide during the task.


  ### Communicating with Developers and Tool Teams (Part IV)


  * **Tips for communicating with developers**: provides quick tips for engaging with open source developers when communicating feedback. It emphasizes the importance of being respectful and establishing a personal connection with the developer. It also advises finding the proper channel to communicate, researching and following any specific feedback guidelines, documenting the steps that led to the issue, offering specific suggestions for improvements, advocating for more secure and user-friendly tools, and following up with the developer.

  * The **Bug Reports** section explains documenting issues encountered during the use of a tool, along with steps to reproduce the issue and any additional information that may be relevant. The report should be submitted to the tool's development team in a clear and concise manner, including screenshots or animated GIFs if necessary to clearly illustrate the issue.

  * **GIFs**: Create animated GIFs to illustrate usability issues. These can be used to communicate issues to developers and tool teams more effectively than written descriptions. Record a short video of the issue and use GIPHY Capture or LICEcap to create an animated GIF. Embed the GIF in feedback reports or submit it directly to developers.


  ### An Examples of Tool Feedback Collection workflows


  An examples may help illustrate how this activity might occur in the context of a SAFETAG assessment:


  > During a SAFETAG assessment for an organization, you discover that they are using VeraCrypt to create encrypted volumes but some users are having difficulty finding those volumes on their computer, while others are accidentally overwriting important files during the volume creation process.


  To better understand the issue, you use the User Stories activity to gather feedback on why VeraCrypt is being used by this group and how the users are searching for the volumes and what difficulties they are experiencing. You also use the Mark-up a Screenshot activity to collect tool-specific feedback on pain points and confusion with the volume creation process. Finally, you create a hand-drawn sketch (see below) to indicate potential solutions to alternative and improved user experience.


  After compiling the feedback, you communicate with the VeraCrypt development team on the project GitHub page, including the marked-up screenshots, hand-drawn wireframe, while following the tips provided in the USABLE guidebook. You also reach out to a member of the VeraCrypt team through a community referral to let them know about the feedback and offer to have further discussion on the challenges experienced in the documented use case.


  ![A hand-drawn wireframe indicating an alternative user interface for Volume Creation in VeraCrypt](/img/stuframe.jpeg)
---
