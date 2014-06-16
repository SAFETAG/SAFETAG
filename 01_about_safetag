
Title

0.1 About SAFETAG
Description
0.1.1 What is SAFETAG

Welcome to the Security Auditing Framework and Evaluation Template for Advocacy Groups (SAFETAG). This Creative Commons framework aims to make traditional penetration testing and risk assessment methodologies more relevant to small, non-profit human rights organizations based in (or operating in) the developing world.

It is a work in progress.

To date, much of the effort invested in SAFETAG has gone toward the population and customization of this Dradis deployment. We expect that, over time, the methodology espoused here will continue to diverge from standard operating procedure among private-sector penetration testers (pentesters). Similarly, both the vocabulary and the linguistic tone of the framework are expected to take on their own character. While a fair bit of “security community” jargon remains in place, for now, we are aiming for a more casual and accessible (and widely translatable) style. That said, precision is rather important, in digital security work, and efforts to avoid ambiguity will no doubt pull us back toward jargon from time to time. If all goes well, however, opaque language will be the exception and not the rule.

Furthermore, none of this is meant to imply that SAFETAG is intended for a non-technical audience. If a prospective auditor does not have the background to recognize a “packet capture” for what it is, then very little of what might surround a more accessible label (say, “recorded Internet traffic”) is likely to be of much use to him. This framework is not “Pentesting or Beginners,” nor is it a digital security self-assessment tool. As it stands now, SAFETAG is designed primarily to serve the needs of English speaking, Linux savvy techies who are already working with human rights groups in the field, and who already spend a lot of time thinking and worrying about digital security threats. Specifically, it aims to help such individuals channel their energy more productively.

In addition, it may prove useful for commercial security auditors, developed world system administrators and hackers who are interested in leveraging their expertise for the benefit of “clients” in the human rights sector who:

    come from smaller organizations;
    work with more limited budgets;
    face adversaries that look more like governments and less like criminals or private-sector competitors;
    are less concerned about the bottom line than about the privacy, well-being and effectiveness of their staff and beneficiaries; and
    frequently have a deeper understanding of security (if not necessarily digital security) than even the most experienced Western security researcher.

We intend for this methodology to anchor a global training initiative focused on helping a handful of activist geeks from around the world (trainers, technologists, hackers, bloggers and IT staff, among others) learn how to carry out meaningful digital security assessments for threatened human rights organizations in their regions. Meanwhile, we hope the framework itself proves useful for those who are already working in this capacity, but who may be doing so without the benefit of a structure that supports efficient, consistent, professional reporting.
0.1.2 How to use this framework

The following describes the structure of a SAFETAG project, addresses the concept of a Dradis user, and explains how to use the SAFETAG findings report template.
Projects

When using a Dradis deployment into which the SAFETAG project template has been imported, you can select projects > New project, enter a project name and choose the SAFETAG methodology, then press the Create Project button, and Dradis will create a new project that will be virtually identical to this one. (Of course, if you are reading this Introduction, then presumably you have already taken the steps described above.) You and your colleagues can then enter or import data relevant to the assessment you are performing. When finished, you can export a findings report, then add additional content and tweak the formatting in Microsoft Word.

Within a given project, the Dradis platform works much like a wiki, but with more structure. Dradis understands four principle concepts:

    Nodes, which come in two forms:
        Folders, which contain other nodes
        Hosts, which represent the various things evaluated during an assessment: computers, severs, staff members, etc.

    Notes are used both to document methodologies for auditors and to record notes during an assessment

    Issues represent vulnerabilities, security threats related to those vulnerabilities and steps that can be taken to mitigate those threats. Issues can only be created or modified in Dradis’s special All issues section)

    Evidence is intended to explain precisely how a particular issue was identified and, if relevant, exploited during the assessment. Evidence is the glue that attaches a particular issue to a particular host when you discover that the latter suffers from the former.

→ 	Older versions of Dradis supported the infinite nesting of folder nodes, but the latest user interface makes certain assumptions about project structure, and the SAFETAG framework has been optimized accordingly. In order to open a project using the new interface, click the project name, rather than the Use button, from within the Dradis Project selection page. 	→Dradis 	tip

The first top level node, labeled SAFETAG, contains: a Methodology folder that introduces the framework (in part by way of the note you are reading right now); a Findings report folder where you can set certain variables and boilerplate text that will be used in your final report; and a draft self-assessment Checklist that is meant to provide a quick rundown—without detailed explanations—of steps that an organization can take in order to mitigate most of the vulnerabilities currently addressed by the framework.

The remaining top level nodes are folders that represent assessment stages: remote, perimeter, local, etc. Each of these stages contains a second level of nodes, including both (numbered) folder nodes and (unnumbered) host nodes. Each stage contains one Methodology folder, which is used primarily to provide context. Most of the second level folder nodes represent subcategories relevant to this stage of the assessment. For example, the Remote stage might include folders related to email security and Web site security, among other topics. The notes, issues and evidence contained inside these folders are where the bulk of the framework content lives. Finally, second level host nodes represent the specific subjects of your assessment. These subjects are often referred to as targets, though we find the terminology a bit militaristic for our tastes. One of these nodes might represent a computer, a service, a person, a video camera, a window lock or any other entity that is relevant to the organization’s security. Several placeholder examples are included to help illustrate this concept.

→ 	In the current version of Dradis, to expand a top level node, you must sometimes click on it twice. 	→Dradis 	tip

So, in outline form, the structure of a project looks something like this:

    Top level folder node: SAFETAG
        folder node: Methodology
        folder node: Findings report
        self-assessment checklist

    Top level folder nodes: various assessment stages
        folder node: Methodology for this stage of the assessment
        folder nodes: various subtopics for this stage
            notes: various things to evaluate within this subtopic
            issues: various descriptions of vulnerabilities and threats within this subtopic,
                evidence: each issue includes a sample evidence entry
                basic issue description (created and modified in Dradis’s All issues section)
        hosts: various relevant subjects (computers, services, etc.) evaluated
            notes: various notes, about this subject, created during the assessment
            issues: various issues identified with this subject
                evidence: each issue contains evidence that links the issue description to the subject
                basic issue description (created and modified in Dradis’s All issues section)

→ 	Dradis does not have a home for sample evidence before it is actually assigned to a particular issue / host pair, so we have assigned sample evidence for each included issue to the relevant “subtopic” folder node. 	→Dradis 	tip
Users
<users>
Report templates
<using templates>
Report properties

Various items within the Report properties note—or other notes assigned to the AdvancedWordExport properties category—allow you to set the value for certain placeholder variables that are defined in the report template.

For logistical details about the audit being performed, assign values to the following:

    SafetagAuditors: The name(s) of the auditor(s)
    SafetagDates: The date range during which the audit was or will be carried out
    SafetagLocations: Locations from which the audit was or will be carried out
    SafetagSubject: The organization for which the assessment is being carried out
    SafetagPrimaryDomain: The main Internet domain (eg. example.org) for the assessment

