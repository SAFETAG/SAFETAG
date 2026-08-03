---
title: Assessment Plan
approaches:
  - Interpessoal
position: 50
authors:
  - SAFETAG
skills_trained: []
remote_options:
  - Completado
time_required_minutes: 120
organization_size_under: 1000
summary: |
  Este componente permite que uma auditora e um anfitrião cheguem a um entendimento sobre o nível de acesso que uma auditora terá, o que está fora dos limites, e qual o processo para modificar o escopo da auditoria quando surgirem novas informações. [^PETS_legal_considerations]^,^[^PETS_separate_permissions] Este componente consiste em um processo em que a pessoa auditora cria colaborativamente um plano de avaliação com os principais membros da organização.

  Um princípio fundamental do SAFETAG é desenvolver a capacidade das organizações para melhorar sua segurança digital. Para esse fim, a criação colaborativa de um plano de avaliação com a organização ajuda a esclarecer não apenas o escopo da auditoria — desde a discussão sobre quais dados confidenciais podem ser expostos até quais sistemas podem ser interrompidos no processo da auditoria —, mas também ajuda a revelar a capacidade da organização de apoiar e responder às conclusões da auditoria.
materials_needed: |
  Para usar o gerador de acordo SAFETAG (SAFETAG Agreement Generator), que é opcional, é necessário um sistema Linux baseado em Debian com python e outros requisitos, conforme detalhado no [arquivo README do gerador no Github](https://github.com/SAFETAG/safetag_agreement_generator#installation).
walk_through: |
  * Desenvolva um acordo assinado por ambas as partes, descrevendo o escopo da auditoria, incluindo:
  * As datas de início e término da auditoria.
  * O local onde a auditoria no local será realizada.  [^pets_pre-engagement_location]
    * As responsabilidades da equipe anfitriã.
   * As responsabilidades da pessoa que audita.
   * Os nomes dos hosts e intervalos de IP de quaisquer serviços executados pela organização.[^PETS_host_and_ip]
    * Informações de contato de emergência da organização. [^PETS_emergency_contact]
    * O procedimento que a auditora seguirá ao lidar com incidentes. [^NIST_incident_repose_plan]
    * Os padrões de segurança de dados para o tratamento e comunicação de provas.[^PETS_evidence_handling]
  * Desenvolver e assinar um acordo de confidencialidade e não divulgação
  * Compartilhar um termo de isenção de responsabilidade assinada pela organização anfitriã.  [^PETS_permission_to_test]
  * Obtenha a aprovação de quaisquer terceiros que sejam necessários. [^PETS_third_parties]O contrato de auditoria, o acordo de não divulgação e a renúncia de responsabilidade podem ser redigidos em um único documento ou em documentos separados.

  Os auditores são incentivados a usar ou, pelo menos, fazer referência ao texto das seguintes fontes:

  * Exemplo de texto para uma declaração de trabalho e acordo de compromisso na  [Atividade Acordo de Confidencialidade.](https://safetag.org/pt_BR/activities/confidentiality_agreement/).
  * The [gerador de acordo SAFETAG](https://github.com/SAFETAG/safetag_agreement_generator) (_SAFETAG Agreement Generator_), um script em Python que fornece uma árvore de decisão cobrindo os pontos acima e cria um acordo básico em linguagem clara que pode ser traduzido e formalizado conforme necessário. Exemplos de resultados e um diagrama da árvore de decisão completa estão disponíveis na pasta "outputs" do repositório do Agreement Generator. Isso substitui o rascunho do acordo que fazia parte do SAFETAG anteriormente.
considerations: |
  * Considere o panorama de ameaças da organização ao definir canais de comunicação seguros. Isso pode exigir algum trabalho prévio utilizando partes da metodologia de Pesquisa de Contexto.
  * Além da obrigação geral de enviar informações criptografadas para a organização, exija também que as comunicações recebidas sejam criptografadas. A falha em estabelecer um canal de planejamento seguro também contribui para uma situação de risco, tanto para a auditora, quanto para a organização.
skills_required: []
overview: |
  **Crie um plano de avaliação**
  : realize uma reunião para definir o escopo, que descreva o nível de acesso que o auditor terá, o que está fora dos limites e o processo para modificar o escopo da auditoria quando surgirem novas informações. [^PETS_legal_considerations], [^PETS_separate_permissions]

  * Determine uma pessoa de contato para a auditoria e troque informações de contato. [^PETS_emergency_contact]
  * Explique e obtenha a aprovação do escopo da auditoria do anfitrião.
  * Chegue a um acordo sobre o cronograma, o local e os participantes da auditoria no local. [^pets_pre-engagement_location]
  * Especifique os padrões de segurança de dados para comunicação de auditoria e manuseio de evidências. [^PETS_evidence_handling]
  * Estabeleça cláusulas de confidencialidade e não divulgação
  * Se for financiado externamente, identifique o que deve ser relatado ao financiador externo. [^external_funding_and_reporting]
recommendations: ""
---
