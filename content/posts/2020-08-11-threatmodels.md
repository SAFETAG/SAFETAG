---
layout: post
title: "From Usability to Threat Modeling"
date: 2020-08-11 09:00:00
author: "Jon"
# main_image: "images/blog/markus-winkler-aYPtEknQmXE-unsplash-blog.png" # 342px × 178p ~2x1
# main_image_caption: ""
tags: ["SAFETAG", "OrgSec", "UX", "personas", "threat models"]
draft: false
---

<div style="text-align: center"><img src="/images/blog/markus-winkler-aYPtEknQmXE-unsplash-blog.png" alt="Stylized photo of puzzle pieces" style="border: 0; width: 100%; padding: 1em;" /></div>

<p>Across our portfolio of technology, training, and advocacy to support a
free and open Internet that protects and advances human rights, we are
assembling a wide array of foundational resources (all released under
Creative Commons licenses!). </p>

<div class="boxtext" style=" width: 40%; float: right; padding-left: .5em; margin-left: 1em; border-left: 2px solid gray;">
<h5  style="font-size: .75em;">Threat Modeling in Internet Freedom Projects</h5>
<p style="font-size: .75em; line-height:1em; text-align: justify; text-justify: inter-word;"><em>It's important to underline that this is not a new concept -- certainly
there are many security tools which already carefully consider threat
models during development; there is much written on using use cases and
"misuse cases" to expose the security and usability requirements for
tools -- this paper provides a good overview, and EFF's Security
Education Companion coverage of Threat Models introduces the concept for
use in training.</em></p>
</div>

<p>These include user personas with community-built lists of needs, and information about the threats or
adversaries they face. <strong>This collection of different resources is not
coincidental</strong> – it builds a space in the middle to create detailed
<strong>threat models</strong> around specific tools and practices and paves the way
to more expansive and cohesive long term digital safety strategies for
resilient communities.</p>

## What we have

<table>
<tr><th width="50%" style="background-color: #005CAB;"><h3>At-Risk User Personas</h3></th>
<th width="50%" style="background-color: #FBB034;"><h3>Contextual Digital Risk Assessments</h3></th></tr>
<tr><td valign="top" style="padding: 15px;" >
<!--<img src="https://usable.tools//images/personas/ky-alexandria.png" alt="Example persona face" align="right" />-->

Our <a href="https://USABLE.tools">USABLE.tools</a> project has a <strong><a href="https://USABLE.tools/personas">user persona library</a></strong> with 30+ user personas from around the world, representing LGBTQI activists, persons with disabilities, human rights defenders in closed states, and many more. These are not simply idealized stereotypes, however - they are created by the at-risk users themselves to provide authentic insight into the lived experiences, needs, and threats of these communities without putting any specific members of their community at risk. These personas provide critical insights into the needs and threats real people face in challenging environments. Tools for these communities need to be resilient against a wide variety of technical, physical, and legal attacks while also being easy to use, with little or no training.

