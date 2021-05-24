---
layout: post
title:  "The challenges of reporting: Reporting Styles"
date:   2018-11-20 15:12:00
tags: Reporting
author: Carlos Guerra, Mario Felaco
---

*This article was written by Carlos Guerra with the input and help of
Mario Felaco; of [Con-nexo](https://con-nexo.org/). See part 1: [The Challenges of Reporting](https://SAFETAG.org/2018/11/19/challenges-of-reporting.html)*


Said this, some of the kind of reports I've seen in my evaluations and
from others work are:

1: The magic recipe oriented report
-----------------------------------

![](/images/blog/challengesreporting/image1.png)

Simple, short and sometimes effective, usually this kind of reports have
a short list of actions the organization needs to do to improve their
security, sometimes this list is divided in immediate, short, medium and
large term. the actions can be as short or detailed as we want them to
be.

### Pros

-   If the organization gave you only a few days to assess them they will have 5 minutes to read this list

-   If the organization talks the same language as us at the end of the assessment this kind of report will speed up the implementation

-   Is fast to built so we can help the organization to implement security measures right away

### Cons

-   Recommendations not linked to the threat model so the organization isn't aware of the importance of the recommendations and the order

-   Does not build the organization’s own agency in understanding or mitigating their risks

-   Could be confusing if the actions are not clear for the reader

-   Communicating technical things can be challenging and can cause the organization to dismiss recommendations just for not understanding them

-   Generally are bad for giving them to third parties giving the lack of detail

-   It's difficult for the organization to reproduce the results

2: The asset oriented report
----------------------------

![](/images/blog/challengesreporting/image3.png)

The organization generally knows what assets they have, so it's
interesting to talk in a language they can understand easily

### Pros

-   Easy in terms of communication

-   Given the risk of each asset they can assess what kind of recommendations they want to apply first, owning better the security process

-   Is easier to share part of the report with external consultants that usually work with specific types of assets

-   The report is easy to collaborate on when there is more than one person running the assessment.

### Cons

-   Depending on the structure and detail level could be difficult for the organization to reproduce the results

-   Depending on the structure and detail level could be challenging communicating technical things causing the organization to dismiss recommendations just for not understanding them

-   Could be difficult to organize when similar assets have different threat models

-   Could be difficult to link the specific assessment activities with the assets

-   Could be difficult to organize visually assets vs. risk associated vs. implementation terms

3: The activity oriented report
-------------------------------

![](/images/blog/challengesreporting/image2.png)

Another way we can order the information of the assessment is in
function of the specific activities we run during the assessment. This
usually leads to specify well which tools or indicators were used,
making it a nice input for IT staff and consultants linked with the
organization.

### Pros

-   Allows us to build the report faster because we can feed this kind of report as a log during the process

-   Could be intuitive for technical audiences. Useful when the organization have IT staff and they are the most involved part during the assessment. With this format is easier for them to reproduce the results

-   If we want to do more activities during the process is more intuitive to add the new information to the report

-   The report is easy to feed by more than one people running the assessment.

### Cons

-   Generally not the most intuitive format for the organizations given that they could not be familiar with our activities/tools

-   Depending on the structure and detail level could be challenging communicating technical things causing the organization to dismiss recommendations just for not understanding them

-   Could be difficult to organize visually activities vs. assets vs. risk associated vs. implementation terms

-   It doesn’t work as well for assessments that go beyond the more specific technical aspects -- it is hard to bring in higher level (policy, practice) problems which do not cleanly “fit” in any one activity.

4: The super comprehensive (and sometimes dangerously long) risk oriented report
--------------------------------------------------------------------------------

![](/images/blog/challengesreporting/image4.png)

![](/images/blog/challengesreporting/image4.png)

This approach without doubt is the more complete on this article, it
aims to catalogue and develop 4 types of information:

1.  **Threats:** coming principally from the threat modelling activity

2.  **Vulnerabilities:** discovered during the execution of the assessment activities

3.  **Recommendations:** developed to respond to the vulnerabilities discovered

4.  **Implementation plan:** ordering the recommendations in a way that makes sense for the organization

We can have better results with this approach when we can link the
vulnerabilities with the associated threats and with the correspondent
recommendations, so if we are reading a recommendation we can know what
vulnerabilities and threats it tries to address. Giving the reader the
most important answers she/he needs.

Given the complexity of this approach is crucial to select a structure
and format that makes easy to the reader reach the information he/she
wants to get without distracting with noise, this could be particularly
challenging when using formats like PDFs or odt/docx.

### Pros

-   Usually everything you want to know about the assessment is on the report, facilitating the understanding of the organization especially when in the future it will be more difficult to contact us

-   Guarantees that the assessors are linking suggestions to identified threats and organizational priorities

-   It links directly the group exercise made during the assessment with the recommendations, making it easier for the organization to understand the pertinence of them

-   Follows an ordered process, leading an open door to automation (spoiler: working on that :wink: )

-   It helps the organization to keep an eye on the evolution of their threat model while implementing the recommendations, making the organization an active part in the process of follow-up and opens a door to do a better Monitoring and Evaluation of the security implementation process

### Cons

-   Could be overwhelming to write and overwhelming to read if the format is not clear and ordered

-   Takes a long time to build (Careful with the need of the organization to start working fast on security measures)

-   Could take long time to read (Again careful with formats, if someone needs/wants to read just 5% of the report help her/him to reach quickly and effectively to that 5%)

-   This format requires running the threat modelling activities from SAFETAG (Which in my opinion should be the norm, but it could affect your freedom selecting the activities)

5: The awesome format that you use and we don't know... yet
-----------------------------------------------------------

Understanding that there is no silver bullet for reporting security
assessments for NGOs and independent media outlets, we can open the
discussion about many other ways to present the information we gather
during our assessments. If you know and/or use another approach and want
to share it with this community, don't doubt to

Conclusions
------------

With all of this options and the potential combinations and variations
of them, it's virtually impossible to not have one kind of report that
adapts well to our needs in each case. In our case, we usually aim for
the long report in point 4 given that the information gathered for it
allows us to rewrite the report to be more like the simpler versions
described above. The more experience you have as an auditor, the faster
you will become at identifying what type of report the organization will
be able to understand the best, even if you yourself are still
conceptualizing and seeking out the answers as if you were building the
most comprehensive report. For instance: if the organization explicitly
wants something short, they are in a bad moment in terms of security and
they need to implement fast, we want to give a detailed report for
IT/Management and another shorter for the Directors or for some external
technical service provider; we already have everything we need. Once
again, is up to you (mostly) what kind of report do you want to build
and what kind of report the organization you attend needs, just remember
that *our ultimate goal is that they understand how secure they are and
implement measures to improve their security and do a better job*
