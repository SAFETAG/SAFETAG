---
title: Report Creation
position: 50
approaches:
  - Interpersonal
  - Research
authors:
  - SAFETAG
  - Carlos Guerra
  - Mario Felaco
skills_required:
  - Writing
skills_trained: []
remote_options:
  - Complete
time_required_minutes: 480
organization_size_under: 1000
summary: "This component consists of an auditor compiling their audit inputs
  like notes and recommendations into an easy to digest document or similar that
  will let the organization have the recommendations roadmap that will guide the
  hosts progression to meet their security goals (also called the Risk
  Mitigation Plan) at hand, and other useful information as needed like   the
  current state of the organization's security, the process by which the auditor
  came to that assessment, its scope, and the more technical outputs of some of
  the conducted activities, among others.  "
short_summary: " "
overview: >-
  Once an auditor has left, the report is the auditor's chance to continue a
  conversation (albeit a static one) -- even if the organization never talks to
  the auditor again. If written with care, it can be a tool to encourage agency
  and guide adoption. The report might have many audiences who will need to use
  it in different ways. For the auditor and the organization, it acts as
  documentation of what an auditor accomplished. For the organization, it will
  be a guide for connecting vulnerabilities to actual risks, a rallying cry for
  change, and proof of need for funders. For those the organization brings in to
  support their digital security, it provides a roadmap towards that
  implementation and a task-list for future technologists and trainers tasked to
  get the host there - as well as a checklist for validating that threats have
  been addressed.


  * **Target Invested Parties:** Identify parties who will impact the vulnerability remediation process (e.g. funders, external contractors, partners) during the audit and work with the organization to target components of the report at those parties. Do the recommendations that you have fit into any narratives that you heard from staff?

  * **Adapt the Document:** Compose sections that will be shared with invested parties (funders, technical support, trainers) to support the organization's aims for those parties.

  * **Try to present the Report:** In most audits, the report will be delivered weeks after the audit, and the organization might take a considerable amount of time to read it as well, making it easier to forget or misremember some covered topics, creating the possibility of making the report less accessible to the organization. To remediate this, one strategy would be presenting the report, giving guidance on how to navigate it, reinforcing the most pressing recommendations to implement, and answering questions.
