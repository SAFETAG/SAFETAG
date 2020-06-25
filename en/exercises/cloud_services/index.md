---
Approach:
- Research
Authors:
- Natasha Msonza, Neil Blazevic
Org_size_under:
- 1000
Remote_options:
- Complete
Skills_required:
- N/A
Time_required_minutes:
- 60
---

#### Assessing Usage of Cloud Services

##### Summary

During the organizational assessment you will almost certainly come across 3rd party cloud-based service providers being used by the audited organization. The organization may be interested in your assessment of the security of those services. This poses several challenges to you as an auditor:

    * auditing 3rd party web applications almost certainly falls outside of the scope of the audit engagement
    * you likely do not have an agreement with the service provider to scan their application
    * a proper assessment would take more time than is available for the organizational audit
    * you may not be familiar with the service or technology it is built on

Despite these challenges, significant organizational processes and sensitive data may reside on or rely upon those 3rd party applications. It can be important to the audit to provide some preliminary investigation and risk assessment into the usage of any 3rd party cloud services they rely upon.

##### Overview

* Review organization's use of cloud services (which services, what data, access policies)
* Review formal policies of cloud services in use
* Search for historical security problems with each provider and their response to it.

**Expected Outputs**

* A list of all identified 3rd party / cloud services in use
* A mapping of what data and metadata and which users have access on which providers

##### Materials Needed

##### Considerations

* Auditing 3rd party services **must be negotiated directly with the service provider** and adds significant complexity to the process (and would normally fall out of scope).  There are often serious legal issues involved in auditing outside of a formal, signed agreement.

##### Walkthrough

It is increasingly difficult to run complex organizations without some reliance on cloud-based service providers such as email hosting, web hosting, or document management/backup. Organizations (and as assisted by the auditor) should review their options in the selection of cloud providers, and in parallel consider ways to apply practices and policies to their use to meet organizational security requirements.

##### Cloud Service Provider Review

* In conjunction with Data Mapping, review what data is stored in which cloud service(s), and who (organizationally) has access to that data.
* Map out what data and/or metadata the provider has access to
* Review the posted Terms of Service and Privacy Policies
* Review the transparency report of the provider and what jurisdictions it operates in. Are there local data storage laws in effect?
* Does the provider have account protection services meeting the requirements of the organization (e.g. 2FA)
* Search for security breaches impacting the service, and review their response (See https://haveibeenpwned.com/PwnedWebsites).  Note that a breach itself is not cause to not use a service, but revelations on what was breached and how quickly, transparently, and effectively the provider responded should impact decisions.
* Where relevant, review any security/product whitepapers posted on their service and implementation.
* Look for any records (and/or request from the company) information about audits of their systems/code

##### Internal/Organizational Considerations

- Back-up and availability - One of the major risks with an external service is that they will go out of business and/or the data might become inaccessible due to factors outside of the organization's control.  Does the provider have guarantees in terms of availability here, and/or what practices can the organization leverage to have additional backup/export options.
- Is the organization implementing the best practices put in place by the company offering the service? E.g login processes - 2FA..
- What are the password management practices for the cloud/web based services? Account credentials - who opened the accounts and how they are accessible in their absence?
- How are logins to the service managed when employees leave or when temporary access is required for a contractor or partner?

##### Recommendation

Schedule regular (annual?) reviews of the external services to ensure that they meet organizational requirements for functionality and security, business solvency, and exporting or transferring of data.

When considering formalizing the use of new 3rd party services, review the questions and processes here to help guide the decision.
