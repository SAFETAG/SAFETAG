**Recon_NG: How-To**

Recon-ng comes pre-installed in your Kali Linux. There are 2 ways to access recon-ng.

- open up ```terminal``` and type: ```user:~# recon-ng```
- Click "Applications", then "Information Gathering" then click "Recon-NG"

**Getting your self familiar**

recon-ng comes with a help menu. To view help options:

```[recon-ng][default] > help```


|Command|Description|
|---|---|
|`add`|Adds records to the database|
|`back`|Exits the current context|
|`delete`|Deletes records from the database
|`exit`|Exits the framework|
|`help`|Displays this menu|
|`keys`|Manages framework API keys|
|`load`|Loads specified module|
|`pdb`|Starts a Python Debugger session|
|`query`|Queries the database|
|`record`|Records commands to a resource file|
|`reload`|Reloads all modules|
|`resource`|Executes commands from a resource file|
|`search`|Searches available modules|
|`set`|Sets module options|
|`shell`|Executes shell commands|
|`show`|Shows various framework items|
|`snapshots`|Manages workspace snapshots|
|`spool`|Spools output to a file|
|`unset`|Unsets module options|
|`use`|Loads specified module|
|`workspaces`|Manages workspaces|

**Create workspace**

Recon-ng is **database-driven** which means that all operations are done starting with the information that are already available in the database. In order to start your enumeration you need to first create a `workspace`. To create a workspace:

```workspaces add <Name>```

Creating a workspace for the results of our enumration is necessary so that we don't mix it with other test/audit results.
Below are the options for `workspaces`:

|Command|Description|Usage|
|---|---|---|
|`list`|List all workspaces| workspaces `list`|
|`add`|Adds a workspace | workspaces `add` <database name>|
|`select`|Selects a workspace to work on| workspaces `select` <workspace name>|
|`delete`|Delete a workspace| workspaces `delete` <workspace name>|




Domains are basically your target domains, which is required before you select a module. You need to input manually into the database. All modules that you will select in the future (within the workspace) will be executed against the domain name you specify.

**Adding Domains**

**Selecting Modules**

**Generating Report**
