### Contributing to SAFETAG

SAFETAG welcomes contributions!

SAFETAG is a community-managed product with an advisory board and community management roles laid out in our [Code of Conduct][code-of-conduct]. The Code of Conduct further outlines expectations of not only those using the content herein but also those contributing to it. By participating, you are expected to uphold this code.

When submitting new content, please write in clear, concise, and gender neutral language. This document will be updated with guidance on content translation once we have settled on a process for that. If you would like to submit content in a language other than English, Spanish, Arabic, or Russian - please open an issue to set that language up for submission.

### Getting Starting

Before you start work, it is critically important to review the current content and existing [issues][issues] and **create a new issue for your proposed work** to solicit feedback -- this will save you a lot of time as the SAFETAG community can help refine your idea and advise on where best to include it in the framework (is it a new method? An activity or variant? Is there existing content in SAFETAG to update or improve?), as well as suggest additional resources worth considering, operational security and safety considerations.

You can also join the [public slack](https://join.slack.com/t/humansafetag/) to discuss changes and ask questions to the community.

### Content Creation Guidelines

*This section helps walk you though how SAFETAG is constructed, and what pieces of content are important to provide in a submission. Submissions which do not follow these guidelines will take significantly longer to be incorporated.*

SAFETAG has currently three main compiled products - an **overview guide**, the **full guide**, and a **curricula** to help train new auditors.  This guide is primarily focused on the non-curricular SAFTAG content. The Curricula is an ADIDS-based approach to training on SAFETAG content (read more about the curricula content at [https://github.com/SAFETAG/SAFETAG/wiki/Curricula-Document-Template](https://github.com/SAFETAG/SAFETAG/wiki/Curricula-Document-Template)

The SAFETAG overview is the easiest place to start. The full guide is a comprehensive collection of not only the method-based objectives of the audit, but a variety of specific activities an auditor might choose to use and combine to achieve those. Both of these are built from the collection of Methods and Activities that make up SAFETAG.

Generally speaking, **Methods** are high-level, goal-focused aspects of the assessment.  There are inevitable "fuzzy" borders between some methods. Creation of new methods should be minimized to not overly complicate the scope of SAFETAG.

**Activities** are the meat of an audit, and answer "how" and "where" type questions.  To accomplish the goals of a method, one might conduct multiple activities to explore and verify organization practices from different angles - research, policy review, conversations / discussions, and technical verification, exploration, and scanning.

Within both Methods and Activities are smaller chunks of content which are used across the full range of SAFETAG "products." The tables below map out what content chunks exist across which products, and what they are. The [Templates](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates) folder has sub-folders which provide the default files and indices for methods and activities.

#### Language Guide

Although SAFETAG contributors and users come from around the world, adherence to a single style guide and linguistic conventions will improve the readability and cohesion of SAFETAG as a resource.

* The English version of SAFETAG defaults to being written in American English (_Organization_, not _Organisation_). Please note that this will not block contributions.
* Use the Oxford Comma (_Interview management, staff, and volunteers_)

### Creating a new SAFETAG Method

* Follow the Getting Started instructions above.
* Decide on a name for the method, and create the a corresponding folder (lowercased, with _ replacing spaces). If your new method is "Creating SAFETAG Content", the folder would be *en/methods/creating_safetag_content*.
* Copy the Method [template](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates) files from [https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/method](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/method) into the method folder. The content of these files is described below.
* Create index files for your method: In addition to the content files below, each Method must also have two index files, a method_name.guide.md and a method_name.overview.md . The contents of these index files are generally the same for every method, and templates exist at [https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders) .

**New methods must be linked into the master index file, and must have activities linked to them.** To link the new method into the master index file (and therefore have the method "included" in the "master" SAFETAG build, these index files must be linked into the relevant master index file in the language folder (*en/index.guide.md* and *en/index.overview.md*).  See below for how Activities are linked in to the methods.

#### Method Content notes:

* Try to focus on creating Activities rather than Methods.
* All Methods must have all of the content listed below unless marked as "optional".
* All Methods must have at least one activity associated with them.
* Ideally, also create curricula content for each Method, or at least notes for someone training on the topic.

#### Method Section and Stylistic notes:

* Methods should operate at header 2 and 3.  The Method title is h2, and the major subheadings (below) are h3.  No additional header levels should be used.
* The Flow of Information graphics live in *en/images/info_flows* and follow the *method_name.svg* naming convention.

| Section|ADIDS|Guide|Overview|Definition|
|--|-|-|-|---------------------------------------------------------------------|
| Quote|-|-|-|OPTIONAL: No longer included in the compiled guides, but an introductory / framing quote for the section|
| Summary|-|+|+|A short - two to three sentence - basic overview of the methodology -- What is the auditor doing , what are the high-level outputs and processes?|
| Purpose|+|+|+|The justification for why this methodology is used -- Why is this collection of activities being pursued? what is the end goal?|
| Information Flow|-|+|+|The "Flow of Information" shows the types of information that an audit activity builds upon (input), and the types of information that an audit activity may reveal (outcomes). As this information is acquired, earlier audit will have to be re-visited based upon this information --  What are the inputs which feed in to this, and what outputs are possible/expected? Modify the Information Flow diagram in images/info_flows|
| Guiding Questions|+|+|+|Each audit activity is guided by a small set of core questions. Key questions are included to help an auditor identify when they have acquired enough information and customize their approach while still collecting the correct types of information to support the organization -- What are specific guiding or research questions to be answered by conducting activities in pursuit of the larger goal?|
| Outputs|-|+|-|The data or impact is expected from this method -- What are specific outputs to aim for? These should further clarify the information flow diagram above.|
| Operational Security|-|+|+|OPTIONAL: Operational Security considerations -- Does pursuing this objective have any broad operational security challenges to be aware of that is not otherwise captured in the per-activity detail?|
| Preparation|-|+|-|OPTIONAL: Any preparation, skills, or materials needed for the method as a whole.  Individual exercises will specify this more exactly -- What must an auditor do to prepare for this work that is not otherwise captured in the per-activity detail?|
| Approaches|-|+|+|No longer used - this was a high-level bullet list of potential activities; now specific activities should be refernced or created instead, and other relevant method-level content should be moved to other sections as relevant. |
| Resources|-|+|-| Resources should include not only the research used in the creation of the method, but also recommended reading, references, and additional options for conducting this work -- What references did you use in creating this method?  Are there references which provide activity style walkthroughs or additional backgrounds? Are there existing collections of references (in the references folder) that an auditor should review when looking at this methodology.|
| Activities|-|+|-|Many of these audit activities can be completed in multiple ways depending upon auditor skill and the organizational technical setup and capacity. Methods should include existing or new activities to carry out parts, or the whole, of the information collection for the method. Each method should have different types of approaches - some might be technical, some research, some interactive.  See "Creating a New SAFETAG Activity" -- What existing activities are useful to achieve the goal and specific output(s) listed? Do they represent? If creating a new method, often new activities will be needed to ensure the suggested approaches are "filled in".  Please note that Activities are separate documents linked in to the Methods|

### Creating a new SAFETAG Activity

* Follow the Getting Started instructions above.
* Decide on a name for the activity, and create the a corresponding folder (lowercased, with _ replacing spaces). Activity contents live in the exercises folder under the language folder, so *en/exercise/exercise_name/...*).  If your new activity is "Using atom to edit SAFETAG markdown files", the folder would be something like *en/exercises/using_atom/* .
* Copy the Activity [template][templates] files from [https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/activity](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/activity) into the method folder. The content of these files is described below.
* Activity contents also have an index file (within the same folder, not above it as with methods).  The index file needs to be updated with the title of the activity but is otherwise the same across most activities.

**New activities must be linked to a method.** To link an activity to a method, add it directly to index.guide.md under the method. If adding an activity to multiple methods, select a primary method where it is the most relevant to that method's outputs, and for additional methods, link it in following this format:

```
 <div class="boxtext">
 #### Activity Title
 Covered in full in **Primary Method**
 </div>
```

#### Activity Content notes:

* Try to focus on creating Activities rather than Methods.
* All Activities must have all of the content listed below unless marked as "optional".
* All Activities must be linked to at least one Method.
* Ideally, also create curricula content for each Activity, or at least notes for someone training on the topic.

**Note:** For activities where multiple different approaches could fulfill the exact same goals consider building **activity variants**, see below

#### Activity Content and Stylistic notes:

* Activities should operate at header 4 and below, the Activity title is h4, the major subheadings (below) are h5, so any headings within the content (most often used in the instructions/walkthrough file for variants) must only be at h6.

| Section|ADIDS|Guide|Overview|Definition|
|--|-|-|-|---------------------------------------------------------------------|
| Summary|-|+|-|A concise description of the exercise. This describes the vulnerability of class of vulnerabilities (e.g. "PHP is out of date") and its overall impact -- What does this specific activity accomplish?|
| Overview|-|+|-|A short, bulleted list that clarifies the general steps, especially for cases where the walkthrough is very complex or involves multiple or parallel processes.  Also included when only referencing an exercise from a method, instead of including the full exercise.|
| Materials Needed|-|+|-|Optional; does this require specific software, hardware, or preparation?|
| Considerations|-|+|-|Optional; Notes on safely carrying out the activity and protecting the data collected, as well as other challenges (psycho-social, legal, ethical) to be aware of -- Are there operational security concerns, or important baseline skills to master before undertaking this activity?|
| Walkthrough|-|+|-|A multi-use guide with concise instructions for a skilled technologist to replicate or prove the vulnerability.  This is used in the SAFETAG curricula, by auditors needing to recall that random flag for that one command without going online, and for the organization's technical staff to verify that this vulnerability has been addressed. This should provide concise guidance at a peer level for the general steps an auditor should take, but should point to, not re-create existing documentation. For technical aspects, ideal walkthroughs should enable IT staff/contractors to follow along and verify fixes. For research activities, research methods and preferred resources should be provided, and for facilitative exercises, a clear explanation of the process and any tips or challenges should be explained.|
| Variants|-|+|-|Parallel approaches which can be used for the same affect but might work better in different contexts. See below for when and how to use these |
| Recommendations|-|+|-|Optional; Sample text of common recommendations for how to address vulnerabilities identified through this activity; e.g. "Work with the webmaster to update PHP and/or migrate to a hosting system which manages this automatically...") -- for activities which have common findings, provide stock language to assist in report creation|

In some cases, one activity will have many parallel ways to achieve the goal this is often the case with technical activities where there is a collection of similar tools all focused on the same overall outcome.  In cases like these, it is best to create *Activity Variants* instead of new activities.  This lets different auditors select and use tools and approaches they are most comfortable with, while still operating within the larger SAFETAG framework. **Add these as part of the Walkthrough section with a h6 title.**

### Other SAFETAG Content

These sections operate at header level 1, and for the most part should be included in any custom creation of SAFETAG products.

#### Front and Back Matter

Generally speaking, these sections won't be updated very often.

| Section | ADIDS | Guide | Overview | Description |
|--|-|-|-|---------------------------------------------------------------------|
| Title Page | + | + | + | Can be customized for your needs, locally only |
| License | + | + | + | Please do not change the License |
| Introduction | - | + | + | Welcome language |
| Overview | - | + | + | An overview of the SAFETAG approach and the audit life-cycle|
| "Metro" Map | + | + | + | |
| Risk Assessment | | + | + | |
| Agency Building | | + | + | |
| Operational Security | - | + | - | Overall operational security concerns for the assessment process |
| Preparation | - | + | + | How to prepare to conduct an assessment |
| Appendices | - | + | - | Including the Code of Conduct, How To Read this Guide, Contribution guidance, and more. |
| Footnotes | - | + |+ | |



### How to Contribute

**We have developed easy to use *templates* for SAFETAG Methods and Activities you can use and submit with your issue or directly by using git.**

These can be found at *en/templates/method-template.md* and  *en/templates/activity-template.md*.

#### Contributing using issues

Submit an [issues][issues] and include to the extent possible a complete version of the [templates][templates] as well as any context/background that could be helpful in understanding how this is intended to be used in SAFETAG.

#### Contributing Using Git

This guide will not itself cover how to use git, but here are some helpful resources to start with:
- [Super Basic Git Guide for Content Development](https://gist.github.com/joncamfield/9249d2442c5849335c9811b8b70e0bc6)
- [Using Pull Requests](https://help.github.com/articles/using-pull-requests/)
- [GitHub Help](https://help.github.com)

0. Create a github account that can be publicly associated with SAFETAG
0. Submit an [issue][issues] in the SAFETAG repository to alert the community to what you're working on.
0. Fork the repository to your Github account
0. Clone a local copy
0. Set a remote source, to make it easier to continue pulling updated content from the SAFETAG repository. This can be done many ways ([upstream tracking](https://mincong.io/2018/05/02/git-upstream-tracking/), or [remote branches](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)). For the Remote method, in your local repository, you can run this command: (HTTPS) ```git remote add upstream https://github.com/SAFETAG/SAFETAG``` ; (SSH) ```git remote add upstream https://github.com/SAFETAG/SAFETAG``` .
0. Create a new branch for your work (optional but recommended)
0. Update your issue with your fork so the community can follow along!
0. Follow the content creation guidelines to create or update content
0. Make many small, targeted commits with concise, clear commit messages. Keeping each pull request focused is greatly appreciated. **Please submit different pull requests (and possibly even branches!) for different thematic work.** (if you're working on 2 new activities and updating 1 existing activity, please submit these as different pull requests -- this is where branching can help)
0. Test to make sure your changes work by building the PDF and/or migrating the content into the static site generator system.
0. Push to your fork and submit a pull request to the Dev branch!

[code-of-conduct]: https://github.com/SAFETAG/SAFETAG/blob/master/en/document_matter/CODE_OF_CONDUCT.md
[issues]: https://github.com/SAFETAG/SAFETAG/issues
[templates]: https://github.com/SAFETAG/SAFETAG/tree/master/en/templates
[content-types]: https://github.com/SAFETAG/SAFETAG/blob/master/en/document_matter/how_to_read_this_guide.guide.md
