### Contributing to SAFETAG

SAFETAG welcomes contributions!

SAFETAG is a community-managed product with an advisory board and community management roles laid out in our [Code of Conduct][code-of-conduct]. The [Code of Conduct][code-of-conduct] further outlines expectations of not only those using the content herein but also those contributing to it. By participating, you are expected to uphold this code.

When submitting new content, please write in clear, concise, and gender neutral language. This document will be updated with guidance on content translation once we have settled on a process for that. If you would like to submit content in a language other than English or Spanish, please open an issue to set that language up for submission.

### Getting Starting

Before you start work, it is critically important to review the current content and existing [issues][issues] and **create a new issue for your proposed work** to solicit feedback -- this will save you a lot of time as the SAFETAG community can help refine your idea and advise on where best to include it in the framework (is it a new method? An activity or variant? Is there existing content in SAFETAG to update or improve?), as well as suggest additional resources worth considering, operational security and safety considerations.

You can also join the [public slack](https://join.slack.com/t/humansafetag/shared_invite/enQtNDM4MDIwNzM0NTc3LTYzM2Y4YjIyZmY2ZjhiODZjZDE0ODhmYzgwMTZmMjU2MTA2NDdjMTM2M2U4ODk1OWMzZThkMmI5OGY3MjFiM2M) to discuss changes and ask questions to the community.

### Content Creation Guidelines

*This section helps walk you though how SAFETAG is constructed, and what pieces of content are important to provide in a submission. Submissions which do not follow these guidelines will take significantly longer to be incorporated.*

SAFETAG has currently three main compiled products - an **overview guide**, the **full guide**, and a **curricula** to help train new auditors.  This guide is primarily focused on the non-curricular SAFTAG content. The Curricula is an ADIDS-based approach to training on SAFETAG content (read more about the curricula content at [https://github.com/SAFETAG/SAFETAG/wiki/Curricula-Document-Template](https://github.com/SAFETAG/SAFETAG/wiki/Curricula-Document-Template)

The SAFETAG overview is the easiest place to start. The full guide is a comprehensive collection of not only the method-based objectives of the audit, but a variety of specific activities an auditor might choose to use and combine to achieve those. Both of these are built from the collection of Methods and Activities that make up SAFETAG.

Generally speaking, **Methods** are high-level, goal-focused aspects of the assessment.  There are inevitable "fuzzy" borders between some methods. Creation of new methods should be minimized to not overly complicate the scope of SAFETAG.

**Activities** are the meat of an audit, and answer "how" and "where" type questions.  To accomplish the goals of a method, one might conduct multiple activities to explore and verify organization practices from different angles - research, policy review, conversations / discussions, and technical verification, exploration, and scanning.

Within both Methods and Activities are smaller chunks of content which are used across the full range of SAFETAG "products." The tables below map out what content chunks exist across which products, and what they are. The [Templates][templates] folder has sub-folders which provide the default files and indices for methods and activities.

**SAFETAG is in the process of being rebuilt in a more interactive, meta-data driven interface at [https://github.com/contentascode/safetag](https://github.com/contentascode/safetag). The current structure will be migrated into this format, and updates to the process will be posted here.**

### Creating a new SAFETAG Method

* Follow the Getting Started instructions above.
* Decide on a name for the method, and create the a corresponding folder (lowercased, with _ replacing spaces). If your new method is "Creating SAFETAG Content", the folder would be *en/methods/creating_safetag_content*.
* Copy the Method [template][templates] files from [https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/method](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/method) into the method folder. The content of these files is described below.
* Create index files for your method: In addition to the content files below, each Method must also have two index files, a method_name.guide.md and a method_name.overview.md . The contents of these index files are generally the same for every method, and templates exist at [https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders) .

**New methods must be lined into the master index file, and must have activities linked to them.** To link the new method into the master index file (and therefore have the method "included" in the "master" SAFETAG build, these index files must be linked into the relevant master index file in the language folder (*en/index.guide.md* and *en/index.overview.md*).  See below for how Activities are linked in to the methods.

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
| Approaches|-|+|+|Many of these audit activities can be completed in multiple ways depending upon auditor skill and the organizational technical setup and capacity. The approach section includes a descriptive, bulleted list of activities that can be used to carry out parts, or the whole, of the information collection for an audit activity. -- What are the high-level approaches to answering the guiding questions? Try to list different types of approaches - some might be technical, some research, some interactive|
| Outputs|-|+|-|The data or impact is expected from this method -- What are specific outputs to aim for? These should further clarify the information flow diagram above.|
| Operational Security|-|+|+|OPTIONAL: Operational Security considerations -- Does pursuing this objective have any broad operational security challenges to be aware of that is not otherwise captured in the per-activity detail?|
| Preparation|-|+|-|OPTIONAL: Any preparation, skills, or materials needed for the method as a whole.  Individual exercises will specify this more exactly -- What must an auditor do to prepare for this work that is not otherwise captured in the per-activity detail?|
| Resources|-|+|-| Resources should include not only the research used in the creation of the method, but also recommended reading, references, and additional options for conducting this work -- What references did you use in creating this method?  Are there references which provide activity style walkthroughs or additional backgrounds? Are there existing collections of references (in the references folder) that an auditor should review when looking at this methodology.|
| Activities|-|+|-|Specific activities to conduct in pursuit of this objective. See "Creating a New SAFETAG Activity" -- What existing activities are useful to achieve the goal and specific output(s) listed? Do they represent? If creating a new method, often new activities will be needed to ensure the suggested approaches are "filled in".  Please note that Activities are separate documents linked in to the Methods|

### Creating a new SAFETAG Activity

* Follow the Getting Started instructions above.
* Decide on a name for the activity, and create the a corresponding folder (lowercased, with _ replacing spaces). Activity contents live in the exercises folder under the language folder, so *en/exercise/exercise_name/...*).  If your new activity is "Using atom to edit SAFETAG markdown files", the folder would be something like *en/exercises/using_atom/* .
* Copy the Activity [template][templates] files from [https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/activity](https://github.com/SAFETAG/SAFETAG/tree/master/en/templates/folders/activity) into the method folder. The content of these files is described below.
* Activity contents also have an index file (within the same folder, not above it as with methods).  The index file needs to be updated with the title of the activity but is otherwise the same across most activities.

**New activities must be linked to a method.** To link an activity to a method, please update both the activities.md file in the method folder, and also add it directly to index.guide.md under the method. The current build process uses the index.guide.md link, but for content tracking, it's best to update both. If adding an activity to multiple methods, select a primary method where it is the most relevant to that method's outputs, and for additional methods, link it in following this format:


```
 <div class="boxtext">
 #### Activity Title
 Covered in full in Primary Method:
 !INCLUDE "exercises/activity_title/approach.md"
 </div>
```

#### Activity Content notes:

* Try to focus on creating Activities rather than Methods.
* All Activities must have all of the content listed below unless marked as "optional".
* All Activities must be linked to at least one Method.
* Ideally, also create curricula content for each Activity, or at least notes for someone training on the topic.

**Note:** For activities where multiple different approaches could fulfill the exact same goals consider building **activity variants**, see below

#### Activity Content and Stylistic notes:

* Activities should operate at header 4 and below, the Activity title is h4, the major subheadings (below) are h5, so any headings within the content (most often used in the instructions/walkthrough file) must only be at h6.

| Section|ADIDS|Guide|Overview|Definition|
|--|-|-|-|---------------------------------------------------------------------|
| Summary|-|+|-|A concise description of the exercise. This describes the vulnerability of class of vulnerabilities (e.g. "PHP is out of date") and its overall impact -- What does this specific activity accomplish?|
| Overview|-|+|-|A short, bulleted list that clarifies the general steps, especially for cases where the walkthrough is very complex or involves multiple or parallel processes.  Also included when only referencing an exercise from a method, instead of including the full exercise.|
| Materials Needed|-|+|-|Optional; does this require specific software, hardware, or preparation?|
| Considerations|-|+|-|Optional; Notes on safely carrying out the activity and protecting the data collected, as well as other challenges (psycho-social, legal, ethical) to be aware of -- Are there operational security concerns, or important baseline skills to master before undertaking this activity?|
| Walkthrough|-|+|-|A multi-use guide with concise instructions for a skilled technologist to replicate or prove the vulnerability.  This is used in the SAFETAG curricula, by auditors needing to recall that random flag for that one command without going online, and for the organization's technical staff to verify that this vulnerability has been addressed. This should provide concise guidance at a peer level for the general steps an auditor should take, but should point to, not re-create existing documentation. For technical aspects, ideal walkthroughs should enable IT staff/contractors to follow along and verify fixes. For research activities, research methods and preferred resources should be provided, and for facilitative exercises, a clear explanation of the process and any tips or challenges should be explained.|
| Variants|-|+|-|Parallel approaches which can be used for the same affect but might work better in different contexts. See below for when and how to use these |
| Recommendations|-|+|-|Optional; Sample text of common recommendations for how to address vulnerabilities identified through this activity; e.g. "Work with the webmaster to update PHP and/or migrate to a hosting system which manages this automatically...") -- for activities which have common findings, provide stock language to assist in report creation|

#### Activity variants

In some cases, one activity will have many parallel ways to achieve the goal this is often the case with technical activities where there is a collection of similar tools all focused on the same overall outcome.  In cases like these, it is best to create *Activity Variants* instead of new activities.  This lets different auditors select and use tools and approaches they are most comfortable with, while still operating within the larger SAFETAG framework.

To use variants, you will create files in the activity's folder that begin with variant_, and link them in from the instructions.md file.  The variant_ files should not use any header formatting.

In your instructions.md file, begin by introducing any common, cross-variant instructions or guidance not covered in other activity sections, and summarize each variant. At the end of the instructions text, add the following for each variant, updating the title and file name to the specific variant:

```
 ___

 ###### VARIANT TITLE

 !INCLUDE "variant_descriptive_file_name.md"
```


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

#### Reporting Contents

**Reporting content and creation will be revisited shortly**
<!--
| Section|ADIDS|Guide|Overview||
|--|-|-|-|---------------------------------------------------------------------|
| Quote|-|+|-||
| Summary|-|+|+||
| Guiding Questions|+|+|+||
| Output|-|+|-||
| Preparation|-|+|-||
| Purpose|-|+|+||
| Resources|-|+|-||
| Approaches|-|+|+|||
| Activity|||||
| → Summary|-|+|-||
| → Instructions|-|-|-||
| → Recommendations|-|-|-||
| → Base Line Skills|+|+|-||
| → Operational Security|-|-|-||

-->

### Contributing

Once you've scoped your submission as described under "Getting Started" and the "Content Creation Guidelines" sections above, you can follow the fork/pull method or use the templated approach to submit new content. Regardless of the approach you take,

#### Using Submission Templates

We have developed easy to use templates for SAFETAG Methods and Activities you can use and submit with your issue. These can be found at  *en/templates/method-template.md* and  *en/templates/activity-template.md*. If you would like to edit these as word processor files, you can use pandoc for conversion: ```pandoc -i activity_template.md -o activity_template.odt``` . Final files should be submitted as markdown, however.

Please refer to the current Methods in the SAFETAG guide for additional detail and examples. The template will require manual merging into the repository, so please include how you would like to be credited.

#### Using Pull Requests

0. Fork the repository, clone a local copy, and a create a new branch for your work (See [Resources][resources] below for help with using git).
0. Update your issue with your fork so the community can follow along!
0. Follow the content creation guidelines below to create or update new content
0. Making many small, targeted commits with concise, clear commit messages. Keeping each pull request focused is greatly appreciated. Please submit different pull requests (and possibly even branches!) for different thematic work.
0. Test to make sure your changes work by building the PDF and/or migrating the content into the static site generator system.
0. Push to your fork and submit a pull request to the Dev branch!



### Resources

- [Super Basic Git Guide for Content Development](https://gist.github.com/joncamfield/9249d2442c5849335c9811b8b70e0bc6)
- [Using Pull Requests](https://help.github.com/articles/using-pull-requests/)
- [GitHub Help](https://help.github.com)

[code-of-conduct]: https://github.com/SAFETAG/SAFETAG/blob/master/en/document_matter/CODE_OF_CONDUCT.md
[issues]: https://github.com/SAFETAG/SAFETAG/issues
[templates]: https://github.com/SAFETAG/SAFETAG/tree/master/en/templates
[content-types]: https://github.com/SAFETAG/SAFETAG/blob/master/en/document_matter/how_to_read_this_guide.guide.md
