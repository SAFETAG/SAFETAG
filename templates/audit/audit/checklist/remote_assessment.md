
Passive Reconnaissance

- Main site search
  - key terms
	- org-name
	- address
	- phone numbers 
	- org-emails
  - Staff Names	  
    - Staff E-Mail format
  - Link Scraping
    - lynx
  
```bash
# EXAMPLE PROCESS
# STEP 01 get all links from the main page
lynx --listonly --dump http://http://HOST.SITE.TLD |grep -o "htt.*" >> links
# STEP 02 Go through file and pull out any links that are obvious malware, advertisements, etc.
# STEP 03 get all links from the pages found
cat links | xargs -n 1 -I % lynx --listonly --dump % |grep -o "htt.*" >> links
# STEP 04 Go through file and pull out any links that are obvious malware, advertisements, etc.
# STEP 05 create a list of only the unique links
cat links |sort |uniq >> uniq_links
# STEP 06 Go through file and pull out any links that are obvious malware, advertisements, etc.
# STEP 07 create a final list of links three levels deep (this will take a very long time usually)
cat uniq_links | xargs -n 1 -I % lynx --listonly --dump % |grep -o "htt.*" >> final_links
```


  - user-name formats
  - meta-data scraping
  - partners
  - beneficiaries
  - funders
  - current projects
  - Partners listed
  - Location of activities
- Google Recon
  - Sites that link to it.

```bash
linkto:SITE.TLD -site:SITE.TLD
```

  - Search for its logo's and its logo as found on other
  - Identify partner sites & project sites
  - Examine Project sites
- Project site search
  - key terms
    - project name
	- address (different from main organization?)
	- phone numbers  (different from main organization?)
	- project-emails
  - Staff Names
  - Staff E-Mail format


  different from main organization?
  Other organizations taking part?
  New domains revealed?
  Host format revealed?


  - Link Scraping
	- lynx
  - Partners listed
  - user-name formats
  - meta-data scraping
  - partners listed
  - beneficiaries listed 
  - funders listed
  - location of activities
- Social Media Searches
  - Organization Accounts
  - Project accounts
  - Facebook graph search for staff & beneficiaries
  - Identify online services used by staff
	- user name
	- work & personal e-mails
	- sites have transparency reports
- Search paste-bin sites
  - leaked internal information
    - hosts
    - domains
    - emails
- Recon-ng
  - Add data gathered from other steps
  - Discover new hosts, domains, contacts, etc.
  - Identify what each site is "BuiltWith"
  - Create e-mail list for all contacts identified
  - Identify any previously compromised contacts

Active Footprinting
- [ ] Identify externally facing devices used by the organization.
- [ ] Identify services being hosted or used by an organization.
- [ ] Run vulnerability scans against websites hosted by the organization.
- [ ] Run vulnerability scans against externally facing devices run by the organization.