materials_needed: ""
Considerations`: >-
  * **Treat the report with the utmost security.** It should only be shared as a
  complete work between the auditor(s) and the identified leadership and points
  of contact of the organization. This also means that if the audit is funded by
  someone other than the organization, said funder should not receive the same
  report delivered to the organization. Some strategies around this could be
  delivering a heavily redacted version of the report to the funder, excluding
  any specific organization vulnerability, or delivering any other product like
  a survey or memorandum filled out by the organization vouching for the
  realization of the audit and including any other relevant information.


  * **There are many ways to build and present reports.** For instance, three valid approaches to reporting are 1\) building very short reports only with the recommendations in bullet points so the organization can focus quickly in what they need to do, 2\) building long and comprehensive reports with all the technical information so the organization can reproduce the activities later to check, and 3\) building different versions of the report catering the needs and requirements of different people reading it, among others. As long as the chosen approach is good for the auditor and the organization, there aren't right or wrong options.


  * **Know what to omit or give less space.** Many times, we'll be tempted to include a lot of information in our reports. However, in most cases, including a lot in our reports will lead to increased delays in building and delivering it, and also sharing a long document that might be uninviting for the organization to navigate. So, before investing time and effort in a long report, please ask yourself if it will delay the implementation of the recommendations and how much of the information is necessary to improve the security of the organization. In case you still need to share a long report, please consider talking to the organization about this, having a strong criteria for the prioritization of recommendations (as suggested in the Roadmap Development activity), and moving less relevant content to attachments or similar.


  * **Build the report for less-technical people.** Usually, audited organizations work in fields different (sometimes very distant) to IT, so please consider abstracting the language of the report or any similar product to be as easy to understand as possible. 


  * **Each organization is different.** You may want to have a similar workflow for different audits, and it can be healthy to establish some processes and have templates. However, be prepared to tweak those to accommodate specific needs from each organization.
walk_through: >-
  This walk-through assumes you already completed the Roadmap Development
  activity, or at least you are conducting them together.


  1. **Prepare narrative components:** some audit reports try to avoid writing many narrative sections, however, at the very minimum, an executive summary and a clear description of the scope should be included. Given that no audit will cover everything in terms of technologies and assets, that section will be useful to the organization to understand what is out of scope and to the auditor to have peace of mind in case something goes wrong with the organization's security involving something that couldn't be covered during the assessment. Other narrative sections that can be included (but are entirely optional) are descriptions of the agreement, glossary, and a description of the SAFETAG audit process, among others.  

  2. **If you want to include threat modeling information:** there are a set of strategies you can follow that will help the organization understand better what their common understanding of security is, and what threats should be prioritized and expected to be addressed by the rest of the report:  

     1. Create charts and visuals for roadmap, risk-matrix, and critical processes.  
     2. Write explanations for any adversaries or threats that the auditor identifies as "un-addressable" given the organization's current capacity.  
  3. **If you want to include activity information:** you can include what you did in different levels of detail. This might add a considerable amount of writing time and space in the final report, but it can be advisable if the organization has the capacity to replicate the activities by themselves to check if the vulnerabilities were effectively solved and to update the assessment..  

     1. Document the activities conducted and the tools used for testing where needed.  
     2. Describe the instructions to follow to replicate the assessment by activity.  
  4. **Define how the roadmap will be presented:** the most important part of the report is the recommendation roadmap (also known as the risk mitigation plan), so it is very important to present it in a way that is easy to understand and follow by the organization. It focuses on the most relevant recommendations (and with that, the most important threats to address), and presents realistic measures the organization can implement considering their capacities and bandwidth. There are many ways to organize this information, and we suggest checking these two [blog](https://safetag.org/posts/2018-11-19-challenges-of-reporting) [posts](https://safetag.org/posts/2018-11-20-challenges-of-reporting-2) to find more information and ideas. Some of the most common are the following:  

     1. **Directly:** presenting a short and concise list of prioritized recommendations. The level of detail on each item will depend on the capacity of the organization to understand the recommendation and know what to do about it.  
     2. **From assets or aspects:** Sometimes it is better for the organization to have separated the recommendation by buckets that let them decide what to tackle first or have people in charge of the execution of specific parts of the plan. Some usual categories are website, office computers, physical office space, communication processes, and online account management. Keep in mind that sometimes there are recommendations covering more than one aspect or asset, so this might lead to repetition.  
     3. **From vulnerabilities or threats:** from a risk perspective, it makes sense to tie the recommendations to the threat model of the organization, and in a well-developed roadmap, this connection should be covered by design. However, sometimes we want to present that threat landscape in a more explicit way, especially if some recommendations are not obviously connected with the threat model (this happens frequently with more technical recommendations, where the organization struggles to understand why they should implement it, for instance). The narrative flow usually considers describing the vulnerability and then listing the recommendations to mitigate it. Like the previous item, keep in mind that some recommendations can cover different vulnerabilities, opening space for repetition in the report.  
  5. **Develop the report contents:** it can be useful to include resources and other references that might help the organization while navigating the report. Another useful recommendation is, unless requested otherwise, to not dig too deep into the specifics of the implementation of recommendations as long as they are self-explanatory enough that the organization knows what must be done and find specific guidance on their end.  

  6. **Deliver the report to the organization:** Once the report is ready, it might not be enough to send it to the organization\[1]; you should make sure they understand it and can find the information they expect. Also, it will be valuable to reinforce the most important recommendations to implement in the short term and general next steps they can follow to explore further actions from the content of the report. Again, try to have a meeting or call to present the report and cover these aspects more effectively.  

  7. **Schedule a follow-up contact:** you might be interested in checking if the organization was able to follow the implementation plan you proposed and find any potential gaps that might emerge and require further guidance. Please check the ["Follow up meeting"](https://safetag.org/activities/follow_up_meeting) activity.  

  8. **Contribute back to the SAFETAG framework:** In case you implemented some changes to activities or develop new activities, consider contributing those back to the framework. To do so, please get in touch with the SAFETAG team at info@safetag.org.


  **\[1]** "When a pilot lands an airliner, their job isn’t over. They still have to navigate the myriad of taxiways and park at the gate safely. The same is true of you and your pen test reports, just because it’s finished doesn't mean you can switch off entirely. You still have to get the report out to the client, and you have to do so securely. Electronic distribution using public key cryptography is probably the best option, but not always possible. If symmetric encryption is to be used, a strong key should be used and must be transmitted out of band. Under no circumstances should a report be transmitted unencrypted. It all sounds like common sense, but all too often people fall down at the final hurdle." - [The Art of Writing Penetration Test Reports](http://resources.infosecinstitute.com/writing-penetration-testing-reports/)
considerations: >
  * Treat the report with the utmost security. It should only be shared as a
  complete work between the auditor(s) and the identified leadership and points
  of contact of the organization.
recommendations: >-
  * Keep in mind that there might be recommendations that won’t be fully
  understood by the organization and might require extra attention after the
  report is delivered. Please consider including feedback spaces and mechanisms
  after the report delivery, and ideally propose some kind follow-up activity
  (you can check the respective method and activity on this guide).  

  * Check these blog posts to see some examples of reports  
    * [The challenges of reporting](https://safetag.org/posts/2018-11-19-challenges-of-reporting)  
    * [The challenges of reporting: Reporting Styles](https://safetag.org/posts/2018-11-20-challenges-of-reporting-2)  
  * Check the tool [Risk Assessment Workflow for Recommendation Roadmaps (or RAWRR)](https://conexo.org/project/rawrr/) that lets you manage the documentation process of the entire SAFETAG assessment and generate the report in a semi-automated way
---
