# Template Metadata

SAFETAG extends [pandocs default template metadata](http://johnmacfarlane.net/pandoc/demo/example9/templates.html) with SAFETAG specific matadata. This is used to make templating in common terms or names across a report easier to do.


organization:
	The name of the organization that is being audited.

```
organization: The Big Candy Corporation
```
auditor:
	The name of the auditor or auditors. Example below.

```
auditor:
- name: Auditor One
  affiliation: University of Somewhere
- name: Auditor Two
  affiliation: University of Nowhere
```

## Content Management Preparation
These meta-data options are currently being used to make our lives easier if we decide to move to a more robust tool for conditional content managment and choice. As such, they do not have any funcationlity, but they are important for us to keep up with.

type:
	The content type. Currently the only types being used are "report", "ADIDS", "guide", and "handout". This may change.

```
type: report
```

id:
	A unique ID for a piece of content. This can either be a unique descrition or just a random string. (Please grep for the string in the repository before naming somthing so that we do not have to track down conflicting ID's later.)

```
id: training-for-the-better-times-with-candy
```
```
id: 6a06e93e-09bf-41ab-8064-f7ad789f7ee4
```

align: (optional)
	The alignment of the content. Only supported option is sidebar.

```
align: sidebar
```



## Using meta-data inline

We are using a [Pandoc filter](https://github.com/jgm/pandocfilters/blob/master/examples/metavars.py) to allow interpolation of metadata fields into a document. %{fields} will be replaced by the field's value.

Example:

With the following YAML meta-data;

```
---
organization: My Place
...
```

The string;

```
The organization - %{organization} - is an organization.

```

Will become;

```
 The organization - My Place - is an organization.
``