<!--[**User Personas**](https://usable.tools/personas/), or anonymized profiles of end-users, provide a critical insight into the people who engage -- or whom developers want to engage -- with tools. When we are thinking about tools to protect marginalized persons, vulnerable populations, and/or the activists, advocates, and human rights defenders supporting them, the stakes are high. -->
</td><td valign="top" style="padding: 15px;" >
<strong>Risk Assessments</strong> are a core of Internews' internal risk management process, and we also strongly encourage auditors using the <strong><a href="https://SAFETAG.org">SAFETAG framework</a></strong> to leverage a similar approach to research the technical and social context that they are working in when assessing an organization's security. The framework provides a <a href="https://github.com/SAFETAG/SAFETAG/tree/master/en/exercises/technical_context_research">guide to research the technical capacity of potential threat actors</a>, including both historical attack data and any indicators of changes to their capacity. Auditors are encouraged to also look at focal areas and trends.

</td></tr></table>

## What we're building

Under the [next phase of USABLE's work](https://usable.tools/blog/2020-07-07-adoptable/), we will be building two new resources - "personas" which represent the needs of organizations and communities and “personas” which capture the capabilities and motivations of realistic but generalized adversaries.

<table>
<tr>
<th width="50%" style="background-color: #6CB33F;"><h3>Organizational Archetypes</h3></th>
<th width="50%" style="background-color: #F15D22;"><h3>Adversary Personas</h3></th></tr>
<tr><td valign="top" style="padding: 15px;" >
<strong>Organizational Archetypes capture the complex needs of organizations and communities, spanning from grassroots communities all the way up to donors in the space facing state-level adversaries.</strong>

What are the more complex needs and different threats faced when collaborating? Secure messaging, calls, and document collaboration are all significantly more complex when you have multiple people or organizations involved, and tools which are relatively easy to swap in and out at a personal level become incredibly more complex if an entire organization depends upon them as a core part of their workflow.

</td><td valign="top" style="padding: 15px;" >

<strong>Adversary Personas will contain realistic details of generalized adversaries’ capacities and what issues these actors are willing to expend resources and build capacity to undermine.</strong>

Organizations will be able to use these resources to anticipate potential threats and malicious actions and proactively develop practices and responses to realistic situations. This will enable developers, trainers, policymakers, funders, and others to contextualize their work against a wider variety of threat actors without having to rely on any one specific nation-state as a "bogeyman." I specifically hope this enables richer conversation around actual threats while removing cultural stereotypes and prejudices.

</td></tr></table>

## From Resources to Practice

These are collectively designed to enable unbiased discussions and
strategy development around the serious challenges and threats users,
organizations, and entire communities face, the tools we use to help,
and tools, practices, or policies we wish we had.

-   **Responses focused on threats, not just threat actors** Threat
    actors change and evolve, and often have more capacity than is
    publicly confirmed (but perhaps less than is presumed through
    rumor). By extracting and de-personalizing aspects of this, we can
    have clearer discussions. Further, specifying current existing
    actors, especially in open source tools, can overly complicate the
    public profile of the tool as well as those using it. If a tool is
    clearly built to combat a specific actor, then users of that tool
    can be seen as inherently being aligned against that actor. This has
    resulted already in excessive targeting and jailing of activists
    based on their tool choice.
-   **Identification of common, cross-regional threats** What attacks,
    specific techniques, and even malicious tools are being used and
    re-used globally? Are there patterns we can detect and build
    proactive defenses against?
-   **Gap identification** What gaps remain when we look at this data
    mapped out? Is anyone working to address them? What solutions
    (tools, training, policy changes) could be used? How do we
    sustainably build these resources?
-   **More dynamic responses, more resilient communities** By tackling
    the inputs into this process separately, we can update our models
    more agilely and plan against a wider variety of attacks to build
    tools and guidance that are more resilient to more types of threat
    actors as well as changes in any specific actor.
-   **Future-looking strategies** With these fictional personas and
    archetypes, we do not have to be as limited to current actors and
    their capacities. We can (within reason) consider possible future
    threats that activists may face by remixing and extrapolating from
    current threats. Anticipating these risks will allow us to build
    tools to mitigate sooner, rather than later. *Dystopian cyberpunk
    scenarios welcome!*
-   These resources can be used to develop **tabletop scenarios** to
    explore current and emerging threats and build creative responses to
    them. These scenarios are useful in advanced trainings, tool
    development, and strategy building exercises. Fictional but
    realistic adversaries and personas can get into detail around
    specific threats and mitigations without being as personal, risking
    bias, and helping reduce potential of trauma involved in these
    discussions.

<br />

We are just getting started and would love to hear from you on what
data you hope to find in these resources, how you would use and adapt
them, and more! You can reach us at
[**connect@usable.tools**](mailto:connect@usable.tools).
