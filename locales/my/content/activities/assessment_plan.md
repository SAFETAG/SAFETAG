---
title: အကဲဖြတ်မှု အစီအစဉ်
approaches:
  - လူလူချင်း ဆက်ဆံမှုဆိုင်ရာ
position: 50
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - ပြည့်စုံသည်
time_required_minutes: 120
organization_size_under: 1000
summary: |
  ဤအစိတ်အပိုင်းသည် စစ်ဆေးသူတစ်ဦးနှင့် အဖွဲ့အစည်းမှပုဂ္ဂိုလ်တစ်ဦးတို့ကို စစ်ဆေးသူတစ်ဦးရရှိမည့် ဝင်ရောက်ခွင့်အဆင့်၊ ကန့်သတ်ချက်အကြောင်းနှင့် အချက်အလက်အသစ်များ ပေါ်ပေါက်လာသောအခါ စစ်ဆေးမှု၏ နယ်ပယ်ကို ပြုပြင်ပြောင်းလဲရန်အတွက် လုပ်ငန်းစဉ်ကို နားလည်သဘောပေါက်လာစေသည်။ [^PETS_legal_considerations]^၊^[^PETS_separate_permissions] ဤအစိတ်အပိုင်းတွင် စစ်ဆေးသူသည် အဖွဲ့အစည်း၏ အဓိကအဖွဲ့ဝင်များနှင့် ပူးပေါင်း၍ အကဲဖြတ်မှု အစီအစဉ်ကို ဖန်တီးသည့် လုပ်ငန်းစဉ်တစ်ခု ပါဝင်သည်။ SAFETAG ၏ အဓိကယုံကြည်ချက်မှာ အဖွဲ့အစည်းများတွင် ကိုယ်စားပြုမှုကို တည်ဆောက်ပြီး ၎င်းအဖွဲ့အစည်းတို့၏ ဒစ်ဂျစ်တယ်လုံခြုံရေးကို မြှင့်တင်ရန် ဖြစ်ပါသည်။ ထို့ကြောင့် အဖွဲ့အစည်းနှင့် ပူးပေါင်းကာ အကဲဖြတ်မှု အစီအစဉ်ကို ဖန်တီးခြင်းသည် စစ်ဆေးမှုနယ်ပယ်အကြောင်း ရှင်းလင်းစွာသိစေရန် အထောက်အကူပြုရုံသာမက စစ်ဆေးမှု တွေ့ရှိချက်များကို ပံ့ပိုးကူညီရန်နှင့် တုံ့ပြန်ရန် အဖွဲ့အစည်း၏ စွမ်းရည်ကိုလည်း ကူညီဖော်ထုတ်ပေးပါသည်။ စစ်ဆေးမှုနယ်ပယ်ဟု ဆိုရာတွင် အကဲဆတ်သော မည်သည့်အချက်အလက်များကို ဖော်ထုတ်နိုင်ခြေရှိကြောင်း ဆွေးနွေးခြင်းမှအစ စစ်ဆေးမှုလုပ်ငန်းစဉ်တွင် မည်သည့်စနစ်များကို အနှောင့်အယှက်ဖြစ်နိုင်ကြောင်းအထိ ပါဝင်သည်။
materials_needed: |
  ရွေးချယ်နိုင်သော SAFETAG သဘောတူညီချက် ထုတ်လုပ်မှုကို အသုံးပြုရန် python ပါဝင်သော Debian အခြေခံ Linux စနစ်တစ်ခုနှင့် အခြားသော လိုအပ်ချက်များကို
  [သဘောတူညီချက် ထုတ်လုပ်မှု ဖတ်ရန်](https://github.com/SAFETAG/safetag_agreement_generator#installation) တွင် အသေးစိတ် ဖော်ပြထားပါသည်။
walk_through: |
  * Develop an agreement signed by both parties outlining the scope of the audit including:
    * The start and end dates of the audit.
    * The location where the on-site audit will take place. [^pets_pre-engagement_location]
    * The responsibilities of the host staff.
    * The responsibilities of the auditor.
    * The host names and IP ranges of any services run by the organization. [^PETS_host_and_ip]
    * Emergency contact information for the organization. [^PETS_emergency_contact]
    * The procedure the auditor will follow when handling incidents. [^NIST_incident_repose_plan]
    * The data security standards for evidence handling and communication. [^PETS_evidence_handling]
  * Develop and sign a confidentiality and non-disclosure agreement
  * Share a liability waiver signed by the host organization. [^PETS_permission_to_test]
  * Obtain approval from any third parties, if necessary. [^PETS_third_parties]
  The Audit agreement, non-disclosure agreement, liability waiver may be accomplished through a single document, or they may be separate documents.

  Auditors are encouraged to use, or at least reference text from the following sources:

  * Sample Text for a Statement of Work and Engagement Agreement in the [Confidentiality Agreement Activity](https://safetag.org/activities/confidentiality_agreement/).
  * The [SAFETAG Agreement Generator](https://github.com/SAFETAG/safetag_agreement_generator), a python script which provides a decision tree covering the above points, and builds a basic, clear-language agreement which can be translated and formalized as needed. Sample outputs and a diagram of the full decision tree are available in the "outputs" folder of the Agreement Generator repository. This replaces the draft agreement previously part of SAFETAG.
considerations: |
  * Consider the threat landscape of the organization when determining secure communications channels. This may require some pre-agreement work using parts of the Context Research methodology.
  * In addition to the overall mandate to send information encrypted to the organization, also demand encrypted communication back from them. Failure to establish a secure planning channel also contributes towards a no-go situation by putting both the auditor and organization at risk.
skills_required: []
overview: |
  **Create an Assessment Plan:** Have a "scoping" meeting that outlines the
  level of access that an auditor will have, what is off limits, and the process
  for modifying the scope of the audit when new information arises.
  [^PETS_legal_considerations], [^PETS_separate_permissions]

  * Determine a point person for the audit and exchange contact information.  [^PETS_emergency_contact]
  * Explain and get approval to the scope of audit from the host.
  * Agree to the timeline, location, and attendees of the on-site audit. [^pets_pre-engagement_location]
  * Codify data security standards for audit communication and evidence handling. [^PETS_evidence_handling]
  * Establish confidentiality and non-disclosure clauses
  * If funded externally, identify what should be reported to external funder. [^external_funding_and_reporting]
recommendations: ""
---
