---
title: Auditing Authentication for Account Security
approaches:
  - Technical
  - Interpersonal
position: 50
authors:
  - Lukasz Krol
  - Neil Blazevic
skills_trained: []
remote_options:
  - with-support
time_required_minutes: 60
organization_size_under: 25
summary: |
  This exercise supports the auditor in assessing the security and effectiveness of account authentication practices within an organization and gives guidance on developing recommendations to implement a phishing-resistant authentication toolkit. 
short_summary: Assess the security and effectiveness of account authentication practices within an organization and give guidance on implementing a phishing-resistant approach
materials_needed: |
  * Prepared authentication checklists can be helpful
  * List of staff
  * List of online accounts and services used in the organization
  * Physical security keys to distribute, if available
walk_through: |
  Phishing remains a common attack—and is a major risk for organizations of all sizes. Traditionally, anti-phishing efforts have focused on teaching staff how to recognize and report suspicious emails. While such a strategy should still play a big part in staff security trainings, vigilance alone isn't enough; even cybersecurity professionals have fallen for phishing scams. As such, it's important that the organization also develops a tech toolkit which can mitigate the eventuality of a staff member being successfully phished.

  *Auditing online service usage for phishing-resistant authentication configuration* 

  Practically every major online service now supports two-factor authentication, which protects against password theft/leaks. Still, most forms of two-factor authentication remain vulnerable to a phishing attack in which an adversary captures a username, password, and two-factor code, and uses them to log in on the real webpage before the two-factor code expires. While sophisticated, such an attack is increasingly common.

  On the other hand, authentication using physical security keys (used in U2F or FIDO2 mode) and passkeys are designed to be resistant to even sophisticated phishing attacks. They are cryptographically tied to the website on which they were registered; it's impossible for a fake webpage to capture the input from a physical security key or passkey, and use it to log in to the real webpage.

  To check whether organizations are utilizing strong authentication options, audit the configuration of their online accounts:

  1. If not already done, create an asset list of all work-related services and platform which the organization uses. Some of these may be centrally managed, while others may be individual accounts which staff have signed up for, or even important private accounts (for example, the private email of a high-profile executive director.   
  2. Look at platform documentation (or Settings sections) to identify which ones support phishing-resistant authentication methods such as passkeys and physical security keys in U2F or FIDO2 mode. At worst, some platforms may not even support 2FA.  
  3. Do either a complete review or a sampling of accounts and platforms to identify how authentication is configured. For services which are centrally managed by the organization, review the domain settings for controls which apply to all users, such as enforcing 2FA, enabling passwordless login, and enabling or requiring physical security keys.  
  4. While conducting review, check for important configurations such as password reset/recovery and emergency reset mechanisms like backup emails and phone numbers. In some cases, it may be important to verify that the organization even owns/has control over key online accounts, for instance in cases where previous staff or consultants set up accounts. 

  This activity is effective to pair with password leak lookups. Use services such as [haveibeenpwned.com](http://haveibeenpwned.com), [Firefox Monitor](https://monitor.mozilla.org/), [Google Password Checkup](https://passwords.google.com/), and [Dehashed](https://dehashed.com/) in collaboration with staff to check their personal and organizational emails for leaks. The presence of password leaks reinforces the need both for traditional 2FA and strong authentication methods.

  Findings for the above can be presented in your report. Where organizations have not yet begun to use strong authentication methods, include recommendations to onboard them to passkeys and physical security keys when possible. 

  *Auditing Usage of Password Managers* 

  Password managers (now also called credential managers) are a key security tool, and the auditor should research how and if they are used within an organization. Organizations where all staff works full time and uses work-issued devices might rely on a work-issued password manager. Organizations which rely on part-time or volunteer staff might also allow staff to use their own. Having a single work password manager is preferable, especially when it comes to sharing credentials within the organizations (several people might, for example, need access to the same general account).

  Follow these steps to review an organization's use of password managers:

  * Are they not using password managers at all? An absence of these from users may point to dangerous password practices such as password reuse, weak passwords, and physically written-down passwords.  
  * Research the password manager or managers used within the organization. Do they come from a reliable firm? Have they been independently audited? Have there been any security incidents involving the password manager?  
  * Explore whether there are work-related credentials which have been saved in places other than password managers (this could include notebooks, post-its, and others)  
  * Verify if staff are using the password manager to generate secure passwords. If they do not, consider investigating if they use strong practices to set reasonably strong and unique passphrases or if they engage in the creation of weak passwords and reuse password across services.  
  * Ensure that log-in details to key services (organizational email, social media, code hosting services, and others) are only saved in the password manager and nowhere else  
  * Make sure that everybody within the organization has their password manager set to auto-fill logins on webpages. This is not just a matter of convenience; the password manager will match the URL it will autofill with the URL saved in its database. If those do not match, it will typically refuse to autofill. This is an excellent phishing protection, as it stops the password manager from filling in the URL on malicious and phishing sites

  Share results and recommendations based on this review.

  *Review 3rd party apps and SSO to further reduce attack surface* 

  Some online attackers might also abuse OAuth grants (3rd party applications), in which external services can access or modify resources such as your organization's emails, documents, or calendars. In legitimate cases, this can be a useful service, allowing for additional functionalities. Still, these permissions are one dor through which an attacker or untrusted service can gain access to internal resources. Furthermore, many staff may grant resource access and forget that they had done so, leading to an accumulation of permissions over time. When working with the organization's admin:

  * Check the admin panel and review what OAuth permissions, if any, the organization's users have given to external services  
  * Individual users are also able to check which 3rd party apps have been granted permission to access their account data. If not possible to get an overview across an organization with an administrator, instead work with a sampling of users to review their individual accounts from the platform Settings page.  
  * Investigate whether it is possible to restrict OAuth permissions organization-wide, so that they only apply to a small group of trusted or allowlisted services. Note that some programs, like Google’s [Advanced Protection Program](https://landing.google.com/intl/en_in/advancedprotection/), will limit OAuth grants to a trusted allowlist.

  Many online services now support single sign-on (SSO). It allows you to sign in to many different services using a single account, typically one used for email or social media. Many organizations will use their primary email provider as their SSO provider. SSO differs slightly from OAuth grants: the former only uses a service as an authentication layer, whereas the latter allows the service to share data with others. SSO is often a great idea from a security perspective, as it only requires administrators to audit and enforce strong log-in security norms (such as phishing-resistant two-factor authentication) for one account, rather than several. It's worth to:

  * Check all of the services the organization uses, and see which ones support SSO  
  * Recommend that the organization implements SSO, if they have not already  
  * Ensure that users must follow strict security standards, such as unique long passwords and a phishing-resistant form of two-factor authentication when logging on to the 'primary' service, which then grants access to other services through SSO

  *Assess internal education, communication, and policies* 

  Attackers continue to adapt and refine their techniques, including when it comes to phishing. Defensive measures also change rapidly, with manufacturers building new tools and workflows that could mitigate standard or OAuth phishing. It’s important that people within the organization understand both risks and potential attacks, and potential mitigation. Assess internal education, communication of guidelines/threats, and policies through interviews, surveys, and document review:

  * Research how managers and others responsible for security see phishing. Recommend that the organization treats phishing mitigation as a key priority, as a significant part of cyberattacks start with phishing  
  * Explore whether the organization has prepared any training materials on phishing. Look into whether those materials only teach staff how to recognize phishing messages, or also demonstrate technologies such as password manager autofill and phishing-resistant two-factor authentication. Recommend that trainings focus on the latter.  
  * Recommend that the organization implements policies which enforce phishing-resistant two-factor authentication. Those could include requiring everybody to use password manager autofill and phishing-resistant authentication  
  * Check if there is a simple way in which people within the organization can flag up or report suspicious emails and text messages to others within the organization  
  * If the organization uses physical security keys or passkeys, explore how those are managed. Write down the policies that exist, for example whether people are given physical security keys during onboarding, if passkeys are registered on personal or physical devices, etc.  
  * Ensure that the organization has a tested workflow for verifying and restoring access for users whose physical security keys or passkeys have been lost or damaged
considerations: ""
skills_required:
  - System Administration
  - Interviewing
  - Password auditing
  - Surveys
overview: |
  * Checking for roll-out of phishing-resistant second factors, such as physical security keys or passkeys
  * Checking for absence of essential authentication controls such as 2-step verification
  * Assessing usage of credential managers or password managers across the organization, including important configurations such as enabling auto-fill within them
  * Reviewing for strategies which reduce attack surface and simplify authentication such as using single sign-on when possible and restricting unsafe OAuth grants (third party app data access)
  * Assessing internal education, communication, and policies which encouraging the organization to adopt positive practices such as generating and storing all their passwords in the credential manager or password manager
  * Providing recommendations to plan for passwordless login

recommendations: |
  Passkeys can be used as a second factor alongside passwords, or they can be used for so-called passwordless login. More and more services are moving towards the latter. Passwordless login contains its own challenges, including making sure that passkeys are stored and managed safely, ensuring that passkeys are secured with strong passwords or biometrics, and building a workflow for quickly revoking passkeys which have been lost or stolen. When working with an organization’s security admins, it’s worth to:

  * Explore how different organizations and services are adopting passwordless logins, and what experiences users have with them  
  * Discuss the advantages and possible disadvantages of passwordless logins

  Consider if advanced protection programs, such as those offered by [Google](https://landing.google.com/intl/en_us/advancedprotection/), [Microsoft](https://accountguard.microsoft.com/), [Proton](https://proton.me/support/proton-sentinel), or [Meta](https://www.facebook.com/help/1052552578831700/) are appropriate for the organization. 

  If budget allows it (or if pro-bono or suitable open source solutions are possible), consider recommending organizations move towards centrally managed business or enterprise account platforms which allow setting of security policies across the organization. 
---
