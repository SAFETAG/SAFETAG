---
layout: post
title: "How to implement a remote SAFETAG audit: A step by step guide."
date: 2020-12-04 09:00:00
author: "Megan DeBlois and Carlos Guerra"
main_image: "images/blog/RemoteSteps.png" # 342px × 178p ~2x1
main_image_caption: "Image with title How to implement a remote SAFETAG audit: A step by step guide."
tags: ["COVID-19", "SAFETAG", "Remote Audits", "ADOPTABLE"]
draft: false
---

<div style="text-align: center"><img src="/images/blog/RemoteSteps.png" alt="Image with title How to implement a remote SAFETAG audit: A step by step guide." style="border: 0; width: 100%; padding: 1em;" /></div>

Since the pandemic, the information security community has been experimenting with how to make security auditing and risk assessments safer, adapting them to be remote where possible. This is the third blog post in a series exploring how we can improve the remote [SAFETAG](https://github.com/SAFETAG) auditing experience, capturing guidance that will be useful for other security practitioners using the SAFETAG framework.

### Our Goals Don’t Change Simply Because We’re Remote

Whether you’re using the SAFETAG framework or a standard like [NIST](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf) or [ISO 27001/2](https://www.iso.org/isoiec-27001-information-security.html), the key to a good information security assessment starts with understanding what the organization values most. This is the reason we have security in the first place. If we do not understand what the organization is trying to protect, we will not be able to recommend appropriate and effective mitigations or controls to improve their security.

The challenge we often face as practitioners is eliciting this information from the organization quickly and accurately. Simply asking an organization what they value often does not result in the most accurate of information. It is the auditor’s job to read between the lines, ask the right questions, infer, and follow-up to develop a list of “assets”, or things the organization is trying to protect.

Not surprisingly, this is foundational to the approach of the remote risk assessment using the SAFETAG framework. It is important to remember the approach to SAFETAG can be broken down into three important bodies of work, referred to as the [TRI Approach](https://safetag.org/2018/08/16/SAFETAGStories-dropbox.html):

- Technical
- Research
- Interpersonal


In the remote auditing context, it can be tempting to reduce the amount of time dedicated to the Interpersonal type of work such as the interactive threat or process mapping exercises. However, practitioners should resist avoiding the interactive modules, as oftentimes these are the most fruitful and illuminating. Instead, pivoting and reimagining modules is better than eliminating them altogether.

### Minimum Viable Audit vs Remote Audit

One of the biggest challenges we’ve faced as we’ve had to transition and adapt our audits to be more remote-friendly is that we didn’t want to lose the fiercely pragmatic and capacity-driven nature of the SAFETAG audit.

#### So how does the Minimum Viable Audit come into play?

Through our remote auditing experience, we’ve tried to keep as much of the [Minimum Viable Audit](https://github.com/SAFETAG/SAFETAG/blob/master/en/index.mva.md) components as possible to ensure we’re holistically assessing the organization. In a remote setting, there are often more constraints due to the realities and contexts you’re working in, but there are still core components of SAFETAG that should be attempted across the three areas: Technical, Research, and Interpersonal.

In some instances, the team had to reimagine a module based on the function rather than the form. For example, the Process Mapping exercise was difficult for us to conduct remotely, and we pivoted instead to one-on-one interviews to get the same information.

### Implementing Your Remote Audit

Unlike face-to-face audits where in-person time with the organization can be used as a great way to divide up the stages of the process, in remote assessments, the timeline can feel more lengthy and less clear. This includes the end of the audit, which can feel blurry and less definitive since the activities can follow a completely different timeline compared to more “traditional” engagements.  In this context, planning becomes key, so we can have a complete picture of all the activities that will be conducted and their status, given many of them will seem to have less defined boundaries.

Another consideration is that people frequently shift their attention to different kinds of tasks with different people in the remote work dynamic. In this context, it's harder to have staff engaged in the same way you would have previously when in a room together focused on an activity, like a risk matrix construction or a data mapping exercise. Because of this, it is important to aim for concrete interactions and reduce unnecessary synchronous group activities.

One way to address this is to very clearly communicate and classify the activities by the involvement of the organization and its staff, including the specific amount of time required. By communicating this to the organization, you will come to a better shared understanding of which activities can be done independently and which will need organization participation. Examples might include deploying a capacity assessment survey that can be completed asynchronously instead of individual one-on-one interviews with the entire staff. The survey would still take some amount of staff time, but likely less than the interview.

With all of this in mind, a general workflow to implement a remote audit could look something like the following, but should ultimately be built upon the realities and constraints with which you’re dealing.

1. **Prepare and plan:** Determine and communicate the activities that will be done without staff members participating such as open source intelligence (OSINT) gathering, Reconnaissance, Web Application Testing, as well as others which will require the attention of people in the organization. In our experience, remote audits have spanned across a much longer time frame. It is important to immediately start logistics coordination on all exercises you want to do synchronously with the organization. You should also aim to integrate into the initial activities any possible information gathering about the organization’s threat model and data interactions usually obtained in physical activities.

2. **Start your asynchronous activities:** Starting these asynchronous activities while coordinating larger or one-on-one meetings can help get the audit process moving forward. Some examples of these activities are:

    - OSINT
    - [Reconnaissance](https://github.com/SAFETAG/SAFETAG/tree/master/en/methods/reconnaissance)
    - [Website Assessment](https://github.com/SAFETAG/SAFETAG/blob/master/en/exercises/web_vulnerability_assessment/index.md)
    - [Policy Reviews](https://github.com/SAFETAG/SAFETAG/blob/master/en/exercises/policies_review/index.md)
    - [Capacity Assessment Surveys](https://github.com/SAFETAG/SAFETAG/blob/master/en/exercises/capacity_assessment_cheatsheet/index.md)

3. **Set up common synchronous activities:** As mentioned throughout the article, we cannot overemphasize being organized when doing everything in a remote setting. There are more logistics, more technological difficulties, and overall more challenges with building  trust when interacting with staff through a screen. Some examples of synchronous activities you may prioritize to complete during your audit include:

    - [One-on-One Interviews (rather than Process Mapping)](https://github.com/SAFETAG/SAFETAG/blob/master/en/exercises/interviews/index.md)
    - [Data Mapping / Asset Valuation](https://github.com/SAFETAG/SAFETAG/tree/master/en/exercises/remote_asset_valuation)
    - [Threat Mapping](https://github.com/SAFETAG/SAFETAG/blob/master/en/exercises/threat_identification/index.md)
    - [User Device Assessment](https://github.com/SAFETAG/SAFETAG/tree/master/en/methods/user_device_assessment)

    **From Process Mapping to Interviews**

    When conducting more and more remote SAFETAG audits it became painstakingly apparent that one-on-one interviews would be increasingly important and necessary to capture much of the information from modules previously completed in-person. The team transitioned things like Process Mapping to a one-on-one exercise with as many of the organization’s staff from different departments as possible. While individual interviews may be more time consuming, they also have their benefits. You can build trust quickly while capturing very honest feedback and information to support the organization in their security improvements.

    **Running Remote Virtual Group Exercises**

    Virtual facilitation is tough and will have a learning curve. However, through our experience, exercises like data mapping or threat mapping have been successful with the right tool and right preparation. Reduce the technology burden where possible. Use technologies the organization may already be familiar with and only introduce new tools if needed. A few we’ve used in our experience are Jamboards and Google Sheets (depending on the organization and constraints at hand).

4. **Synthesize:** With remote audits, where the outcomes are obtained from perhaps a greater mix of activities, it can be challenging to distill into actionable results. However, the same as an on-site audit, one of the primary goals of a remote audit is to have a good and as complete as possible understanding of the organization’s security weaknesses and strengths. We also want to ensure we capture feasible and relevant recommendations. It is important to take the time to review all your notes and artifacts from exercises (especially from the one-on-one interviews, if applicable) and transform them into a holistic and complete picture of the organization to better connect their needs to recommendations.

5. **Presentation and debrief:** The virtual debrief and report presentation of findings does not change significantly, since often these are delivered after the in-person audit. However, like any remote presentation or meeting, it can be easier if you have a visual to review with the organization such as top strengths and recommended improvements.

Remember, the flow presented above is something that has worked for us. There are of course more ways to implement a remote audit, but we tried to come up with a list of learnings based on our experience thus far. You can find more of our lessons learned here.

We understand remote adaptations to the SAFETAG framework can be challenging in a variety of ways for a variety of reasons. However, SAFETAG audits are still possible with a little adaptation and planning. Get creative and think outside the box when it comes to building a fuller and more complete picture of the organization so that your recommendations will address real-world challenges. And remember, if  we’re able to improve our remote audit processes this only helps us reach more organizations in need of security audits, making them more accessible to groups who need them.
